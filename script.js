let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('pwd');
let confirmpwd = document.getElementById('cnfpwd');
let form = document.querySelector('form');
let button = document.getElementById('button')

function validateinput() {
    // username
    if (username.value.trim() === "") {
        onerror(username, "user cannot be empty");
    }
    else {
        onsuccess(username);
    }
    //password
    if (password.value.trim() === "") {
        onerror(password, "password cannot be empty");
    }
    else {
        onsuccess(password);
    }
    //confirm password
    if (confirmpwd.value.trim() === "") {
        onerror(confirmpwd, "user cannot be empty");
    }
    else {
        if (password.value.trim() !== confirmpwd.value.trim()) {
            onerror(confirmpwd, "password & confirm must be same")
        } else {
            onsuccess(confirmpwd);
        }
    }
    //email
    if (email.value.trim() === "") {
        onerror(email, "email cannot be empty");
    }
    else {
        if (!isvalid(email.value.trim())) {
            onerror(email, "email should fallow pattern");
        }
        else {
            onsuccess(email);
        }
    }

}

button.addEventListener('click', () => {
    validateinput();
})

//success messgae
function onsuccess(input) {
    let parent = input.parentElement;
    let messageele = parent.querySelector('small');
    messageele.style.visibility = "hidden";
    messageele.innerText = " ";
    parent.classList.remove('error')
    parent.classList.add('success');

}

//error message
function onerror(input, text) {
    let parent = input.parentElement;
    let messageele = parent.querySelector('small');
    messageele.style.visibility = "visible";
    messageele.innerText = text;
    parent.classList.remove('success')
    parent.classList.add('error');
}

// checking email pattern
function isvalid(email) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}
