
	var x="";
	function calculate(value)
	{
		x += value;
		document.getElementsByClassName("screen_text")[0].textContent = x;
	}
	function AC()
	{
		x="";
		document.getElementsByClassName("screen_text")[0].textContent = x;
	}
	function CE()
	{
		x=x.substr(0,(x.length-1));
		document.getElementsByClassName("screen_text")[0].textContent = x;
	}
	function equal()
	{
		try
		{
			x=eval(x).toString();
			document.getElementsByClassName("screen_text")[0].textContent = x;
		}
		catch(ex)
		{
			document.getElementsByClassName("screen_text")[0].textContent = "Syntax Error";
		}
	}


