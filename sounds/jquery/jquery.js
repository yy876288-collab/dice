alert("hello")
$("h1").css("color","red");
$("h1").addClass("big-title");
$("h1").html("<em>hey</em>");
$("h1").text("hello");
$("button").on("click",function(){
    $("h1").css("color","purple")
});
$("h1").append("<button>new</button>");
$("h1").animate({opacity: 0.5});
$("h1").slideUp().slideDown().animate({opacity:0.5});
$("a").attr("href","https://www.yahoo.com");



