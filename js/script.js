
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


//------------function in portfolio page--------------//
const dataProject = []

function inputProject(event) {
    event.preventDefault()

    //collect value form input
    let image = document.getElementById("input-blog-image").files
    let title = document.getElementById("project-name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let code = document.getElementById("react", "node", "next", "ts").value
    let description = document.getElementById("project-desc").value
  
    image = URL.createObjectURL(image[0])

    const dataContent = {
        image,
        title,
        startDate,
        endDate,
        code,
        description,
        postedAt: new Date(),
        author: "Maruli Panggabean"
    }

    dataProject.push(dataContent)
    createCard()

}

    //create card
function createCard() {
    document.getElementById("card-content").innerHTML = ""

    for(let i = 0; i < data.length; i++) {
        document.getElementById("contents").innerHTML += 
        `<div class="content-card">
            <div class="content-photo">
                <div>${dataProject[i].image}</div>
            </div>
            <a href="project-detail.html" target="_blank"><h6>${dataProject[i].title}</h6></a>
            <br>
            <p>START DATE: ${dataProject[i].startDate}</p>
            <p>END DATE: ${dataProject[i].endDate}</p>
            <br>
            <p>${dataProject[i].description}</p>
            <br>
            <div class="content-card-icon">
                <div>${dataProject[i].code}</div>
                <div>${dataProject[i].code}</div>
                <div>${dataProject[i].code}</div>
                <div>${dataProject[i].code}</div>
            </div>
            <br>
            <br>
            <div class="content-card-button">
                <button id="card-button-edit"><h6>EDIT</h6></button>
                <button id="card-button-delete"><h6>DELETE</h6></button>
            </div>
        </div>`

    }

}