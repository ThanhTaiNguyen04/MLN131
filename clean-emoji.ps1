$filePath = "src\pages\Learn.jsx"
$content = Get-Content $filePath -Raw -Encoding UTF8

# Step 1: Remove large decorative emoji spans (text-4xl, text-3xl, text-2xl)
$content = $content -creplace '<span class="text-4xl mr-4 flex-shrink-0">[^<]*</span>\s*', ''
$content = $content -creplace '<span class="text-3xl mr-3">[^<]*</span>\s*', ''
$content = $content -creplace '<span class="text-2xl mr-2">[^<]*</span>\s*', ''

# Step 2: Remove emoji from smaller spans
$content = $content -creplace '<span class="font-semibold text-[^"]*">[^a-zA-Z<]*([a-zA-Z<][^<]*)</span>', '<span class="font-semibold">$1</span>'

# Step 3: Remove inline emoji from headings and text (emoji followed by space)
$content = $content -creplace '[^\x00-\x7F]\s+', ''

# Step 4: Clean up empty span tags
$content = $content -creplace '<span class="[^"]*">\s*</span>', ''

# Save
$content | Set-Content $filePath -Encoding UTF8 -NoNewline

Write-Output "Emoji removal completed"
