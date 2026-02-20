/* ═══════════════════════════════════════════════════════
   Wheel of Fortune — Game Logic
   Authors: Claude & MH Oddens
   ═══════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════
const PUZZLES = [
  {c:"PHRASE",a:"BETTER LATE THAN NEVER"},{c:"PHRASE",a:"BREAK A LEG"},
  {c:"PHRASE",a:"ONCE IN A BLUE MOON"},{c:"PHRASE",a:"ACTIONS SPEAK LOUDER THAN WORDS"},
  {c:"PHRASE",a:"PIECE OF CAKE"},{c:"PHRASE",a:"BIRDS OF A FEATHER"},
  {c:"PHRASE",a:"BURNING THE MIDNIGHT OIL"},{c:"PHRASE",a:"HIT THE NAIL ON THE HEAD"},
  {c:"PHRASE",a:"JUMP ON THE BANDWAGON"},{c:"PHRASE",a:"BITE THE BULLET"},
  {c:"PHRASE",a:"BACK TO THE DRAWING BOARD"},{c:"PHRASE",a:"BEAT AROUND THE BUSH"},
  {c:"PHRASE",a:"BITE OFF MORE THAN YOU CAN CHEW"},{c:"PHRASE",a:"COST AN ARM AND A LEG"},
  {c:"PHRASE",a:"CUT CORNERS"},{c:"PHRASE",a:"DONT CRY OVER SPILLED MILK"},
  {c:"PHRASE",a:"EVERY CLOUD HAS A SILVER LINING"},{c:"PHRASE",a:"GET OUT OF BED ON THE WRONG SIDE"},
  {c:"PHRASE",a:"GO BACK TO SQUARE ONE"},{c:"PHRASE",a:"HIT THE SACK"},
  {c:"PHRASE",a:"IT TAKES TWO TO TANGO"},{c:"PHRASE",a:"KILL TWO BIRDS WITH ONE STONE"},
  {c:"PHRASE",a:"LET THE CAT OUT OF THE BAG"},{c:"PHRASE",a:"MISS THE BOAT"},
  {c:"PHRASE",a:"NO PAIN NO GAIN"},{c:"PHRASE",a:"ON THE BALL"},
  {c:"PHRASE",a:"PULL SOMEONES LEG"},{c:"PHRASE",a:"RAINING CATS AND DOGS"},
  {c:"PHRASE",a:"SPILL THE BEANS"},{c:"PHRASE",a:"THE BALL IS IN YOUR COURT"},
  {c:"PHRASE",a:"THE BEST OF BOTH WORLDS"},{c:"PHRASE",a:"THROUGH THICK AND THIN"},
  {c:"PHRASE",a:"TIME FLIES WHEN YOURE HAVING FUN"},{c:"PHRASE",a:"UNDER THE WEATHER"},
  {c:"PHRASE",a:"YOU CANT JUDGE A BOOK BY ITS COVER"},{c:"PHRASE",a:"A PENNY FOR YOUR THOUGHTS"},
  {c:"PHRASE",a:"ADD FUEL TO THE FIRE"},{c:"PHRASE",a:"BLESSING IN DISGUISE"},
  {c:"PHRASE",a:"CURIOSITY KILLED THE CAT"},{c:"PHRASE",a:"DONT PUT ALL YOUR EGGS IN ONE BASKET"},
  {c:"PHRASE",a:"EASIER SAID THAN DONE"},{c:"PHRASE",a:"HANG IN THERE"},
  {c:"PHRASE",a:"IN THE HEAT OF THE MOMENT"},{c:"PHRASE",a:"KEEP YOUR CHIN UP"},
  {c:"PHRASE",a:"LEAVE NO STONE UNTURNED"},{c:"PHRASE",a:"LOOK BEFORE YOU LEAP"},
  {c:"PHRASE",a:"MAKE A LONG STORY SHORT"},{c:"PHRASE",a:"NECESSITY IS THE MOTHER OF INVENTION"},
  {c:"PHRASE",a:"ONCE BITTEN TWICE SHY"},{c:"PHRASE",a:"PRACTICE MAKES PERFECT"},
  {c:"PHRASE",a:"READING BETWEEN THE LINES"},{c:"PHRASE",a:"SEE EYE TO EYE"},
  {c:"PHRASE",a:"SHOOT FOR THE STARS"},{c:"PHRASE",a:"SITTING ON THE FENCE"},
  {c:"PHRASE",a:"SPEAK OF THE DEVIL"},{c:"PHRASE",a:"STRAIGHT FROM THE HORSES MOUTH"},
  {c:"PHRASE",a:"THE EARLY BIRD CATCHES THE WORM"},{c:"PHRASE",a:"TWO WRONGS DONT MAKE A RIGHT"},
  {c:"PHRASE",a:"WHEN PIGS FLY"},{c:"PHRASE",a:"WRAP YOUR HEAD AROUND IT"},
  {c:"PHRASE",a:"YOU REAP WHAT YOU SOW"},
  {c:"THING",a:"BIRTHDAY CAKE"},{c:"THING",a:"ROLLER COASTER"},
  {c:"THING",a:"TREASURE CHEST"},{c:"THING",a:"SWIMMING POOL"},
  {c:"THING",a:"FERRIS WHEEL"},{c:"THING",a:"DIAMOND RING"},
  {c:"THING",a:"HOT AIR BALLOON"},{c:"THING",a:"MAGIC CARPET"},
  {c:"THING",a:"FIRE EXTINGUISHER"},{c:"THING",a:"GRANDFATHER CLOCK"},
  {c:"THING",a:"JIGSAW PUZZLE"},{c:"THING",a:"LOTTERY TICKET"},
  {c:"THING",a:"MAGNIFYING GLASS"},{c:"THING",a:"PARACHUTE"},
  {c:"THING",a:"PIGGY BANK"},{c:"THING",a:"REMOTE CONTROL"},
  {c:"THING",a:"RUBBER DUCK"},{c:"THING",a:"SHOOTING STAR"},
  {c:"THING",a:"SNOWFLAKE"},{c:"THING",a:"SOLAR PANEL"},
  {c:"THING",a:"STETHOSCOPE"},{c:"THING",a:"SUBMARINE"},
  {c:"THING",a:"SURFBOARD"},{c:"THING",a:"TELESCOPE"},
  {c:"THING",a:"THUNDERSTORM"},{c:"THING",a:"TIME CAPSULE"},
  {c:"THING",a:"TRAMPOLINE"},{c:"THING",a:"UMBRELLA"},
  {c:"THING",a:"VIOLIN"},{c:"THING",a:"WATERFALL"},
  {c:"THING",a:"WHEELBARROW"},{c:"THING",a:"WINDMILL"},
  {c:"THING",a:"WISHING WELL"},{c:"THING",a:"WOODEN SPOON"},
  {c:"THING",a:"XYLOPHONE"},{c:"THING",a:"ALARM CLOCK"},
  {c:"THING",a:"BASKETBALL HOOP"},{c:"THING",a:"BOARD GAME"},
  {c:"THING",a:"BUBBLE WRAP"},{c:"THING",a:"CANDY CANE"},
  {c:"THING",a:"COMPASS"},{c:"THING",a:"CRYSTAL BALL"},
  {c:"THING",a:"DARTBOARD"},{c:"THING",a:"DECK OF CARDS"},
  {c:"THING",a:"DICTIONARY"},{c:"THING",a:"DREAMCATCHER"},
  {c:"THING",a:"FIRE HYDRANT"},{c:"THING",a:"FISHING ROD"},
  {c:"THING",a:"FLASHLIGHT"},{c:"THING",a:"GARDEN HOSE"},
  {c:"THING",a:"GLOBE"},{c:"THING",a:"HOURGLASS"},
  {c:"PLACE",a:"GRAND CANYON"},{c:"PLACE",a:"EIFFEL TOWER"},
  {c:"PLACE",a:"NIAGARA FALLS"},{c:"PLACE",a:"STATUE OF LIBERTY"},
  {c:"PLACE",a:"MOUNT EVEREST"},{c:"PLACE",a:"TIMES SQUARE"},
  {c:"PLACE",a:"GOLDEN GATE BRIDGE"},{c:"PLACE",a:"GREAT WALL OF CHINA"},
  {c:"PLACE",a:"AMAZON RAIN FOREST"},{c:"PLACE",a:"BIG BEN"},
  {c:"PLACE",a:"BUCKINGHAM PALACE"},{c:"PLACE",a:"COLOSSEUM"},
  {c:"PLACE",a:"DEAD SEA"},{c:"PLACE",a:"GREAT BARRIER REEF"},
  {c:"PLACE",a:"HOLLYWOOD BOULEVARD"},{c:"PLACE",a:"LEANING TOWER OF PISA"},
  {c:"PLACE",a:"MACHU PICCHU"},{c:"PLACE",a:"MOUNT RUSHMORE"},
  {c:"PLACE",a:"NOTRE DAME CATHEDRAL"},{c:"PLACE",a:"SAHARA DESERT"},
  {c:"PLACE",a:"SILICON VALLEY"},{c:"PLACE",a:"STONEHENGE"},
  {c:"PLACE",a:"SYDNEY OPERA HOUSE"},{c:"PLACE",a:"TAJ MAHAL"},
  {c:"PLACE",a:"THE AMAZON RIVER"},{c:"PLACE",a:"THE GREAT PYRAMID"},
  {c:"PLACE",a:"THE LOUVRE"},{c:"PLACE",a:"VENICE ITALY"},
  {c:"PLACE",a:"VICTORIA FALLS"},{c:"PLACE",a:"YELLOWSTONE NATIONAL PARK"},
  {c:"PLACE",a:"CENTRAL PARK"},{c:"PLACE",a:"EMPIRE STATE BUILDING"},
  {c:"PLACE",a:"MOUNT KILIMANJARO"},{c:"PLACE",a:"SERENGETI PLAINS"},
  {c:"PLACE",a:"THE ARCTIC CIRCLE"},{c:"PLACE",a:"THE PENTAGON"},
  {c:"PLACE",a:"WALL STREET"},{c:"PLACE",a:"CAPE TOWN"},{c:"PLACE",a:"ANGKOR WAT"},
  {c:"FOOD & DRINK",a:"CHOCOLATE MILKSHAKE"},{c:"FOOD & DRINK",a:"PEPPERONI PIZZA"},
  {c:"FOOD & DRINK",a:"BANANA SPLIT"},{c:"FOOD & DRINK",a:"STRAWBERRY SHORTCAKE"},
  {c:"FOOD & DRINK",a:"APPLE PIE"},{c:"FOOD & DRINK",a:"BACON AND EGGS"},
  {c:"FOOD & DRINK",a:"BLUEBERRY MUFFIN"},{c:"FOOD & DRINK",a:"BUFFALO WINGS"},
  {c:"FOOD & DRINK",a:"CAESAR SALAD"},{c:"FOOD & DRINK",a:"CARAMEL APPLE"},
  {c:"FOOD & DRINK",a:"CHEESE BURGER"},{c:"FOOD & DRINK",a:"CHICKEN PARMESAN"},
  {c:"FOOD & DRINK",a:"CHOCOLATE CHIP COOKIE"},{c:"FOOD & DRINK",a:"CINNAMON ROLL"},
  {c:"FOOD & DRINK",a:"CLAM CHOWDER"},{c:"FOOD & DRINK",a:"CLUB SANDWICH"},
  {c:"FOOD & DRINK",a:"COTTON CANDY"},{c:"FOOD & DRINK",a:"EGGS BENEDICT"},
  {c:"FOOD & DRINK",a:"FRENCH ONION SOUP"},{c:"FOOD & DRINK",a:"FRIED CHICKEN"},
  {c:"FOOD & DRINK",a:"GRILLED SALMON"},{c:"FOOD & DRINK",a:"GUACAMOLE"},
  {c:"FOOD & DRINK",a:"HOT FUDGE SUNDAE"},{c:"FOOD & DRINK",a:"LEMON MERINGUE PIE"},
  {c:"FOOD & DRINK",a:"LOBSTER BISQUE"},{c:"FOOD & DRINK",a:"MACARONI AND CHEESE"},
  {c:"FOOD & DRINK",a:"MANGO SMOOTHIE"},{c:"FOOD & DRINK",a:"NACHOS"},
  {c:"FOOD & DRINK",a:"ONION RINGS"},{c:"FOOD & DRINK",a:"PANCAKES AND SYRUP"},
  {c:"FOOD & DRINK",a:"PEANUT BUTTER AND JELLY"},{c:"FOOD & DRINK",a:"PECAN PIE"},
  {c:"FOOD & DRINK",a:"PINEAPPLE UPSIDE DOWN CAKE"},{c:"FOOD & DRINK",a:"POTATO CHIPS"},
  {c:"FOOD & DRINK",a:"PULLED PORK SANDWICH"},{c:"FOOD & DRINK",a:"RAINBOW SHERBET"},
  {c:"FOOD & DRINK",a:"ROCKY ROAD ICE CREAM"},{c:"FOOD & DRINK",a:"SHRIMP COCKTAIL"},
  {c:"FOOD & DRINK",a:"SPAGHETTI AND MEATBALLS"},{c:"FOOD & DRINK",a:"TATER TOTS"},
  {c:"FOOD & DRINK",a:"TIRAMISU"},{c:"FOOD & DRINK",a:"WAFFLES AND BUTTER"},
  {c:"PERSON",a:"ALBERT EINSTEIN"},{c:"PERSON",a:"SHERLOCK HOLMES"},
  {c:"PERSON",a:"ABRAHAM LINCOLN"},{c:"PERSON",a:"AMELIA EARHART"},
  {c:"PERSON",a:"BENJAMIN FRANKLIN"},{c:"PERSON",a:"CLEOPATRA"},
  {c:"PERSON",a:"CHRISTOPHER COLUMBUS"},{c:"PERSON",a:"GALILEO GALILEI"},
  {c:"PERSON",a:"GEORGE WASHINGTON"},{c:"PERSON",a:"HARRIET TUBMAN"},
  {c:"PERSON",a:"ISAAC NEWTON"},{c:"PERSON",a:"JULIUS CAESAR"},
  {c:"PERSON",a:"LEONARDO DA VINCI"},{c:"PERSON",a:"MARIE CURIE"},
  {c:"PERSON",a:"MARTIN LUTHER KING"},{c:"PERSON",a:"MOZART"},
  {c:"PERSON",a:"NAPOLEON BONAPARTE"},{c:"PERSON",a:"NEIL ARMSTRONG"},
  {c:"PERSON",a:"NIKOLA TESLA"},{c:"PERSON",a:"WINSTON CHURCHILL"},
  {c:"PERSON",a:"CHARLES DARWIN"},{c:"PERSON",a:"EDGAR ALLAN POE"},
  {c:"PERSON",a:"FLORENCE NIGHTINGALE"},{c:"PERSON",a:"FRIDA KAHLO"},
  {c:"PERSON",a:"MAHATMA GANDHI"},{c:"PERSON",a:"MARK TWAIN"},
  {c:"PERSON",a:"ROSA PARKS"},{c:"PERSON",a:"WILLIAM SHAKESPEARE"},
  {c:"PERSON",a:"WRIGHT BROTHERS"},
  {c:"MOVIE",a:"THE WIZARD OF OZ"},{c:"MOVIE",a:"BACK TO THE FUTURE"},
  {c:"MOVIE",a:"FORREST GUMP"},{c:"MOVIE",a:"JURASSIC PARK"},
  {c:"MOVIE",a:"THE LION KING"},{c:"MOVIE",a:"HOME ALONE"},
  {c:"MOVIE",a:"INDIANA JONES"},{c:"MOVIE",a:"JAWS"},
  {c:"MOVIE",a:"THE GODFATHER"},{c:"MOVIE",a:"TITANIC"},
  {c:"MOVIE",a:"STAR WARS"},{c:"MOVIE",a:"GONE WITH THE WIND"},
  {c:"MOVIE",a:"THE SOUND OF MUSIC"},{c:"MOVIE",a:"PRETTY WOMAN"},
  {c:"MOVIE",a:"TOY STORY"},{c:"MOVIE",a:"GREASE"},
  {c:"MOVIE",a:"THE SHAWSHANK REDEMPTION"},{c:"MOVIE",a:"PULP FICTION"},
  {c:"MOVIE",a:"GROUNDHOG DAY"},{c:"MOVIE",a:"GHOSTBUSTERS"},
  {c:"MOVIE",a:"FERRIS BUELLERS DAY OFF"},{c:"MOVIE",a:"DIRTY DANCING"},
  {c:"MOVIE",a:"BEVERLY HILLS COP"},{c:"MOVIE",a:"PIRATES OF THE CARIBBEAN"},
  {c:"MOVIE",a:"FINDING NEMO"},
  {c:"TV SHOW",a:"WHEEL OF FORTUNE"},{c:"TV SHOW",a:"GAME OF THRONES"},
  {c:"TV SHOW",a:"BREAKING BAD"},{c:"TV SHOW",a:"THE SIMPSONS"},
  {c:"TV SHOW",a:"SEINFELD"},{c:"TV SHOW",a:"FRIENDS"},
  {c:"TV SHOW",a:"THE OFFICE"},{c:"TV SHOW",a:"STRANGER THINGS"},
  {c:"TV SHOW",a:"THE CROWN"},{c:"TV SHOW",a:"JEOPARDY"},
  {c:"TV SHOW",a:"AMERICA GOT TALENT"},{c:"TV SHOW",a:"SURVIVOR"},
  {c:"TV SHOW",a:"THE WALKING DEAD"},{c:"TV SHOW",a:"GREY ANATOMY"},
  {c:"TV SHOW",a:"SATURDAY NIGHT LIVE"},
  {c:"AROUND THE HOUSE",a:"KITCHEN CABINET"},{c:"AROUND THE HOUSE",a:"BATHROOM MIRROR"},
  {c:"AROUND THE HOUSE",a:"LIVING ROOM SOFA"},{c:"AROUND THE HOUSE",a:"WASHING MACHINE"},
  {c:"AROUND THE HOUSE",a:"MICROWAVE OVEN"},{c:"AROUND THE HOUSE",a:"CEILING FAN"},
  {c:"AROUND THE HOUSE",a:"WELCOME MAT"},{c:"AROUND THE HOUSE",a:"GARDEN SHED"},
  {c:"AROUND THE HOUSE",a:"SMOKE DETECTOR"},{c:"AROUND THE HOUSE",a:"WINDOW BLINDS"},
  {c:"AROUND THE HOUSE",a:"DINING TABLE"},{c:"AROUND THE HOUSE",a:"BOOKSHELF"},
  {c:"AROUND THE HOUSE",a:"LAUNDRY BASKET"},{c:"AROUND THE HOUSE",a:"COFFEE TABLE"},
  {c:"AROUND THE HOUSE",a:"ROCKING CHAIR"},
  {c:"EVENT",a:"SUPER BOWL"},{c:"EVENT",a:"WORLD CUP"},
  {c:"EVENT",a:"OLYMPIC GAMES"},{c:"EVENT",a:"NEW YEARS EVE"},
  {c:"EVENT",a:"THANKSGIVING DINNER"},{c:"EVENT",a:"HALLOWEEN PARADE"},
  {c:"EVENT",a:"FOURTH OF JULY"},{c:"EVENT",a:"BIRTHDAY PARTY"},
  {c:"EVENT",a:"WEDDING RECEPTION"},{c:"EVENT",a:"GRADUATION CEREMONY"},
  {c:"EVENT",a:"MARDI GRAS"},{c:"EVENT",a:"SPRING BREAK"},
  {c:"EVENT",a:"SUMMER VACATION"},{c:"EVENT",a:"CHRISTMAS MORNING"},
  {c:"EVENT",a:"ACADEMY AWARDS"},
  {c:"OCCUPATION",a:"BRAIN SURGEON"},{c:"OCCUPATION",a:"FIREFIGHTER"},
  {c:"OCCUPATION",a:"ASTRONAUT"},{c:"OCCUPATION",a:"CHEF"},
  {c:"OCCUPATION",a:"ARCHITECT"},{c:"OCCUPATION",a:"DENTIST"},
  {c:"OCCUPATION",a:"MARINE BIOLOGIST"},{c:"OCCUPATION",a:"PHOTOGRAPHER"},
  {c:"OCCUPATION",a:"POLICE OFFICER"},{c:"OCCUPATION",a:"TEACHER"},
  {c:"OCCUPATION",a:"VETERINARIAN"},{c:"OCCUPATION",a:"AIRLINE PILOT"},
  {c:"OCCUPATION",a:"FASHION DESIGNER"},{c:"OCCUPATION",a:"LANDSCAPE GARDENER"},
  {c:"OCCUPATION",a:"VOICE ACTOR"},
  {c:"ANIMAL",a:"BALD EAGLE"},{c:"ANIMAL",a:"BOTTLENOSE DOLPHIN"},
  {c:"ANIMAL",a:"CHEETAH"},{c:"ANIMAL",a:"GIANT PANDA"},
  {c:"ANIMAL",a:"GOLDEN RETRIEVER"},{c:"ANIMAL",a:"GREAT WHITE SHARK"},
  {c:"ANIMAL",a:"HUMPBACK WHALE"},{c:"ANIMAL",a:"MOUNTAIN LION"},
  {c:"ANIMAL",a:"POLAR BEAR"},{c:"ANIMAL",a:"SIBERIAN TIGER"},
  {c:"ANIMAL",a:"KOMODO DRAGON"},{c:"ANIMAL",a:"AFRICAN ELEPHANT"},
  {c:"ANIMAL",a:"KING COBRA"},{c:"ANIMAL",a:"FLAMINGO"},
  {c:"ANIMAL",a:"EMPEROR PENGUIN"},
];

const SEGS = [
  {lbl:"$500",     val:500,       col:"#c0392b"},{lbl:"$650",     val:650,       col:"#7b2fbe"},
  {lbl:"$900",     val:900,       col:"#117a65"},{lbl:"$300",     val:300,       col:"#e67e22"},
  {lbl:"$1200",    val:1200,      col:"#1a5276"},{lbl:"LOSE TURN",val:"LOSE",    col:"#555"},
  {lbl:"$750",     val:750,       col:"#d4ac0d"},{lbl:"$400",     val:400,       col:"#1e8449"},
  {lbl:"BANKRUPT", val:"BANKRUPT",col:"#111"},   {lbl:"$800",     val:800,       col:"#6c3483"},
  {lbl:"$500",     val:500,       col:"#922b21"},{lbl:"$1000",    val:1000,      col:"#b9770e"},
  {lbl:"LOSE TURN",val:"LOSE",    col:"#555"},   {lbl:"$600",     val:600,       col:"#0e6655"},
  {lbl:"$350",     val:350,       col:"#154360"},{lbl:"$700",     val:700,       col:"#784212"},
];

// ═══════════════════════════════════════════════════════
//  DIFFICULTY PROFILES
// ═══════════════════════════════════════════════════════
const DIFF = {
  easy: {
    freq:    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    smart:   0.0,   // chance of picking a letter actually in the puzzle
    vowel:   0.08,  // chance of buying a vowel
    solve:   0.90,  // % revealed before attempting to solve
  },
  medium: {
    freq:    'RSTLNEHMADGBCPFWYUVKXJQZ'.split(''),
    smart:   0.60,
    vowel:   0.25,
    solve:   0.68,
  },
  hard: {
    freq:    'ENATIORSDGBMKLPUHCFWYVJXQZ'.split(''),
    smart:   0.90,
    vowel:   0.55,  // aggressively buys vowels
    solve:   0.42,  // attempts solve early
  },
};

// ═══════════════════════════════════════════════════════
//  WEB AUDIO ENGINE
// ═══════════════════════════════════════════════════════
let AC = null;

function initAudio(){
  if(AC) return;
  try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}
}

function _tone(freq, type, dur, vol=0.25, when=null){
  if(!AC) return;
  const t = when ?? AC.currentTime;
  const o = AC.createOscillator();
  const g = AC.createGain();
  o.connect(g); g.connect(AC.destination);
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.start(t); o.stop(t + dur + 0.01);
}

function sndTick()    { _tone(1100, 'square', 0.025, 0.12); }
function sndReveal()  { if(!AC) return; _tone(660,'sine',0.07,0.18); _tone(880,'sine',0.07,0.18,AC.currentTime+0.06); }
function sndCorrect() { if(!AC) return; const t=AC.currentTime; [523,659,784,1047].forEach((f,i)=>_tone(f,'sine',0.12,0.22,t+i*0.07)); }
function sndWrong()   { if(!AC) return; _tone(180,'sawtooth',0.22,0.3); _tone(140,'sawtooth',0.18,0.3,AC.currentTime+0.12); }
function sndBankrupt(){ if(!AC) return; const t=AC.currentTime; [300,250,200,160,130].forEach((f,i)=>_tone(f,'sawtooth',0.14,0.32,t+i*0.09)); }
function sndFanfare() { if(!AC) return; const t=AC.currentTime; [523,587,659,784,880,1047,1175].forEach((f,i)=>_tone(f,'sine',0.18,0.28,t+i*0.055)); }

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const VOWELS     = new Set(['A','E','I','O','U']);
const VOWEL_COST = 250;

let G   = {};
let wheelRot = 0;
let resultCb = null;
let selectedRounds = 3;
let selectedDiff   = 'medium';

function initState(maxR, diff){
  G = {
    maxRounds: maxR, round: 0, turn: 'player', phase: 'spin',
    puzzle: null, revealed: new Set(), usedLetters: new Set(),
    spinVal: 0, roundScore:{player:0,computer:0}, totalScore:{player:0,computer:0},
    usedIdx: new Set(), spinning: false, locked: false, suddenDeath: false,
    difficulty: diff,
  };
}

// ═══════════════════════════════════════════════════════
//  TITLE SCREEN — STARS
// ═══════════════════════════════════════════════════════
(function makeStars(){
  const c=document.getElementById('title-stars');
  for(let i=0;i<80;i++){
    const s=document.createElement('div'); s.className='star';
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-duration:${2+Math.random()*4}s;animation-delay:${Math.random()*4}s`;
    c.appendChild(s);
  }
})();

document.querySelectorAll('#rounds-sel .opt-btn').forEach(el=>{
  el.addEventListener('click',()=>{
    document.querySelectorAll('#rounds-sel .opt-btn').forEach(x=>x.classList.remove('sel'));
    el.classList.add('sel'); selectedRounds=parseInt(el.dataset.r);
  });
});
document.querySelectorAll('#diff-sel .opt-btn').forEach(el=>{
  el.addEventListener('click',()=>{
    document.querySelectorAll('#diff-sel .opt-btn').forEach(x=>x.classList.remove('sel'));
    el.classList.add('sel'); selectedDiff=el.dataset.d;
  });
});

// ═══════════════════════════════════════════════════════
//  PHYSICAL KEYBOARD
// ═══════════════════════════════════════════════════════
window.addEventListener('keydown', e=>{
  if(document.getElementById('modal-solve').classList.contains('open')) return;
  if(!document.getElementById('screen-game').classList.contains('active')) return;
  const letter = e.key.toUpperCase();
  if(!/^[A-Z]$/.test(letter)) return;
  e.preventDefault();
  const keyEl = document.querySelector(`.key[data-letter="${letter}"]`);
  if(keyEl && !keyEl.classList.contains('used')){
    keyEl.classList.add('kb-flash');
    setTimeout(()=>keyEl.classList.remove('kb-flash'), 160);
  }
  handleKeyPress(letter);
});

// ═══════════════════════════════════════════════════════
//  SCREENS
// ═══════════════════════════════════════════════════════
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame(){
  initAudio();
  initState(selectedRounds, selectedDiff);
  showScreen('screen-game');
  const badge = document.getElementById('diff-badge');
  badge.textContent = selectedDiff.charAt(0).toUpperCase() + selectedDiff.slice(1);
  badge.className   = 'diff-badge ' + selectedDiff;
  sizeWheel();
  startRound();
}

function goToTitle(){
  document.getElementById('modal-go').classList.remove('open');
  showScreen('screen-title');
}

function gameOverQuit(){
  document.getElementById('modal-go').classList.remove('open');
  showQuitScreen();
}

function playAgain(){
  document.getElementById('modal-go').classList.remove('open');
  initState(G.maxRounds, G.difficulty);
  showScreen('screen-game');
  sizeWheel(); startRound();
}

// ═══════════════════════════════════════════════════════
//  MENU
// ═══════════════════════════════════════════════════════
function toggleMenu(e){
  e.stopPropagation();
  const btn=document.getElementById('menu-btn');
  const dd =document.getElementById('menu-dropdown');
  const was=dd.classList.contains('open');
  closeMenu();
  if(!was){ btn.classList.add('open'); dd.classList.add('open'); }
}
function closeMenu(){
  document.getElementById('menu-btn').classList.remove('open');
  document.getElementById('menu-dropdown').classList.remove('open');
}
document.addEventListener('click', closeMenu);

function menuRules(){
  closeMenu();
  document.getElementById('modal-rules').classList.add('open');
}
function closeRulesModal(){
  document.getElementById('modal-rules').classList.remove('open');
}

function menuPlayAgain(){
  closeMenu();
  document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
  // Show thank you screen briefly, then auto-navigate to title after 2 seconds
  const qs  = document.getElementById('screen-quit');
  const btn = document.getElementById('quit-play-btn');
  btn.style.opacity='0'; btn.style.pointerEvents='none';
  qs.classList.add('visible');
  launchBalloons(); spawnQuitConfetti();
  setTimeout(()=>{
    qs.classList.remove('visible');
    document.getElementById('balloons-container').innerHTML='';
    document.querySelectorAll('.quit-confetti').forEach(e=>e.remove());
    initState(G.maxRounds, G.difficulty);
    showScreen('screen-title');
  }, 2000);
}

function menuQuit(){
  closeMenu();
  document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
  showQuitScreen();
}

// ═══════════════════════════════════════════════════════
//  QUIT SCREEN
// ═══════════════════════════════════════════════════════
function showQuitScreen(){
  const qs  = document.getElementById('screen-quit');
  const btn = document.getElementById('quit-play-btn');
  btn.style.opacity='0'; btn.style.pointerEvents='none';
  qs.classList.add('visible');
  launchBalloons(); spawnQuitConfetti();
  setTimeout(()=>{ btn.style.opacity='1'; btn.style.pointerEvents='auto'; }, 3000);
}

function quitToTitle(){
  document.getElementById('screen-quit').classList.remove('visible');
  document.getElementById('balloons-container').innerHTML='';
  document.querySelectorAll('.quit-confetti').forEach(e=>e.remove());
  showScreen('screen-title');
}

function launchBalloons(){
  const c=document.getElementById('balloons-container'); c.innerHTML='';
  const cols=['#e63946','#f5c518','#06d6a0','#4895ef','#ff9f1c','#c77dff','#ff6b9d','#00f5d4'];
  for(let i=0;i<16;i++){
    const b=document.createElement('div'); b.className='balloon';
    const col=cols[i%cols.length], w=42+Math.random()*22;
    b.style.cssText=`background:${col};left:${3+Math.random()*90}%;width:${w}px;height:${Math.round(w*1.28)}px;animation-duration:${5+Math.random()*5}s;animation-delay:-${Math.random()*6}s;box-shadow:inset -6px -4px 0 rgba(0,0,0,0.15),inset 4px 4px 0 rgba(255,255,255,0.28);`;
    c.appendChild(b);
  }
}

function spawnQuitConfetti(){
  const cols=['#f5c518','#06d6a0','#4895ef','#e63946','#fff0a0','#ff9f1c','#c77dff','#ff6b9d'];
  for(let i=0;i<90;i++) setTimeout(()=>{
    const el=document.createElement('div'); el.className='confetti-piece quit-confetti';
    const sz=5+Math.random()*9;
    el.style.cssText=`left:${Math.random()*100}vw;width:${sz}px;height:${sz}px;background:${cols[Math.floor(Math.random()*cols.length)]};border-radius:${Math.random()>.4?'50%':'2px'};animation-duration:${2.5+Math.random()*2.5}s;`;
    document.body.appendChild(el); setTimeout(()=>el.remove(),4500);
  },i*30);
}

// ═══════════════════════════════════════════════════════
//  WHEEL
// ═══════════════════════════════════════════════════════
function sizeWheel(){
  const isDesktop = window.innerWidth >= 768;
  const sz = isDesktop
    ? Math.min(Math.round(window.innerHeight * 0.40), 280)
    : Math.min(window.innerWidth - 24, 210);
  const canvas = document.getElementById('wheel-canvas');
  canvas.width = sz; canvas.height = sz;
  const wrap = document.getElementById('wheel-wrap');
  wrap.style.width = sz+'px'; wrap.style.height = sz+'px';
  const hs = Math.round(sz*0.1);
  document.getElementById('wheel-hub').style.cssText =
    `width:${hs}px;height:${hs}px;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;z-index:10;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,#f5c518 50%,#e8a800);box-shadow:0 0 ${hs*0.4}px rgba(245,197,24,0.5);`;
  drawWheel(wheelRot);
}

function drawWheel(rot){
  const canvas=document.getElementById('wheel-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d');
  const sz=canvas.width, cx=sz/2, cy=sz/2, r=sz/2-3;
  const n=SEGS.length, arc=(2*Math.PI)/n;
  ctx.clearRect(0,0,sz,sz);
  for(let i=0;i<n;i++){
    const s=rot+i*arc-Math.PI/2, e=s+arc;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,s,e); ctx.closePath();
    ctx.fillStyle=SEGS[i].col; ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,0.45)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(s+arc/2); ctx.textAlign='right';
    ctx.fillStyle='#fff'; ctx.shadowColor='rgba(0,0,0,0.9)'; ctx.shadowBlur=3;
    const fs=Math.max(8,sz*0.043);
    ctx.font=`bold ${fs}px Oswald,sans-serif`;
    ctx.fillText(SEGS[i].lbl,r-5,fs*0.37);
    ctx.restore();
  }
  ctx.beginPath(); ctx.arc(cx,cy,r,0,2*Math.PI);
  ctx.strokeStyle='rgba(245,197,24,0.4)'; ctx.lineWidth=2.5; ctx.stroke();
  wheelRot=rot;
}

// ═══════════════════════════════════════════════════════
//  ROUND
// ═══════════════════════════════════════════════════════
function pickPuzzle(){
  if(G.usedIdx.size>=PUZZLES.length) G.usedIdx.clear();
  let idx; do{ idx=Math.floor(Math.random()*PUZZLES.length); }while(G.usedIdx.has(idx));
  G.usedIdx.add(idx); return PUZZLES[idx];
}

function startRound(){
  G.round++;
  if(G.round>G.maxRounds){ endGame(); return; }
  G.puzzle=pickPuzzle();
  G.revealed=new Set(); G.usedLetters=new Set(); G.spinVal=0;
  G.roundScore.player=0; G.roundScore.computer=0;
  G.phase='spin'; G.spinning=false; G.locked=false;
  G.turn='player'; G.suddenDeath=false;
  const sdBanner=document.getElementById('sd-banner'); if(sdBanner) sdBanner.remove();
  // Pre-reveal letters based on difficulty
  const preReveal = G.difficulty==='easy'   ? ['R','S','T','L','N','E'] :
                    G.difficulty==='medium'  ? ['R','S','T','L'] : [];
  preReveal.forEach(l=>{
    G.usedLetters.add(l);
    for(let i=0;i<G.puzzle.a.length;i++) if(G.puzzle.a[i]===l) G.revealed.add(i);
  });
  document.getElementById('round-pill').textContent=`Round ${G.round} of ${G.maxRounds}`;
  document.getElementById('cat-display').textContent=G.puzzle.c;
  setBanner('','empty');
  renderPuzzle(); buildKeyboard(); updateScores(); updateTurnUI();
  if(G.turn==='computer') setTimeout(computerTurn,1600);
}

// ═══════════════════════════════════════════════════════
//  PUZZLE RENDER — dynamic tile sizing (from Rad van Fortuin)
// ═══════════════════════════════════════════════════════
function renderPuzzle(){
  const grid=document.getElementById('puzzle-grid'); grid.innerHTML='';
  const puzzle=G.puzzle.a;

  // Calculate available width and choose tile size so longest word always fits
  const availW = (grid.closest('.puzzle-area') || document.body).clientWidth - 12;
  const words = puzzle.split(' ');
  const longestWord = Math.max(...words.map(w=>w.length));

  let tileW = 26, gap = 3, spaceW = 10;
  for(let tw=26; tw>=18; tw--){
    const rowW = longestWord * tw + (longestWord-1) * gap;
    if(rowW <= availW){ tileW = tw; break; }
    tileW = 18;
  }

  const MAX = Math.floor((availW + gap) / (tileW + gap));

  // Build rows tracking string positions
  const rows=[]; let cur=[], curLen=0, pos=0;
  for(let w=0;w<words.length;w++){
    const word=words[w], startIdx=pos;
    const need=word.length+(cur.length>0?1:0);
    if(curLen+need>MAX&&cur.length>0){
      rows.push([...cur]); cur=[{word,startIdx}]; curLen=word.length;
    } else {
      if(cur.length>0) curLen++;
      cur.push({word,startIdx}); curLen+=word.length;
    }
    pos+=word.length+1;
  }
  if(cur.length) rows.push(cur);

  const tileH    = Math.round(tileW * 1.31);
  const fontSize = Math.max(10, Math.round(tileW * 0.58));

  for(const row of rows){
    const rowEl=document.createElement('div'); rowEl.className='puzzle-row';
    for(let w=0;w<row.length;w++){
      if(w>0){
        const sp=document.createElement('div');
        sp.className='tile tile-space'; sp.style.width=spaceW+'px';
        rowEl.appendChild(sp);
      }
      const {word,startIdx}=row[w];
      for(let c=0;c<word.length;c++){
        const idx=startIdx+c, ch=word[c];
        const tile=document.createElement('div');
        tile.className='tile tile-letter'+(G.revealed.has(idx)?' revealed':'');
        tile.style.cssText=`width:${tileW}px;height:${tileH}px;font-size:${fontSize}px;`;
        tile.textContent=G.revealed.has(idx)?ch:''; tile.dataset.i=idx;
        rowEl.appendChild(tile);
      }
    }
    grid.appendChild(rowEl);
  }
}

function animateReveal(letter){
  let count=0;
  for(let i=0;i<G.puzzle.a.length;i++){
    if(G.puzzle.a[i]===letter&&!G.revealed.has(i)){
      G.revealed.add(i); count++;
      setTimeout(()=>{
        const tile=document.querySelector(`.tile[data-i="${i}"]`);
        if(tile){ tile.classList.add('revealed'); tile.textContent=letter; sndReveal(); }
      },count*90);
    }
  }
  return count;
}

function isPuzzleSolved(){
  return G.puzzle.a.split('').every((c,i)=>c===' '||G.revealed.has(i));
}

// ═══════════════════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════════════════
function buildKeyboard(){
  const rows=['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
  const kb=document.getElementById('keyboard'); kb.innerHTML='';
  for(const row of rows){
    const re=document.createElement('div'); re.className='key-row';
    for(const ch of row){
      const k=document.createElement('button'); k.className='key'; k.textContent=ch; k.dataset.letter=ch;
      if(G.usedLetters.has(ch)){ k.classList.add('used',G.puzzle.a.includes(ch)?'hit':'miss'); }
      k.addEventListener('click',()=>handleKeyPress(ch));
      re.appendChild(k);
    }
    kb.appendChild(re);
  }
}

function markKey(letter,hit){
  const k=document.querySelector(`.key[data-letter="${letter}"]`);
  if(k){ k.classList.remove('vowel-active'); k.classList.add('used',hit?'hit':'miss'); }
}

function updateKeyInteractivity(){
  document.querySelectorAll('.key').forEach(k=>{
    const letter=k.dataset.letter;
    if(G.usedLetters.has(letter)||k.classList.contains('used')){ k.style.pointerEvents='none'; k.style.opacity=''; return; }
    if(G.turn!=='player'||G.locked){ k.style.pointerEvents='none'; k.style.opacity='0.3'; return; }
    if(G.phase==='guess'){
      if(VOWELS.has(letter)){ k.style.pointerEvents='none'; k.style.opacity='0.2'; k.classList.remove('vowel-active'); }
      else{ k.style.pointerEvents=''; k.style.opacity=''; k.classList.remove('vowel-active'); }
    } else if(G.phase==='buy_vowel'){
      if(!VOWELS.has(letter)){ k.style.pointerEvents='none'; k.style.opacity='0.15'; k.classList.remove('vowel-active'); }
      else{ k.style.pointerEvents=''; k.style.opacity=''; k.classList.add('vowel-active'); }
    } else{ k.style.pointerEvents='none'; k.style.opacity='0.3'; k.classList.remove('vowel-active'); }
  });
}

// ═══════════════════════════════════════════════════════
//  TURN UI
// ═══════════════════════════════════════════════════════
function updateTurnUI(){
  const isP=G.turn==='player';
  document.getElementById('sc-player').classList.toggle('active-turn',isP);
  document.getElementById('sc-comp').classList.toggle('active-turn',!isP);
  document.getElementById('btn-spin').disabled  = !(isP&&G.phase==='spin'&&!G.locked);
  document.getElementById('btn-vowel').disabled = !(isP&&(G.phase==='spin'||G.phase==='guess')&&!G.locked&&G.roundScore.player>=VOWEL_COST&&hasUnrevealedVowels());
  document.getElementById('btn-solve').disabled = !(isP&&!G.locked);
  updateKeyInteractivity();
}

function updateScores(){
  document.getElementById('p-round').textContent='$'+G.roundScore.player.toLocaleString();
  document.getElementById('c-round').textContent='$'+G.roundScore.computer.toLocaleString();
  document.getElementById('p-total').textContent='Total $'+G.totalScore.player.toLocaleString();
  document.getElementById('c-total').textContent='Total $'+G.totalScore.computer.toLocaleString();
}

function setBanner(text,cls){
  const b=document.getElementById('spin-banner');
  b.className='spin-banner '+(cls||'empty'); b.textContent=text||'';
}
function showThinking(v){ document.getElementById('think-bar').classList.toggle('show',v); }

function switchTurn(){
  G.turn=G.turn==='player'?'computer':'player';
  G.phase='spin'; G.spinVal=0; G.locked=false;
  setBanner('','empty');
  if(isDeadlocked()){ setTimeout(startSuddenDeath,800); return; }
  updateTurnUI();
  if(G.turn==='computer') setTimeout(computerTurn,1200);
}

function hasUnrevealedVowels(){
  for(const v of VOWELS) if(!G.usedLetters.has(v)&&G.puzzle.a.includes(v)) return true;
  return false;
}
function hasUnrevealedConsonants(){
  for(let i=0;i<G.puzzle.a.length;i++){
    const c=G.puzzle.a[i];
    if(c!==' '&&!VOWELS.has(c)&&!G.usedLetters.has(c)) return true;
  }
  return false;
}
function isDeadlocked(){
  if(G.suddenDeath) return false;
  return !hasUnrevealedConsonants()&&G.roundScore.player<VOWEL_COST&&G.roundScore.computer<VOWEL_COST&&hasUnrevealedVowels();
}

// ═══════════════════════════════════════════════════════
//  SUDDEN DEATH
// ═══════════════════════════════════════════════════════
function startSuddenDeath(){
  G.suddenDeath=true; G.locked=true; G.phase='spin';
  const pa=document.getElementById('puzzle-grid').parentElement;
  pa.style.position='relative';
  const b=document.createElement('div'); b.className='sudden-death-banner'; b.id='sd-banner';
  b.textContent='⚡ SUDDEN DEATH — First to solve wins!';
  pa.insertBefore(b,pa.firstChild);
  setBanner('⚡ Sudden Death! Vowels revealing…','bad');
  const uvs=[]; for(const v of VOWELS) if(!G.usedLetters.has(v)&&G.puzzle.a.includes(v)) uvs.push(v);
  let delay=1500;
  for(const vowel of uvs){
    setTimeout(()=>{
      if(!G.suddenDeath) return;
      G.usedLetters.add(vowel); markKey(vowel,true);
      animateRevealSD(vowel);
      setBanner(`⚡ ${vowel} revealed — first to solve wins!`,'bad');
      if(isPuzzleSolved()){ endRound('player'); }
    },delay);
    delay+=2500;
  }
  setTimeout(()=>{
    if(!G.suddenDeath) return;
    setBanner('⚡ Final chance — solve now!','bad');
    G.locked=false; G.turn='player'; updateTurnUI();
    setTimeout(()=>{ if(G.suddenDeath&&G.turn==='computer') computerSDSolve(); },5000);
  },delay+500);
}

function animateRevealSD(letter){
  let c=0;
  for(let i=0;i<G.puzzle.a.length;i++){
    if(G.puzzle.a[i]===letter&&!G.revealed.has(i)){
      G.revealed.add(i); c++;
      setTimeout(()=>{
        const tile=document.querySelector(`.tile[data-i="${i}"]`);
        if(tile){ tile.classList.add('revealed','vowel-reveal-flash'); tile.textContent=letter; sndReveal(); setTimeout(()=>tile.classList.remove('vowel-reveal-flash'),600); }
      },c*100);
    }
  }
}

function computerSDSolve(){
  const total=G.puzzle.a.replace(/ /g,'').length;
  const pct=G.revealed.size/Math.max(1,total);
  showThinking(true);
  setTimeout(()=>{
    showThinking(false);
    if(pct>0.7&&Math.random()<0.7){ setBanner('🤖 Computer solving…','money'); setTimeout(()=>{ if(G.suddenDeath) endRound('computer'); },1000); }
    else{
      setBanner('⚡ Round drawn — no winner!','neutral');
      setTimeout(()=>{
        G.suddenDeath=false;
        const sdBanner=document.getElementById('sd-banner'); if(sdBanner) sdBanner.remove();
        showResult('Draw!','Neither player could solve it.','🤝',true,()=>{ if(G.round>=G.maxRounds) endGame(); else startRound(); });
      },1200);
    }
  },2000);
}

// ═══════════════════════════════════════════════════════
//  SPINNING
// ═══════════════════════════════════════════════════════
function handleSpin(){
  if(G.spinning||G.turn!=='player'||G.phase!=='spin'||G.locked) return;
  doSpin('player');
}

function doSpin(who){
  G.spinning=true; G.locked=true; updateTurnUI();
  const totalRot=(7+Math.random()*8)*Math.PI*2;
  const dur=3000+Math.random()*900;
  const t0=performance.now(), startRot=wheelRot;
  let lastSeg=-1;

  function frame(now){
    const elapsed=now-t0, prog=Math.min(elapsed/dur,1);
    const ease=1-Math.pow(1-prog,3);
    const curRot=startRot+totalRot*ease;
    drawWheel(curRot);
    const norm=((curRot%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    const segArc=(2*Math.PI)/SEGS.length;
    const si=Math.floor((((-norm)%(2*Math.PI))+2*Math.PI)%(2*Math.PI)/segArc)%SEGS.length;
    if(si!==lastSeg){ lastSeg=si; sndTick(); }
    if(prog<1){ requestAnimationFrame(frame); return; }
    G.spinning=false;
    const fRot=startRot+totalRot;
    const fNorm=((fRot%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    const pAngle=(((-fNorm)%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    const fsi=Math.floor((pAngle/(2*Math.PI))*SEGS.length)%SEGS.length;
    onLanded(SEGS[fsi],who);
  }
  requestAnimationFrame(frame);
}

function onLanded(seg,who){
  if(seg.val==='BANKRUPT'){
    sndBankrupt(); setBanner('💸 BANKRUPT!','bad');
    G.roundScore[who]=0; updateScores();
    setTimeout(()=>showResult(who==='player'?'💸 BANKRUPT!':'🤖 Bankrupt!',(who==='player'?'You lose':'Computer loses')+' all round earnings!','😱',false,()=>switchTurn()),500);
  } else if(seg.val==='LOSE'){
    sndWrong(); setBanner('😬 LOSE A TURN','neutral');
    setTimeout(()=>showResult(who==='player'?'😬 Lose a Turn':'🤖 Lose a Turn',(who==='player'?'You lose':'Computer loses')+' this turn!','😞',false,()=>switchTurn()),500);
  } else {
    G.spinVal=seg.val; setBanner(`💰 ${seg.lbl} per letter`,'money');
    G.phase='guess'; G.locked=false;
    if(who==='player') updateTurnUI(); else setTimeout(()=>computerGuessConsonant(),1100);
  }
}

// ═══════════════════════════════════════════════════════
//  PLAYER ACTIONS
// ═══════════════════════════════════════════════════════
function handleKeyPress(letter){
  if(G.turn!=='player'||G.locked||G.usedLetters.has(letter)) return;
  if(G.phase==='guess'&&VOWELS.has(letter)) return;
  if(G.phase==='buy_vowel'&&!VOWELS.has(letter)) return;
  if(G.phase!=='guess'&&G.phase!=='buy_vowel') return;
  processGuess(letter,'player');
}

function handleBuyVowel(){
  if(G.turn!=='player'||(G.phase!=='spin'&&G.phase!=='guess')||G.locked) return;
  if(G.roundScore.player<VOWEL_COST||!hasUnrevealedVowels()) return;
  G.phase='buy_vowel'; G.spinVal=0; G.locked=false;
  setBanner('🔤 Pick a vowel — costs $250','money'); updateTurnUI();
}

function processGuess(letter,who){
  if(G.usedLetters.has(letter)) return;
  G.usedLetters.add(letter); G.locked=true;
  const isVowel=VOWELS.has(letter);
  const count=animateReveal(letter), hit=count>0;
  if(isVowel&&who==='player') G.roundScore.player-=VOWEL_COST;
  if(!isVowel&&hit) G.roundScore[who]+=count*G.spinVal;
  updateScores();
  markKey(letter,hit&&G.puzzle.a.includes(letter));
  if(hit) sndCorrect(); else sndWrong();
  const delay=hit?(count*90+250):250;
  setTimeout(()=>{
    if(isPuzzleSolved()){ endRound(who); return; }
    if(hit){
      const earn=(!isVowel&&G.spinVal)?` = $${(count*G.spinVal).toLocaleString()}`:'';
      setBanner(`✅ ${count}× ${letter}${earn}`,'money');
      G.phase='spin'; G.locked=false; updateTurnUI();
      if(who==='computer') setTimeout(()=>computerTurn(),1300);
    } else {
      setBanner(`❌ No ${letter}'s`,'neutral');
      setTimeout(()=>switchTurn(),900);
    }
  },delay);
}

// ═══════════════════════════════════════════════════════
//  SOLVE
// ═══════════════════════════════════════════════════════
function openSolveModal(){
  if(G.turn!=='player'||G.locked) return;
  document.getElementById('solve-input').value='';
  document.getElementById('modal-solve').classList.add('open');
  setTimeout(()=>document.getElementById('solve-input').focus(),100);
}
function closeSolveModal(){ document.getElementById('modal-solve').classList.remove('open'); }
function submitSolve(){
  const guess=document.getElementById('solve-input').value.trim().toUpperCase();
  closeSolveModal(); if(!guess) return;
  if(guess===G.puzzle.a){
    G.puzzle.a.split('').forEach((_,i)=>{ if(G.puzzle.a[i]!==' ') G.revealed.add(i); });
    renderPuzzle(); sndFanfare(); endRound('player');
  } else {
    sndWrong(); setBanner('❌ Wrong answer!','bad');
    setTimeout(()=>switchTurn(),1000);
  }
}

// ═══════════════════════════════════════════════════════
//  COMPUTER AI — difficulty-aware
// ═══════════════════════════════════════════════════════
function computerTurn(){
  if(G.turn!=='computer') return;
  showThinking(true);
  const cfg=DIFF[G.difficulty];
  const total=G.puzzle.a.replace(/ /g,'').length;
  const pct=G.revealed.size/Math.max(1,total);
  setTimeout(()=>{
    showThinking(false);
    if(pct>=cfg.solve&&Math.random()<0.65){
      setBanner('🤖 Solving…','money');
      setTimeout(()=>endRound('computer'),1400); return;
    }
    if(G.roundScore.computer>=VOWEL_COST&&hasUnrevealedVowels()&&pct>0.15&&Math.random()<cfg.vowel){
      const av=[...VOWELS].filter(v=>!G.usedLetters.has(v)&&G.puzzle.a.includes(v));
      if(av.length>0){
        G.phase='buy_vowel'; G.spinVal=0;
        G.roundScore.computer-=VOWEL_COST; updateScores();
        const v=av[Math.floor(Math.random()*av.length)];
        setBanner(`🤖 Buys vowel ${v}`,'money');
        setTimeout(()=>processGuess(v,'computer'),900); return;
      }
    }
    doSpin('computer');
  },1100);
}

function computerGuessConsonant(){
  showThinking(true);
  const cfg=DIFF[G.difficulty];
  const avail=cfg.freq.filter(c=>!VOWELS.has(c)&&!G.usedLetters.has(c));
  const inPuzz=avail.filter(c=>G.puzzle.a.includes(c));
  let pick;
  if(G.difficulty==='easy'){
    const pool=[...avail].sort(()=>Math.random()-0.5);
    pick=pool[0]||null;
  } else {
    pick=(inPuzz.length>0&&Math.random()<cfg.smart)?inPuzz[0]:(avail[0]||null);
  }
  setTimeout(()=>{
    showThinking(false);
    if(!pick){ switchTurn(); return; }
    setBanner(`🤖 Guesses: ${pick}`,'money');
    setTimeout(()=>processGuess(pick,'computer'),700);
  },1000);
}

// ═══════════════════════════════════════════════════════
//  ROUND / GAME END
// ═══════════════════════════════════════════════════════
function endRound(winner){
  G.locked=true; G.suddenDeath=false;
  const sdBanner=document.getElementById('sd-banner'); if(sdBanner) sdBanner.remove();
  G.totalScore[winner]+=G.roundScore[winner];
  G.puzzle.a.split('').forEach((_,i)=>{ if(G.puzzle.a[i]!==' ') G.revealed.add(i); });
  renderPuzzle(); updateScores();
  if(winner==='player'){ spawnConfetti(); sndFanfare(); }
  const icon =winner==='player'?'🎉':'🤖';
  const title=winner==='player'?'You Got It!':'Computer Wins';
  const sub  =winner==='player'?`+$${G.roundScore.player.toLocaleString()} added to your total!`:'Better luck next round!';
  setTimeout(()=>showResult(title,sub,icon,true,()=>{ if(G.round>=G.maxRounds) endGame(); else startRound(); }),500);
}

function showResult(title,sub,icon,showAns,cb){
  document.getElementById('res-title').textContent=title;
  document.getElementById('res-sub').textContent=sub;
  document.getElementById('res-icon').textContent=icon;
  const ra=document.getElementById('res-answer');
  ra.textContent=showAns?G.puzzle.a:''; ra.style.display=showAns?'block':'none';
  document.getElementById('modal-result').classList.add('open');
  resultCb=cb;
}
function continueAfterResult(){
  document.getElementById('modal-result').classList.remove('open');
  if(resultCb){ const f=resultCb; resultCb=null; f(); }
}

function endGame(){
  const p=G.totalScore.player, c=G.totalScore.computer;
  document.getElementById('go-ps').textContent='$'+p.toLocaleString();
  document.getElementById('go-cs').textContent='$'+c.toLocaleString();
  document.getElementById('go-p').classList.toggle('winner',p>=c);
  document.getElementById('go-c').classList.toggle('winner',c>p);
  let icon,title,sub;
  if(p>c){ icon='🏆'; title='You Win!'; sub=`You beat the computer by $${(p-c).toLocaleString()}!`; spawnConfetti(); sndFanfare(); }
  else if(c>p){ icon='🤖'; title='Computer Wins'; sub=`Difference: $${(c-p).toLocaleString()}. Try again!`; }
  else { icon='🤝'; title="It's a Tie!"; sub='Perfectly matched! Amazing!'; }
  document.getElementById('go-icon').textContent=icon;
  document.getElementById('go-title').textContent=title;
  document.getElementById('go-sub').textContent=sub;
  document.getElementById('modal-go').classList.add('open');
}

// ═══════════════════════════════════════════════════════
//  CONFETTI
// ═══════════════════════════════════════════════════════
function spawnConfetti(){
  const cols=['#f5c518','#06d6a0','#4895ef','#e63946','#fff0a0','#ff9f1c'];
  for(let i=0;i<65;i++) setTimeout(()=>{
    const el=document.createElement('div'); el.className='confetti-piece';
    el.style.cssText=`left:${Math.random()*100}vw;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;background:${cols[i%cols.length]};border-radius:${Math.random()>.4?'50%':'2px'};animation-duration:${2+Math.random()*2}s;`;
    document.body.appendChild(el); setTimeout(()=>el.remove(),3800);
  },i*22);
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
window.addEventListener('resize',()=>{
  if(document.getElementById('screen-game').classList.contains('active')){
    sizeWheel();
    if(G.puzzle) renderPuzzle();
  }
});
window.addEventListener('load',()=>{ drawWheel(0); });
