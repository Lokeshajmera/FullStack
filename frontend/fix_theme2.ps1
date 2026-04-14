$srcPath = "c:\Users\Lokesh\OneDrive\Desktop\FullStack1\database\react\pccoe-aiml-website\frontend\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx"

$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # ── Fix #1: Card backgrounds — slate-200 is too grey, cards should be white ──
    # bg-slate-200 dark:bg-slate-800 → bg-white dark:bg-slate-800
    $content = $content -replace '\bbg-slate-200 dark:bg-slate-800\b', 'bg-white dark:bg-slate-800'
    # bg-slate-200/(\d+) dark:bg-slate-800 → bg-white/$1 dark:bg-slate-800
    $content = $content -replace '\bbg-slate-200/(\d+) dark:bg-slate-800\b', 'bg-white/$1 dark:bg-slate-800'

    # ── Fix #2: text-white → text-slate-900 dark:text-white ──────────────────
    # Must NOT replace things already prefixed with dark:
    $content = $content -creplace '(?<!dark:)\btext-white\b', 'text-slate-900 dark:text-white'

    # ── Fix #3: text-slate-100 (near-white) → visible dark text in light mode ──
    $content = $content -creplace '(?<!dark:)\btext-slate-100\b', 'text-slate-900 dark:text-slate-100'

    # ── Fix #4: text-slate-200 → readable in light mode ─────────────────────
    $content = $content -creplace '(?<!dark:)\btext-slate-200\b', 'text-slate-800 dark:text-slate-200'

    # ── Fix #5: Normalize any double-replacements ────────────────────────────
    $content = $content -replace 'text-slate-900 dark:text-slate-900 dark:', 'text-slate-900 dark:'
    $content = $content -replace 'text-slate-800 dark:text-slate-800 dark:', 'text-slate-800 dark:'

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalChanges++
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host ""
Write-Host "Done! Updated $totalChanges files." -ForegroundColor Green
