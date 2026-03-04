import re

# Read the corrupted file
with open('src/pages/Learn.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define emoji patterns to remove
# This regex matches emoji but preserves Vietnamese characters
emoji_pattern = re.compile(
    "["
    "\U0001F600-\U0001F64F"  # emoticons
    "\U0001F300-\U0001F5FF"  # symbols & pictographs
    "\U0001F680-\U0001F6FF"  # transport & map symbols
    "\U0001F1E0-\U0001F1FF"  # flags
    "\U00002600-\U000027BF"  # misc symbols
    "\U0001F900-\U0001F9FF"  # supplemental symbols
    "\U00002700-\U000027BF"  # dingbats
    "\U0000FE00-\U0000FE0F"  # variation selectors
    "]+",
    flags=re.UNICODE
)

# Remove emoji
content = emoji_pattern.sub('', content)

# Remove empty span tags
content = re.sub(r'<span class="[^"]*">\s*</span>\s*', '', content)

# Remove replacement characters (�)
content = content.replace('\ufffd', '')

# Write back
with open('src/pages/Learn.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed emoji and corruption")
