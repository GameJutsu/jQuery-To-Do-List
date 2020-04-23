//Strikethrough Effect
$("ul").on("click", "li", function()
{
	$(this).toggleClass("completed");
});

//Remove function
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
	{
		$(this).remove();
	})
	event.stopPropagation();
});

//Adding function
$("input[type='text']").keypress(function(event)
{
	if(event.which === 13)
	{
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + $(this).val() + "</li>");
		$(this).val("");
	}
});

//Toggling text
$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle(500);
});