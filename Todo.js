$("ul").on("click","li",function(){
	$(this).toggleClass("toggle");
});
$("ul").on("click","span",function(){
  $(this).parent().fadeOut(500,function(){
       $(this).remove();
  });
});
$("input").keypress(function(event){
	if(event.which===13){	
	$("ul").append("<li>"+"<span><i class='fa fa-trash-o'></i></span> "+$("input").val()+"</li>");
	$("input").val("");
    }
});
 $(".fa-plus").click(function(){
 	$("input").fadeToggle();
 })