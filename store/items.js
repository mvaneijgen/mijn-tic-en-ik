const initItems = [
  {
    title:
      "Ik zet mijn wekker altijd om hele uur, 15 over, 30 over of 45 over. Nooit op bijvoobeeld 09:16.",
    name: "Gerrit",
    share: 1,
    id: 1,
  },
  {
    title:
      "Ik word altijd boos als mensen met veel herrie hun laatste druppel uit een pakje of blikje zuigen.",
    name: "Gerrit",
    share: 2,
    id: 2,
  },
  {
    title:
      "Op het toilet moet ik altijd wat lezen. Al is het maar het etiket van de toiletverfrisser of een bonnetje uit mijn zak.",
    name: "Marjolein",
    share: 3,
    id: 3,
  },
  {
    title:
      "Als ik aan de ene kant van bijvoorbeeld mijn hoofd krab, wil ik ook vaak aan de andere kant op precies hetzelfde plekje ook even lekker krabben, gewoon puur om de boel balans te houden!",
    name: "Khun",
    share: 4,
    id: 4,
  },
  {
    title: "Engelse liedjes in het Nederlands zingen.",
    name: "Danny",
    share: 5,
    id: 5,
  },
  {
    title:
      "Als ik bijvoorbeeld yoghurt eet steek ik eerst mijn tong naar buiten, zet dan de lepel er tegenaan en begeleid de lepel naar binnen..",
    name: "Hans",
    share: 6,
    id: 6,
  },
  {
    title:
      "Als ik aan de telefoon zit met een pen in de hand en papier voor me ga ik nietsvermoedend tekenen.. Of woorden opschrijven en dan de letters nog een keer overschrijven..",
    name: "Mitch",
    share: 7,
    id: 7,
  },
  {
    title:
      "Als ik honger heb en er niets in huis is. Ga ik constant de koelkast checken, ook al weet ik dat er nog steeds niets te eten is..",
    name: "Tony",
    share: 8,
    id: 8,
  },
  {
    title:
      "Als ik eigenlijk hard aan de slag moet gaan en ik ontdek zo'n site als deze. Moet ik gelijk alles bekijken en zelf ook een bedenken zodat het lijkt alsof ik iets nuttigs doe met mijn tijd.",
    name: "Angelo",
    share: 9,
    id: 9,
  },
  {
    title:
      "Ik pak mijn mobiel om de tijd te bekijken, dan doe ik heel dingen met mijn mobiel, stop ik hem weer weg en weet ik alsnog de tijd niet",
    name: "Cynthia",
    share: 10,
    id: 10,
  },
  {
    title:
      "In de herfst over alle opgedroogde bladeren rijden met mijn fiets zodat het lekker hard knispert.",
    name: "Manja",
    share: 11,
    id: 11,
  },
  {
    title: "Etiketten van cosmeticaproducten en waterflesjes trekken.",
    name: "Carolien",
    share: 12,
    id: 12,
  },
  {
    title:
      "Als we op vakantie gaan, 30 keer het huis controleren. Zijn alle lichten uit? Zijn alle stekkers uit de stopcontacten? etc. En als dat gedaan is moet iedereen controleren of de buitendeur goed dicht zit!",
    name: "Joke",
    share: 13,
    id: 13,
  },
  {
    title:
      "Vroeger was het erger dan nu, maar ik wilde graag van veel dingen een even aantal. Het ergst is het bij snoepjes. Ik neem 2 snoepjes, of 4 of 6 etcetera. Als iemand me er 3 geeft dan wil ik er graag één bij. Zo niet, dan geef ik er een weg. Als het bv. M&M's zijn dan wil ik ook graag steeds een even aantal van dezelfde kleur.",
    name: "Danny",
    share: 14,
    id: 14,
  },
  {
    title: "Ik zit constant aan mijn piercing",
    name: "Aranka",
    share: 15,
    id: 15,
  },
  {
    title: "Velletjes die los zitten, moeten eraf",
    name: "Aranka",
    share: 16,
    id: 16,
  },
  {
    title: "Ik zucht ontzettend veel zonder reden",
    name: "Aranka",
    share: 17,
    id: 17,
  },
  {
    title:
      "Als ik geld tel in de kassa waar ik werk, dan leg ik steeds alle gave, ongekreukelde briefjes bovenop, waardoor ik vaak mijn tel kwijt raak en weer opnieuw moet beginnen met tellen.",
    name: "Afra",
    share: 18,
    id: 18,
  },
  {
    title:
      "Ik kan niet stilstaan terwijl ik mn tanden poets. Ik loop net zo lang in de rondte tot ik uitgepoetst ben.",
    name: "Danny",
    share: 19,
    id: 19,
  },
  {
    title: "Als ik loop tel ik vaak het aantal passen dat ik zet.",
    name: "Danny",
    share: 20,
    id: 20,
  },
  {
    title: "Bierviltjes volledig in stukjes scheuren.",
    name: "Danny",
    share: 21,
    id: 21,
  },
  {
    title:
      "Als ik op een fiets rij die achteruit dan trappen dan draai ik mijn trappers continu achteruit op het moment dat ik rem of vaart moet minderen.",
    name: "Danny",
    share: 22,
    id: 22,
  },
  {
    title:
      "Ik wrijf continu over mijn mondhoeken om ervoor te zorgen dat er geen etensresten te zien zijn, zelfs al heb ik nog helemaal niet gegeten.",
    name: "Liz",
    share: 23,
    id: 23,
  },
  {
    title:
      "Als iemand bv door de telefoon tegen me fluistert omdat hij/zij niet te hard kan/mag praten, fluister ik automatisch terug.",
    name: "Danny",
    share: 24,
    id: 24,
  },
  {
    title:
      "Wanneer ik een text lees op een website selecteer ik de stukken die ik al gelezen heb.",
    name: "Tim",
    share: 25,
    id: 25,
  },
  {
    title:
      "Als ik een mes afdroog doe ik ook een vork en een lepel, anders is het zo zielig!",
    name: "Iris",
    share: 26,
    id: 26,
  },
  {
    title:
      'CMD + T, "F" intypen, en op ENTER drukken brengt me binnen een halve seconde op Facebook... ongeveer 150 keer per dag.',
    name: "Nick",
    share: 27,
    id: 27,
  },
  {
    title: "Ik lees tijdschriften altijd van achter naar voren",
    name: "Marjolein",
    share: 28,
    id: 28,
  },
  {
    title: "Ik lees tijdschriften altijd van achter naar voren",
    name: "Marjolein",
    share: 29,
    id: 29,
  },
  {
    title:
      "Als iemand zegt: 'Stop', dan denk ik: Hammertime. En als iemand zegt: 'een euro', dan antwoord ik hardop: 'Kenker, een euro? Kenker!', en rap ik de rest van Watskeburt vrolijk verder.",
    name: "Nick",
    share: 30,
    id: 30,
  },
  {
    title:
      "Ik kan niet slapen als niet alle deuren in mijn slaapkamer dicht zijn...\nOok alle kastdeuren!",
    name: "Stef",
    share: 31,
    id: 31,
  },
  {
    title:
      "Als ik uit een flesje of blikje drink.. Staat mijn pink los van het blikje of flesje recht omhoog..",
    name: "MiMa",
    share: 32,
    id: 32,
  },
  {
    title: "Met mijn vingers knakken als ik het even niet meer weet..",
    name: "Dijana",
    share: 33,
    id: 33,
  },
  {
    title:
      "Als ik wil weten hoelaat het is vraag ik het altijd aan iemand, terwijl ik een mobiel bij me heb en er een klok boven me hangt",
    name: "Latoya",
    share: 34,
    id: 34,
  },
  {
    title:
      "Ik loop heel vaak op hele en halve tegels, of om en om op en tussen de lijntjes. Maar dat hoeft altijd maar een paar meter.",
    name: "Roos",
    share: 35,
    id: 35,
  },
  {
    title: "Ik moet altijd iets in mijn handen hebben, iets frutselen.",
    name: "Lisette",
    share: 36,
    id: 36,
  },
  {
    title:
      "Mijn ondergoed moet altijd bij mijn kleding matchen of op z'n minst bij elkaar, anders wordt ik gek!",
    name: "Mees",
    share: 37,
    id: 37,
  },
  {
    title: "Ik móet heel vaak palen of iets dergelijks aanraken zonder reden.",
    name: "michael",
    share: 38,
    id: 38,
  },
  {
    title:
      "Voor ik begin met werken moet ik altijd eerst mijn Facebook checken (ook al heb ik het 5 minuten daarvoor ook gedaan)",
    name: "Mees",
    share: 39,
    id: 39,
  },
  {
    title:
      "Als er feest is, moet het gevierd worden. Ik word helemaal onrustig als het niet gebeurd.",
    name: "Mees",
    share: 40,
    id: 40,
  },
  {
    title:
      "Als iemand een mooie kleding aan heeft, moet ik het zeggen, ook al is het eigenlijk niet gepast",
    name: "Mees",
    share: 41,
    id: 41,
  },
  {
    title:
      "Als iets in de aanbieding is, koop ik het bijna altijd. Ik moet echt tegen mezelf zeggen 'Dit heb je echt niet nodig en staat je in de weg' wil ik het niet doen...",
    name: "Mees",
    share: 42,
    id: 42,
  },
  {
    title: "Als ik iets van Dinsey of Barbie zie, moet het aangeraakt worden!",
    name: "Mees",
    share: 43,
    id: 43,
  },
  {
    title: "Als ik na het uitgaan geen eten heb verorberd, wordt ik gek!",
    name: "Mees",
    share: 44,
    id: 44,
  },
  {
    title:
      "Ik knipper heel veel met mijn ogen, waardoor mensen vaak denken dat ik naar hen knipoog.",
    name: "Kim",
    share: 45,
    id: 45,
  },
  {
    title:
      "Als ik aan het leren ben, aan de telefoon of met iets bezig bent, ga ik rondjes lopen door mijn kamer",
    name: "Milan",
    share: 46,
    id: 46,
  },
  {
    title:
      "Op z'n minst 3x op snooze drukken voordat ik daadwerkelijk m'n bed uitkom",
    name: "Jaimy",
    share: 47,
    id: 47,
  },
];

export const state = () => ({
  items: [...initItems], // Items 💬
  myItems: null,
  loading: false,
  itemCurrent: false,
  itemPrevious: false,
  search: '',
  sort: '',
  // search: {
  //   query: '',
  //   sort: '',
  // },
});

//------------------------------------------------------//
// Getters
//------------------------------------------------------//
export const getters = {
  //------------------------------------------------------//
  // Get items 💬
  //------------------------------------------------------//
  getItems: state => {
    return state.items;
  },
  getMyItems: state => {
    return state.myTics;
  },
  getFilteredItems: state => {
    const items = state.items.filter(item => {
      return item.title.toLowerCase().includes(state.search.toLowerCase());
    })
    if (state.sort === 'popular') {
      return items.sort((a, b) => a.share - b.share).reverse()
    } else if (state.sort === 'unpopular') {
      return items.sort((a, b) => a.share - b.share);
      // } else if (condition) {
      //   return items.sort((a, b) => a.share - b.share);
      // } else if (condition) {
      //   return items.sort((a, b) => a.share - b.share);
    } else {
      return items;
    }
  },
  // END Get items 💬
  getItemCurrent: state => {
    return state.itemCurrent;
  },
  getItemByID: state => itemID => {
    return state.items.find(item => item.id == itemID);
  },
  //------------------------------------------------------//
  // Get random 🎲 item 💬
  //------------------------------------------------------//
  getItemsRandom: state => {
    return state.items[Math.floor(Math.random() * state.items.length)];
  },
  // END Get random 🎲 item 💬 -------------------------------------//
};
// END Getters -------------------------------------//

export const mutations = {
  setItems(state, payload) {
    state.items = payload;
  },
  setMyItems(state, payload) {
    state.myItems = payload;
  },
  setItemCurrent(state) {
    // Save 💾 current item 💬 to use later
    state.itemPrevious = state.itemCurrent;

    // Update ⬆️ item 💬
    state.itemCurrent =
      state.items[Math.floor(Math.random() * state.items.length)];
  },
  setItemPreviousAsCurrent(state) {
    state.itemCurrent = state.itemPrevious;
  },
  setSearch(state, payload) {
    state.search = payload;
  },
  setSort(state, payload) {
    state.sort = payload;
  },
};

export const actions = {

};