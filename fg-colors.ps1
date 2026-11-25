Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\MSI\.gemini\antigravity\scratch\kindergarten-saas\public\logo.png"
$bmp = [System.Drawing.Bitmap]::new($imgPath)

$colors = @()
for ($y = 129; $y -le 442; $y += 5) {
    for ($x = 111; $x -le 911; $x += 5) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
            $colors += "$($p.R),$($p.G),$($p.B)"
        }
    }
}
$bmp.Dispose()

$grouped = $colors | Group-Object | Sort-Object Count -Descending | Select-Object -First 10
foreach ($g in $grouped) {
    Write-Host "Foreground Color (R,G,B): $($g.Name) - Count: $($g.Count)"
}
