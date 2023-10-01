
//-------------function on footer-start--------------//
function getDataForm() {
    //get value from input
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const dropdown = document.getElementById("dropdown").value
    const message = document.getElementById("message").value
    
    //input validation
    if(name == ""){
        return alert("Please input your name")
    }   else if(email == ""){
        return alert ("Please input your email")
    }   else if(phone == ""){
        return alert ("Please input your phone number")
    }   else if(dropdown == ""){
        return alert ("Please select the subject")
    }   else if(message == ""){
        return alert ("Please input the message")
    }   

    //create email
    const emailReceiver = "maruliwork@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${dropdown}&body= Hi Maruli, I am ${name}. Can you contact me at ${phone}, I want to discuss about ${message}.`
    a.click()

    let dataForm = {
        name,
        email,
        phone,
        dropdown,
        message,
    }

    console.log(dataForm)
}

//-------------function on footer-end--------------//
