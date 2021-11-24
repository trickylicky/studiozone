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
$(document).ready(function() {
    $('form#apply').submit(function(answer){
        answer.preventDefault();
        var nameInput = $('#name').val();
        var emailInput = $('#email').val();
        var textAreaInput = $('#message').val();
        if($('#name').val() && $('#email').val()){
        alert(nameInput + ", we have received your message. Thank you for reaching out to us."+ " Your Email address:" + emailInput );
        }else{
            alert('enter a valid name and email');
        }}}