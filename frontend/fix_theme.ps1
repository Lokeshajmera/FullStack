$srcPath = "c:\Users\Lokesh\OneDrive\Desktop\FullStack1\database\react\pccoe-aiml-website\frontend\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx"

$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # ── Background replacements ──────────────────────────────────────────────
    # bg-slate-950 (full opacity) — only when NOT already prefixed with dark:
    $content = $content -creplace '(?<!dark:)bg-slate-950(?!/)', 'bg-white dark:bg-slate-950'
    # bg-slate-950 with opacity modifier  e.g. bg-slate-950/80
    $content = $content -creplace '(?<!dark:)bg-slate-950/(\d+)', 'bg-white/$1 dark:bg-slate-950/$1'

    # bg-slate-900 (full opacity)
    $content = $content -creplace '(?<!dark:)bg-slate-900(?!/)', 'bg-slate-100 dark:bg-slate-900'
    # bg-slate-900 with opacity modifier
    $content = $content -creplace '(?<!dark:)bg-slate-900/(\d+)', 'bg-slate-100/$1 dark:bg-slate-900/$1'

    # bg-slate-800 (full opacity)
    $content = $content -creplace '(?<!dark:)bg-slate-800(?!/)', 'bg-slate-200 dark:bg-slate-800'
    # bg-slate-800 with opacity modifier
    $content = $content -creplace '(?<!dark:)bg-slate-800/(\d+)', 'bg-slate-200/$1 dark:bg-slate-800/$1'

    # ── Border replacements ──────────────────────────────────────────────────
    $content = $content -creplace '(?<!dark:)border-slate-800(?!/)', 'border-slate-300 dark:border-slate-800'
    $content = $content -creplace '(?<!dark:)border-slate-700(?!/)', 'border-slate-300 dark:border-slate-700'
    $content = $content -creplace '(?<!dark:)border-slate-900(?!/)', 'border-slate-200 dark:border-slate-900'

    # ── Text replacements ────────────────────────────────────────────────────
    # text-slate-300 → text-slate-700 dark:text-slate-300  (only standalone, not already dark:)
    $content = $content -creplace '(?<!dark:)text-slate-300(?!/)', 'text-slate-700 dark:text-slate-300'
    # text-slate-400 → text-slate-600 dark:text-slate-400
    $content = $content -creplace '(?<!dark:)text-slate-400(?!/)', 'text-slate-600 dark:text-slate-400'

    # ── Normalize any double-replacements introduced by multiple passes ───────
    # e.g. if "bg-white dark:bg-white dark:bg-slate-950" appeared, clean it up
    $content = $content -replace 'bg-white dark:bg-white dark:', 'bg-white dark:'
    $content = $content -replace 'bg-slate-100 dark:bg-slate-100 dark:', 'bg-slate-100 dark:'
    $content = $content -replace 'bg-slate-200 dark:bg-slate-200 dark:', 'bg-slate-200 dark:'
    $content = $content -replace 'text-slate-700 dark:text-slate-700 dark:', 'text-slate-700 dark:'
    $content = $content -replace 'text-slate-600 dark:text-slate-600 dark:', 'text-slate-600 dark:'
    $content = $content -replace 'border-slate-300 dark:border-slate-300 dark:', 'border-slate-300 dark:'

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalChanges++
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host ""
Write-Host "Done! Updated $totalChanges files." -ForegroundColor Green
