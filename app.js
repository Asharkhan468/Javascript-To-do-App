let todoInput=document.querySelector("#Todo");

let ol=document.querySelector("ol");


function renderarray(){

    ol.innerHTML="";




    for(i=0 ; i<array.length ; i++){
        ol.innerHTML+=`<li>${array[i]} <button onclick="deleteTodo(${i})">Delete</button> <button onclick="editTodo()>Edit</button></li>`;
    }

    

}

let array=[];

function addTodo(){

    if(todoInput.value==""){
        alert("Please Enter some task");
    }


    array.push(todoInput.value);

    todoInput.value="";


    renderarray()
    

 
    
}



function deleteTodo(index){

   
    array.splice(index , 1);

   renderarray()




}


function editTodo(){

    let editedValue=prompt("Enter edited value");

    array.push(editedValue);

    renderarray()

    

}