// add button
var addtask = function () {
    var list = document.createElement("li");
    var inputValue = document.querySelector("#newtask");
    var task = document.createTextNode(inputValue.value);
    list.appendChild(task);
    if (inputValue.value === "") {
        alert("Your task can not be empty");
    }
    else {
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
};
//Eventlistener for enter button
addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addtask();
    }
});
