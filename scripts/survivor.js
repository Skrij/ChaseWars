var force = new Force(2),
GAUCHE    = 0,
HAUT      = 1,
DROITE    = 2,
BAS       = 3,
KEY_LEFT  = 37,
KEY_UP    = 38,
KEY_RIGHT = 39,
KEY_DOWN  = 40;


// initialisation et affichage du tableau de jeu

var plateau = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
    [1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],
    [1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

function main() {
    var posX=0;
    var posY=0;
    canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 435;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    ctx.font = "12px Helvetica";

    var yoda = new Image();
    yoda.src = 'images/yoda.png';
    yoda.onload = function () {
        ctx.drawImage(yoda, posX, posY);
    };

    frames = 0;
    keystate = {};
    document.addEventListener("keydown", function(evt) {
        keystate[evt.keyCode] = true;
    });
    document.addEventListener("keyup", function(evt) {
        delete keystate[evt.keyCode];
    });
}
main();

function afficherPlateau(){
    for(var i=0; i<plateau.length; i++){
        for(var j=0; j<plateau[i].length; j++){
            if(plateau[i][j] === 1){
                ctx.fillStyle = "#1136FF";
                ctx.fillRect(j*25, i*25, 25, 25);
            }
            else if(plateau[i][j] == 0){
                ctx.fillStyle = "#000";
                ctx.fillRect(j*25, i*25, 25, 25);
                force.display((j*25) + (25/2), (i*25) + (25/2));
            }
        }
    }
}
afficherPlateau();


function Force(radius)
{
    this.radius = radius,
    this.scoreValue = 10,

    this.display = function(x, y)
    {
        ctx.fillStyle = "#40E0D0";
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 360);
        ctx.fill();
    };
}


//CASE HEROS
/*if(verifiercouleur pixel de z+25;si couleur="#1136FF"){
        clearInterval(yoloB)
        }
if(verifiercouleur pixel de x+25;si couleur="#1136FF"){
        clearInterval(yoloR)
        }
if(verifiercouleur pixel de z-25;si couleur="#1136FF"){
        clearInterval(yoloT)
        }
if(verifiercouleur pixel de x-25;si couleur="#1136FF"){
        clearInterval(yoloL)
        }  
*/
var pouic=0;
var posX=0;
    var posY=0;
var yoda = new Image();
    yoda.src = 'images/yoda.png';
var casenoire = new Image();
    casenoire.src = 'images/casenoire.png';


 //deplacement case heros
document.addEventListener("keydown", function(e) {
    if(e.keyCode == 37){
        if(pouic==1){

        }
        else {
            if(pouic==2){
                clearInterval(mvtT);
            }
            if(pouic==3){
                clearInterval(mvtR);
            }
            if(pouic==4){
                clearInterval(mvtB);
            }
             mvtL=window.setInterval("avancerLeft()",200);
             pouic=1;
        }
       
    }
    if(e.keyCode == 38){
         if(pouic==2){

        }
        else {
            if(pouic==1){
                clearInterval(mvtL);
            }
            if(pouic==3){
                clearInterval(mvtR);
            }
            if(pouic==4){
                clearInterval(mvtB);
            }
        mvtT=window.setInterval("avancerUp()",200);
        pouic=2;
        } 
    }
    if(e.keyCode == 39) {
         if(pouic==3){

        }
        else {
            if(pouic==2){
                clearInterval(mvtT);
            }
            if(pouic==1){
                clearInterval(mvtL);
            }
            if(pouic==4){
                clearInterval(mvtB);
            }
        mvtR=window.setInterval("avancerRight()",200);
        pouic=3;
        }
    }
    if(e.keyCode == 40) { 
         if(pouic==4){

        }
        else {
            if(pouic==2){
                clearInterval(mvtT);
            }
            if(pouic==1){
                clearInterval(mvtL);
            }
            if(pouic==3){
                clearInterval(mvtR);
            }
        mvtB=window.setInterval("avancerBottom()",200);
        pouic=4;
        }
    }
},false);


function avancerLeft(){
    ctx.drawImage(casenoire, posX, posY);
        console.log("gauche");
        posX-=25;
        ctx.drawImage(yoda, posX, posY);
}

function avancerUp(){
    ctx.drawImage(casenoire, posX, posY);
        console.log("haut");
        posY-=25;
        ctx.drawImage(yoda, posX, posY);
}

function avancerRight(){
    ctx.drawImage(casenoire, posX, posY);
        console.log("droite");
        posX+=25;
        ctx.drawImage(yoda, posX, posY);
}

function avancerBottom(){
    ctx.drawImage(casenoire, posX, posY);
        console.log("bas");
        posY+=25;
        ctx.drawImage(yoda, posX, posY);
}

/*
function loop() {
    update();
    window.requestAnimationFrame(loop, canvas);
}

function update() {
    frames++;
    if (keystate[KEY_LEFT]) {
        hero.direction = GAUCHE;
    }
    if (keystate[KEY_UP]) {
        hero.direction = HAUT;
    }
    if (keystate[KEY_RIGHT]) {
        hero.direction = DROITE;
    }
    if (keystate[KEY_DOWN]) {
        hero.direction = BAS;
    }
    if (frames%5 === 0) {
        switch (hero.direction) {
            case GAUCHE:
                hero.style.left = x - 25;
                break;
            case HAUT:
                hero.style.top = y - 25;
                break;
            case DROITE:
                hero.style.left = x + 25;
                break;
            case BAS:
                hero.style.top = y + 25;
                break;
        }
    }
}

*/
