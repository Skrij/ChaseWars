//////// conditions fin de partie (sith) ///////////////////////////////////////////////////////////////
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
            ctx.fillStyle = couleurSol;
            ctx.fillRect(posEnnemiX, posEnnemiY, tailleCase, tailleCase);
        }
        posHerosY = tailleCase*7;
        posHerosX = tailleCase*2;
        ctx.drawImage(heros,posHerosX,posHerosY);

        posEnnemiY= tailleCase*3;
        posEnnemiX= tailleCase*14;
        ctx.drawImage(ennemi,posEnnemiX,posEnnemiY);
        
    }

    if(vies == 0){
        window.alert("Beaucoup encore il te reste à apprendre.");
        window.location.reload();
    }
    else if(score == 1350){
        window.alert("Votre manque de foi me consterne.");
        window.location.reload();
    }
}