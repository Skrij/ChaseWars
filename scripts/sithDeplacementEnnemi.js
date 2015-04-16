/////////////// déplacement ennemi (yoda) //////////////////////////////////////////////////
var directionEnnemi=0;
var posEnnemiX= tailleCase*14;
var posEnnemiY= tailleCase*3;
var ennemi = new Image();
    ennemi.src = 'images/yoda1-2.png';

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
        ennemi.src = 'images/yoda4-2.png';
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
        ennemi.src = 'images/yoda2-2.png';
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
        ennemi.src = 'images/yoda3-2.png';
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
        ennemi.src = 'images/yoda1-2.png';
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
        posEnnemiX = tailleCase*20;
        posEnnemiY = tailleCase*6;
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
        posEnnemiX = tailleCase;
        posEnnemiY = tailleCase*9;
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