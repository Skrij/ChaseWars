     //gère le scroll automatique du bouton play
           $(document).ready(function() {
                $('.scrollTo').click( function() {
                    var page = $(this).attr('href'); 
                    var speed = 1000; 
                    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
                    return false;
                });
            });
 

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

