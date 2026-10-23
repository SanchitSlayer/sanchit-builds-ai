#!/usr/bin/env bash
# Renders design/og-card.html to the link-preview image and the home-screen icon.
# Needs Google Chrome. Set CHROME to its path if it is not in the default macOS location.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
CARD="file://$PWD/design/og-card.html"
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --window-size=1200,630 --screenshot="$PWD/public/og-image.png" "$CARD" 2>/dev/null
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --window-size=180,180 --screenshot="$PWD/public/apple-touch-icon.png" "$CARD?icon" 2>/dev/null
echo "Wrote public/og-image.png and public/apple-touch-icon.png"
