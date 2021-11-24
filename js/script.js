// $(document).ready(function(){
// $("p").click(function(){
//  alert("is this working");
// })
$(".show0").click(function(){
    $(".hide0").slideToggle();
    $(".show0").slideToggle();
});
$(".hide0").click(function(){
    $(".show0").slideToggle();
    $(".hide0").slideToggle();
});
$(".show1").click(function(){
    $(".hide1").slideToggle();
    $(".show1").slideToggle();
});
$(".hide1").click(function(){
    $(".show1").slideToggle();
    $(".hide1").slideToggle();
});
$(".show2").click(function(){
    $(".hide2").slideToggle();
    $(".show2").slideToggle();
});
$(".hide2").click(function(){
    $(".show2").slideToggle();
    $(".hide2").slideToggle();
});
function submit(){
   var Email = $('#email').val();
   var Name = $('#name').val();
   var Message = $('#message').val();
   if($('#name').val() && $('#email').val()){ 
       alert(Name+"we have received your message through yoru email"+ Email + "Thank you fro reaching out to us.!")
}
};
$('#work1').hover(function(){
    $(".road1").toggle();
});
$('#work2').hover(function(){
    $(".road2").toggle();
});
$('#work3').hover(function(){
    $(".road3").toggle();
});
$('#work4').hover(function(){
    $(".road4").toggle();
});
$('#work5').hover(function(){
    $(".road5").toggle();
});
$('#work6').hover(function(){
    $(".road6").toggle();
});
$('#work7').hover(function(){
    $(".road7").toggle();
});
$('#work8').hover(function(){
    $(".road8").toggle();
});