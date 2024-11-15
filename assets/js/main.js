(function($) {
  "use strict";
  
 // menu 
 $('.navbtn,.closebtn').click( function (event){ 
    event.preventDefault() 
    $(this).toggleClass('active');   
    $('.sidePanel').toggleClass('active');   
  }); 


 // menu 
 $('.sidePanel button').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');      
  }); 




 
})(jQuery);
