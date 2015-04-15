var force = new Force(2);
var score = 0;


// initialisation et affichage du tableau de jeu

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
    document.body.appendChild(canvas);
    ctx.font = "12px Helvetica";

    var yoda = new Image();
    yoda.src = 'images/yoda1-2.png';
    var posX=50;
    var posY=175;
    yoda.onload = function () {
        ctx.drawImage(yoda, posX, posY);
    };

    var vador = new Image();
    vador.src = 'images/vador.png';
    var posVX = 350;
    var posVY = 75;
    vador.onload = function(){
        ctx.drawImage(vador,posVX, posVY);
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
                ctx.fillRect(i*25, j*25, 25, 25);
            }
            else if(plateau[i][j] == 0){
                ctx.fillStyle = "#000";
                ctx.fillRect(i*25, j*25, 25, 25);
                force.display((i*25) + (25/2), (j*25) + (25/2));
            }
            else if(plateau[i][j] == 2){
                ctx.fillStyle = "#808080";
                ctx.fillRect(i*25, j*25, 25, 25);
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

//deplacement yoda
var direction=0;
var posX=50;
var posY=175;
var yoda = new Image();
    yoda.src = 'images/yoda1-2.png';

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
            yoda.src = 'images/yoda4-2.png';
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
        yoda.src = 'images/yoda2-2.png';
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
        yoda.src = 'images/yoda3-2.png';
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
        yoda.src = 'images/yoda1-2.png';
        mvtB=window.setInterval("avancerBottom()",200);
        direction=4;
        }
    }
},false);


function avancerLeft(){
    finDePartie();
    if(plateau[(posX/25)-1][posY/25] == 1){
        posX=posX;
    }
    else if(plateau[(posX/25)-1][posY/25] == 0){
        score = score +10;
        plateau[posX/25-1][posY/25] = 3;
        draw();
        posX-=25;
        ctx.drawImage(yoda,posX,posY);
    }
    else if(plateau[(posX/25-1)][posY/25] == 2){
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posX = 500;
        posY = 150;
    }
    else if(plateau[posX/25-1][posY/25] == 3){
        draw();
        posX-=25;
        ctx.drawImage(yoda,posX,posY);
    }
}

function avancerUp(){
    finDePartie();
    if(plateau[posX/25][(posY/25)-1] == 1){
        posY = posY;
    }
    else if(plateau[posX/25][(posY/25)-1] == 0){
        score = score +10;
        plateau[posX/25][posY/25-1] = 3;
        draw();
        posY-=25;
        ctx.drawImage(yoda,posX,posY);
    }
    else if(plateau[posX/25][posY/25-1] == 3){
        draw();
        posY-=25;
        ctx.drawImage(yoda,posX,posY);
    }
}

function avancerRight(){
    finDePartie();
    if(plateau[(posX/25)+1][posY/25] == 1){
        posX = posX;
    }
    else if(plateau[(posX/25)+1][posY/25] == 0){
        score = score +10;
        plateau[posX/25][posY/25] = 3;
        draw();
        posX+=25;
        ctx.drawImage(yoda, posX, posY);
    }
    else if(plateau[(posX/25+1)][posY/25] == 2){
        draw();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posX = 25;
        posY = 225;
        ctx.drawImage(yoda, posX, posY);
    }
    else if(plateau[posX/25+1][posY/25] == 3){
        draw();
        posX+=25;
        ctx.drawImage(yoda,posX,posY);
    }
}

function avancerBottom(){
    finDePartie();
    if(plateau[posX/25][(posY/25)+1] == 1){
        posY = posY;
    }
    else if(plateau[posX/25][(posY/25)+1] == 0){
        score = score +10;
        plateau[posX/25][posY/25+1] = 3;
        draw();
        posY+=25;
        ctx.drawImage(yoda,posX,posY);
    }
    else if(plateau[posX/25][posY/25+1] == 3){
        draw();
        posY+=25;
        ctx.drawImage(yoda,posX,posY);
    }
}


// déplacement dark vador
var directionV=0;
var posVX= 350;
var posVY= 75;
var vador = new Image();
    vador.src = 'images/vador.png';

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 81){
        if(directionV==1){
        }
        else {
            if(directionV==2){
                clearInterval(VmvtT);
            }
            if(directionV==3){
                clearInterval(VmvtR);
            }
            if(directionV==4){
                clearInterval(VmvtB);
            }
            VmvtL=window.setInterval("avancerLeftV()",200);
            directionV=1;
        }
    }
    if(e.keyCode == 90){
         if(directionV==2){
        }
        else {
            if(directionV==1){
                clearInterval(VmvtL);
            }
            if(directionV==3){
                clearInterval(VmvtR);
            }
            if(directionV==4){
                clearInterval(VmvtB);
            }
        VmvtT=window.setInterval("avancerUpV()",200);
        directionV=2;
        } 
    }
    if(e.keyCode == 68) {
         if(directionV==3){
        }
        else {
            if(directionV==2){
                clearInterval(VmvtT);
            }
            if(directionV==1){
                clearInterval(VmvtL);
            }
            if(directionV==4){
                clearInterval(VmvtB);
            }
        VmvtR=window.setInterval("avancerRightV()",200);
        directionV=3;
        }
    }
    if(e.keyCode == 83) { 
         if(directionV==4){
        }
        else {
            if(directionV==2){
                clearInterval(VmvtT);
            }
            if(directionV==1){
                clearInterval(VmvtL);
            }
            if(directionV==3){
                clearInterval(VmvtR);
            }
        VmvtB=window.setInterval("avancerBottomV()",200);
        directionV=4;
        }
    }
},false);


function avancerLeftV(){
    finDePartie();
    if(plateau[(posVX/25)-1][posVY/25] == 1){
        posVX=posVX;
    }
    else if(plateau[(posVX/25)-1][posVY/25] == 0){
        drawV();
        posVX-=25;
        ctx.drawImage(vador,posVX,posVY);
    }
    else if(plateau[(posVX/25-1)][posVY/25] == 2){
        drawV();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posVX = 500;
        posVY = 150;
        ctx.drawImage(vador, posVX, posVY);
    }
    else if(plateau[(posVX/25-1)][posVY/25] == 3){
        drawV();
        posVX-=25;
        ctx.drawImage(vador, posVX, posVY);
    }
}

function avancerUpV(){
    finDePartie();
    if(plateau[posVX/25][(posVY/25)-1] == 1){
        posVY = posVY;
    }
    else if(plateau[posVX/25][(posVY/25)-1] == 0){
        drawV();
        posVY-=25;
        ctx.drawImage(vador, posVX, posVY);
    } 
    else if(plateau[posVX/25][(posVY/25)-1] == 3){
        drawV();
        posVY-=25;
        ctx.drawImage(vador, posVX, posVY);
    }
}

function avancerRightV(){
    finDePartie();
    if(plateau[(posVX/25)+1][posVY/25] == 1){
        posVX = posVX;
    }
    else if(plateau[(posVX/25)+1][posVY/25] == 0){
        drawV();
        posVX+=25;
        ctx.drawImage(vador, posVX, posVY);
    }
    else if(plateau[(posVX/25+1)][posVY/25] == 2){
        drawV();
        document.getElementById("player").setAttribute('src', 'audios/porte.mp3');
        document.getElementById("player").play();
        posVX = 25;
        posVY = 225;
        ctx.drawImage(vador, posVX, posVY);
    }
    else if(plateau[(posVX/25+1)][posVY/25] == 3){
        drawV();
        posVX+=25;
        ctx.drawImage(vador, posVX, posVY);
    }
}

function avancerBottomV(){
    finDePartie();
    if(plateau[posVX/25][(posVY/25)+1] == 1){
        posVY = posVY;
    }
    else if (plateau[posVX/25][(posVY/25)+1] == 0){
        drawV();
        posVY+=25;
        ctx.drawImage(vador, posVX, posVY);
    }
    else if(plateau[posVX/25][(posVY/25)+1] == 3){
        drawV();
        posVY+=25;
        ctx.drawImage(vador, posVX, posVY);
    }
}



//changement
function draw(){
    if(plateau[posX/25][posY/25] = 3){
        ctx.fillStyle='#000';
        ctx.fillRect(posX/25*25, posY/25*25, 25, 25);
    }
}

function drawV(){
    if(plateau[posVX/25][posVY/25] == 0){
        ctx.fillStyle = "#000";
        ctx.fillRect(posVX/25*25, posVY/25*25, 25, 25);
        force.display((posVX/25*25) + (25/2), (posVY/25*25) + (25/2));
    }
    else if(plateau[posVX/25][posVY/25] == 3){
        ctx.fillStyle = "#000";
        ctx.fillRect(posVX/25*25, posVY/25*25, 25, 25);
    }
}

// fin de partie
var vies = 2;
function finDePartie(){
    document.getElementById("score").innerHTML = "Score : " + score;
    document.getElementById("vie").innerHTML = "Vie(s) : " + vies;
    if(posX == posVX && posY == posVY){
        document.getElementById("player").setAttribute('src', 'audios/sabre.mp3');
        document.getElementById("player").play();
        vies = vies-1;
        document.getElementById("vie").innerHTML = "Vie(s) : " + vies;
    }
    if(vies == 0){
        window.alert("L'alliance jedi a failli !");
        window.location.reload();
    }
    else if(score == 1350){
        window.alert("Yoda remporte la partie !");
        window.location.reload();
    }
}


