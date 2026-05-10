/* ─────────────────────────────────────────
   WORDLE — Cambridge Edition
   script.js
───────────────────────────────────────── */

// ─── WORD LIST ───────────────────────────
// Common English words (Cambridge-aligned, 4–8 chars)
const WORD_LIST = [
  // 4-letter words
  "able","acid","aged","also","area","army","away","back","ball","band",
  "bank","base","bath","bear","beat","been","beer","bell","best","bill",
  "bite","blue","boat","body","bomb","bond","bone","book","boot","bore",
  "born","boss","both","bowl","burn","bush","busy","cage","cake","call",
  "calm","came","card","care","cart","case","cash","cast","cave","cell",
  "cent","chin","chip","cite","city","clap","clay","clip","club","coal",
  "coat","code","coin","cold","come","cook","cool","cope","copy","corn",
  "cost","coup","crew","crop","cure","cute","dare","dark","data","date",
  "dawn","days","dead","deal","dean","dear","debt","deep","deny","desk",
  "dirt","dish","disk","dock","does","done","door","dose","down","draw",
  "drew","drop","drug","drum","dual","dull","dusk","dust","duty","each",
  "earn","ease","east","easy","edge","else","epic","even","ever","evil",
  "exam","exit","face","fact","fail","fair","fall","fame","farm","fast",
  "fate","fear","feat","feed","feel","feet","fell","felt","file","fill",
  "film","find","fine","fire","firm","fish","fist","flaw","fled","flew",
  "flow","foam","fold","folk","fond","food","fool","foot","ford","fore",
  "fork","form","foul","four","free","from","fuel","full","fund","fury",
  "fuse","gain","game","gang","gate","gave","gaze","gear","gene","gift",
  "girl","give","glad","glow","glue","goal","goes","gold","golf","gone",
  "good","grab","gray","grew","grid","grim","grip","grow","gulf","gust",
  "guys","hack","half","hall","halt","hand","hang","hard","harm","hate",
  "have","head","heal","heap","heat","heel","held","hell","help","herb",
  "here","hero","high","hill","hint","hire","hold","hole","holy","home",
  "hook","hope","horn","host","hour","huge","hung","hunt","hurt","idea",
  "idle","inch","into","iron","isle","item","jail","join","joke","jump",
  "jury","just","keen","keep","kick","kill","kind","king","knee","knew",
  "know","lack","lake","land","lane","last","late","lead","leaf","lean",
  "left","legs","lend","less","life","lift","like","lime","line","link",
  "list","live","load","loan","lock","loft","lone","long","look","lord",
  "lose","loss","lost","love","luck","lung","made","mail","main","make",
  "male","mall","many","mark","mass","maze","meal","mean","meet","melt",
  "memo","menu","mere","mild","milk","mind","mine","mode","moon","more",
  "most","move","much","must","nail","name","near","neck","need","news",
  "next","nice","nine","node","none","norm","nose","note","noun","nude",
  "oath","odds","once","only","open","oral","over","pace","pack","page",
  "paid","pain","pair","pale","palm","park","part","pass","past","path",
  "peak","peel","peer","pick","pile","pill","pine","pink","pipe","plan",
  "play","plot","plow","plus","poem","poet","poll","pool","poor","port",
  "pose","post","pour","pray","prey","pull","pump","pure","push","puts",
  "rack","rage","rain","rank","rare","rate","read","real","reap","rent",
  "rest","rice","rich","ride","ring","riot","rise","risk","road","rock",
  "rode","role","roll","roof","room","root","rope","rose","ruin","rule",
  "rush","safe","said","sail","sale","salt","same","sand","save","scan",
  "scar","seal","seat","seed","seek","seem","self","sell","send","shot",
  "show","sick","sign","silk","sing","site","size","skin","skip","slam",
  "slid","slim","slip","slow","slug","snap","snow","sock","soft","soil",
  "sold","sole","song","soon","soul","soup","span","spin","spot","star",
  "stay","stem","step","stir","stop","strap","stub","such","suit","sung",
  "sure","swan","swim","tale","tall","tank","task","team","tech","tell",
  "tend","tent","term","test","text","than","that","them","then","they",
  "thin","this","thus","tide","time","tiny","tire","told","toll","tomb",
  "tone","took","tool","torn","toss","tour","town","trap","tree","trim",
  "trio","trip","true","tube","tune","turn","twin","type","ugly","unit",
  "upon","urge","used","user","vary","vast","verb","very","view","vine",
  "void","vote","wade","wage","wake","walk","wall","ward","warm","warn",
  "wary","wash","wave","weak","wear","weed","well","went","were","what",
  "when","whom","wide","wild","will","wind","wine","wing","wire","wise",
  "wish","with","wolf","wood","wool","word","wore","work","worm","worn",
  "wrap","wren","yard","year","your","zero","zone",

  // 5-letter words
  "abbey","abide","about","above","abuse","acute","adapt","admit","adopt",
  "adult","after","again","agent","agree","ahead","alarm","album","alert",
  "align","alike","alive","alley","allow","alone","along","alter","angel",
  "anger","angle","angry","anime","ankle","annex","apply","arena","argue",
  "arise","armor","array","aside","asset","atlas","audit","avoid","aware",
  "badly","baker","balls","basic","basis","batch","beach","begin","being",
  "below","bench","bible","birth","black","blade","blame","bland","blank",
  "blast","blaze","bleed","blend","bless","blind","block","blood","bloom",
  "blown","board","bonus","boost","bound","brain","brand","brave","break",
  "brick","bride","brief","bring","broad","broke","brook","broth","brown",
  "brush","build","built","bunch","burst","buyer","cabin","cable","camel",
  "candy","cargo","carry","cause","chain","chair","chalk","chaos","chase",
  "cheap","check","cheek","cheer","chess","chest","chief","child","china",
  "chord","civic","civil","claim","clash","class","clean","clear","clerk",
  "click","cliff","clock","close","cloud","coach","coast","color","comma",
  "comic","count","court","cover","crack","craft","crash","crazy","cream",
  "creek","crime","cross","crowd","crown","crude","cruel","crush","curve",
  "cycle","daily","dance","death","debug","decay","defer","deity","delay",
  "dense","depot","depth","derby","dirty","disco","ditch","diver","dizzy",
  "dodge","doing","doubt","dough","draft","drain","drama","dream","dress",
  "drift","drink","drive","drove","drown","dryer","dumpy","dying","eagle",
  "early","earth","eight","elect","elite","empty","enemy","enjoy","enter",
  "entry","equal","error","essay","event","exact","exist","extra","fable",
  "faint","faith","false","fancy","fatal","fault","feast","fence","fever",
  "fewer","field","fifth","fifty","fight","final","first","fixed","flame",
  "flank","flash","flask","fling","float","flood","floor","flora","floss",
  "fluid","flush","focus","force","forge","forth","forum","found","frame",
  "frank","fraud","fresh","front","frost","froze","fruit","fully","funny",
  "ghost","giant","given","glass","globe","gloom","glory","gloss","glove",
  "going","grace","grade","grand","grant","graph","grasp","grass","grave",
  "great","green","greet","grief","grind","groan","group","grove","guard",
  "guess","guest","guide","guild","guilt","guise","happy","harsh","haste",
  "haven","heart","heavy","hence","human","humor","hurry","husky","image",
  "imply","index","inner","input","irony","issue","ivory","jewel","joint",
  "judge","juice","juicy","karma","label","labor","large","laser","later",
  "laugh","layer","learn","least","legal","lemon","level","light","limit",
  "lined","liver","local","lodge","logic","loose","lover","lower","lucky",
  "lunar","lying","magic","major","maker","manor","maple","march","match",
  "mayor","media","mercy","merit","metal","might","minor","minus","model",
  "money","month","moral","mourn","mouth","movie","music","naive","niche",
  "night","noble","noise","north","nurse","occur","ocean","offer","often",
  "onset","order","other","outer","owner","ozone","paint","panic","paper",
  "patch","pause","peace","pearl","pedal","penny","perch","phase","phone",
  "photo","piano","piece","pilot","pixel","pizza","place","plain","plane",
  "plant","plate","plaza","plead","pluck","point","polar","power","press",
  "price","pride","prime","print","prior","prize","probe","proud","prove",
  "psalm","pulse","punch","pupil","queen","query","quest","queue","quiet",
  "quota","quote","radar","radio","raise","rally","ranch","range","rapid",
  "ratio","reach","rebel","refer","reign","relax","reply","rider","right",
  "rigid","risky","rival","river","robot","rocky","rouge","rough","round",
  "route","royal","rural","saint","sauce","scale","scene","scope","score",
  "scout","sense","serve","seven","shaft","shake","shall","shame","shape",
  "share","sharp","sheep","sheer","shelf","shell","shift","shine","shirt",
  "shock","shore","short","shout","sight","since","sixth","sixty","skill",
  "slash","slave","sleep","slice","slide","slope","small","smart","smell",
  "smile","smoke","snake","solid","solve","sorry","sound","south","space",
  "spare","spark","speak","speed","spend","spill","spine","spite","split",
  "spoke","spore","sport","spray","squad","stack","staff","stage","stain",
  "stake","stale","stall","stamp","stand","stark","start","state","stays",
  "steal","steam","steel","steer","stern","stick","still","stock","stone",
  "store","storm","story","stove","strap","straw","strip","stuck","study",
  "style","sugar","sunny","super","surge","swear","sweep","sweet","swift",
  "sword","table","taunt","teach","tense","theme","thick","thing","think",
  "third","those","three","throw","thumb","tiger","tight","timer","tired",
  "title","today","token","topic","total","touch","tough","towel","tower",
  "toxic","track","trade","trail","train","trait","trash","treat","trend",
  "trial","tribe","trick","tried","troop","truck","truly","trust","truth",
  "tumor","tutor","twice","twist","tying","ultra","under","union","until",
  "upper","upset","urban","usage","usual","utter","valid","value","valve",
  "video","vigor","virus","visit","vital","vivid","vocal","voice","vague",
  "wages","waste","watch","water","weary","weave","wedge","weird","whale",
  "wheat","where","which","while","white","whole","whose","widow","wield",
  "witch","woman","women","world","worry","worse","worst","worth","would",
  "wrath","write","wrote","yacht","yield","young","youth",

  // 6-letter words
  "absurd","accent","accept","access","action","active","actual","advice",
  "affect","afford","agency","agenda","almost","always","amidst","amount",
  "anchor","animal","annual","answer","anyone","appeal","aspect","assert",
  "assume","assure","attack","attend","author","autumn","battle","beauty",
  "belong","better","beyond","bitter","blight","border","bottle","bottom",
  "bought","branch","breach","breath","bridge","bright","broken","budget",
  "burden","butter","called","camera","cancel","cancer","cannot","canopy",
  "castle","caught","center","chance","change","charge","choice","chosen",
  "circle","closet","clutch","combat","comedy","common","comply","corner",
  "costly","cotton","cotter","course","create","crisis","cruddy","custom",
  "damage","danger","debate","decide","defend","define","degree","demand",
  "depend","desert","design","detail","detect","differ","digest","direct",
  "dollar","double","driven","empire","enable","engage","engine","entire",
  "escape","ethnic","evolve","except","excuse","expand","expect","expert",
  "extend","fabric","fallen","family","famine","famous","father","filter",
  "finger","finite","fiscal","flight","flower","forest","forget","formal",
  "foster","freeze","friend","frozen","future","garden","gather","gender",
  "global","golden","gravel","ground","growth","guilty","handle","happen",
  "hatred","health","height","hidden","highly","honest","horror","hunger",
  "impact","import","indeed","inform","insist","intent","invest","island",
  "itself","joyful","jungle","justice","kernel","kidney","knight","launch",
  "lawyer","leader","legacy","lesson","likely","listen","little","living",
  "locate","lonely","loving","margin","marker","market","master","matter",
  "mature","memory","mental","method","middle","mirror","mission","mobile",
  "moment","motion","murder","mutual","narrow","nation","native","nature",
  "nearly","needed","notion","object","obtain","office","online","origin",
  "output","palace","parent","partly","patrol","people","period","permit",
  "person","planet","plenty","pocket","police","policy","profit","proper",
  "public","pursue","radius","random","reason","recent","reduce","refuse",
  "region","repair","repeat","resist","resort","result","return","reveal",
  "review","reward","rivers","robust","rocket","saddle","salary","sample",
  "search","secret","sector","select","series","settle","should","signal",
  "silver","simple","single","slowly","social","soldier","sought","source",
  "speech","spread","spring","stable","stands","static","status","steady",
  "stream","street","stress","strict","strike","strong","struck","submit",
  "sudden","suffer","summer","supply","surely","symbol","target","temper",
  "theory","though","threat","throne","tongue","toward","travel","treaty",
  "triple","trophy","twelve","twenty","unless","unlike","update","useful",
  "valley","virtue","vision","visual","volume","wander","wealth","weapon",
  "weight","window","winter","wisdom","within","wonder","worker","worthy",

  // 7-letter words
  "ability","absence","account","acquire","address","advance","against",
  "applied","attract","balance","benefit","between","cabinet","capital",
  "captain","capture","carrier","catalog","century","certain","chamber",
  "charity","circuit","collect","college","comfort","command","company",
  "complex","compute","concern","connect","consent","contain","content",
  "context","control","convert","council","courage","current","declare",
  "default","defense","deliver","density","destroy","develop","digital",
  "disable","discuss","dismiss","display","dispute","distant","drawing",
  "economy","edition","educate","element","emperor","enhance","example",
  "execute","explore","extreme","failure","feature","federal","feeling",
  "finance","foreign","freedom","general","genuine","glimpse","gravity",
  "handler","harmony","highway","history","hormone","housing","however",
  "hundred","illegal","imagine","include","involve","justice","kingdom",
  "largely","library","limited","manager","mankind","maximum","mention",
  "minimum","mission","monitor","morning","network","nothing","obvious",
  "ordered","patient","pattern","percent","perfect","perform","perhaps",
  "picture","plastic","popular","poverty","predict","prevent","primary",
  "private","problem","proceed","process","product","program","project",
  "promise","protect","provide","quality","quickly","realize","receive",
  "reclaim","recover","reflect","regular","replace","request","resolve",
  "respond","restore","reverse","require","roughly","science","section",
  "service","setting","silence","similar","soldier","special","storage",
  "student","subject","succeed","summary","support","supreme","surface",
  "sustain","tension","thought","through","tourism","trading","traffic",
  "trigger","triumph","trouble","typical","uniform","unusual","upgrade",
  "version","victory","village","warrant","welfare","western","whether",
  "working","writing",

  // 8-letter words
  "absolute","abstract","accurate","addition","adjacent","admitted",
  "affirmed","airborne","apparent","approach","approval","argument",
  "assembly","assigned","balanced","becoming","believed","boundary",
  "campaign","capacity","centered","changing","children","classical",
  "climbing","combined","complete","composed","computer","concerns",
  "conflict","confused","constant","consumed","contract","contrary",
  "creative","critical","cultural","customer","database","daughter",
  "deadline","decision","dedicate","designed","dilemma","disaster",
  "discover","distance","distinct","document","dominant","educated",
  "emerging","employed","energize","enormous","evaluate","eventual",
  "evidence","exciting","existing","extended","faithful","familiar",
  "fighting","finished","flexible","forecast","frequent","frontier",
  "function","generate","grateful","greatest","guidance","handsome",
  "heritage","historic","hospital","identify","included","increase",
  "industry","innocent","inspired","integral","internet","invasion",
  "kingdom","language","launched","learning","leverage","liberal",
  "likewise","limited","literacy","location","machinery","maintain",
  "majority","manifest","manually","marriage","material","maximize",
  "measured","medieval","military","minority","moderate","moreover",
  "national","negative","northern","numerous","observed","obstacle",
  "occasion","official","optimize","ordinary","organize","oriented",
  "original","outbreak","overcome","overlook","overseas","parallel",
  "partisan","password","physical","platform","pleasant","politics",
  "position","positive","possible","powerful","practice","presence",
  "previous","priority","prisoner","probably","progress","property",
  "proposal","realized","recorded","relative","religion","renowned",
  "republic","research","resource","response","revealed","rigorous",
  "security","sentence","separate","sequence","shortage","solution",
  "specific","standard","strength","struggle","suffered","suitable",
  "surprise","survival","teaching","temporal","terminal","thousand",
  "transfer","triangle","ultimate","universe","unlikely","valuable",
  "variable","velocity","vertical","violence","volatile","watching",
  "whatever","whenever","wherever","yourself"
];

// Valid guesses also include all words in word list (plus broader set)
const VALID_WORDS = new Set(WORD_LIST.map(w => w.toLowerCase()));

// ─── KEYBOARD LAYOUT ─────────────────────
const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫']
];

// ─── STATE ────────────────────────────────
let targetWord = '';
let wordLength = 5;

// Rare "long word" mode (1% chance on each new game)
let longWordMode = false;
let currentRow = 0;
let currentCol = 0;
let currentGuess = [];
let gameOver = false;
let boardData = [];    // array of row arrays with {letter, state}
let keyStates = {};    // letter → 'correct' | 'present' | 'absent'
let stats = {
  played: 0,
  wins: 0,
  streak: 0,
  best: 0,
  distribution: {1:0,2:0,3:0,4:0,5:0,6:0}
};

// ─── DOM REFS ─────────────────────────────
const board        = document.getElementById('board');
const toastEl      = document.getElementById('toast');
const attemptDisp  = document.getElementById('attemptDisplay');
const wordLenDisp  = document.getElementById('wordLengthDisplay');
const gameStatusEl = document.getElementById('gameStatus');

// ─── INIT ─────────────────────────────────
function init() {
  loadStats();

  // Rare "long word" mode: 5% chance
  longWordMode = Math.random() < 0.05;

  const rareLongWords = [
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "demisemihemidemisemiquaver",
    "hipopotomonstrosesquipedaliofobia",
    "honorificabilitudinitatibus",
    "methionylthreonylthreonylglutaminylarginyl",
    "floccinaucinihilipilification",
    "pseudopseudohypoparathyroidism",
    "electroencephalographically",
    "thyroparathyroidectomised",
    "microspectrophotometries"
  ];

  if (longWordMode) {
    const pick = rareLongWords[Math.floor(Math.random() * rareLongWords.length)];
    targetWord = pick.toLowerCase();
    wordLength = targetWord.length;
  } else {
    // Pick a random word (normal mode)
    const pool = WORD_LIST.filter(w => w.length >= 4 && w.length <= 8);
    targetWord = pool[Math.floor(Math.random() * pool.length)].toLowerCase();
    wordLength = targetWord.length;
  }

  const appWrapper = document.querySelector('.app-wrapper');
  if (appWrapper) {
    appWrapper.classList.toggle('longword-mode', longWordMode);
  }

  // Reset game state
  currentRow = 0;
  currentCol = 0;
  currentGuess = [];
  gameOver = false;
  boardData = [];
  keyStates = {};

  wordLenDisp.textContent = wordLength;
  gameStatusEl.textContent = 'PLAYING';
  gameStatusEl.style.color = '';

  buildBoard();
  buildKeyboard();
}

// ─── BUILD BOARD ──────────────────────────
function buildBoard() {
  board.innerHTML = '';
  boardData = [];

  // Dynamically calculate tile size based on word length
  const maxWidth = Math.min(window.innerWidth - 40, 500);
  const tileSize = Math.min(56, Math.floor((maxWidth - (wordLength - 1) * 6) / wordLength));
  board.style.setProperty('--tile-size', tileSize + 'px');

  for (let r = 0; r < 6; r++) {
    const row = document.createElement('div');
    row.classList.add('board-row');
    row.id = `row-${r}`;
    boardData.push([]);

    for (let c = 0; c < wordLength; c++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.id = `tile-${r}-${c}`;
      tile.style.width  = tileSize + 'px';
      tile.style.height = tileSize + 'px';
      tile.style.fontSize = Math.max(0.8, tileSize / 42) + 'rem';
      row.appendChild(tile);
      boardData[r].push({ letter: '', state: '' });
    }

    board.appendChild(row);
  }
}

// ─── BUILD KEYBOARD ───────────────────────
function buildKeyboard() {
  ['row1','row2','row3'].forEach((id, i) => {
    const rowEl = document.getElementById(id);
    rowEl.innerHTML = '';
    KEYBOARD_ROWS[i].forEach(key => {
      const btn = document.createElement('button');
      btn.classList.add('key');
      btn.textContent = key;
      btn.dataset.key = key;
      if (key === 'ENTER' || key === '⌫') btn.classList.add('wide');
      btn.addEventListener('click', () => handleKey(key));
      rowEl.appendChild(btn);
    });
  });
}

// ─── HANDLE KEY INPUT ─────────────────────
function handleKey(key) {
  if (gameOver) return;

  if (key === '⌫' || key === 'Backspace') {
    deleteLetter();
  } else if (key === 'ENTER' || key === 'Enter') {
    submitGuess();
  } else if (/^[a-zA-Z]$/.test(key)) {
    addLetter(key.toUpperCase());
  }
}

document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  handleKey(e.key);
});

// ─── ADD / DELETE LETTER ──────────────────
function addLetter(letter) {
  if (currentCol >= wordLength) return;

  currentGuess[currentCol] = letter;
  const tile = getTile(currentRow, currentCol);
  tile.textContent = letter;
  tile.classList.add('filled');
  currentCol++;
  updateAttemptDisplay();
}

function deleteLetter() {
  if (currentCol <= 0) return;
  currentCol--;
  currentGuess[currentCol] = '';
  const tile = getTile(currentRow, currentCol);
  tile.textContent = '';
  tile.classList.remove('filled');
}

// ─── SUBMIT GUESS ─────────────────────────
function submitGuess() {
  if (currentCol < wordLength) {
    shakeRow(currentRow);
    showToast('NOT ENOUGH LETTERS');
    return;
  }

  const guess = currentGuess.join('').toLowerCase();

  if (!isValidWord(guess)) {
    shakeRow(currentRow);
    showToast('NOT IN WORD LIST');
    return;
  }

  const result = evaluateGuess(guess);
  revealRow(currentRow, result, guess, () => {
    updateKeyboard(guess, result);

    const won = result.every(s => s === 'correct');
    // In long-word mode, "wrong but submitted" shakes the board harder
    if (!won && longWordMode) {
      shakeRowAgony(currentRow);
    }

    if (won) {
      gameOver = true;
      gameStatusEl.textContent = 'WIN!';
      gameStatusEl.style.color = 'var(--green)';
      setTimeout(() => bounceRow(currentRow), 100);
      const msgs = ['GENIUS!', 'BRILLIANT!', 'EXCELLENT!', 'GREAT JOB!', 'NICE!', 'PHEW!'];
      setTimeout(() => showToast(msgs[currentRow] || 'NICE!'), 300);
      recordWin(currentRow + 1);
    } else if (currentRow >= 5) {
      gameOver = true;
      gameStatusEl.textContent = 'LOSE';
      gameStatusEl.style.color = '#ef4444';
      setTimeout(() => showToast(targetWord.toUpperCase(), 3500), 500);
      recordLoss();
    }

    currentRow++;
    currentCol = 0;
    currentGuess = [];
    updateAttemptDisplay();
  });
}

// ─── EVALUATE GUESS ───────────────────────
function evaluateGuess(guess) {
  const result = Array(wordLength).fill('absent');
  const targetArr = targetWord.split('');
  const guessArr  = guess.split('');
  const usedTarget = Array(wordLength).fill(false);
  const usedGuess  = Array(wordLength).fill(false);

  // Pass 1: correct positions
  for (let i = 0; i < wordLength; i++) {
    if (guessArr[i] === targetArr[i]) {
      result[i] = 'correct';
      usedTarget[i] = true;
      usedGuess[i]  = true;
    }
  }

  // Pass 2: present (wrong position)
  for (let i = 0; i < wordLength; i++) {
    if (usedGuess[i]) continue;
    for (let j = 0; j < wordLength; j++) {
      if (usedTarget[j]) continue;
      if (guessArr[i] === targetArr[j]) {
        result[i] = 'present';
        usedTarget[j] = true;
        break;
      }
    }
  }

  return result;
}

// ─── REVEAL ROW (FLIP) ────────────────────
function revealRow(row, result, guess, callback) {
  const tiles = Array.from(document.querySelectorAll(`#row-${row} .tile`));
  const delay = 350; // ms per tile

  tiles.forEach((tile, i) => {
    setTimeout(() => {
      tile.classList.add('flipping');

      // At midpoint of flip, apply color
      setTimeout(() => {
        tile.classList.remove('filled');
        tile.classList.add(result[i]);
      }, delay / 2);

      // After flip completes
      if (i === tiles.length - 1) {
        setTimeout(() => {
          if (callback) callback();
        }, delay / 2 + 50);
      }
    }, i * delay);
  });
}

// ─── ROW ANIMATIONS ───────────────────────
function shakeRow(row) {
  const rowEl = document.getElementById(`row-${row}`);
  rowEl.classList.remove('shake');
  void rowEl.offsetWidth; // reflow
  rowEl.classList.add('shake');
  rowEl.addEventListener('animationend', () => rowEl.classList.remove('shake'), { once: true });
}

function shakeRowAgony(row) {
  const rowEl = document.getElementById(`row-${row}`);
  rowEl.classList.remove('shake-agony');
  void rowEl.offsetWidth; // reflow
  rowEl.classList.add('shake-agony');
  rowEl.addEventListener('animationend', () => rowEl.classList.remove('shake-agony'), { once: true });
}

function bounceRow(row) {
  const rowEl = document.getElementById(`row-${row}`);
  const tiles = rowEl.querySelectorAll('.tile');
  tiles.forEach((tile, i) => {
    setTimeout(() => {
      tile.style.animation = 'none';
      void tile.offsetWidth;
      tile.style.animation = `bounce 0.5s ease ${i * 0.07}s forwards`;
    }, 50);
  });
}

// ─── UPDATE KEYBOARD COLORS ───────────────
function updateKeyboard(guess, result) {
  const priority = { correct: 3, present: 2, absent: 1 };

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i].toUpperCase();
    const state  = result[i];
    const current = keyStates[letter];
    if (!current || priority[state] > priority[current]) {
      keyStates[letter] = state;
    }
  }

  document.querySelectorAll('.key').forEach(btn => {
    const k = btn.dataset.key;
    if (keyStates[k]) {
      btn.className = 'key';
      if (btn.classList.contains('wide') || k === 'ENTER' || k === '⌫') {
        btn.classList.add('wide');
      }
      btn.classList.add(keyStates[k]);
    }
  });
}

// ─── TOAST ────────────────────────────────
let toastTimeout;
function showToast(msg, duration = 1800) {
  clearTimeout(toastTimeout);
  toastEl.textContent = msg;
  toastEl.classList.add('visible');
  toastTimeout = setTimeout(() => toastEl.classList.remove('visible'), duration);
}

// ─── HELPERS ─────────────────────────────
function getTile(r, c) {
  return document.getElementById(`tile-${r}-${c}`);
}

function isValidWord(word) {
  // Accept if it's in our word list or looks like a reasonable English word
  if (VALID_WORDS.has(word)) return true;
  // For words the user types that might be valid but not in our list,
  // we accept any alphabetic string of correct length as a fallback
  // (in a real app, this would hit a dictionary API)
  return /^[a-z]+$/.test(word) && word.length === wordLength;
}

function updateAttemptDisplay() {
  attemptDisp.textContent = `${currentRow + 1} / 6`;
}

// ─── STATS ────────────────────────────────
function loadStats() {
  try {
    const stored = localStorage.getItem('wordle_stats');
    if (stored) stats = JSON.parse(stored);
  } catch(e) {}
}

function saveStats() {
  try {
    localStorage.setItem('wordle_stats', JSON.stringify(stats));
  } catch(e) {}
}

function recordWin(guessCount) {
  stats.played++;
  stats.wins++;
  stats.streak++;
  stats.best = Math.max(stats.best, stats.streak);
  stats.distribution[guessCount] = (stats.distribution[guessCount] || 0) + 1;
  saveStats();
}

function recordLoss() {
  stats.played++;
  stats.streak = 0;
  saveStats();
}

// ─── MODALS ───────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.getElementById('helpBtn').addEventListener('click', () => openModal('helpModal'));
document.getElementById('closeHelp').addEventListener('click', () => closeModal('helpModal'));
document.getElementById('helpModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal('helpModal');
});

document.getElementById('statsBtn').addEventListener('click', () => {
  renderStats();
  openModal('statsModal');
});
document.getElementById('closeStats').addEventListener('click', () => closeModal('statsModal'));
document.getElementById('statsModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal('statsModal');
});

document.getElementById('newGameBtn').addEventListener('click', () => {
  init();
  showToast('NEW GAME');
});

// ─── RENDER STATS ─────────────────────────
function renderStats() {
  document.getElementById('statPlayed').textContent = stats.played;
  const pct = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
  document.getElementById('statWinPct').textContent = pct + '%';
  document.getElementById('statStreak').textContent = stats.streak;
  document.getElementById('statBest').textContent = stats.best;

  const distEl = document.getElementById('distribution');
  distEl.innerHTML = '';
  const maxVal = Math.max(1, ...Object.values(stats.distribution));

  for (let i = 1; i <= 6; i++) {
    const count = stats.distribution[i] || 0;
    const pctBar = Math.round((count / maxVal) * 100);
    const isLast = (currentRow === i - 1 && gameOver);

    distEl.innerHTML += `
      <div class="dist-row">
        <span class="dist-num">${i}</span>
        <div class="dist-bar-wrap">
          <div class="dist-bar ${isLast ? 'highlight' : ''}" style="width:${Math.max(10, pctBar)}%">
            <span>${count}</span>
          </div>
        </div>
      </div>`;
  }
}

// ─── START ────────────────────────────────
init();
