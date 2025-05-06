const title = document.querySelector('#title');
const note = document.querySelector('#notes');
const saveBtn = document.querySelector('.sv');



function vaild(){

if( title.value === "" || note.value === "" ){
    alert("Enter values");
    return false;
}
return true;
}


saveBtn.addEventListener('click', function() {


//save title content
 const noteTitle = document.createElement('div');
 const titleContent = document.createTextNode(title.value);
 noteTitle.appendChild(titleContent);

 const currentDiv = document.getElementById("div1");
document.body.insertBefore(noteTitle, currentDiv);

});