var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.append(li);
	input.value = "";
	li.onclick=toggleDone;
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete!"));
	li.append(deleteButton);
	deleteButton.onclick=deleteItem;

}

function toggleDone(event){
	event.target.classList.toggle("done");
}

function deleteItem(event){
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		 createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		 createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

