$(function(){

//menu
$(".main > li").hover(function(){
    $(".sub").stop().show();
}, function(){
    $(".sub").stop().hide();
})///




//slide 1
// $(".fade li").eq(0).siblings().hide();
// var n = 0;
// setInterval(function(){
//     $(".fade li").eq(n).fadeOut();
//     if( n == 2){
//         n=0;
//     }else{
//         n++;
//     }
//     $(".fade li").eq(n).fadeIn();
// },2500)//




//slide 2
$(".fade li").eq(0).siblings().hide();
var n = 0;
var count = $(".fade li").length -1 ;
setInterval(function(){
    $(".fade li").eq(n).fadeOut();
    n = (n + 1) % count;
    $(".fade li").eq(n).fadeIn();
},2500)//



//pop
$(".p_click").click(function(){
    $(".pop").fadeIn();
})
$(".close").click(function(){
    $(".pop").fadeOut();
})




//tab
$(".contents h2").click(function(){
    $(".contents h2").removeClass("on");
    $(this).addClass("on");

    $(".contents ul").removeClass("active")
    $(this).next().addClass("active");
})



})//jquery