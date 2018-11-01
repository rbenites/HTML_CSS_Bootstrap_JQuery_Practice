$(document).ready(function(){
// alert("Hello Welcome to my page");

// /*Add class to buttons and ID*/
// $("button").addClass("animated bounce");
// $('#target2').addClass("tada");


// /*Removed the btn-primary class from the html button target 1*/
// $("button").removeClass("btn-primary");

// /*Add css to button*/
// $('#target2').css("color:red;");

// /*changeing prop from disable to enabled*/
// $("#target1").prop("disabled",false);

// /*adding text */
// $("#jqHeader").html("<h3>This is the left column</h3>");

// /*move button1 from the left to the right */
// $("#target1").appendTo(".right");
// /*remove button2*/
// $("#target2").remove();

//appending from one area to another
//$(".left").clone().appendTo(".right");

/*change color from parent*/
$(".left").parent().css("background-color","green");

/*parent targeting child*/
$(".jqExamples").children().css("background-color","red");

/*targeting nth child*/
//$(".target:nth-child(3)").addClass("animated shake");

/*target odd_even children*/
$(".target:odd").addClass("animated shake");
$(".target:even").addClass("animated tada");
});