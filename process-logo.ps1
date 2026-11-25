Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo.png"
$src = [System.Drawing.Bitmap]::new($srcPath)

# Bounding box found earlier: minX: 111, maxX: 911, minY: 129, maxY: 442
$padding = 12
$cropX = [Math]::Max(0, 111 - $padding)
$cropY = [Math]::Max(0, 129 - $padding)
$cropW = [Math]::Min($src.Width - $cropX, (911 - 111) + ($padding * 2))
$cropH = [Math]::Min($src.Height - $cropY, (442 - 129) + ($padding * 2))

Write-Host "Cropping: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

# 1. Create Light Mode Transparent Bitmap
$lightBmp = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# 2. Create Dark Mode Transparent Bitmap (with dark navy inverted to crisp white)
$darkBmp = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $origP = $src.GetPixel($cropX + $x, $cropY + $y)
        $r = $origP.R
        $g = $origP.G
        $b = $origP.B

        # Calculate distance to pure white (255, 255, 255)
        # Background is around 250-255 in all channels
        $minChannel = [Math]::Min($r, [Math]::Min($g, $b))
        $maxChannel = [Math]::Max($r, [Math]::Max($g, $b))
        $saturation = $maxChannel - $minChannel

        # Check if pixel is background white/off-white
        if ($minChannel -ge 248) {
            # Fully transparent
            $lightBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($minChannel -ge 232 -and $saturation -lt 15) {
            # Feathered edge for smooth anti-aliasing (no white halo)
            $alpha = [int](255 * (1.0 - (($minChannel - 232) / 16.0)))
            if ($alpha -lt 0) { $alpha = 0 }
            if ($alpha -gt 255) { $alpha = 255 }

            $lightBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            
            # For dark mode: if it was dark navy, make it white
            if ($r -lt 140 -and $g -lt 140) {
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            } else {
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            }
        } else {
            # Solid foreground pixel
            $lightBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))

            # In Dark Mode: Dark Navy text/shapes (r < 70, g < 100, b < 130) -> Bright White (#FFFFFF)
            if ($r -lt 80 -and $g -lt 110 -and $b -lt 140) {
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
            } else {
                # Preserve the vibrant coral, yellow, green, sky
                $darkBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
            }
        }
    }
}

$src.Dispose()

# Save light version
$lightOut = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo.png"
$lightBmp.Save($lightOut, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved light logo: $lightOut ($cropW x $cropH)"

# Save dark version
$darkOut = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo-dark.png"
$darkBmp.Save($darkOut, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved dark logo: $darkOut ($cropW x $cropH)"

# Also create high-res versions for touch icons and PWA
$lightBmp.Save("C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\icon-192.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lightBmp.Save("C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\icon-512.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lightBmp.Save("C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

$lightBmp.Dispose()
$darkBmp.Dispose()
Write-Host "SUCCESS! All logo assets processed and transparent."
