# 🎡 Wheel of Fortune

A fully featured browser-based Wheel of Fortune game — playable on mobile and desktop.

**Authors:** Claude & MH Oddens

---

## 🚀 Play it live

Hosted on GitHub Pages: **[your-username.github.io/wheel-of-fortune](https://your-username.github.io/wheel-of-fortune)**

---

## 📁 Project Structure

```
wheel-of-fortune/
├── index.html        ← Main HTML (structure & modals)
├── css/
│   └── style.css     ← All styles & responsive layout
├── js/
│   └── game.js       ← All game logic & data
└── README.md
```

---

## ✨ Features

- 🎰 **Spinning wheel** with 16 segments including Bankrupt and Lose a Turn
- 🧩 **Dynamic puzzle grid** — tiles auto-resize so long phrases always fit on any screen
- 📱 **Fully responsive** — single column on mobile, two-column layout on tablet/desktop
- 🤖 **AI opponent** with three difficulty levels (Easy / Medium / Hard)
- 🔤 **Buy Vowels** system ($250 per vowel)
- ⚡ **Sudden Death** mode when no consonants remain and neither player can afford a vowel
- 📋 **How to Play** modal accessible from the in-game menu
- ⌨️ **Physical keyboard** support on desktop (with on-screen flash feedback)
- 🎵 **Web Audio** sound effects (ticks, reveals, fanfare, bankrupt)
- 🎊 **Confetti & balloons** on wins and quit screen
- 🏆 Multi-round scoring (3, 5 or 7 rounds)

---

## 🎮 Difficulty Levels

| Level  | Pre-revealed letters | AI behaviour |
|--------|----------------------|--------------|
| Easy   | R, S, T, L, N, E     | Guesses randomly, rarely buys vowels or solves early |
| Medium | R, S, T, L           | Moderately smart, balanced vowel buying |
| Hard   | None                 | Highly strategic, aggressively buys vowels, solves early |

---

## 🌐 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `wheel-of-fortune`)
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages**
4. Set source to **Deploy from branch → main → / (root)**
5. Your game will be live at `https://your-username.github.io/wheel-of-fortune`

---

## 🛠️ Development History

This game is the result of merging two versions:

- **rad-van-fortuin** (Dutch) — contributed dynamic puzzle tile resizing and the rules modal
- **wheel-of-fortune** (English) — contributed the responsive two-column desktop layout and clean AI difficulty config

Analysis and merge strategy provided by **Gemini**.
