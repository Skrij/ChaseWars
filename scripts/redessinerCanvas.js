//////////// redessiner le canvas après le passage du personnage ////////////////////////////////////////////
function draw(){
    if(plateau[posHerosX/tailleCase][posHerosY/tailleCase] = 3){
        ctx.fillStyle= couleurSol;
        ctx.fillRect(posHerosX/tailleCase*tailleCase, posHerosY/tailleCase*tailleCase, tailleCase, tailleCase);
    }
}

function drawEnnemi(){
    var posEnnemi = plateau[posEnnemiX/tailleCase][posEnnemiY/tailleCase]
    if( posEnnemi == 0){
        ctx.fillStyle = couleurSol;
        ctx.fillRect(posEnnemiX/tailleCase*tailleCase, posEnnemiY/tailleCase*tailleCase, tailleCase, tailleCase);
        force.display((posEnnemiX/tailleCase*tailleCase) + (tailleCase/2), (posEnnemiY/tailleCase*tailleCase) + (tailleCase/2));
    }
    else if(posEnnemi == 3){
        ctx.fillStyle = couleurSol;
        ctx.fillRect(posEnnemiX/tailleCase*tailleCase, posEnnemiY/tailleCase*tailleCase, tailleCase, tailleCase);
    }
}
