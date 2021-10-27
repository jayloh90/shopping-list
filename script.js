var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addListListener(li); //add listener to List item
	addDeleteButton(li); //add Delete button
	input.value = ""; //resets the input box
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

function toggleListItem() {
	this.classList.toggle("done"); //this: refers to the element that received the event :)
}

function addListListener(listItem) {
	listItem.addEventListener("click",toggleListItem);
}

function addDeleteButton(listItem) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", deleteItem);
	listItem.appendChild(button);
}

function deleteItem() {
	this.closest("li").remove(); //closest is great for selecting parent element
}

listItems.forEach(addDeleteButton); //foreach is used because it is the cleanest looking loop

listItems.forEach(addListListener);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);