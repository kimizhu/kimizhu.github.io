$("#page").prepend("<div id='archived_warning'>This blog has been archived!</div>");
var content = $("#content").html();
if(content !='')
{ 
	content ='<p>'+ content.replace(/\n/g,'</p> <p>').replace(/\r\n/g,'</p> <p>' )+'</p>'; 
	$("#content").html(content);
}
var page = $("#page").html();
