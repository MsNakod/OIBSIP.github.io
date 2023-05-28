let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let hist = document.getElementById('history');

let string = "";
let history = "";
let arr = Array.from(buttons);
arr.forEach(button => {
	button.addEventListener('click' , (e) => {
		if(e.target.innerHTML == "="){
			string = eval(string);
			let expression = input.value;
			hist.innerHTML += "<div style=\"text-align: right;\"><h3>"+expression+"</h3><h3>"+string+"</h3></div>"

			input.value = string;
			// history+=string;
			// hist.innerText=history;
		}
		else if(e.target.innerHTML == 'AC')
		{
			string = "";
			input.value = string;
		}
		else if(e.target.innerHTML == 'Del'){
			string = string.substring(0, string.length-1);
			input.value = string;
		}

		else{
				if(e.target.className =='btnOper')
				{
	        		//operations on a list
	        		var charsToSearch = ["+","-","*","/","%"];
	            	//check what was the last char
	            	var lastChar =  string.slice(-1);
	            	//if last char was a different operation, replace it with new
	            	if(e.target.innerHTML != lastChar)
	            	{
	            		if(charsToSearch.indexOf(lastChar) != -1)
	            		{
	                		var str = string.slice(0, -1);
	                		str = str + e.target.innerHTML; 
	                		input.value = str;
	                		return;
	              		}              
	           	    }
	            	switch(lastChar)
	            	{
		              case '+':
		                return;
		              case '-':
		                return;
		              case '*':
		                return;
		              case '/':
		                return;
	                }
	               	 string+= e.target.innerHTML;
	               	 input.value=string;
	            }

	            else
	            {
	            	string+=e.target.innerHTML;
			        input.value=string;
	            }
			    
		}
		
	})
})