// ===== QUIZ DATA =====
const quizData = {
  geo: {
    name: "Geografi", emoji: "🌍",
    questions: [
      { q: "Vad är huvudstaden i Australien?", opts: ["Sydney","Melbourne","Canberra","Perth"], ans: 2 },
      { q: "Vilken flod brukar oftast räknas som världens längsta?", opts: ["Amazonas","Nilen","Yangtze","Mississippi"], ans: 1 },
      { q: "I vilket land ligger Machu Picchu?", opts: ["Chile","Colombia","Mexiko","Peru"], ans: 3 },
      { q: "Vilket hav är störst i världen?", opts: ["Atlanten","Indiska oceanen","Arktiska oceanen","Stilla havet"], ans: 3 },
      { q: "Hur många självständiga länder finns det i Afrika?", opts: ["42","54","67","71"], ans: 1 },
      { q: "Vilket land har flest invånare?", opts: ["Indien","USA","Kina","Indonesien"], ans: 0 },
      { q: "Vilket är världens minsta land?", opts: ["Monaco","San Marino","Vatikanstaten","Liechtenstein"], ans: 2 },
      { q: "Vad heter bergskedjan som ofta räknas som gräns mellan Europa och Asien?", opts: ["Alperna","Himalaya","Uralbergen","Kaukasus"], ans: 2 },
      { q: "Vilket land tillhör Grönland?", opts: ["Norge","Island","Sverige","Danmark"], ans: 3 },
      { q: "Vilket hav gränsar till Sverige i öster?", opts: ["Nordsjön","Atlanten","Östersjön","Medelhavet"], ans: 2 }
    ]
  },
  sport: {
    name: "Sport", emoji: "⚽",
    questions: [
      { q: "Vilket land har vunnit flest VM-guld i fotboll för herrar?", opts: ["Argentina","Frankrike","Brasilien","Tyskland"], ans: 2 },
      { q: "I vilken stad spelas Wimbledon?", opts: ["Manchester","Edinburgh","Birmingham","London"], ans: 3 },
      { q: "Vad heter det kända cykelloppet runt Frankrike?", opts: ["Giro d'Italia","Tour de France","La Vuelta","Paris-Roubaix"], ans: 1 },
      { q: "Hur många spelare har ett basketlag på planen samtidigt?", opts: ["4","5","6","7"], ans: 1 },
      { q: "Vilket land brukar räknas som golfens hemland?", opts: ["England","Sverige","USA","Skottland"], ans: 3 },
      { q: "Vilken sport spelas i NHL?", opts: ["Basket","Ishockey","Fotboll","Rugby"], ans: 1 },
      { q: "Hur lång är en olympisk simbassäng?", opts: ["25 meter","40 meter","50 meter","100 meter"], ans: 2 },
      { q: "Vem kallades 'The Greatest' inom boxning?", opts: ["Mike Tyson","Sugar Ray Leonard","Muhammad Ali","Joe Frazier"], ans: 2 },
      { q: "Vilket år tog Sverige senast brons i fotbolls-VM för herrar?", opts: ["1950","1958","1978","1994"], ans: 3 },
      { q: "Hur många set behöver en herrspelare vinna i Wimbledon-finalen?", opts: ["2","3","4","5"], ans: 1 }
    ]
  },
historia: {
  name: "Historia", emoji: "🏛️",
  questions: [
    { q: "Vilket år slutade andra världskriget?", opts: ["1943","1944","1945","1946"], ans: 2 },
    { q: "Vem var USA:s första president?", opts: ["Thomas Jefferson","John Adams","Benjamin Franklin","George Washington"], ans: 3 },
    { q: "I vilket land startade franska revolutionen?", opts: ["England","Frankrike","Spanien","Italien"], ans: 1 },
    { q: "Vad hette Roms legendariske grundare?", opts: ["Remus","Romulus","Julius Caesar","Augustus"], ans: 1 },
    { q: "Vilket år föll Berlinmuren?", opts: ["1987","1988","1989","1990"], ans: 2 },
    { q: "Vilket land var först med att ge kvinnor rösträtt i nationella val?", opts: ["Sverige","USA","Nya Zeeland","England"], ans: 2 },
    { q: "Vad hette faraon bakom den stora pyramiden i Giza?", opts: ["Ramses II","Tutankhamun","Kleopatra","Khufu"], ans: 3 },
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
    { q: "Vad heter rektorn på Hogwarts i Harry Potter?", opts: ["Albus Dumbledore","Sirius Black","Rubeus Hagrid","Severus Snape"], ans: 0 },
    { q: "I vilken stad utspelar sig Stranger Things?", opts: ["Hawkins","Springfield","Sunnydale","Stars Hollow"], ans: 0 },
    { q: "Vad heter huvudkaraktären i Lejonkungen?", opts: ["Nala","Simba","Mufasa","Scar"], ans: 1 },
    { q: "Vilket år kom den första iPhonen?", opts: ["2005","2006","2007","2008"], ans: 2 },
    { q: "Vem spelade James Bond i filmen No Time to Die?", opts: ["Pierce Brosnan","Daniel Craig","Tom Hardy","Idris Elba"], ans: 1 },
    { q: "Vilken artist sjöng 'Shape of You'?", opts: ["Justin Bieber","Charlie Puth","Ed Sheeran","Sam Smith"], ans: 2 },
    { q: "I vilken småländsk ort grundades Ikea?", opts: ["Älmhult","Växjö","Kalmar","Kristianstad"], ans: 0 },
    { q: "Vilket land vann Eurovision 2024?", opts: ["Sverige","Israel","Schweiz","Italien"], ans: 2 }
  ]
},
  vetenskap: {
    name: "Vetenskap", emoji: "🔬",
    questions: [
      { q: "Vad är den kemiska beteckningen för vatten?", opts: ["HO","H2O","CO2","O2H"], ans: 1 },
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
      { q: "När är Sveriges nationaldag?", opts: ["1 maj","6 juni","15 juli","24 december"], ans: 1 },
      { q: "Vad är Sveriges näst största stad?", opts: ["Malmö","Uppsala","Göteborg","Västerås"], ans: 2 },
      { q: "Vad heter Sveriges nuvarande kung?", opts: ["Carl XVI Gustaf","Gustav VI Adolf","Carl XIV Johan","Oscar II"], ans: 0 },
      { q: "Vilket år gick Sverige med i EU?", opts: ["1991","1993","1995","1997"], ans: 2 },
      { q: "Vilket län ligger Höör i?", opts: ["Blekinge","Halland","Skåne","Småland"], ans: 2 },
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
      { q: "Hur länge bör man koka ett ägg så det blir hårdkokt?", opts: ["3 minuter","5 minuter","8 minuter","12 minuter"], ans: 2 },
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
      { q: "Vilken Netflix-serie blev globalt känd för sina dödliga spel?", opts: ["Money Heist","The Crown","Squid Game","Stranger Things"], ans: 2 },
      { q: "Vem regisserade Schindlers lista?", opts: ["Martin Scorsese","Francis Ford Coppola","Steven Spielberg","James Cameron"], ans: 2 },
      { q: "Vilket land producerar flest filmer per år?", opts: ["USA","Kina","Indien","Japan"], ans: 2 },
      { q: "Vad heter den blå robot-katten i den japanska serien?", opts: ["Totoro","Pikachu","Doraemon","Astro Boy"], ans: 2 },
      { q: "Vilken film vann Oscar för bästa film 2020?", opts: ["1917","Joker","Parasite","Once Upon a Time in Hollywood"], ans: 2 },
      { q: "Vad heter huvudpersonen i The Office (USA)?", opts: ["Jim Halpert","Dwight Schrute","Michael Scott","Andy Bernard"], ans: 2 },
      { q: "Vad heter regissören bakom Star Wars originaltrilogin?", opts: ["Steven Spielberg","George Lucas","James Cameron","Ridley Scott"], ans: 1 },
      { q: "Vem sjöng 'Let It Go' i Frost?", opts: ["Beyoncé","Adele","Idina Menzel","Celine Dion"], ans: 2 }
    ]
  },
  gaming: {
    name: "Gaming", emoji: "🎮",
    questions: [
      { q: "Vilket spel innehåller karaktären Master Chief?", opts: ["Call of Duty","Halo","Destiny","Gears of War"], ans: 1 },
      { q: "Vilket företag skapade PlayStation?", opts: ["Microsoft","Nintendo","Sony","Sega"], ans: 2 },
      { q: "I vilket spel bygger man världar av block?", opts: ["Roblox","Fortnite","Minecraft","Terraria"], ans: 2 },
      { q: "Vad heter den ikoniska rörmokaren i Nintendo-spelen?", opts: ["Luigi","Wario","Mario","Toad"], ans: 2 },
      { q: "Vilket spel är känt för 'Battle Royale' med 100 spelare?", opts: ["Apex Legends","PUBG","Warzone","Fortnite"], ans: 3 },
      { q: "Vilket år lanserades Nintendo Switch?", opts: ["2015","2016","2017","2018"], ans: 2 },
      { q: "Vad heter huvudpersonen i The Legend of Zelda?", opts: ["Zelda","Link","Ganon","Epona"], ans: 1 },
      { q: "Vilket spel utspelar sig i det fiktiva landet Tamriel?", opts: ["The Witcher","Dragon Age","Elder Scrolls","Dark Souls"], ans: 2 },
      { q: "Vilket e-sport lag kommer från Sverige?", opts: ["MOUZ","Natus Vincere","Ninjas in Pyjamas","Team Liquid"], ans: 2 },
      { q: "Hur många Pokémon fanns det i den ursprungliga generationen?", opts: ["100","151","200","251"], ans: 1 }
    ]
  },
   svfilmtv: {
    name: "Svensk film & TV", emoji: "📺",
    questions: [
      { q: "Vem skapade Wallander-böckerna?", opts: ["Stieg Larsson","Jan Guillou","Henning Mankell","Camilla Läckberg"], ans: 2 },
      { q: "I vilken svensk stad utspelar sig delar av Bron?", opts: ["Stockholm","Göteborg","Malmö","Helsingborg"], ans: 2 },
      { q: "Vad heter den svenska serien om en bonusfamilj?", opts: ["Bonusfamiljen","En del av mitt hjärta","Solsidan","Arvingarna"], ans: 0 },
      { q: "Vilket år hade Melodifestivalen premiär?", opts: ["1955","1958","1961","1965"], ans: 1 },
      { q: "Vem spelar Lisbeth Salander i den svenska filmversionen?", opts: ["Sofia Helin","Noomi Rapace","Malin Åkerman","Rebecca Ferguson"], ans: 1 },
      { q: "Vad heter den svenska barnkaraktären med propeller på ryggen?", opts: ["Alfons Åberg","Emil i Lönneberga","Karlsson på taket","Pippi Långstrump"], ans: 2 },
      { q: "Vilken svensk regissör skapade filmen 'Det sjunde inseglet'?", opts: ["Lasse Hallström","Roy Andersson","Ruben Östlund","Ingmar Bergman"], ans: 3 },
      { q: "I vilket område utspelar sig TV-serien Solsidan?", opts: ["Danderyd","Saltsjöbaden","Lidingö","Djursholm"], ans: 1 },
      { q: "Vilken svensk film vann Oscar för bästa utländska film 1983?", opts: ["Fanny och Alexander","Sommaren med Monika","Hets","Det sjunde inseglet"], ans: 0 },
      { q: "Vilken svensk humorgrupp ligger bakom 'Grotesco'?", opts: ["Grotesco","Filip och Fredrik","Anders och Måns","Hassan"], ans: 0 }
    ]
  },
  matte: {
    name: "Matematik", emoji: "🔢",
    questions: [
      { q: "Vad är 15 × 15?", opts: ["175","200","225","250"], ans: 2 },
      { q: "Hur många sidor har en hexagon?", opts: ["5","6","7","8"], ans: 1 },
      { q: "Vad är kvadratroten ur 144?", opts: ["10","11","12","13"], ans: 2 },
      { q: "Vad är Pi avrundat till två decimaler?", opts: ["3.12","3.14","3.16","3.18"], ans: 1 },
      { q: "Om ett tåg åker 120 km/h, hur långt hinner det på 2,5 timmar?", opts: ["240 km","280 km","300 km","320 km"], ans: 2 },
      { q: "Vad är 20% av 350?", opts: ["60","65","70","75"], ans: 2 },
      { q: "Hur många grader är vinklarna i en triangel sammanlagt?", opts: ["90°","180°","270°","360°"], ans: 1 },
      { q: "Vad är 2 upphöjt till 10?", opts: ["512","1024","2048","4096"], ans: 1 },
      { q: "Vilket tal är primtal?", opts: ["51","57","61","63"], ans: 2 },
      { q: "Om en vara kostar 480 kr med 20% rabatt, vad var ursprungspriset?", opts: ["560 kr","580 kr","600 kr","620 kr"], ans: 2 }
    ]
  },

natur: {
    name: "Natur & djur", emoji: "🌿",
    questions: [
      { q: "Vilket är världens snabbaste landdjur?", opts: ["Lejon","Gepard","Gasell","Häst"], ans: 1 },
      { q: "Vilket djur är känt för att klara sig länge utan vatten i öknen?", opts: ["Häst","Kamel","Koala","Zebra"], ans: 1 },
      { q: "Vilket djur har störst hjärna i förhållande till kroppen av dessa?", opts: ["Delfin","Schimpans","Människa","Elefant"], ans: 2 },
      { q: "Vad heter processen där en larv förvandlas till fjäril?", opts: ["Metamorfos","Evolution","Mutation","Transformation"], ans: 0 },
      { q: "Hur många hjärtan har en bläckfisk?", opts: ["1","2","3","4"], ans: 2 },
      { q: "Vilket är världens största däggdjur?", opts: ["Elefant","Flodhäst","Blåval","Isbjörn"], ans: 2 },
      { q: "Vilken fågel kan flyga baklänges?", opts: ["Kolibri","Papegoja","Örn","Svala"], ans: 0 },
      { q: "Vilket av dessa djur kan bli mycket gammalt, ibland över 150 år?", opts: ["Hund","Katt","Jättesköldpadda","Kanin"], ans: 2 },
      { q: "Vilket djur har svart-vita ränder som är unika för varje individ?", opts: ["Tiger","Zebra","Gepard","Lodjur"], ans: 1 },
      { q: "Vad kallas det ofta när djur sover under vintern?", opts: ["Apati","Vinterdvala","Mutation","Kamouflage"], ans: 1 }
    ]
  },
 
  huvudstader: {
    name: "Huvudstäder", emoji: "✈️",
    questions: [
      { q: "Vad är huvudstaden i Japan?", opts: ["Osaka","Kyoto","Tokyo","Hiroshima"], ans: 2 },
      { q: "Vad är huvudstaden i Brasilien?", opts: ["São Paulo","Rio de Janeiro","Salvador","Brasília"], ans: 3 },
      { q: "Vad är huvudstaden i Kanada?", opts: ["Toronto","Vancouver","Ottawa","Montreal"], ans: 2 },
      { q: "Vad är huvudstaden i Sydafrika (säte för regeringen)?", opts: ["Kapstaden","Johannesburg","Pretoria","Durban"], ans: 2 },
      { q: "Vad är huvudstaden i Australien?", opts: ["Sydney","Melbourne","Brisbane","Canberra"], ans: 3 },
      { q: "Vad är huvudstaden i Nya Zeeland?", opts: ["Auckland","Wellington","Christchurch","Dunedin"], ans: 1 },
      { q: "Vad är huvudstaden i Argentina?", opts: ["Córdoba","Mendoza","Buenos Aires","Rosario"], ans: 2 },
      { q: "Vad är huvudstaden i Nigeria?", opts: ["Lagos","Kano","Ibadan","Abuja"], ans: 3 },
      { q: "Vad är huvudstaden i Pakistan?", opts: ["Karachi","Lahore","Islamabad","Peshawar"], ans: 2 },
      { q: "Vad är huvudstaden i Schweiz?", opts: ["Zürich","Genève","Basel","Bern"], ans: 3 }
    ]
  },

  litteratur: {
    name: "Litteratur", emoji: "📖",
    questions: [
      { q: "Vem skrev 'Brott och straff'?", opts: ["Leo Tolstoj","Fjodor Dostojevskij","Anton Tjechov","Ivan Turgenev"], ans: 1 },
      { q: "I vilken värld utspelar sig 'Sagan om Ringen'?", opts: ["Narnia","Midgård","Westeros","Oz"], ans: 1 },
      { q: "Vem skapade detektiven Hercule Poirot?", opts: ["Arthur Conan Doyle","Dorothy Sayers","Agatha Christie","Ruth Rendell"], ans: 2 },
      { q: "Vilket år publicerades Harry Potter och de vises sten?", opts: ["1995","1996","1997","1998"], ans: 2 },
      { q: "Vem skrev '1984'?", opts: ["Aldous Huxley","Ray Bradbury","George Orwell","H.G. Wells"], ans: 2 },
      { q: "Vad heter familjen i 'Stolthet och fördom'?", opts: ["Dashwood","Bertram","Bennet","Woodhouse"], ans: 2 },
      { q: "Vilket känt verk skrev Toni Morrison?", opts: ["The Color Purple","Beloved","Their Eyes Were Watching God","Sula"], ans: 1 },
      { q: "Vem skapade karaktären Pippi Långstrump?", opts: ["Elsa Beskow","Selma Lagerlöf","Astrid Lindgren","Maria Gripe"], ans: 2 },
      { q: "I vilken bok hittar man karaktären Jay Gatsby?", opts: ["For Whom the Bell Tolls","The Great Gatsby","Tender is the Night","This Side of Paradise"], ans: 1 },
      { q: "Vilka svenska författare fick Nobelpriset i litteratur 1974?", opts: ["Selma Lagerlöf och Pär Lagerkvist","Harry Martinson och Eyvind Johnson","August Strindberg och Selma Lagerlöf","Tomas Tranströmer och Harry Martinson"], ans: 1 }
    ]
  },

kungliga: {
  name: "Kungliga familjen", emoji: "👑",
  questions: [
    { q: "Vad heter Sveriges nuvarande kung?", opts: ["Carl XVI Gustaf","Gustaf VI Adolf","Oscar II","Carl XIV Johan"], ans: 0 },
    { q: "Vilket år besteg Carl XVI Gustaf tronen?", opts: ["1970","1972","1973","1975"], ans: 2 },
    { q: "Vad heter Sveriges kronprinsessa?", opts: ["Madeleine","Sofia","Victoria","Estelle"], ans: 2 },
    { q: "I vilket land föddes drottning Silvia?", opts: ["Österrike","Schweiz","Tyskland","Brasilien"], ans: 2 },
    { q: "Vad heter kronprinsessans make?", opts: ["Carl Philip","Daniel Westling","Christopher O'Neill","Johan Fröso"], ans: 1 },
    { q: "Vilket år gifte sig kronprinsessan Victoria?", opts: ["2008","2009","2010","2011"], ans: 2 },
    { q: "Vad heter Victorias och Daniels dotter?", opts: ["Leonore","Adrienne","Estelle","Sofia"], ans: 2 },
    { q: "Vilket slott är kungafamiljens officiella residens?", opts: ["Drottningholm","Ulriksdal","Stockholms slott","Rosersbergs slott"], ans: 2 },
    { q: "Vad heter prins Carl Philips fru?", opts: ["Madeleine","Victoria","Sofia","Silvia"], ans: 2 },
    { q: "Vilket hertigdöme har prins Daniel?", opts: ["Västergötland","Värmland","Skåne","Södermanland"], ans: 0 }
  ]
},
 
 trick: {
    name: "Trick-frågor", emoji: "😂",
    questions: [
      { q: "Hur många månader har 28 dagar?", opts: ["Bara februari","Bara skottår","Alla 12 månader","6 månader"], ans: 2 },
      { q: "En tupp sitter på en taknock och lägger ett ägg. Åt vilket håll ramlar ägget?", opts: ["Vänster","Höger","Söderut","Tuppar lägger inga ägg"], ans: 3 },
      { q: "Vad väger mest – ett kilo fjädrar eller ett kilo järn?", opts: ["Fjädrar","Järn","De väger lika mycket","Det beror på temperaturen"], ans: 2 },
      { q: "En bonde har 17 får. Alla utom 9 dör. Hur många har han kvar?", opts: ["8","9","17","0"], ans: 1 },
      { q: "Vad kan du alltid se i mitten av Sverige?", opts: ["Stockholm","Dalarna","Bokstaven 'e'","Ingenting"], ans: 2 },
      { q: "Hur långt kan en hund springa in i en skog?", opts: ["10 km","Halvvägs – sedan springer den ut igen","Hur långt som helst","1 km"], ans: 1 },
      { q: "Ett elektriskt tåg kör norrut. Åt vilket håll blåser röken?", opts: ["Norrut","Söderut","Elektriska tåg har ingen rök","Österut"], ans: 2 },
      { q: "Vilket ord stavas fel i alla ordböcker?", opts: ["Ingen","Alla","Fel","Ordet 'fel'"], ans: 2 },
      { q: "Om du har tre äpplen och tar bort två, hur många äpplen har du då?", opts: ["1","2","3","0"], ans: 1 },
      { q: "Vad blir blötare ju mer det torkar?", opts: ["En handduk","En svamp","En fläkt","En tvål"], ans: 0 }
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
let sessionStart = Date.now();

setInterval(() => {
  const added = Math.floor((Date.now() - sessionStart) / 1000);
  const saved = parseInt(localStorage.getItem('qz_total_time') || '0');
  localStorage.setItem('qz_total_time', saved + added);
  sessionStart = Date.now();
}, 30000);

window.addEventListener('beforeunload', () => {
  const added = Math.floor((Date.now() - sessionStart) / 1000);
  const saved = parseInt(localStorage.getItem('qz_total_time') || '0');
  localStorage.setItem('qz_total_time', saved + added);
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
  const idx = ['home','topplista','om','kontakt'].indexOf(name);
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

  clearTimeout(timerInterval);

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

  timerInterval = setTimeout(() => {
    if (!answered) handleAnswer(-1, null);
  }, QUESTION_TIME * 1000);
}

function handleAnswer(i, btn) {
  if (answered) return;
  answered = true;
  clearTimeout(timerInterval);
  document.getElementById('timer-fill').style.transition = 'none';

  const q = currentQuestions[currentIndex];
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

  const elapsed = (Date.now() - questionStartTime) / 1000;
  let pts = 0, bonusMsg = '';

  if (i === q.ans) {
    if (btn) btn.classList.add('correct');

    currentScore++;
    currentStreak++;

    if (currentStreak > bestStreak) bestStreak = currentStreak;

    pts += BASE_POINTS;

    if (elapsed < 3) {
      const sb = Math.round(SPEED_BONUS_MAX * (1 - elapsed / 3));
      pts += sb;
      bonusMsg += ' ⚡+' + sb;
    }

    if (currentStreak >= 2) {
      const str = STREAK_BONUS * (currentStreak - 1);
      pts += str;
      bonusMsg += ' 🔥+' + str;
    }

    showPopup('+' + pts + bonusMsg, true);
  } else {
    if (btn) btn.classList.add('wrong');

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
      <td>${rank}</td><td>${escapeHTML(s.name)}</td><td><strong>${s.points}</strong></td>
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
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

// ===== NAV =====
document.querySelectorAll('.nav-link').forEach((link, i) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showView(['home','topplista','om','kontakt'][i]);
  });
});

// ===== KONTAKTFORMULÄR =====
const kontaktForm = document.getElementById('kontakt-form');
if (kontaktForm) {
  kontaktForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = kontaktForm.querySelector('button[type="submit"]');
    btn.textContent = 'Skickar...';
    btn.disabled = true;
    try {
      const res = await fetch(kontaktForm.action, {
        method: 'POST',
        body: new FormData(kontaktForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        kontaktForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        btn.textContent = 'Något gick fel – försök igen';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Något gick fel – försök igen';
      btn.disabled = false;
    }
  });
}
 
function resetForm() {
  document.getElementById('kontakt-form').reset();
  document.getElementById('kontakt-form').style.display = 'block';
  document.getElementById('form-success').style.display = 'none';
}
