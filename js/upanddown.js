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

var coupjouer = 0;

var nombre = Math.ceil(Math.random()*100);

var tgagner = document.querySelector("h3.tgagner");
var tperdu = document.querySelector("h3.tperdu");

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
    if(coupjouer < 1) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-1');
                sectionJeux.classList.add('bg-2');
                vague8.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-1');
                sectionJeux.classList.add('bg-2');
                vague8.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 2) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-2');
                sectionJeux.classList.add('bg-3');
                vague7.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-2');
                sectionJeux.classList.add('bg-3');
                vague7.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 3) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-3');
                sectionJeux.classList.add('bg-4');
                vague6.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-3');
                sectionJeux.classList.add('bg-4');
                vague6.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 4) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-4');
                sectionJeux.classList.add('bg-5');
                vague5.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-4');
                sectionJeux.classList.add('bg-5');
                vague5.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 5) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-5');
                sectionJeux.classList.add('bg-6');
                vague4.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-5');
                sectionJeux.classList.add('bg-6');
                vague4.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 6) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-6');
                sectionJeux.classList.add('bg-7');
                vague3.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-6');
                sectionJeux.classList.add('bg-7');
                vague3.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 7) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else if(blcNb.value < nombre) {
                sectionJeux.classList.remove('bg-7');
                sectionJeux.classList.add('bg-8');
                vague2.classList.add('transparent');
                plus.classList.remove('cacher');   
            
            }else{
                sectionJeux.classList.remove('bg-7');
                sectionJeux.classList.add('bg-8');
                vague2.classList.add('transparent');
                moins.classList.remove('cacher');     
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 8) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionResultat.classList.remove('cacher');
            sectionResultat.classList.remove('perdu');
            sectionResultat.classList.add('gagner');
            tperdu.classList.add('cacher');
            tgagner.classList.remove('cacher');

            }else{
                sectionResultat.classList.remove('cacher');
                sectionJeux.classList.add('cacher');
                sectionJeux.classList.add('bg-1');
                sectionJeux.classList.remove('bg-2');
                sectionJeux.classList.remove('bg-3');
                sectionJeux.classList.remove('bg-4');
                sectionJeux.classList.remove('bg-5');
                sectionJeux.classList.remove('bg-6');
                sectionJeux.classList.remove('bg-7');
                sectionJeux.classList.remove('bg-8');
                tgagner.classList.add('cacher');

                vague1.classList.remove('transparent');
                vague2.classList.remove('transparent');
                vague3.classList.remove('transparent');
                vague4.classList.remove('transparent');
                vague5.classList.remove('transparent');
                vague6.classList.remove('transparent');
                vague7.classList.remove('transparent');
                vague8.classList.remove('transparent');
                
        }
    }
}

function resultatToJeux() {
    sectionResultat.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    sectionJeux.classList.add('bg-1');
    sectionJeux.classList.remove('bg-2');
    sectionJeux.classList.remove('bg-3');
    sectionJeux.classList.remove('bg-4');
    sectionJeux.classList.remove('bg-5');
    sectionJeux.classList.remove('bg-6');
    sectionJeux.classList.remove('bg-7');
    sectionJeux.classList.remove('bg-8');
    
    vague1.classList.remove('cacher');
    vague2.classList.remove('cacher');
    vague3.classList.remove('cacher');
    vague4.classList.remove('cacher');
    vague5.classList.remove('cacher');
    vague6.classList.remove('cacher');
    vague7.classList.remove('cacher');
    vague8.classList.remove('cacher');
    coupjouer = 0;
    nombre = Math.ceil(Math.random()*100);
    blcNb.value = "";
}

