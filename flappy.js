// animation écran d'accueil
function play(){
	
 

 	$('.first').slideUp(400, function(){

	$('section').slideDown();
 	$('section').css({
 		display: 'flex',
 		justifyContent: 'center',
 		alignItems: 'center'
 	})

 	});

 	$('#btn').hide();


 	//mouvement tuyeau
// function animpipe(){

 	$('#pipe').animate({right: '+=950px'}, 7000, 'linear');			//, function hauteur(){


 	// 	var min = 100

 	// 	var max = 300

 	// 	var htr = max - min ;

 	// 	$('#pipe').css('top', htr)
 	// }  )

 	// }
 };


	




	

	

 	
// function a(){
//  		alert('aïïïe')
//  	};





document.addEventListener("keydown",saut, false); 
function saut(){
// alert (parseInt(event.keycode));




//flappy projet

	var flappy = $('#bird') ;

	var fleche = event.which ;

	if (fleche ==38) { // fleche haut
		flappy.animate({marginBottom: '+=100px'}, 50); }

	if (fleche ==40) { // fleche bas
		flappy.animate({marginTop: '+=100px'}, 50); }

	if (fleche ==39) { //fleche gauche
		flappy.animate({marginLeft: '+=100px'}, 50); }

	if (fleche ==37) { //fleche droite
		flappy.animate({marginRight: '+=100px'}, 50); }


	}




// flappy classic
	


	// var flappy = $('#bird');

	// var espace = event.which ;



	

	// if (espace ==32) {
	// 	$(flappy).animate({marginBottom: '+=100px'}, 200);}
		
 
//  	else {

// // // function gravité(){


// 	// $('#bird').animate({top : '+=1500px'}, 7000, 'linear');} 
// 	$(flappy).animate({right: '+=1000px'}, 7000, 'linear');}

// 	setTimeout('gravité', 800);

// }

//}






