function submit_btn()
{
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var message = document.getElementById("message");
	if (username.value=="") 
		message.textContent = "User Name not Entered";
	else if (password.value=="") 
		message.textContent = "Password not Entered";
	else if (username.value.length<=6) 
		message.textContent = "User Name too short (Must be greater than 6)";
	else if (password.value.length<=5) 
		message.textContent = "Password too short (Must be greater than 5)";
	else
		message.textContent="";
}

function register()
{
	document.getElementsByClassName("jumbotron")[0].style.visibility="visible";
}

function hide_btn()
{
	document.getElementsByClassName("jumbotron")[0].style.visibility="hidden";
}