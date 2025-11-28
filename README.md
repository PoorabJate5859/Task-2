# Multi-Image Zoom Reveal Preloader

A beautiful, animated preloader featuring a stack of images that zoom in with a blur-to-clear effect. Perfect for showcasing product collections, portfolios, or brand launches.

## ✨ Features

- **Stacking Image Animation**: Images appear one by one and stack on top of each other
- **Zoom & Blur Effect**: Each image starts small and blurred, then smoothly zooms to full size while becoming clear
- **Progress Counter**: Real-time percentage counter (0-100%) synchronized with the animation
- **Handwritten Text Annotations**: Decorative text elements positioned around the image stack
- **Smooth Transitions**: Elegant fade-out effect leading to hero content reveal
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **2-Second Animation**: Quick, engaging preloader experience

## 🚀 Getting Started

### Prerequisites

No dependencies required! This is a pure HTML, CSS, and JavaScript project.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process needed.

## 📁 Project Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Styles and responsive design
├── script.js       # Animation logic
└── README.md       # This file
```

## 🎨 Customization

### Changing Images

Edit the image sources in `index.html`:

```html
<img src="your-image-url.jpg" class="stack-img" />
```

### Adjusting Animation Speed

In `script.js`, modify the duration:

```javascript
const duration = 2000; // Change to desired milliseconds
```

### Customizing Zoom & Blur

In `script.js`:

```javascript
const minScale = 0.3;        // Starting size (30%)
const maxScale = 1.0;        // Final size (100%)
const imageZoomDuration = 400; // Zoom animation time
const maxBlur = 3;           // Starting blur amount
```

### Changing Text Content

Update the text in `index.html`:

```html
<div class="hand-text left-text">
  Your text here <br />
  <span>⤦</span>
</div>
```

### Modifying Colors

In `style.css`:

```css
body {
  background-color: #f4f3ef; /* Change background color */
}

.counter {
  color: #333; /* Change counter color */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Default styles (1024px+)
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px
- **Landscape Mobile**: Special handling for landscape orientation

## 🎯 How It Works

1. **Initialization**: The animation starts immediately when the page loads
2. **Image Reveal**: Images appear sequentially based on progress percentage
3. **Zoom Animation**: Each image scales from 30% to 100% over 400ms
4. **Blur Effect**: Images start with 3px blur and become clear as they reach full size
5. **Stacking**: Previous images remain visible, creating a stacked card effect
6. **Completion**: At 100%, the preloader fades out and hero content appears

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with transitions and transforms
- **Vanilla JavaScript**: No frameworks required
- **Google Fonts**: Inter and Indie Flower fonts

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎬 Animation Details

- **Total Duration**: 2 seconds (2000ms)
- **Image Interval**: Each image appears at 20% intervals (5 images total)
- **Zoom Duration**: 400ms per image
- **Easing**: Custom cubic-bezier for smooth, bouncy animation
- **Rotation**: Each image has a slight rotation for a natural stacked look

## 💡 Tips

- Use high-quality images for best results
- Keep image aspect ratios consistent
- Optimize images for web to ensure fast loading
- Test on multiple devices to ensure responsive behavior
- Adjust blur and scale values to match your design aesthetic

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them!

## 📧 Support

For questions or issues, please open an issue in the repository.

---

**Enjoy your beautiful preloader! 🎉**

