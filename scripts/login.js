function LogInCheck() {
    'use strict';
    printError("");
    
    const uname = document.getElementById("userLogin").value;
    const pw = document.getElementById("userPass").value;
    
    const url = `http://localhost:8080/api/users/${uname}`;

    if (checkContent(uname, pw) == 0)
        return;

    let response = fetch(url);
    if (response.ok) {
        console.log("Good Response");
    } else {
        console.log("Bad Response");
        return;
    }


};

function printError(msg) {
    const err = document.getElementById('error');
    err.innerHTML = msg;
}

function checkContent(uname, pw) {
    if ((uname.length == 0 || uname == undefined) && (pw.length == 0 || pw == undefined)) {
        printError("Please enter your details!");
        return 0;
    }
    if (uname.length == 0 || uname == undefined) {
        printError("Please enter a username!");
        return 0;
    }
    if (pw.length == 0 || pw == undefined) {
        printError("Please enter your password!");
        return 0;
    }
}