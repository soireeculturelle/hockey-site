$(document).ready(function(){
  $('.dropdown').click(function(){
      $('.dropdown-menu').hide();
      $(this).find('.dropdown-menu').toggle();
      
  $('.main').click(function(){
      $('.dropdown-menu').hide();
  });
  $('.supporting').click(function(){
      $('.dropdown-menu').hide();
    });
      
    
  });

  /* $('.button-next').click(function(){
        $('.content').hide();
         $(this).find('div').next('.content').toggle();
         $(this).hide();

  }); */
/*$('.button-next').click(function(){
      $('.content').hide();
    $(this).parents().find('div').next(".content").toggle();
    $(this).parent().find('div').toggle();
  
  }); */

  $('#crosby1-2').click(function(){
      $('.content').hide();
      $('#crosby2').toggle();
  });

   $('#crosby2-1').click(function(){
      $('.content').hide();
      $('#crosby1').toggle();
  });

  $('#crosby2-3').click(function(){
      $('.content').hide();
      $('#crosby3').toggle();
  });

  $('#crosby3-2').click(function(){
      $('.content').hide();
      $('#crosby2').toggle();
  });


//Issue: getting next question to appear after correct answer (parents)//
 
 /*$(".correct").click(function(){
     $('.quiz').hide();
     $(this).parent().find('div').next(".q").toggle(); 
 }); */

//doesnt work//
  $('.correct').click(function(){
      $('.quiz').hide();
      $(this).parents().find('div').next(".q").toggle();
  });

});