var liArray = document.querySelectorAll("li");
console.log(liArray)
function toggleDone(li){
	console.log(li.srcElement);
	li.srcElement.classList.toggle("done");
}

liArray.forEach((li, i)=>{
	li.addEventListener("click", toggleDone);
});

