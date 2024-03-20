let todoInput=document.querySelector("#Todo");

let ol=document.querySelector("ol");

let array=[];

function addTodo(){


    array.push(todoInput.value);

    console.log(array);

    todoInput.value="";



    for(i=0 ; i<array.length ; i++){
        ol.innerHTML+=`<li>${array[i]} <button onclick="deleteTodo()">Delete</button> <button>Edit</button></li>`;
    }

    

 
    
}


function deleteTodo(){

    




}