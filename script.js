const inputbox = document.getElementById("input-box")
const listCon = document.getElementById("list-con")

function addTask(){
    if(inputbox.value == ''){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listCon.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ""
    saveData()
}

listCon.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("Data",listCon.innerHTML)
}

function showTask(){
    listCon.innerHTML = localStorage.getItem("Data")
}
showTask()