function randomItemsHig() {

var insultee;
console.log($('#insultee').val());
if ($('#insultee').val() !== "") {
insultee = $('#insultee').val() + ", you are a ";
}
else {
insultee = "You sir, are a "
console.log(insultee);
}

var itemsA = ["malodorus","putrid","repulsive","noxious","dubitable","vile","ill-favored","loathsome","huffish","bumptious","disdainful","solipstistic","bilious","sallow","cadaverous","odious","bloated","turgid","tumescent","pedantic","execrable"];
var randomItem1 = itemsA[Math.floor(Math.random() * itemsA.length)];
console.log(randomItem1);
var finalItem = randomItem1;

var typeA = ["bothersome","vexatious","exastperating","chafing","skulking","blustering","overweening","glowering","nettlesome","irksome","pestiferous","rebarbative", "pestilential","deleterious","pernicious","languid","somnolent", "indolent","shiftless","dilatory","flagging","repining","whimpering","peevish","slovenly","cloying"];
var randomType1 = typeA[Math.floor(Math.random() * typeA.length)];
console.log(randomType1);
var finalType = randomType1;

var lastA = ["clot","golem","lump","dunce","dolt","nit","dullard","cluck","bane","plonk","prig","laggard","cretin","dunderhead","stooge","imp","oaf","ox","goon","cad","churl","philistine","lummox"];22
var randomLast1 = lastA[Math.floor(Math.random() * lastA.length)];
console.log(randomLast1);
var finalLast = randomLast1;

var momA = ["misshapen","frightful","homely","beastly","regrettable","dehydrated","repulsive","incoherent","swellheaded","foul","grisly","ghastly","crestfallen","bedraggled","rotund","podgy","rancid"]; 14
var momFirst = momA[Math.floor(Math.random() * momA.length)];
console.log(momFirst);
var finalMomA = momFirst;

var momB = ["floss-forgetting","flatulance-blaming","paper-crinkling","gesticulation-distorting","oil-toting","pefume-abusing","banal-pushing","potato-consuming", "dog-slandering", "lizard-loving","IQ-lowering","turn-missing","fake-calling","story-stealing","high-beaming","plot-spoiling","humorless","shoe-soiling","refuse-hoarding","roach-attracting","kale-touting","child-slighting","penguine-hating","yawn-inducing","snail-mailing","rubbish-snorting","fashion-subversing","weather-hating","gratis-seeking","pox-producing","vermin-loving","melon-thumping","mess-inducing","non-googling","milk-smelling","smile-thieving","soul-eroding","smirk-producing","kite-hating","baloon-popping","ranch-drizzling","sob-supplying","baby-scaring","name-mistaking","thunder-fussing","polish-drying","pantry-raiding","water-infusing","coupon-hoarding","salad-eschewing","two-starring","purse-parading","coffee-shunning","neighbor-casing","chore-enforcing","book-annotating"];
var momSecond = momB[Math.floor(Math.random() * momB.length)];
console.log(momSecond);
var finalMomB = momSecond;

var momC = ["strumpet","tramp","courtesan","codger","hussy","plot","harlequin","trouser-rouser","smock","transient","gutterpup","floozy","flake","loon","glut","frump","blot","paunch"]; 16
var momThird = momC[Math.floor(Math.random() * momC.length)];
console.log(momThird);
var finalMomC = momThird;
 
document.getElementById('result').innerHTML = insultee + finalItem + ", " + finalType + " " + finalLast + ", and your mother is a " + finalMomA + ", " + finalMomB + " " + finalMomC;

}

function randomItemsCC() {

var itemsA = ["personal odor is ","idiocyncratic features are ","bathroom habits are ","arm hair grooming is ","drandruff precautions are ","gustation strategies are ","fashion sense is ","perfunctory knowledge is ", "bias toward mediocrity is ","mitigated emotional state is ", "appropriated humor is "];
var randomItem1 = itemsA[Math.floor(Math.random() * itemsA.length)];
console.log(randomItem1);
var finalItem = randomItem1;

var typeA = ["surprisingly adequate","pleasantly palatable","adequately unpredictable","provisionally humorous","nearly exceptional","enviably consistent", "quite endurable", "passably tenuous"];
var randomType1 = typeA[Math.floor(Math.random() * typeA.length)];
console.log(randomType1);
var finalType = randomType1;
 
document.getElementById('result').innerHTML = "Your " + finalItem + finalType;
}

function randomItemsPotty() {

var itemsA = ["farty","poopy","slimy","sludgy","smelly","stinky","gross","sweaty","grimey"];
var randomItem1 = itemsA[Math.floor(Math.random() * itemsA.length)];
console.log(randomItem1);
var finalItem = randomItem1;

var typeA = ["poop-faced","fart-headed","farting","puke-mouthed","scum-sucking","underwear staining","toilet-clogging","toot-generating","meatloaf-scarfing","booger-eating","nose-picking","barf-producing","wart-snorting","pimple-popping","gag-inducing","turd-swirling"];
var randomType1 = typeA[Math.floor(Math.random() * typeA.length)];
console.log(randomType1);
var finalType = randomType1;

var lastA = ["poopy-butt","peepee head","bubble fart","maggot monster","slug swallower"];
var randomLast1 = lastA[Math.floor(Math.random() * lastA.length)];
console.log(randomLast1);
var finalLast = randomLast1;

var momA = ["puss-squeezing","gas-passing","skunk-shaming","onion-eating","garlic-breathing","snot-inspecting","silent-farting"];
var momFirst = momA[Math.floor(Math.random() * momA.length)];
console.log(momFirst);
var finalMomA = momFirst;

var momB = ["flatulance-blaming","sludge-loving","poop-pushing","pepto-popping", "pant-soiling","mold-munching","trash-snorting","pox-producing","vermin-breeding","milk-smelling","drool-drizzling"];
var momSecond = momB[Math.floor(Math.random() * momB.length)];
console.log(momSecond);
var finalMomB = momSecond;

var momC = ["gas passer","diarhea disaster","mildew licker","pile of gangreen","urine swirler","potato pooper","booger blower","pot licker","moist armpit","spit sprayer","loogy launcher","grime gremlin","pox picker","gunk flinger", "party pooper","egg dropper","smog sommelier","mucous membrane","burp swallower"];
var momThird = momC[Math.floor(Math.random() * momC.length)];
console.log(momThird);
var finalMomC = momThird;
 
document.getElementById('result').innerHTML = "are a " + finalItem + ", " + finalType + " " + finalLast + ", and your mother is a " + finalMomA + ", " + finalMomB + " " + finalMomC;

}

function myShareFunction() {
function share(score){

var insultShare = document.getElementById('result').innerHTML;

var desc=encodeURIComponent(insultShare); 
window.open("https://www.facebook.com/sharer.php?u=www.highbrowinsultgenerator.com&Insult="+desc); 
}
}
