///////////////// variables /////////////////////////////////////////// 
var force = new Force(2);
var score = 0;
var tailleCase = 29;
var jeu = document.getElementById("jeu");
var couleurForce = "#2C75FF";
var couleurSol = "#A9A9A9";
var couleurMur = "#303030";



//jouer la musique
function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    
    if (player.paused) {
        player.play();

    } 
}

//mettre la musique en pause
function pause(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    
    if (player.played) {
        player.pause();
        
    } 
}

//dessin du plateau de jeu
var plateau = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,1,1,1,1,1,0,1,1,2,2,2,2,2],
    [2,2,2,1,1,0,0,0,0,0,0,1,1,2,2,2,2],
    [2,2,1,1,0,0,1,1,1,0,0,0,1,1,2,2,2],
    [2,1,1,0,0,0,1,0,0,0,0,0,0,1,1,2,2],
    [2,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,2],
    [1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1],
    [1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1],
    [2,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1],
    [2,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
    [2,2,1,1,0,0,0,1,1,1,0,0,0,1,1,2,2],
    [2,2,2,1,1,0,0,1,2,1,0,0,1,1,2,2,2],
    [2,2,2,2,1,0,0,1,2,1,0,0,1,2,2,2,2],
    [2,2,2,2,1,1,0,1,2,1,0,1,1,2,2,2,2],
    [2,2,2,2,2,1,0,1,2,1,0,1,2,2,2,2,2],
    [2,2,2,2,2,1,0,1,2,1,1,1,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ];

//////////////////  main //////////////////////////////////////////////
function main() {
    canvas = document.createElement("canvas");
    canvas.width = tailleCase*22;
    canvas.height = tailleCase*17;
    ctx = canvas.getContext("2d");
      jeu.appendChild(canvas);
    ctx.font = "12px Helvetica";

    var heros = new Image();
    heros.src = 'images/yoda1-2.png';
    var posHerosX=tailleCase*2;
    var posHerosY=tailleCase*7;
    heros.onload = function () {
        ctx.drawImage(heros, posHerosX, posHerosY);
    };

    var ennemi = new Image();
    ennemi.src = 'images/vador1-2.png';
    var posEnnemiX = tailleCase*14;
    var posEnnemiY = tailleCase*3;
    ennemi.onload = function(){
        ctx.drawImage(ennemi,posEnnemiX, posEnnemiY);
    }

    keystate = {};
    document.addEventListener("keydown", function(evt) {
        keystate[evt.keyCode] = true;
    });
    document.addEventListener("keyup", function(evt) {
        delete keystate[evt.keyCode];
    }); 
}
main();

///////// dessiner la force (pillules) /////////////////////////
function Force(radius)
{
    this.radius = radius,
    this.scoreValue = 10,

    this.display = function(x, y)
    {
        ctx.fillStyle = couleurForce;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 360);
        ctx.fill();
    };
}


//eviter le scroll lorsque lon utilise les touches directionelles.
var arrow_keys_handler = function(e) {
    switch(e.keyCode){
        case 37: case 39: case 38:  case 40: // Arrow keys
        case 32: e.preventDefault(); break; // Space
        default: break; // do not block other keys
    }
};
window.addEventListener("keydown", arrow_keys_handler, false);