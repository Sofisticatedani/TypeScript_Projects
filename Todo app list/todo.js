// add button
var addtask = function () {
    //create list  
    var list = document.createElement("li");
    var inputValue = document.querySelector("#newtask");
    var task = document.createTextNode(inputValue.value);
    if (inputValue.value === "") {
        alert("Your task can not be empty");
    }
    else {
        // create checkbox
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.className = "check";
        list.appendChild(checkbox);
        list.appendChild(task);
        document.querySelector("#item-list").appendChild(list);
        inputValue.value = "";
    }
    //Delete task from list
    var closebtn = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    closebtn.className = "close";
    closebtn.appendChild(txt);
    list.appendChild(closebtn);
    document.querySelector("#item-list").appendChild(list);
    var close = document.getElementsByClassName("close");
    var _loop_1 = function (i) {
        close[i].onclick = function () {
            var div = close[i].parentElement;
            div.style.display = "none";
        };
    };
    for (var i = 0; i < close.length; i++) {
        _loop_1(i);
    }
    // edit list
    var editbtn = document.createElement("img");
    editbtn.setAttribute("src", "download.png");
    editbtn.setAttribute("width", "10px");
    editbtn.setAttribute("height", "10px");
    editbtn.className = "edit";
    list.appendChild(editbtn);
    document.querySelector("#item-list").appendChild(list);
    var edits = document.getElementsByClassName("edit");
    var _loop_2 = function (i) {
        edits[i].onclick = function () {
            var div = edits[i].parentElement;
            inputValue.value = div.innerText;
            div.style.display = "none";
        };
    };
    for (var i = 0; i < edits.length; i++) {
        _loop_2(i);
    }
    //check list
    var checkie = document.getElementsByClassName("check");
    var _loop_3 = function (i) {
        checkie[i].onclick = function () {
            var div = checkie[i].parentElement;
            div.style.textDecoration = "line-through";
        };
    };
    for (var i = 0; i < checkie.length; i++) {
        _loop_3(i);
    }
};
//Eventlistener for enter button
addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addtask();
    }
});
