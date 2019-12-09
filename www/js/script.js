$(document).ready(function(){


      function apparitionPage2(){
        $( '.case' ).click(function() {
          $('.page2').toggleClass("active");
        });

        $( '.croix' ).click(function() {
          $('.page2').toggleClass("active");
        });
      }
      apparitionPage2();


	  function modifMenu(){
        $( '.div_img' ).click(function() {
          $(this).addClass("active");
          $('.div_img').not(this).removeClass("active");
        });


      }
      modifMenu();
      
    });