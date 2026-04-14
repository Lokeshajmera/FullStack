$srcPath = "c:\Users\Lokesh\OneDrive\Desktop\FullStack1\database\react\pccoe-aiml-website\frontend\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx"

$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # ── Fix gradient text ────────────────────────────────────────────────────
    # from-slate-950 → from-white dark:from-slate-950  (gradient fades in FacultySection)
    # BUT only for bg-gradient-to-b/t fade overlays — skip for text gradients
    $content = $content -creplace '(?<!dark:)from-slate-950\b', 'from-white dark:from-slate-950'
    $content = $content -creplace '(?<!dark:)from-slate-900\b', 'from-slate-100 dark:from-slate-900'

    # ── Normalize double replacements ─────────────────────────────────────────
    $content = $content -replace 'from-white dark:from-white dark:', 'from-white dark:'
    $content = $content -replace 'from-slate-100 dark:from-slate-100 dark:', 'from-slate-100 dark:'

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalChanges++
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host ""
Write-Host "Done! Updated $totalChanges files." -ForegroundColor Green
