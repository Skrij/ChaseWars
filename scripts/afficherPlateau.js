/////  dessiner le plateau   /////////////////////////////////
function afficherPlateau(){
    for(var i=0; i<plateau.length; i++){
        for(var j=0; j<plateau[i].length; j++){
            if(plateau[i][j] === 1){
                ctx.fillStyle = couleurMur;
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
            }
            else if(plateau[i][j] == 0){
                ctx.fillStyle = couleurSol;
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
                force.display((i*tailleCase) + (tailleCase/2), (j*tailleCase) + (tailleCase/2));
            }
            else if(plateau[i][j] == 2){
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(i*tailleCase, j*tailleCase, tailleCase, tailleCase);
            }
        }
    }
}
afficherPlateau();