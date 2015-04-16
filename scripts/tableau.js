/////////////////////////////////////////////////// variables  /////////////////////////////////////////// 
var force = new Force(2);
var score = 0;
var tailleCase = 25;
var jeu = document.getElementById("jeu");

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
////////////////////////////////////// initialisation et affichage du tableau de jeu  /////////////////////
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

function main() {
    canvas = document.createElement("canvas");
    canvas.width = 550;
    canvas.height = 425;
    ctx = canvas.getContext("2d");
    jeu.appendChild(canvas);
    ctx.font = "12px Helvetica";

    var heros = new Image();
    heros.src = 'images/yoda1-2.png';
    var posHerosX=50;
    var posHerosY=175;
    heros.onload = function () {
        ctx.drawImage(heros, posHerosX, posHerosY);
    };

    var ennemi = new Image();
    ennemi.src = 'images/vador.png';
    var posEnnemiX = 350;
    var posEnnemiY = 75;
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


function afficherPlateau(){
    for(var i=0; i<plateau.length; i++){
        for(var j=0; j<plateau[i].length; j++){
            if(plateau[i][j] === 1){
                ctx.fillStyle = "#1136FF";
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
            }
            else if(plateau[i][j] == 0){
                ctx.fillStyle = "#000";
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
                force.display((i*tailleCase) + (tailleCase/2), (j*tailleCase) + (tailleCase/2));
            }
            else if(plateau[i][j] == 2){
                ctx.fillStyle = "#808080";
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
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

///////////////////////////////////////   deplacement heros  ///////////////////////////////////////////////
var direction=0;
var posHerosX=50;
var posHerosY=175;
var heros = new Image();
    heros.src = 'images/yoda1-2.png';

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 37){
        if(direction==1){
        }
        else {
            if(direction==2){
                clearInterval(mvtT);
            }
            if(direction==3){
                clearInterval(mvtR);
            }
            if(direction==4){
                clearInterval(mvtB);
            }
            heros.src = 'images/yoda4-2.png';
            mvtL=window.setInterval("avancerLeft()",200);
            direction=1;
        }
    }
    if(e.keyCode == 38){
         if(direction==2){
        }
        else {
            if(direction==1){
                clearInterval(mvtL);
            }
            if(direction==3){
                clearInterval(mvtR);
            }
            if(direction==4){
                clearInterval(mvtB);
            }
        heros.src = 'images/yoda2-2.png';
        mvtT=window.setInterval("avancerUp()",200);
        direction=2;
        } 
    }
    if(e.keyCode == 39) {
         if(direction==3){
        }
        else {
            if(direction==2){
                clearInterval(mvtT);
            }
            if(direction==1){
                clearInterval(mvtL);
            }
            if(direction==4){
                clearInterval(mvtB);
            }
        heros.src = 'images/yoda3-2.png';
        mvtR=window.setInterval("avancerRight()",200);
        direction=3;
        }
    }
    if(e.keyCode == 40) { 
         if(direction==4){
        }
        else {
            if(direction==2){
                clearInterval(mvtT);
            }
            if(direction==1){
                clearInterval(mvtL);
            }
            if(direction==3){
                clearInterval(mvtR);
            }
        heros.src = 'images/yoda1-2.png';
        mvtB=window.setInterval("avancerBottom()",200);
        direction=4;
        }
    }
},false);


function avancerLeft(){
    var gaucheHeros = plateau[(posHerosX/tailleCase)-1][posHerosY/tailleCase];
    finDePartie();
    if(gaucheHeros == 1){
        posHerosX=posHerosX;
    }
    else if(gaucheHeros == 0){
        score = score +10;
        gaucheHeros = 3;
        draw();
        posHerosX-=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
    else if(gaucheHeros == 2){
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posHerosX = 500;
        posHerosY = 150;
    }
    else if(gaucheHeros == 3){
        draw();
        posHerosX-=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
}

function avancerUp(){
    var hautHeros = plateau[posHerosX/tailleCase][(posHerosY/tailleCase)-1];
    finDePartie();
    if(hautHeros == 1){
        posHerosY = posHerosY;
    }
    else if(hautHeros == 0){
        score = score +10;
        plateau[posHerosX/tailleCase][posHerosY/tailleCase-1] = 3;
        draw();
        posHerosY-=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
    else if(hautHeros == 3){
        draw();
        posHerosY-=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
}

function avancerRight(){
    var droiteHeros = plateau[(posHerosX/tailleCase)+1][posHerosY/tailleCase];
    finDePartie();
    if(droiteHeros == 1){
        posHerosX = posHerosX;
    }
    else if(droiteHeros == 0){
        score = score +10;
        droiteHeros = 3;
        draw();
        posHerosX+=tailleCase;
        ctx.drawImage(heros, posHerosX, posHerosY);
    }
    else if(droiteHeros == 2){
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posHerosX = 25;
        posHerosY = 225;
        ctx.drawImage(heros, posHerosX, posHerosY);
    }
    else if(droiteHeros == 3){
        draw();
        posHerosX+=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
}

function avancerBottom(){
    var basHeros = plateau[posHerosX/tailleCase][(posHerosY/tailleCase)+1];
    finDePartie();
    if(basHeros == 1){
        posHerosY = posHerosY;
    }
    else if(basHeros == 0){
        score = score +10;
        basHeros = 3;
        draw();
        posHerosY+=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }
    else if(basHeros == 3){
        draw();
        posHerosY+=tailleCase;
        ctx.drawImage(heros,posHerosX,posHerosY);
    }

//eviter le scroll de la page avec les flêches directionelles
    window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
}


//////////////////////////////////////////////////// déplacement dark vador //////////////////////////////////////////////////
var directionEnnemi=0;
var posEnnemiX= 350;
var posEnnemiY= 75;
var ennemi = new Image();
    ennemi.src = 'images/vador.png';

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 81){
        if(directionEnnemi==1){
        }
        else {
            if(directionEnnemi==2){
                clearInterval(mvtEnnemiT);
            }
            if(directionEnnemi==3){
                clearInterval(mvtEnnemiR);
            }
            if(directionEnnemi==4){
                clearInterval(mvtEnnemiB);
            }
            mvtEnnemiL=window.setInterval("avancerLeftEnnemi()",200);
            directionEnnemi=1;
        }
    }
    if(e.keyCode == 90){
         if(directionEnnemi==2){
        }
        else {
            if(directionEnnemi==1){
                clearInterval(mvtEnnemiL);
            }
            if(directionEnnemi==3){
                clearInterval(mvtEnnemiR);
            }
            if(directionEnnemi==4){
                clearInterval(mvtEnnemiB);
            }
        mvtEnnemiT=window.setInterval("avancerUpEnnemi()",200);
        directionEnnemi=2;
        } 
    }
    if(e.keyCode == 68) {
         if(directionEnnemi==3){
        }
        else {
            if(directionEnnemi==2){
                clearInterval(mvtEnnemiT);
            }
            if(directionEnnemi==1){
                clearInterval(mvtEnnemiL);
            }
            if(directionEnnemi==4){
                clearInterval(mvtEnnemiB);
            }
        mvtEnnemiR=window.setInterval("avancerRightEnnemi()",200);
        directionEnnemi=3;
        }
    }
    if(e.keyCode == 83) { 
         if(directionEnnemi==4){
        }
        else {
            if(directionEnnemi==2){
                clearInterval(mvtEnnemiT);
            }
            if(directionEnnemi==1){
                clearInterval(mvtEnnemiL);
            }
            if(directionEnnemi==3){
                clearInterval(mvtEnnemiR);
            }
        mvtEnnemiB=window.setInterval("avancerBottomEnnemi()",200);
        directionEnnemi=4;
        }
    }
},false);


function avancerLeftEnnemi(){
    var gaucheEnnemi = plateau[(posEnnemiX/tailleCase)-1][posEnnemiY/tailleCase];
    finDePartie();
    if(gaucheEnnemi == 1){
        posEnnemiX=posEnnemiX;
    }
    else if(gaucheEnnemi == 0){
        drawEnnemi();
        posEnnemiX-=tailleCase;
        ctx.drawImage(ennemi,posEnnemiX,posEnnemiY);
    }
    else if(gaucheEnnemi == 2){
        drawEnnemi();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posEnnemiX = 500;
        posEnnemiY = 150;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
    else if(gaucheEnnemi == 3){
        drawEnnemi();
        posEnnemiX-=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
}

function avancerUpEnnemi(){
    var hautEnnemi = plateau[posEnnemiX/tailleCase][(posEnnemiY/tailleCase)-1];
    finDePartie();
    if(hautEnnemi == 1){
        posEnnemiY = posEnnemiY;
    }
    else if(hautEnnemi == 0){
        drawEnnemi();
        posEnnemiY-=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    } 
    else if(hautEnnemi == 3){
        drawEnnemi();
        posEnnemiY-=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
}

function avancerRightEnnemi(){
    var droiteEnnemi = plateau[(posEnnemiX/tailleCase)+1][posEnnemiY/tailleCase];
    finDePartie();
    if(droiteEnnemi == 1){
        posEnnemiX = posEnnemiX;
    }
    else if(droiteEnnemi == 0){
        drawEnnemi();
        posEnnemiX+=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
    else if(droiteEnnemi == 2){
        drawEnnemi();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posEnnemiX = 25;
        posEnnemiY = 225;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
    else if(droiteEnnemi == 3){
        drawEnnemi();
        posEnnemiX+=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
}

function avancerBottomEnnemi(){
    var basEnnemi = plateau[posEnnemiX/tailleCase][(posEnnemiY/tailleCase)+1];
    finDePartie();
    if(basEnnemi == 1){
        posEnnemiY = posEnnemiY;
    }
    else if (basEnnemi == 0){
        drawEnnemi();
        posEnnemiY+=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
    else if(basEnnemi == 3){
        drawEnnemi();
        posEnnemiY+=tailleCase;
        ctx.drawImage(ennemi, posEnnemiX, posEnnemiY);
    }
}



/////////////////////////////////////////////////// redessiner après le passage du personnage ////////////////////////////////////////////
function draw(){
    if(plateau[posHerosX/tailleCase][posHerosY/tailleCase] = 3){
        ctx.fillStyle='#000';
        ctx.fillRect(posHerosX/tailleCase*tailleCase, posHerosY/tailleCase*tailleCase, tailleCase, tailleCase);
    }
}

function drawEnnemi(){
    var posEnnemi = plateau[posEnnemiX/tailleCase][posEnnemiY/tailleCase]
    if( posEnnemi == 0){
        ctx.fillStyle = "#000";
        ctx.fillRect(posEnnemiX/tailleCase*tailleCase, posEnnemiY/tailleCase*tailleCase, tailleCase, tailleCase);
        force.display((posEnnemiX/tailleCase*tailleCase) + (tailleCase/2), (posEnnemiY/tailleCase*tailleCase) + (tailleCase/2));
    }
    else if(posEnnemi == 3){
        ctx.fillStyle = "#000";
        ctx.fillRect(posEnnemiX/tailleCase*tailleCase, posEnnemiY/tailleCase*tailleCase, tailleCase, tailleCase);
    }
}

/////////////////////////////////////////////////// conditions fin de partie ///////////////////////////////////////////////////////////////
var vies = 2;
function finDePartie(){
    var posEnnemi = plateau[posEnnemiX/tailleCase][posEnnemiY/tailleCase]

    document.getElementById("score").innerHTML = "Score : " + score;
    document.getElementById("vie").innerHTML = "Vie(s) : " + vies;
   
    if(posHerosX == posEnnemiX && posHerosY == posEnnemiY){
        document.getElementById("player").setAttribute('src', 'audios/sabre.mp3');
        document.getElementById("player").play();
        vies = vies-1;
        document.getElementById("vie").innerHTML = "Vie(s) : " + vies;
        if (posEnnemi == 0 || posEnnemi == 3){
            ctx.fillStyle ="#000"
            ctx.fillRect(posEnnemiX, posEnnemiY, tailleCase, tailleCase);
        }
        posHerosY = 175;
        posHerosX = 50;
        ctx.drawImage(heros,posHerosX,posHerosY);

        posEnnemiY= 75;
        posEnnemiX= 350;
        ctx.drawImage(ennemi,posEnnemiX,posEnnemiY);
        
    }

    if(vies == 0){
        window.alert("L'alliance jedi a failli !");
        window.location.reload();
    }
    else if(score == 1350){
        window.alert("le heros remporte la partie !");
        window.location.reload();
    }
}


