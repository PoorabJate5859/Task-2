
---

<div align="center">

# 🌙 Multi-Image Zoom Reveal Preloader

**A sleek dark-themed preloader with layered images, blur-to-sharp zoom animation, and smooth transitions.**

</div>

---

## 🖤 Features

* 🖼 **Layered Image Stacking** — Images appear one by one and stay visible
* 🔍 **Zoom + Blur Reveal** — Each image starts small & blurred, then expands to full size
* 🎚 **0–100% Progress Counter** — Synced with image reveal
* ✍️ **Handwritten Annotations** — Decorative notes on both sides
* 🎞 **Smooth Fade Transition** — Preloader melts away into the hero section
* 📱 **Responsive for All Screens**
* ⚡ **Fast 2-Second Animation**

---

## 🚀 Getting Started

### **Prerequisites**

No frameworks.
Pure **HTML + CSS + JavaScript**.

### **Installation**

```bash
git clone <your-repo-url>
cd <project-folder>
open index.html
```

Or simply open `index.html` directly.

---

## 🗂 Project Structure

```
.
├── index.html      # Preloader + Hero markup
├── style.css       # Dark-mode styling + animations
├── script.js       # Reveal logic (zoom, blur, counter)
└── README.md
```

---

## 🎨 Customization

### 🖼 Change Images

`index.html` → replace/add:

```html
<img src="your-image.jpg" class="stack-img" />
```

---

### ⚙️ Animation Speed

`script.js`:

```javascript
const duration = 2000; // total preloader time
```

---

### 🔍 Zoom + Blur Settings

```javascript
const minScale = 0.3;         // start size
const maxScale = 1.0;         // final size
const imageZoomDuration = 400;
const maxBlur = 3;            // blur intensity
```

---

### ✍️ Update Text

`index.html`:

```html
<div class="hand-text left-text">
  Your text here <br />
  <span>⤦</span>
</div>
```

---

### 🎨 Dark Colors

`style.css`:

```css
body {
  background: #0d0d0d;
  color: #e6e6e6;
}

.counter {
  color: #fff;
}
```

---

## 📱 Responsive Breakpoints

| Device       | Width          |
| ------------ | -------------- |
| Desktop      | 1024px+        |
| Tablet       | 768px – 1024px |
| Mobile       | 480px – 768px  |
| Small Mobile | < 480px        |

---

## 🎯 How It Works

1. Preloader auto-starts on page load
2. Counter progresses 0 → 100
3. Each image:

   * appears small
   * starts blurry
   * zooms into full size
   * becomes sharp
4. Previous images remain visible (layering)
5. Preloader fades → Hero content appears

---

## 🛠 Technologies

* HTML5
* CSS3 (Transforms, Transitions)
* JavaScript (Vanilla)
* Google Fonts (Inter, Indie Flower)

---

## 🌐 Browser Support

* Chrome
* Firefox
* Safari
* Edge
* Chrome Mobile
* iOS Safari

---

## 🎬 Animation Breakdown

* **Total Duration:** 2000ms
* **Interval per Image:** Based on % progress
* **Zoom Duration:** 400ms
* **Effects:** scale + blur + fade
* **Stack Style:** slight rotation per layer

---

## 💡 Pro Tips

* Use lightweight, optimized images
* Keep aspect ratios consistent
* Blur & zoom values can be tweaked
* Test on mobile for layout shifts

---

## 📄 License

Free for **personal & commercial** use.

---

## 🤝 Contribute

Fork → Improve → Pull Request.
Contributions are welcome!

---

## 📧 Need Help?

Open an issue in the repo — happy to help.

---



---

