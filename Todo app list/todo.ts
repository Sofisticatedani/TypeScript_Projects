// add button
const addtask =() => {
    let list = document.createElement("li");
    let inputValue = document.querySelector("#newtask") as HTMLInputElement;
    var task = document.createTextNode(inputValue.value);
    list.appendChild(task);

    if(inputValue.value === ""){
        alert("Your task can not be empty");
    }

    else{
        document.querySelector("#item-list").appendChild(list);
        inputValue.value = "";
    }
    
    
    //Delete task from list
    let closebtn = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    closebtn.className = "close";
    closebtn.appendChild(txt);
    list.appendChild(closebtn);
    document.querySelector("#item-list")!.appendChild(list);

    let close = document.getElementsByClassName("close") as HTMLCollectionOf<HTMLElement>;
        

    for(let i=0;i<close.length;i++){

        close[i].onclick = function(){
            let div = close[i].parentElement;
            div.style.display="none";
        }
        
    }
}

//Eventlistener for enter button
addEventListener('keypress',(event)=> {
    if (event.key === "Enter"){
        addtask();
    }
});