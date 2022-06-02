// add button
const addtask =() => {
    //create list  
    let list = document.createElement("li");
    let inputValue = document.querySelector("#newtask") as HTMLInputElement;
    var task= document.createTextNode(inputValue.value);
    
    

    if(inputValue.value === ""){
        alert("Your task can not be empty");
    }

    else{
        // create checkbox
        let checkbox = document.createElement("input") as HTMLInputElement;
        checkbox.setAttribute ("type","checkbox");
        checkbox.className = "check";
        list.appendChild(checkbox);
        list.appendChild(task);
       
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
// edit list
    let editbtn = document.createElement("img");
    editbtn.setAttribute("src","download.png");
    editbtn.setAttribute("width","10px");
    editbtn.setAttribute("height","10px");

    editbtn.className = "edit";
    list.appendChild(editbtn);
    document.querySelector("#item-list").appendChild(list);

    let edits = document.getElementsByClassName("edit") as HTMLCollectionOf<HTMLElement>;
        

    for(let i=0;i<edits.length;i++){

        edits[i].onclick = function(){
            let div = edits[i].parentElement;
            inputValue.value = div.innerText;
            div.style.display="none";
        }
    }

    //check list
    let checkie = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLElement>;
    for(let i=0;i<checkie.length;i++){

        checkie[i].onclick = function(){
            let div = checkie[i].parentElement;
            div.style.textDecoration="line-through";
        }
    }
}


//Eventlistener for enter button
addEventListener('keypress',(event)=> {
    if (event.key === "Enter"){
        addtask();
    }
});