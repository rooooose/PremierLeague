$(document).ready(function(){


      function apparitionPage2(){
        $( '.square' ).click(function() {
          $('.page2').toggleClass("active");
        });

        $( '.cross' ).click(function() {
          $('.page2').toggleClass("active");
        });
      }
      apparitionPage2();


	  function modifMenu(){
        $( '.img_container' ).click(function() {
          $(this).addClass("active");
          $('.img_container').not(this).removeClass("active");
        });


      }
      modifMenu();
      
    });