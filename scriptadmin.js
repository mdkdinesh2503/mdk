// overall script starts

function OpenPage() {

    if (confirm("Redirect to home page..") == true) {
        window.location = "loginpage.html";
        return false;
    }

}

// Admin dashboard javascript starts here

function updateClock() {

    var now = new Date();

    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }

    if (hou == 0) {
        hou = 12;
    }

    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock() {

    updateClock();
    window.setInterval("updateClock()", 1);

}

// Admin dashboard javascript ends here

// todo-list javascript section starts here

const inputField = document.querySelector(".todo-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); 

    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
    }
});

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
}

clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});

// todo-list javascript section ends here

// Admin Result page view individual section starts here 

function ResultPage() {
    window.location = "ResultViewPage.html";
    return false;
}

// Admin Result page view individual section ends here 
