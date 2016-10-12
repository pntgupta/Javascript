var arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var count=0, time=300;

function create_grid() //To create 4X4 grid
{
	var p= document.getElementsByClassName("outer")[0];
	for(var i=0;i<4;i++)
	{
		p.innerHTML += "<div class='row inner'></div>";
		for(var j=1;j<=4;j++)
			document.getElementsByClassName('inner')[i].innerHTML += "<div onclick='func(event)' data-value="+((i*4)+j)+"></div>";
	}	
}

function func(event) // Main function that execute after pressing any grid on screen
{
	var x = parseInt(event.srcElement.dataset.value);
	var row = parseInt((x-1)/4);
	var col = x%4? x%4-1: 3;
	if(count==0)
		{
			event.srcElement.className="green";
			arr[row][col]="g";
			random(arr,row,col);
			count++;
			setInterval(timer,1000); 
		}

	else if(arr[row][col]=="r")
		{
			event.srcElement.className="red";
			alert('GAME OVER');
			window.location.reload();
		}
	else if(arr[row][col]=="g"&&event.srcElement.className!="green")
		{
			event.srcElement.className="green";
			random(arr,row,col);
			count++;
		}
	document.getElementById("count_display").textContent = "Count : "+count;
	if(time==0)
		{alert("Time Up!");
		window.location.reload();
	}
}

function random(arr,row,col) //Assign randomly 1 green and >=0 red values to neighbouring grids
{
	var red=-1, temp=[];
	for(var j=-1;j<=1;j+=2)
		{
			if(((row-j)>=0&&(row-j)<4)&&!isNaN(arr[row-j][col]))
			red +=1;
			if(((col-j)>=0&&(col-j)<4)&&!isNaN(arr[row][col-j]))
			red +=1;
		}

		temp[0] = "g";
	for (var i = 1; i <= red; i++) 
	{
		temp.push("r");
	}

	var num=-1,z=null;
	while(num<=2)
	{
		if(((row-num)>=0&&(row-num)<4)&&!isNaN(arr[row-num][col]))
		{
			var y = Math.floor(Math.random()*temp.length);
			arr[row-num][col]=temp[y];
			z = temp.splice(y,1);
		}
		if(((col-num)>=0&&(col-num)<4)&&!isNaN(arr[row][col-num]))
		{
			var y = Math.floor(Math.random()*temp.length);
			arr[row][col-num]=temp[y];
			z = temp.splice(y,1);
		}
		num+=2;
	}
	if(z==null)
		alert("You Won!  Count: "+(count+1)+"  Time Remaining= "+parseInt(time/60)+" : "+parseInt(time%60));
}

function timer() // Countdown Timer
{
	time--;
	document.getElementById("min").innerHTML = parseInt(time/60);
	document.getElementById("sec").innerHTML = parseInt(time%60);
}