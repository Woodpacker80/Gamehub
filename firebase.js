// ═══════════════════════════════════════════════════════
//  FIREBASE LEADERBOARD — Wheel of Words
// ═══════════════════════════════════════════════════════
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, remove, push, query, orderByChild, limitToLast, get }
                                   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyABwL_9K4PwSFAdH81ooTG_dxieiDkfIBw",
  authDomain:        "rad-van-woorden-3cea4.firebaseapp.com",
  databaseURL:       "https://rad-van-woorden-3cea4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "rad-van-woorden-3cea4",
  storageBucket:     "rad-van-woorden-3cea4.firebasestorage.app",
  messagingSenderId: "1070671201365",
  appId:             "1:1070671201365:web:3add004bd2b650ede140dc"
};

const app      = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db       = getDatabase(app);
const GAME_KEY = 'wheel-of-words';
const TOP_N    = 5;
const NICK_KEY  = 'rvw_nickname';
const TOKEN_KEY = 'rvw_token';

// ── Token — generated once per device, stored permanently ────────────────────
function getOrCreateToken(){
  let token = localStorage.getItem(TOKEN_KEY);
  if(!token){
    token = Array.from(crypto.getRandomValues(new Uint8Array(8)))
      .map(b => b.toString(16).padStart(2,'0')).join('');
    localStorage.setItem(TOKEN_KEY, token);
  }
  return token;
}

// ── Nickname storage ──────────────────────────────────────────────────────────
export function getNickname(){ return localStorage.getItem(NICK_KEY) || null; }
export function setNickname(name){
  localStorage.setItem(NICK_KEY, name.trim().toUpperCase());
  getOrCreateToken(); // ensure token exists when nickname is set
}

export async function submitScore(difficulty, score){
  const name  = getNickname();
  if(!name) return false;
  const token = getOrCreateToken();

  const path    = `${GAME_KEY}/${difficulty}`;
  const allSnap = await get(ref(db, path));

  let keysToRemove = [];
  let personalBest = 0;

  if(allSnap.exists()){
    allSnap.forEach(child => {
      const e = child.val();
      if(e.name === name){
        if(e.token === token){
          keysToRemove.push(child.key);
        }
        // Track personal best regardless of device
        if(typeof e.score === 'number' && e.score > personalBest) personalBest = e.score;
      }
    });
  }

  // Only block if new score is NOT higher than personal best
  // (prevents score from going down, but never blocks a genuine new high score)
  if(score <= personalBest) return false;

  // Check if score qualifies for top N
  const qualifies = await isTopN(difficulty, score, name);
  if(!qualifies) return false;

  // Remove own token-matched old entries
  for(const key of keysToRemove){
    await remove(ref(db, `${path}/${key}`));
  }

  // Save new high score — ensure score is stored as a number
  await push(ref(db, path), {
    name,
    score: Number(score),
    token,
    date: new Date().toISOString().split('T')[0]
  });

  return true;
}

// ── Check if score qualifies for top N ───────────────────────────────────────
async function isTopN(difficulty, score, playerName){
  const path = `${GAME_KEY}/${difficulty}`;
  const q    = query(ref(db, path), orderByChild('score'), limitToLast(TOP_N));
  const snap = await get(q);
  if(!snap.exists()) return true;

  // Build list excluding this player's own entries
  const others = [];
  snap.forEach(child => {
    const e = child.val();
    if(e.name !== playerName) others.push(e.score);
  });
  if(others.length < TOP_N) return true;
  return score > Math.min(...others);
}

// ── Fetch leaderboard ─────────────────────────────────────────────────────────
export async function fetchLeaderboard(difficulty){
  const path = `${GAME_KEY}/${difficulty}`;
  const q    = query(ref(db, path), orderByChild('score'), limitToLast(TOP_N));
  const snap = await get(q);
  if(!snap.exists()) return [];
  const entries = [];
  snap.forEach(child => entries.push(child.val()));
  return entries.sort((a,b) => b.score - a.score);
}

// ── Expose to global scope ────────────────────────────────────────────────────
window.FB = { getNickname, setNickname, submitScore, fetchLeaderboard };
