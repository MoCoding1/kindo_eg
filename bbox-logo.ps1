Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo.png"
$bmp = [System.Drawing.Bitmap]::new($imgPath)

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Foreground Bounding Box:"
Write-Host "minX: $minX, maxX: $maxX, Width: $($maxX - $minX + 1)"
Write-Host "minY: $minY, maxY: $maxY, Height: $($maxY - $minY + 1)"

$bmp.Dispose()
