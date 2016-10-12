var on_off_count=0, strict_count=0;
var arr=[]; //stores pattern of light blinking 0=green, 1=red, 2=yellow, 3=blue
var count=01, i=0; //count : Value displayed on count screen, i : nth light user is clicking (ex- count=3 so 3 lights will blink so when user press 1st light i increment from 0 to 1 simillarly for each click)

function on_off() //Iterate position of On_Off button and change colour of count to red
{
	on_off_count++; //0=Off , 1=On
	arr=[];    //Reset after triggering On-Off
	cursor("initial");
	document.getElementsByClassName("count")[0].innerHTML = "--";
	if(on_off_count%2==1)
		{document.getElementsByClassName("on_off_inner_btn")[0].style.float = "right";
		 document.getElementsByClassName("count")[0].style.color = "#DC0D29"; //reddish
		}
	else
		{document.getElementsByClassName("on_off_inner_btn")[0].style.float = "left";
		 document.getElementsByClassName("count")[0].style.color = "#32050C"; //dark
		}
}

function strict() // Tell its on or off
{
	if(on_off_count%2==1)
	{
		strict_count++; //0=Off , 1=On
		if(strict_count%2==1)
			 document.getElementsByClassName("strict_led")[0].style.background = "#DC0D29";
		else
			 document.getElementsByClassName("strict_led")[0].style.background = "#32050C";
	}
}

function start()
{
	if(on_off_count%2==1)
	{
		arr=[];    //Reset all global variables when user press start at any time in game
		count=01;
		i=0;
		document.getElementsByClassName("count")[0].innerHTML = "--";
		blinkCount();  //300*6 as blinkCount() will do its action for 300*4 milli seconds so taking 600ms more than that (randomly chose numbers)
		var x = Math.floor(Math.random()*4);
		arr.push(x);
		setTimeout(glowall,300*4); //glowall() delays 1000ms and blinkcount() take 1200ms so providing additional delay of 300*4 in calling glowall() so effective delay is 1000+300*4
	}
}

function glow(x)
{
	switch(x)
	{
		case 0 : document.getElementsByClassName("green")[0].style.background = "#1cff7c";
				 setTimeout(function() {document.getElementsByClassName("green")[0].style.background = "#00a74a";},500);
				 break;
		case 1 : document.getElementsByClassName("red")[0].style.background = "#ff4c4c";
				 setTimeout(function() {document.getElementsByClassName("red")[0].style.background = "#9f0f17";},500);
				 break;
		case 2 : document.getElementsByClassName("yellow")[0].style.background = "#fed93f";
				 setTimeout(function() {document.getElementsByClassName("yellow")[0].style.background = "#cca707";},500);
				 break;
		case 3 : document.getElementsByClassName("blue")[0].style.background = "#1c8cff";
				 setTimeout(function() {document.getElementsByClassName("blue")[0].style.background = "#094a8f";},500);
				 break;
	}
	document.getElementsByClassName("count")[0].innerHTML = count;
}
function play(event)
{
	if(arr.length!=0)
	{
		var x = parseInt(event.srcElement.dataset.value);
		glow(x);
		if(arr[i]==x)
		{
			if(i==arr.length-1)
			{
				var x = Math.floor(Math.random()*4);
				arr.push(x);
				count++;
				i=0;
				setTimeout(glowall,500);
			}
			else
				i++;
		}
		else
		{
			document.getElementsByClassName("count")[0].innerHTML = "!!"
			blinkCount();
			if(strict_count%2==1) //strict-mode
				start();
			else
			{setTimeout(glowall,300*6);  //300*6 as blinkCount() will do its action for 300*4 milli seconds so taking 600ms more than that (randomly chose numbers)
			i=0;}
		}
	}
}

function glowall()
{
	cursor("initial");
	var num=0;
	for(var index=0;index<arr.length;index++)
	{setTimeout(function() {glow(parseInt(arr[num]))},1000*(index+1));
	 setTimeout(function() {num++;},1000*(index+1));
	}
	setTimeout(function() {cursor("pointer")},1000*(index+1));
}

function blinkCount()
{
	for (var j = 0; j < 6; j+=2) 
		{
			setTimeout(function() {document.getElementsByClassName("count")[0].style.color="#32050C";},300*j);
			setTimeout(function() {document.getElementsByClassName("count")[0].style.color="#DC0D29";},300*(j+1));
		}
}

function cursor(val)
{
	var button = document.querySelectorAll(".inner_button");
	button[0].style.cursor = val;
	button[1].style.cursor = val;
	button[2].style.cursor = val;
	button[3].style.cursor = val;
}