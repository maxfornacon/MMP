/*
Seite 1 3 5 greift auf css margin vom body zu hab ich mir so gedacht !
seite 1 verschiebt sich nach rechts beim seitenwechsel und seite 2 nach links
um einen flüssigen slideeffekt zu schaffen
*/
var contentwidth = $("body").width();
$("#link").click(function()
{
$("body").animate({"margin-right":"+"+ contentwidth},function()
{location.href="test.html";});
});

//Seite 2 4 6 
var contentwidth = $("body").width();
$("#link").click(function()
{
$("body").css({"margin-left":"-"+ contentwidth}).animate({"margin-left":"1%"});
});
