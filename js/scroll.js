$(function(){
$.fn.scrollToTop=function(){
$(this).hide().removeAttr("href");
if($(window).scrollTop()!="0"){
  $(this).fadeIn("slow")
}
var scrollDiv=$(this);
$(window).scroll(function(){
if($(window).scrollTop()=="0"){
$(scrollDiv).fadeOut("slow")
}else{
$(scrollDiv).fadeIn("slow")
}
});
/*$(this).click(function(){
$("html, body").animate({scrollTop:0},"slow")
})*/
}
});
$(function() {$("#toTop").scrollToTop();});


$(document).ready(function (){
    $("#to_namber").click(function (){
      console.log("rtrtr")
        $('html, body').animate({
            scrollTop: $("#our_contact").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#toTop").click(function (){
      console.log("rtrtr")
        $('html, body').animate({
            scrollTop: $("#our_contact").offset().top
        }, 1000);
    });
});
$(document).ready(function (){
    $("#click-up").click(function (){
      console.log("rtrtr")
        $('html, body').animate({
            scrollTop: $("#our_contact").offset().top
        }, 1000);
    });
});
$(document).ready(function (){
    $("#click-up-too").click(function (){
      console.log("rtrtr")
        $('html, body').animate({
            scrollTop: $("#our_contact").offset().top
        }, 1000);
    });
});
