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

  $('#content1-2').click(function(){
      $('.content').hide();
      $('#content2').toggle();
  });

   $('#content2-1').click(function(){
      $('.content').hide();
      $('#content1').toggle();
  });

  $('#content2-3').click(function(){
      $('.content').hide();
      $('#content3').toggle();
  });

  $('#content3-2').click(function(){
      $('.content').hide();
      $('#content2').toggle();
  });

   $('#content3-4').click(function(){
      $('.content').hide();
      $('#content4').toggle();
  });

   $('#content4-3').click(function(){
      $('.content').hide();
      $('#content3').toggle();
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