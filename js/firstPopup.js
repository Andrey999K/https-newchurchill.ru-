// $(document).ready(function () {
(function($) {
    $(function() 
    {
      var cookieOptions = { expires: 3, path: '/' };
      if ($.cookie('visit') == undefined) {
 
        function getWindow(){
          $('.modalWindow').arcticmodal({
            closeOnOverlayClick: false,
            closeOnEsc: false
          });
        };
 
        setTimeout (getWindow, 500);
      }
 
      $.cookie('smartCookies', true, {
        expires: 180, 
        path: '/'
      });
 
    })

   
  })(jQuery)

// })