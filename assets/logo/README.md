# Logo Assets

Place your logo files in this folder. The system will automatically detect and use them.

## Supported formats:
- PNG (recommended for logos with transparency)
- SVG (best for scalability)
- JPG/JPEG (for photographic logos)

## File naming conventions:
The system will look for these filenames in order of priority:

### Primary logo files:
- `logo.svg` (highest priority - scalable vector)
- `logo.png` (high priority - with transparency)
- `logo.jpg` / `logo.jpeg` (standard format)

### Alternative naming:
- `mi-casa-logo.svg` / `mi-casa-logo.png`
- `micasa-logo.svg` / `micasa-logo.png`
- `brand-logo.svg` / `brand-logo.png`
- `company-logo.svg` / `company-logo.png`

### Size variations (optional):
- `logo-small.png` (for mobile/compact views)
- `logo-large.png` (for desktop/header)
- `logo-white.png` (for dark backgrounds)
- `logo-dark.png` (for light backgrounds)

## Recommended specifications:

### For PNG files:
- **Width**: 200-400px (will be scaled automatically)
- **Height**: 60-120px 
- **Background**: Transparent
- **DPI**: 72-150 DPI

### For SVG files:
- **Viewbox**: Set appropriate viewBox for scaling
- **Colors**: Use your brand colors
- **Text**: Convert text to paths for compatibility

## Usage:
The logo will automatically appear in:
- Website header/navigation area
- Responsive sizing for mobile devices
- Fallback to text-based logo if no image found

## Example file structure:
```
assets/logo/
├── logo.svg          (primary logo)
├── logo.png          (fallback)
├── logo-white.png    (for dark backgrounds)
└── favicon.ico       (browser icon - optional)
```