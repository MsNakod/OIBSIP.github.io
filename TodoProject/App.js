
const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
const task = document.querySelector('.Tasks');
const Completed = document.querySelector('.Completed');

class item{
	constructor(itemName)
	{
		this.createDiv(itemName);
	}

	createDiv(itemName)
	{
		let input = document.createElement('input');
		input.value=itemName;
		input.disabled=true;
		input.classList.add('item_input');
		input.type="text";

		let itemBox = document.createElement('div');
		itemBox.classList.add('item');

		let editButton=document.createElement('button');
		editButton.innerHTML="Edit";
		editButton.classList.add('editButton');

		let removeButton=document.createElement('button');
		removeButton.innerHTML="Delete";
		removeButton.classList.add('removeButton');

		const checkBtn = document.createElement('button');
		checkBtn.innerHTML='<i class="fa fa-check"></i>';
		checkBtn.classList.add('checkBtn');


		container.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);
		itemBox.appendChild(checkBtn);

		editButton.addEventListener('click' , ()=> this.edit(input));
		removeButton.addEventListener('click' , ()=> this.remove(itemBox));
		checkBtn.addEventListener('click',function(){
			const parent = this.parentNode;
			parent.remove();
			Completed.appendChild(parent);
			checkBtn.style.display = 'none';
			editButton.style.display = 'none';
			
		});

		removeButton.addEventListener('click',function(){
			const parent = this.parentNode;
			parent.remove();
		});


	}
	edit(input)
	{
		input.disabled = !input.disabled;
	}

	remove(item)
	{
		container.removeChild(item);
	}
}

function check(){
	if(input.value != "")
	{
		new item(input.value);
		input.value = "";
	}

}

addButton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
	if(e.which == 13)
	{
		check();
	}
})