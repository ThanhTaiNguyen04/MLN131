# Script to remove all emoji from Learn.jsx using .NET regex
$filePath = "src\pages\Learn.jsx"
$content = Get-Content $filePath -Raw -Encoding UTF8

# Use .NET regex for proper Unicode support
# Remove common emoji patterns manually
$emojiList = @(
    '📍', '🌍', '🎯', '🛤️', '💡', '⭐', '🏚️', '⚔️', '✓', '⚡', '🌾', '🏭', '📊', '💰', '🔥', 
    '🛡️', '📈', '💹', '🏛️', '📅', '🔄', '🔀', '📌', '📜', '🏆', '👥', '🤝', '😊', '🕊️', '🍚',
    '🎓', '🔬', '💻', '🌱', '🎨', '⚙️', '🏢', '🌏', '🌐', '🗳️', '🚩', '📋', '📚', '🎭', '🏗️'
)

foreach ($emoji in $emojiList) {
    $content = $content -replace [regex]::Escape($emoji), ''
}

# Remove remaining Unicode symbols using .NET Regex
Add-Type -AssemblyName System.Text.RegularExpressions
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '[\u2600-\u27BF]', '')
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '[\uE000-\uF8FF]', '')
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '[\u1F300-\u1F9FF]', '')
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '[\u1F000-\u1FFFF]', '')

# Clean up empty span tags
$content = $content -replace '<span\s+class="[^"]*">\s*</span>\s*', ''

# Remove remaining checkmarks and arrows
$content = $content -replace '✓', ''
$content = $content -replace '→', ''

# Save the file
$content | Set-Content $filePath -Encoding UTF8 -NoNewline

Write-Host "All emoji removed successfully!" -ForegroundColor Green
