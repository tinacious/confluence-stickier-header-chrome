rm confluence-stickier-header.zip
rm -rf confluence-stickier-header
mkdir confluence-stickier-header
cp manifest.json confluence-stickier-header/manifest.json
cp stickier-header-confluence.js confluence-stickier-header/stickier-header-confluence.js
cp icon.png confluence-stickier-header/icon.png

zip -r confluence-stickier-header.zip confluence-stickier-header
