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

if(!vaild()) return;

//saves notes body content
const noteBody = document.createElement('div');
const BodyContent = document.createTextNode(note.value);
noteBody.appendChild(BodyContent);


 //viewButton
 const viewBtn = document.createElement('BUTTON');
 viewBtn.textContent = "View Notes";

//save title content
 const noteTitle = document.createElement('div');
 const titleContent = document.createTextNode(title.value);
 noteTitle.appendChild(titleContent);
 noteTitle.appendChild(viewBtn);


//stores in div
const currentDiv = document.getElementById("div1");
document.body.insertBefore(noteTitle, currentDiv);

//stores in div
const noteContent = document.getElementById("n");
document.body.insertBefore(noteBody,  noteContent);


//ressets inputs
title.value = "";
note.value = "";


// displaying none until button pressed
noteBody.style.display = "none";



//view button
viewBtn.addEventListener('click', function(e) { 
    
    
    e.stopPropagation();

    noteBody.style.display === "none" 
    ? noteBody.style.display = "block" : noteBody.style.display = "none";

 
    
});



});