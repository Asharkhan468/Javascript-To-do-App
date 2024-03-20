let todoInput=document.querySelector("#Todo");

let ol=document.querySelector("ol");


function addTodo(){
 
    let arr=[];

    arr.push(todoInput.value);

    todoInput.value="";

    for(i=0 ; i<arr.length ; i++){

    ol.innerHTML=`<li>${arr[i]}</li>`

    }









}