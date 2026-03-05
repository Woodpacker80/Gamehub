# Wheel of Words

A responsive, browser-based word game inspired by the classic TV format — spin the wheel, guess consonants, buy vowels, and solve the puzzle before the computer does.

## Features

- 🎡 Animated spinning wheel with Web Audio sound engine
- 🤖 AI computer opponent (Easy / Medium / Hard)
- 📱 Fully responsive — mobile, tablet and desktop
- 🔊 Mute button to toggle all sounds
- ⭐ Bonus rounds with Chrome Bonus tile (+$2,000) and Minus tile (−50% round earnings)
- 🎉 Balloon & confetti thank-you screen

## Bonus Round Rules

| Game length | Bonus rounds |
|-------------|-------------|
| 3 rounds    | Last 1 round |
| 5 rounds    | Last 2 rounds |
| 7 rounds    | Last 2 rounds |

**Chrome Bonus tile** — land on it, guess a correct consonant and earn your letter value **plus $2,000 extra**. A 1.8-second suspense pause with hub pulse and shimmer sound plays before the keyboard activates.

**Minus tile** — land on it and lose **half your current round earnings**.

## How to Play Locally

1. Download all files into one folder
2. Open `index.html` in any modern browser
3. No build step, no server required

## GitHub Pages Deployment

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your game will be live at `https://yourusername.github.io/your-repo-name/`

## File Structure

```
wheel-of-words/
├── index.html    — Game layout and screens
├── style.css     — All styling and animations
├── puzzles.js    — Puzzle database + wheel segments
├── script.js     — Game logic, AI, audio engine
├── README.md     — This file
└── LICENSE       — MIT
```

## Credits

Created by **Claude A.I & MH Oddens**
