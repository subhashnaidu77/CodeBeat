const to = document.getElementById("tolist"); // for the list items 

const newto = document.getElementById("newto"); // for the input box 
const addBtn = document.getElementById("addbtn");// for this it will add btn 

addBtn.addEventListener('click',()=>{


    const newTodText =newto.value;
    if(newTodText!==""){
        const newTodItem = document.createElement("li"); // try to add the elements dynamaically 
        newTodItem.innerText= newTodText;
        const deleteBtn = document.createElement("button"); // this is also create a btn dynamically
        deleteBtn.innerText = "del";
        deleteBtn.classList.add("delete-todo-button");
        deleteBtn.addEventListener('click',()=>{ // purpose is listens the particular event and performs the block of functional code we have wriiten 
            newTodItem.remove();  // this will remove the items 
        });
        newTodItem.appendChild(deleteBtn);
        to.appendChild(newTodItem);
        newto.value="";
    }
});