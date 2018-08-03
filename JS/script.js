
$(function(){


// Exercice 1

    // permet de faire dispraitre au click le pargraphe 5

    // console.log('Aperture Sience');
    // $('#part5').hide();
    
    // $('#button').click(function(){
    //     $('#part5').show();
    
    // });


    // console.log('Aperture Sience');
    // $('#part5').hide();
    // SlideUP permet de fermer la balise SlideDown d'afficher fadeIn un fondue ouvert fadeOut un fondue fermer
    // $('#button').click(function(){
    //     $('#part5').slideUp(1000);
    
    // });
    // console.log('Aperture Sience');
    // // toggle permet d'afficher et de s'afficher une balise sans besoin d'écrire 389 lignes de code.
    //  $('#button').click(function(){
    //         $('#part5').slideToggle(1000, function(){
    //             $('#part4').slideToggle(1000, function(){
    //                 $('#part3').slideToggle(1000)
    //             });
    //         });
        
//         });
        
//         // Permet de fermer et ouvrir une balise en même temps
//         console.log('Aperture Sience');
//         $('#button').click(function(){
//             $('#button').click(function(){
//                 $('#part5, #part4').slideToggle(1000);
//         });




// Exercice2 

// console.log('document chargé');
// $('#button').click(function(){
//      $('#carre').animate({
//            left: '600px',
           
//     }, 200, function(){
//         $('#carre').animate({
//             top: '150px',
//         }, 200, function(){
//             $('#carre').animate({
//                 'border-radius': '100%',
//             },200);
//             });
//         });
//     });
// });  

// $('#stop').click(function(){
//     $('#carre').stop();
// })
//     console.log('document chargé');
//     $('#reset').click(function(){
//         $('#carre').animate({
//             'border-radius': '0%',
              
//         }, 200, function(){
//             $('#carre').animate({
//                 top: '50px',
                  
//             }, 200, function(){
//                 $('#carre').animate({
//                 left: '50px',
   
//             },200);
//         });
//     });




// Exercice 3

// console.log('document chargé');
// $('#start').click(function(){
//     // var montext= $('#part4').html('Vous passez ces salles de tests plus vite que je n arrive à les construire, n hésitez pas à lever le pied un peu');
//     // console.log(montext);
   
//     var nom = $("#name").val();
//     // $('div').append("<p id='#resultat'>Avec append"  + nom + "</p>");
//     // $('div').prepend("<p id='#resultat'>Avec prepend"  + nom + "</p>");
//     $('div').html("<p id='#resultat'>"  + nom + "</p>");
// })



//exercice 4

console.log('document ready');
$("#envoie").click(function(){
    var nom = $("#name").val();

    var prenom = $("#nickname").val();
    
    var age = $("#age").val();

        if (age >= 18)
        {
            $('#ex4').append("<p> Tu t'appelle " + nom + " Que c'est moche " + prenom + " C'est l'age d'un veillard " + age + " Bienvenus sur le site de L'amour " + "</p>");
        }
        else if (age <=17 )
        {
            $('#ex4').append("<p> Tu t'appelle " + nom + " Que c'est moche " + prenom + " C'est l'age d'un BEBE " + age + " </p> ");
        }
        else{
            $('#ex4').append("<p> Pas Compris " + "</p>");
        }

});


});       

