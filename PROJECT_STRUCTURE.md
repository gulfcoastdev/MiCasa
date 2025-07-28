# Mi Casa Rentals - Project Structure

## 📁 Organized File Structure

```
/micasa/
├── index.html              # Main website file
├── PROJECT_STRUCTURE.md    # This documentation file
└── assets/
    ├── styles/
    │   └── styles.css       # All CSS styling (beach theme)
    ├── scripts/
    │   ├── clean-slider.js  # Clean image slider (imageN.jpeg convention)
    │   └── logo-loader.js   # Logo detection and loading
    ├── logo/
    │   ├── README.md        # Logo usage instructions
    │   └── logo.png         # Your business logo
    └── slider/
        ├── README.md        # Slider image instructions
        ├── rebeccaLivingRoon.jpeg
        └── [13 additional rental photos with UUID names]
```

## 🎯 Active Files

**Core Website:**
- `index.html` - Main landing page with hero slider, CTA buttons, contact info
- `assets/styles/styles.css` - Beach-themed responsive styling with glassmorphism effects
- `assets/scripts/clean-slider.js` - Clean slider using imageN.jpeg convention (no console errors)
- `assets/scripts/logo-loader.js` - Automatically loads logo.png or shows text fallback

**Assets:**
- `assets/logo/logo.png` - Your business logo (automatically detected)
- `assets/slider/` - Contains 14 rental property photos
- `README.md` files - Instructions for adding new images/logos

## 🗑️ Removed Files

**Cleaned up these unused files:**
- ❌ `image-scanner.js` (old image detection system)
- ❌ `universal-image-loader.js` (old universal image loader)
- ❌ `slider.js` (old slider implementation)
- ❌ `dynamic-slider.js` (complex detection with console errors)
- ❌ `simple-slider.js` (hardcoded image names)

## 🚀 Current Features

- ✅ Responsive beach-themed design
- ✅ Clean slider with image1.jpeg to image14.jpeg (no console errors)
- ✅ Logo.png automatically displays in header
- ✅ Real booking links to DirectStays and Avail
- ✅ Contact info: (850) 912-9225 and rentalspcola@gmail.com
- ✅ Mobile-optimized navigation and touch controls
- ✅ Sequential image naming convention for easy management

## 📋 To Add New Content

**New Photos:** Save as `image15.jpeg`, `image16.jpeg`, etc. in `assets/slider/` folder
**New Logo:** Replace `assets/logo/logo.png` with your updated logo
**Contact Info:** Edit phone/email in `index.html` (search for "850" or "rentalspcola")

Project is clean, organized, and ready for production! 🎉