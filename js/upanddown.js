//variables
//boutons
var btnJouez = document.querySelector(".btn.bleu");
var btnOk = document.querySelector(".btn-ok");
var btnRejouez = document.querySelector(".btn.bleu.orange");

var sectionAccueil = document.querySelector(".accueil");
var sectionJeux = document.querySelector(".jeux");
var sectionResultat = document.querySelector(".resultat");

var vague1 = document.querySelector(".iv1");
var vague2 = document.querySelector(".iv2");
var vague3 = document.querySelector(".iv3");
var vague4 = document.querySelector(".iv4");
var vague5 = document.querySelector(".iv5");
var vague6 = document.querySelector(".iv6");
var vague7 = document.querySelector(".iv7");
var vague8 = document.querySelector(".iv8");

var plus = document.querySelector(".plus");
var moins = document.querySelector(".moins");

var blcNb = document.querySelector("input");

//evenements
btnJouez.addEventListener('click', accueilToJeux);
btnOk.addEventListener('click', verifNombre);
btnRejouez.addEventListener('click', resultatToJeux);

//fonctions
function accueilToJeux() {
    sectionAccueil.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    // nombre aléatoire
}

function verifNombre() {
}

function resultatToJeux() {
    sectionResultat.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    // nombre aléatoire
    sectionJeux.classList.add('bg-1');
    sectionJeux.classList.remove('bg-2');
    sectionJeux.classList.remove('bg-3');
    sectionJeux.classList.remove('bg-4');
    sectionJeux.classList.remove('bg-5');
    sectionJeux.classList.remove('bg-6');
    sectionJeux.classList.remove('bg-7');
    sectionJeux.classList.remove('bg-8');
}

