// overall script starts

function OpenPage() {

    if (confirm("Redirect to home page..") == true) {
        window.location = "loginpage.html";
        return false;
    }

}

// student dashboard javascript starts here

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

// student dashboard javascript ends here

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

// student details javascript starts here

function printFunction() {

    var printbutton = document.getElementById("pntbtn");
    var submitbutton = document.getElementById("smtbtn");
    var Header_part = document.getElementById("header-part");
    var menu_btn = document.getElementById("menu-btn");

    printbutton.style.visibility = 'hidden';
    submitbutton.style.visibility = 'hidden';
    Header_part.style.visibility = 'hidden';
    menu_btn.style.visibility = 'hidden';
    window.print();
    printbutton.style.visibility = 'visible';
    submitbutton.style.visibility = 'visible';
    Header_part.style.visibility = 'visible';
    menu_btn.style.visibility = 'visible';
    return false;
}

const myQuiz = document.getElementById("myQuiz");
myQuiz.addEventListener("submit", (e) => {
    e.preventDefault();

    var Name = document.getElementById("name").value;
    var Dob = document.getElementById("dob").value;
    var Email = document.getElementById("eml").value;
    var Mobileno = document.getElementById("mbl").value;
    var Gender = document.getElementById("gndr").value;
    var Marsta = document.getElementById("marsta").value;
    var Age = document.getElementById("age").value;
    var Comuty = document.getElementById("cmty").value;
    var Caste = document.getElementById("cste").value;
    var Addtype = document.getElementById("addty").value;
    var Areatype = document.getElementById("arty").value;
    var Country = document.getElementById("ctry").value;
    var Appartno = document.getElementById("appno").value;
    var Address1 = document.getElementById("adr1").value;
    var Address2 = document.getElementById("adr2").value;
    var City = document.getElementById("city").value;
    var Pincode = document.getElementById("pncd").value;
    var State = document.getElementById("state").value;
    var Totmem = document.getElementById("ttlmem").value;
    var FirGraduate = document.getElementById("firgrd").value;
    var Income = document.getElementById("inc").value;
    var Fthrname = document.getElementById("fthrna").value;
    var Fthrocc = document.getElementById("fthroc").value;
    var Fthrmobileno = document.getElementById("fthrmo").value;
    var Mthrname = document.getElementById("mthrna").value;
    var Mthrocc = document.getElementById("mthroc").value;
    var Mthrmobileno = document.getElementById("mthrmo").value;
    var Regno = document.getElementById("rgtr").value;
    var Degree = document.getElementById("degr").value;
    var Deptrt = document.getElementById("deprt").value;
    var Clgname = document.getElementById("clgna").value;
    var Yearpass = document.getElementById("yrpss").value;
    var Yearstu = document.getElementById("yrstu").value;
    var Mark10 = document.getElementById("m10").value;
    var Mark10mode = document.getElementById("m10mo").value;
    var Mark10ttl = document.getElementById("m10ttl").value;
    var Mark12 = document.getElementById("m12").value;
    var Mark12mode = document.getElementById("m12mo").value;
    var Mark12ttl = document.getElementById("m12ttl").value;

    myWindow = window.open('');

    myWindow.document.writeln("NAME: " + Name + "<br>DOB: " + Dob + "<br>EMAIL: " + Email + "<br>MOBILE NUMBER: " + Mobileno + "<br>GENDER: " + Gender + "<br>MARITAL STATUS: " + Marsta + "<br>AGE: " + Age + "<br>COMMUNITY: " + Comuty + "<br>CASTE: " + Caste + "<br><br><br>ADDRESS TYPE: " + Addtype + "<br>AREA TYPE: " + Areatype + "<br>COUNTRY: " + Country + "<br>ADDRESS: " + Appartno + ",   " + Address1 + "   " + Address2 + "<br>CITY: " + City + "<br>PINCODE: " + Pincode + "<br>STATE: " + State + "<br><br><br>TOTAL MEMBERS: " + Totmem + "<br>FIRST GRADUATE: " + FirGraduate + "<br>TOTAL INCOME: " + Income + "<br>FATHER NAME: " + Fthrname + "<br>FATHER OCCUPATION: " + Fthrocc + "<br>FATHER MOBILE NUMBER: " + Fthrmobileno + "<br>MOTHER NAME: " + Mthrname + "<br>MOTHER OCCUPATION: " + Mthrocc + "<br>MOTHER MOBILE NUMBER: " + Mthrmobileno + "<br><br><br>REGISTER NUMBER: " + Regno + "<br>DEGREE: " + Degree + "<br>DEPARTMENT: " + Deptrt + "<br>COLLEGE NAME: " + Clgname + "<br>YEAR OF PASSING: " + Yearpass + "<br>YEAR OF STUDYING: " + Yearstu + "<br>10th MARK: " + Mark10 + "<br>10th STD MODE: " + Mark10mode + "<br>10th TOTAL MARK: " + Mark10ttl + "<br>12th MARK: " + Mark12 + "<br>12th STD MODE: " + Mark12mode + "<br>12th TOTAL MARK: " + Mark12ttl);

    myWindow.focus();

});

// student details javascript ends here

// student Attendance javascript starts here

function SetDate() {

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var hours = date.getHours() > 12 ? date.getHours() : date.getHours() + 12;
    var week = date.getDay();
    var select = document.getElementById('att');
    var Submitbtn = document.getElementById('smtbtn');
    var option1 = document.getElementById('hide1');
    var Absent = document.getElementById('abs').value;
    var ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
    }

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + date.getHours();
    if (minutes < 10) minutes = "0" + minutes;


    var today = year + "-" + month + "-" + day;
    var time = hours + ":" + minutes;
    document.getElementById('myDate').value = today;
    document.getElementById('mytime').value = time;

    if (week == "6" || week == "7") {
        select.disabled = true;
        Submitbtn.hidden = true;
    }

    if (time < "09:00" && ampm == 'AM' || time > "11:00" && ampm == 'AM' || ampm == 'PM') {
        select.disabled = true;
        Submitbtn.hidden = true;
    }

    if (time > "09:15" && ampm == 'AM') {
        option1.hidden = true;
    }

    if (time > "09:30" && ampm == 'AM') {
        select.value = Absent;
        select.disabled = true;
    }

}

function CheckAttDetails() {
    var Attname = document.getElementById("Attname").value;
    var Attemail = document.getElementById("Attemail").value;
    var OptionValue = document.getElementById("att").value;

    if (Attname == "" || Attemail == "") {
        alert("Please fill the details to submit!");
        return false;
    } else {
        var blur = document.getElementById("AttHide");
        blur.classList.toggle('active');
        var AttPopup = document.getElementById("AttPopup");
        AttPopup.classList.toggle('active');

        return false;
    }
}

// student Attendance javascript ends here

// student Report javascript starts here

function getDate() {

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
    }

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    var today = year + "-" + month + "-" + day;
    var time = hours + ":" + minutes;
    document.getElementById('reportDate').value = today;
    document.getElementById('reporttime').value = time;

}

// student Report javascript ends here

// student fees javascript starts here

function submitfeesdetails() {

    var Name = document.getElementById("feesname").value;
    var RegNo = document.getElementById("feesregno").value;
    var Email = document.getElementById("feesemail").value;
    var Mobileno = document.getElementById("feesphonenum").value;

    if (Name == "" || RegNo == "" || Email == "" || Mobileno == "") {
        alert("Please fill all details to view Fees Details!");
        return false;
    }
    else {
        alert("Redirecting to Fees Details Page");
        window.location = "StudentFeesview.html";
        return false;
    }

}

function CheckPaymentDetails() {
    var cardName = document.getElementById("cardName").value;
    var cardNo = document.getElementById("cardNo").value;
    var cardMonth = document.getElementById("cardMonth").value;
    var cardCvv = document.getElementById("cardCvv").value;

    if (cardName == "" || cardNo == "" || cardMonth == "" || cardCvv == "") {
        alert("Please fill all details to pay Fees!");
        return false;
    } else {
        var blur = document.getElementById("PayHide");
        blur.classList.toggle('active');
        var payPopup = document.getElementById("payPopup");
        payPopup.classList.toggle('active');

        return false;
    }
}

// student fees javascript ends here

// Student Result page view individual section starts here 

function ResultPage() {
    window.location = "ResultViewPage.html";
    return false;
}

// Student Result page view individual section ends here 
