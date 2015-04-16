/////////////////   deplacement heros (sith) ///////////////////////////////////////////////
var direction=0;
var posHerosX=tailleCase*2;
var posHerosY=tailleCase*7;
var heros = new Image();
    heros.src = 'images/vador1-2.png';

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
            heros.src = 'images/vador4-2.png';
            mvtL=window.setInterval("avancerLeft()",100);
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
        heros.src = 'images/vador2-2.png';
        mvtT=window.setInterval("avancerUp()",100);
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
        heros.src = 'images/vador3-2.png';
        mvtR=window.setInterval("avancerRight()",100);
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
        heros.src = 'images/vador1-2.png';
        mvtB=window.setInterval("avancerBottom()",100);
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
        // passage dans le tunnel
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posHerosX = tailleCase*20;
        posHerosY = tailleCase*6;
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
// passage dans le tunnel
    else if(droiteHeros == 2){
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posHerosX = tailleCase;
        posHerosY = tailleCase*9;
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
}

