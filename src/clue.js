// ITERATION 1

// Suspects Array

let mrGreen = { 
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"};

let drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"};

let profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"};

let missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"};
    
let mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"};

let mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"};

const suspectsArray = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard ]

// Rooms Array

const roomsArray = [
    {name:"Dining Room" } , 
    {name:"Conservatory" }, 
    {name: "Kitchen"}, 
    {name: "Study"}, 
    {name:"Library" }, 
    {name: "Billiard Room"}, 
    {name: "Lounge"}, 
    {name: "Ballroom"}, 
    {name: "Hall"}, 
    {name: "Spa"}, 
    {name: "Living Room"}, 
    {name: "Observatory"}, 
    {name: "Theater"}, 
    {name:"Guest House" }, 
    {name: "Patio"}];
  

// Weapons Array

const weaponsArray = [
 { name: "rope",
   weight: 10}, 
{name: "knife",
weight: 8},
{name: "candlestick", 
weight: 2},
{name: "dumbbell", 
weight: 30},
{name: "poison", 
weight: 2},
{name: "axe",
weight: 15},
{name: "bat", 
weight: 13},
{name: "trophy",
weight: 25},
{name: "pistol",
weight: 20}
];


// ITERATION 2
let arr = [];
let randomElement = {};
// let randomSuspect = {};
// let randomRoom = {};
// let randomWeapon = {};

// let thisGameRandomCard  = [];

function selectRandom(arr) {
  

let randomIndex = Math.floor (Math.random()*arr.length);
randomElement = arr[randomIndex];

return randomElement;
}

selectRandom (suspectsArray);
console.log (selectRandom);


let thisGameRandomCard  = {suspect: {}, weapon: {}, room: {}};
function pickMystery() {
    
    thisGameRandomCard.suspect = selectRandom (suspectsArray);
    thisGameRandomCard.weapon = selectRandom(weaponsArray);
    thisGameRandomCard.room = selectRandom(roomsArray);

    return thisGameRandomCard;
}

console.log (thisGameRandomCard);


// ITERATION 3
let envelope = {};
let message = "";
let revealName = "";
let revealWeapon = "";
let revealRoom = "";

function revealMystery(envelope) {
   revealName = `${thisGameRandomCard.suspect.firstName}` + " " + `${thisGameRandomCard.suspect.lastName}`;
   revealWeapon = `${thisGameRandomCard.weapon.name} `;
   revealRoom = `${thisGameRandomCard.room.name}`;
   
    message = revealName + " killed Mr.Boddy using the " + revealWeapon + " in the room " + revealRoom;

    return  message;
   
}

 revealMystery (envelope);
 console.log (message);