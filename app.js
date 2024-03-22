let todoInput=document.querySelector("#Todo");

let ol=document.querySelector("ol");


//Render Array

function renderarray(){

    ol.innerHTML="";


    for(i=0 ; i<array.length ; i++){
        ol.innerHTML+=`<li><border>${array[i]}  <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i> <i class="fa-solid fa-trash " onclick="deleteTodo(${i})"></i>
       </li></border>`;
    }
    



    

}

//Create Array and Add to TODO

let array=[];

function addTodo(){

    if(todoInput.value==""){
        alert("Please Enter some task");
    }


    array.push(todoInput.value);

    todoInput.value="";


    renderarray()
    

 
    
}


//Delete TODO



function deleteTodo(index){

   
    array.splice(index , 1);

    renderarray()




}

//Edit any TODO


function editTodo(index){

    let newValue=prompt("Enter a new value");

    array.splice(index , 1 , newValue );


   renderarray()



   
    

}

