(function ($) {
    $(document).ready(function(){

        //hide .navbar first
        $(".navbarscroll").hide();

        //fade in .navbar
        $(function () {
            $(window).scroll(function () {

                //set distance user needs to scroll before we start the fadein
                if ($(this).scrollTop() > 100) {
                    $('.navbarscroll').fadeIn();
                }else{
                    $('.navbarscroll').fadeOut();
                }
            });
        });
        
    });
}(jQuery));

//scroll to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Image Gallery
$(".ig-box > div").on('click','img',function(){
    var src = $(this).attr("src");
    $(".ig-view > img").attr("src", src);
  });
  var c1 = $(".c1").attr("src");
  var c2 = $(".c2").attr("src");
  var c3 = $(".c3").attr("src");
  var c4 = $(".c4").attr("src");
  var arr = [c1,c2,c3,c4];
  var n = 0;
  
  $(".right").on('click',function(){
    $(".ig-view > img").attr("src",arr[n]);
    n += 1;
    if(n==4){
      n=0;
    }
  });

// welcome banner
