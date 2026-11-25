Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo.png"
$bmp = [System.Drawing.Bitmap]::new($imgPath)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

$colorSamples = @()
for ($y = 0; $y -lt $bmp.Height; $y += 20) {
    for ($x = 0; $x -lt $bmp.Width; $x += 20) {
        $pixel = $bmp.GetPixel($x, $y)
        $colorSamples += "$($pixel.R),$($pixel.G),$($pixel.B)"
    }
}

$bmp.Dispose()

$grouped = $colorSamples | Group-Object | Sort-Object Count -Descending | Select-Object -First 10
foreach ($g in $grouped) {
    Write-Host "Color (R,G,B): $($g.Name) - Count: $($g.Count)"
}
