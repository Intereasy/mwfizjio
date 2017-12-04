//loader
$(function(){
    $(document).ready(function() {
      loader();
      hover();

    })
});
document.addEventListener('scroll', function (event) {
      floatMenu();
});
//loader
function loader(){
  setTimeout(function(){
    $('#loader').addClass('loaded');
  }, 2500);
  setTimeout(function(){
    $('#loader').css('display','none')
  }, 3000);
}
//hover menu
function hover(){
  $("nav ul li a").hover(
    function() {
      $( this ).addClass("hover");
      $("nav ul li").find(".active").addClass("unactive").removeClass("active");
    }, function() {
      $( this ).removeClass("hover");
      $("nav ul li").find(".unactive").addClass("active").removeClass("unactive");
    }
  );
}

//floating menu
function floatMenu(){
  var navPosition = $("nav").position();
  var scrollPosition = $(window).scrollTop();
  if (scrollPosition>navPosition.top){
    $(".top-bar").addClass("float-menu");
    $("#logo a img:nth-child(1)").css("display","none");
    $("#logo a img:nth-child(2)").attr("src","img/logo-2-small.png");
    console.log(scrollPosition);
  } else {
    $(".top-bar").removeClass("float-menu");
    $("#logo a img:nth-child(1)").css("display","inline");;
    $("#logo a img:nth-child(2)").attr("src","img/logo-2.png");
        console.log(scrollPosition);
  }
}
