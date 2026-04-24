// ===== QUIZ DATA =====
const quizData = {
  geo: {
    name: "Geografi", emoji: "🌍",
    questions: [
      { q: "Vad är huvudstaden i Australien?", opts: ["Sydney","Melbourne","Canberra","Perth"], ans: 2 },
      { q: "Vilket är världens längsta flod?", opts: ["Amazon","Nilen","Yangtze","Mississippi"], ans: 1 },
      { q: "I vilket land ligger Machu Picchu?", opts: ["Chile","Colombia","Mexiko","Peru"], ans: 3 },
      { q: "Vilket hav är störst i världen?", opts: ["Atlantiska","Indiska","Arktiska","Stilla havet"], ans: 3 },
      { q: "Hur många länder finns det i Afrika?", opts: ["42","54","67","71"], ans: 1 },
      { q: "Vilket land har flest invånare?", opts: ["Indien","USA","Kina","Indonesien"], ans: 0 },
      { q: "Vilket är världens minsta land?", opts: ["Monaco","San Marino","Vatikanstaten","Liechtenstein"], ans: 2 },
      { q: "Vad heter bergskedjan mellan Europa och Asien?", opts: ["Alperna","Himalaya","Uralbergen","Kaukasus"], ans: 2 },
      { q: "Vilket land tillhör ön Grönland?", opts: ["Norge","Island","Sverige","Danmark"], ans: 3 },
      { q: "Vilket hav gränsar till Sverige i öster?", opts: ["Nordsjön","Atlanten","Östersjön","Medelhavet"], ans: 2 }
    ]
  },
  sport: {
    name: "Sport", emoji: "⚽",
    questions: [
      { q: "Vilket land har vunnit flest VM-guld i fotboll?", opts: ["Argentina","Frankrike","Brasilien","Tyskland"], ans: 2 },
      { q: "I vilken stad spelas Wimbledon?", opts: ["Manchester","Edinburgh","Birmingham","London"], ans: 3 },
      { q: "Vad heter den kända cykelracet runt Frankrike?", opts: ["Giro d'Italia","Tour de France","La Vuelta","Paris-Roubaix"], ans: 1 },
      { q: "Hur många spelare finns på ett basketlag på planen?", opts: ["4","5","6","7"], ans: 1 },
      { q: "Vilket land uppfann sporten golf?", opts: ["England","Sverige","USA","Skottland"], ans: 3 },
      { q: "Vilken sport spelas i NHL?", opts: ["Basket","Ishockey","Fotboll","Rugby"], ans: 1 },
      { q: "Hur lång är ett olympiskt simningsbassäng?", opts: ["25 meter","40 meter","50 meter","100 meter"], ans: 2 },
      { q: "Vem kallas 'The Greatest' inom boxning?", opts: ["Mike Tyson","Sugar Ray Leonard","Muhammad Ali","Joe Frazier"], ans: 2 },
      { q: "Vilket år fick Sverige 3:a plats i fotbolls-VM?", opts: ["1950","1958","1978","1994"], ans: 1 },
      { q: "Hur många sets vinner man Wimbledon-final (herrar)?", opts: ["2","3","4","5"], ans: 1 }
    ]
  },
  historia: {
    name: "Historia", emoji: "🏛️",
    questions: [
      { q: "Vilket år slutade andra världskriget?", opts: ["1943","1944","1945","1946"], ans: 2 },
      { q: "Vem var den förste presidenten i USA?", opts: ["Thomas Jefferson","John Adams","Benjamin Franklin","George Washington"], ans: 3 },
      { q: "I vilket land startade franska revolutionen?", opts: ["England","Frankrike","Spanien","Italien"], ans: 1 },
      { q: "Vad heter Roms legendariske grundare?", opts: ["Remus","Romulus","Julius Caesar","Augustus"], ans: 1 },
      { q: "Vilket år föll Berlinmuren?", opts: ["1987","1988","1989","1990"], ans: 2 },
      { q: "Vilket land var det första att ge kvinnor rösträtt?", opts: ["Sverige","USA","Nya Zeeland","England"], ans: 2 },
      { q: "Vad heter den egyptiske farao som byggde den stora pyramiden?", opts: ["Ramses II","Tutankhamun","Kleopatra","Khufu"], ans: 3 },
      { q: "Vilket år seglade Columbus till Amerika?", opts: ["1488","1490","1492","1498"], ans: 2 },
      { q: "Vilken svensk kung kallades 'Lejonet från Norden'?", opts: ["Karl XII","Gustav Vasa","Gustav II Adolf","Karl X Gustav"], ans: 2 },
      { q: "Vilket år grundades FN?", opts: ["1943","1945","1947","1950"], ans: 1 }
    ]
  },
  pop: {
    name: "Popkultur", emoji: "🎵",
    questions: [
      { q: "Vilket band spelade 'Bohemian Rhapsody'?", opts: ["The Beatles","Rolling Stones","Queen","Led Zeppelin"], ans: 2 },
      { q: "Vilket land kommer ABBA från?", opts: ["Norge","Danmark","Sverige","Finland"], ans: 2 },
      { q: "Vad heter trollkarlen i Harry Potter?", opts: ["Albus Dumbledore","Sirius Black","Rubeus Hagrid","Severus Snape"], ans: 0 },
      { q: "I vilken stad utspelar sig Stranger Things?", opts: ["Hawkins","Springfield","Sunnydale","Stars Hollow"], ans: 0 },
      { q: "Vad heter Disneys lejonkung?", opts: ["Nala","Simba","Mufasa","Scar"], ans: 1 },
      { q: "Vilket år kom första iPhone?", opts: ["2005","2006","2007","2008"], ans: 2 },
      { q: "Vem spelar James Bond i de senaste filmerna?", opts: ["Pierce Brosnan","Daniel Craig","Tom Hardy","Idris Elba"], ans: 1 },
      { q: "Vilken artist sjöng 'Shape of You'?", opts: ["Justin Bieber","Charlie Puth","Ed Sheeran","Sam Smith"], ans: 2 },
      { q: "Vad heter Ikeas hemstad i Sverige?", opts: ["Älmhult","Växjö","Kalmar","Kristianstad"], ans: 0 },
      { q: "Vilket land vann Eurovision 2024?", opts: ["Sverige","Israel","Schweiz","Italien"], ans: 2 }
    ]
  },
  vetenskap: {
    name: "Vetenskap", emoji: "🔬",
    questions: [
      { q: "Vad är kemisk beteckning för vatten?", opts: ["HO","H2O","CO2","O2H"], ans: 1 },
      { q: "Hur många planeter finns det i vårt solsystem?", opts: ["7","8","9","10"], ans: 1 },
      { q: "Vad kallas kraften som håller oss kvar på jorden?", opts: ["Friktion","Magnetism","Gravitation","Centrifugalkraft"], ans: 2 },
      { q: "Vad är ljusets hastighet (ungefär)?", opts: ["100 000 km/s","200 000 km/s","300 000 km/s","400 000 km/s"], ans: 2 },
      { q: "Vad heter processen där växter omvandlar solljus till näring?", opts: ["Respiration","Fotosyntes","Osmosis","Metabolism"], ans: 1 },
      { q: "Vilket grundämne har kemisk beteckning 'Au'?", opts: ["Silver","Aluminium","Guld","Järn"], ans: 2 },
      { q: "Hur många kromosomer har en frisk människa?", opts: ["23","44","46","48"], ans: 2 },
      { q: "Vad kallas lagret i atmosfären som skyddar mot UV?", opts: ["Troposfären","Stratosfären","Ozonskiktet","Jonosfären"], ans: 2 },
      { q: "Vem formulerade relativitetsteorin?", opts: ["Isaac Newton","Albert Einstein","Nikola Tesla","Stephen Hawking"], ans: 1 },
      { q: "Vad är den hårdaste naturliga substansen?", opts: ["Guld","Stål","Diamant","Titan"], ans: 2 }
    ]
  },
  sverige: {
    name: "Sverige", emoji: "🇸🇪",
    questions: [
      { q: "Vad är Sveriges huvudstad?", opts: ["Göteborg","Malmö","Stockholm","Uppsala"], ans: 2 },
      { q: "Hur många landskap finns det i Sverige?", opts: ["21","25","28","17"], ans: 1 },
      { q: "Vad heter Sveriges nationaldag?", opts: ["1 maj","6 juni","15 juli","24 december"], ans: 1 },
      { q: "Vilket är Sveriges näst största stad?", opts: ["Malmö","Uppsala","Göteborg","Västerås"], ans: 2 },
      { q: "Vad heter Sveriges nuvarande kung?", opts: ["Carl XVI Gustaf","Gustav VI Adolf","Carl XIV Johan","Oscar II"], ans: 0 },
      { q: "Vilket år gick Sverige med i EU?", opts: ["1991","1993","1995","1997"], ans: 2 },
      { q: "Vilket county/län ligger Kristianstad i?", opts: ["Blekinge","Halland","Skåne","Småland"], ans: 2 },
      { q: "Vad kallas det svenska parlamentet?", opts: ["Stortinget","Riksdagen","Folketing","Landsting"], ans: 1 },
      { q: "Vilken stad i Sverige är känd för glasriket?", opts: ["Borås","Växjö","Kalmar","Orrefors"], ans: 3 },
      { q: "Vilket år antog Sverige sin nuvarande grundlag?", opts: ["1809","1974","1980","1995"], ans: 1 }
    ]
  },
  mat: {
    name: "Mat & dryck", emoji: "🍕",
    questions: [
      { q: "I vilket land uppfanns pizza?", opts: ["Frankrike","Spanien","Grekland","Italien"], ans: 3 },
      { q: "Vad är huvudingrediensen i guacamole?", opts: ["Tomat","Avokado","Lök","Paprika"], ans: 1 },
      { q: "Vilket land är känt för att ha uppfunnit sushi?", opts: ["Kina","Korea","Japan","Thailand"], ans: 2 },
      { q: "Vad kallas den franska rätten med sniglar?", opts: ["Escargot","Foie gras","Ratatouille","Bouillabaisse"], ans: 0 },
      { q: "Hur länge bör man koka ett ägg för hårdkokt?", opts: ["3 minuter","5 minuter","8 minuter","12 minuter"], ans: 2 },
      { q: "Vad är den viktigaste ingrediensen i hummus?", opts: ["Linser","Kikärtor","Vita bönor","Edamame"], ans: 1 },
      { q: "Vilket land producerar mest kaffe i världen?", opts: ["Colombia","Vietnam","Etiopien","Brasilien"], ans: 3 },
      { q: "Vilken krydda ger curryn dess gula färg?", opts: ["Paprika","Saffran","Gurkmeja","Senapspulver"], ans: 2 },
      { q: "Vad är den traditionella svenska midsommardesserten?", opts: ["Kladdkaka","Jordgubbar med grädde","Prinsesstårta","Mazarin"], ans: 1 },
      { q: "Vilket land uppfann champagne?", opts: ["Italien","Spanien","Frankrike","Portugal"], ans: 2 }
    ]
  },
  film: {
    name: "Film & TV", emoji: "🎬",
    questions: [
      { q: "Vilket år kom Titanic?", opts: ["1995","1996","1997","1998"], ans: 2 },
      { q: "Vem spelar Iron Man i Marvel-filmerna?", opts: ["Chris Evans","Robert Downey Jr.","Chris Hemsworth","Mark Ruffalo"], ans: 1 },
      { q: "Vilket är den mest sedda Netflix-serien någonsin?", opts: ["Money Heist","The Crown","Squid Game","Stranger Things"], ans: 2 },
      { q: "Vem regisserade Schindlers lista?", opts: ["Martin Scorsese","Francis Ford Coppola","Steven Spielberg","James Cameron"], ans: 2 },
      { q: "Vilket land producerar flest filmer per år?", opts: ["USA","Kina","Indien","Japan"], ans: 2 },
      { q: "Vad heter den blå robot-katten i den japanska serien?", opts: ["Totoro","Pikachu","Doraemon","Astro Boy"], ans: 2 },
      { q: "Vilken film vann Oscar för bästa film 2020?", opts: ["1917","Joker","Parasite","Once Upon a Time in Hollywood"], ans: 2 },
      { q: "Hur heter huvudpersonen i The Office (USA)?", opts: ["Jim Halpert","Dwight Schrute","Michael Scott","Andy Bernard"], ans: 2 },
      { q: "Vad heter regissören bakom Star Wars originaltrilogin?", opts: ["Steven Spielberg","George Lucas","James Cameron","Ridley Scott"], ans: 1 },
      { q: "Vem sjöng 'Let It Go' i Frost?", opts: ["Beyoncé","Adele","Idina Menzel","Celine Dion"], ans: 2 }
    ]
  }
};

// ===== SCORE CONFIG =====
const BASE_POINTS     = 100;
const SPEED_BONUS_MAX = 50;
const STREAK_BONUS    = 25;
const QUESTION_TIME   = 15;

// ===== STATE =====
let currentCategory   = null;
let currentQuestions  = [];
let currentIndex      = 0;
let currentScore      = 0;
let currentPoints     = 0;
let currentStreak     = 0;
let bestStreak        = 0;
let answered          = false;
let questionStartTime = null;
let timerInterval     = null;

// ===== SESSION TIME =====
const sessionStart = Date.now();

setInterval(() => {
  const added = Math.floor((Date.now() - sessionStart) / 1000);
  const saved = parseInt(localStorage.getItem('qz_total_time') || '0');
  localStorage.setItem('qz_total_time', saved + added);
  sessionStart_ref = Date.now();
}, 30000);

window.addEventListener('beforeunload', () => {
  const added = Math.floor((Date.now() - sessionStart) / 1000);
  const saved = parseInt(localStorage.getItem('qz_total_time') || '0');
  localStorage.setItem('qz_total_time', Math.max(saved, saved + added - 30));
});

function getTotalTime() {
  return parseInt(localStorage.getItem('qz_total_time') || '0') + Math.floor((Date.now() - sessionStart) / 1000);
}

function formatTime(s) {
  if (s < 60) return s + 's';
  if (s < 3600) return Math.floor(s / 60) + 'm ' + (s % 60) + 's';
  return Math.floor(s / 3600) + 'h ' + Math.floor((s % 3600) / 60) + 'm';
}

// ===== VIEW =====
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const idx = ['home','topplista','om'].indexOf(name);
  if (idx >= 0) document.querySelectorAll('.nav-link')[idx].classList.add('active');
  if (name === 'topplista') renderTopplista();
  window.scrollTo(0, 0);
}

// ===== QUIZ =====
function startQuiz(cat) {
  currentCategory  = cat;
  currentQuestions = shuffle([...quizData[cat].questions]);
  currentIndex = 0; currentScore = 0; currentPoints = 0;
  currentStreak = 0; bestStreak = 0; answered = false;
  document.getElementById('quiz-category-label').textContent = quizData[cat].emoji + ' ' + quizData[cat].name;
  showView('quiz');
  renderQuestion();
}

function replayQuiz() { startQuiz(currentCategory); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  answered = false;
  questionStartTime = Date.now();

  const pct = Math.round((currentIndex + 1) / currentQuestions.length * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = (currentIndex + 1) + ' / ' + currentQuestions.length;
  document.getElementById('quiz-score-label').textContent = currentPoints + ' poäng';
  document.getElementById('streak-label').textContent = currentStreak >= 2 ? '🔥 ' + currentStreak + ' i rad!' : '';
  document.getElementById('question-text').textContent = q.q;

  clearInterval(timerInterval);
  const tf = document.getElementById('timer-fill');
  tf.style.transition = 'none';
  tf.style.width = '100%';
  setTimeout(() => {
    tf.style.transition = 'width ' + QUESTION_TIME + 's linear';
    tf.style.width = '0%';
  }, 50);

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(i, btn);
    container.appendChild(btn);
  });
}

function handleAnswer(i, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  document.getElementById('timer-fill').style.transition = 'none';

  const q = currentQuestions[currentIndex];
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

  const elapsed = (Date.now() - questionStartTime) / 1000;
  let pts = 0, bonusMsg = '';

  if (i === q.ans) {
    btn.classList.add('correct');
    currentScore++;
    currentStreak++;
    if (currentStreak > bestStreak) bestStreak = currentStreak;
    pts += BASE_POINTS;
    if (elapsed < 3) {
      const sb = Math.round(SPEED_BONUS_MAX * (1 - elapsed / 3));
      pts += sb; bonusMsg += ' ⚡+' + sb;
    }
    if (currentStreak >= 2) {
      const str = STREAK_BONUS * (currentStreak - 1);
      pts += str; bonusMsg += ' 🔥+' + str;
    }
    showPopup('+' + pts + bonusMsg, true);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.opt-btn')[q.ans].classList.add('correct');
    currentStreak = 0;
    showPopup('Fel svar', false);
  }

  currentPoints += pts;
  document.getElementById('quiz-score-label').textContent = currentPoints + ' poäng';
  document.getElementById('streak-label').textContent = currentStreak >= 2 ? '🔥 ' + currentStreak + ' i rad!' : '';

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) renderQuestion();
    else showResult();
  }, 1100);
}

function showPopup(text, ok) {
  const p = document.getElementById('points-popup');
  p.textContent = text;
  p.style.color = ok ? '#2e7d32' : '#c62828';
  p.style.opacity = '1';
  p.style.transform = 'translateY(-10px)';
  setTimeout(() => { p.style.opacity = '0'; p.style.transform = 'translateY(-30px)'; }, 700);
}

// ===== RESULT =====
function showResult() {
  const total = currentQuestions.length;
  const pct = Math.round(currentScore / total * 100);
  let emoji, title, msg;
  if (pct === 100)    { emoji='🏆'; title='Perfekt!';      msg='Full poäng – extraordinärt!'; }
  else if (pct >= 80) { emoji='🎉'; title='Bra jobbat!';   msg='Du kan det här riktigt bra!'; }
  else if (pct >= 60) { emoji='😊'; title='Helt okej!';    msg='Lite mer övning och du är expert!'; }
  else if (pct >= 40) { emoji='🤔'; title='Halvvägs!';     msg='Spela igen för att förbättra dig.'; }
  else                { emoji='😅'; title='Bra försök!';   msg='Svårt – försök igen!'; }

  document.getElementById('result-emoji').textContent    = emoji;
  document.getElementById('result-title').textContent    = title;
  document.getElementById('result-score-big').textContent = currentScore + '/' + total;
  document.getElementById('result-msg').textContent      = msg;
  document.getElementById('result-points').textContent   = currentPoints + ' poäng';
  document.getElementById('result-streak').textContent   = 'Bästa streak: ' + bestStreak + ' i rad';
  document.getElementById('player-name').value = '';
  document.getElementById('saved-msg').textContent = '';
  showView('resultat');
}

function saveScore() {
  const name = document.getElementById('player-name').value.trim();
  if (!name) { document.getElementById('saved-msg').textContent = 'Skriv in ditt namn!'; return; }
  const scores = JSON.parse(localStorage.getItem('qz_scores') || '[]');
  scores.push({
    name, score: currentScore, total: currentQuestions.length,
    points: currentPoints, streak: bestStreak,
    category: quizData[currentCategory].name,
    timeOnSite: getTotalTime(),
    date: new Date().toLocaleDateString('sv-SE')
  });
  scores.sort((a, b) => b.points - a.points);
  localStorage.setItem('qz_scores', JSON.stringify(scores.slice(0, 100)));
  document.getElementById('saved-msg').textContent = '✓ Sparat på topplistan!';
}

function shareResult() {
  const cat = quizData[currentCategory].name;
  const text = `Jag fick ${currentScore}/${currentQuestions.length} (${currentPoints} poäng) på QuizZonen i ${cat}! Kan du slå det? 🎯`;
  if (navigator.share) {
    navigator.share({ title: 'QuizZonen', text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text + ' ' + window.location.href)
      .then(() => alert('Kopierat! Klistra in och dela med vänner.'))
      .catch(() => alert(text));
  }
}

// ===== TOPPLISTA =====
function renderTopplista() {
  const scores  = JSON.parse(localStorage.getItem('qz_scores') || '[]');
  const total   = getTotalTime();
  document.getElementById('session-time').textContent = formatTime(total);

  const c = document.getElementById('topplista-content');
  if (!scores.length) {
    c.innerHTML = '<div class="empty-top">Inga resultat ännu. Spela ett quiz och spara ditt resultat!</div>';
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  let html = `<table class="top-table"><thead><tr>
    <th>#</th><th>Namn</th><th>Poäng</th><th>Rätt</th><th>Streak</th><th>Tid på sajten</th><th>Kategori</th><th>Datum</th>
  </tr></thead><tbody>`;
  scores.forEach((s, i) => {
    const rc   = i < 3 ? 'rank-' + (i+1) : '';
    const rank = i < 3 ? medals[i] : (i+1);
    html += `<tr class="${rc}">
      <td>${rank}</td><td>${s.name}</td><td><strong>${s.points}</strong></td>
      <td>${s.score}/${s.total}</td><td>${s.streak > 0 ? '🔥'+s.streak : '-'}</td>
      <td>${formatTime(s.timeOnSite || 0)}</td><td>${s.category}</td><td>${s.date}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  c.innerHTML = html;
}

function clearScores() {
  if (confirm('Rensa hela topplistan?')) {
    localStorage.removeItem('qz_scores');
    renderTopplista();
  }
}

// ===== NAV =====
document.querySelectorAll('.nav-link').forEach((link, i) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showView(['home','topplista','om'][i]);
  });
});