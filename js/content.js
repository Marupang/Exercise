//------------function in portfolio page--------------//
const data = []

function inputProject(event) {
    event.preventDefault()

    //collect value form input
    let title = document.getElementById("project-name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let image = document.getElementById("img").files
    let description = document.getElementById("project-desc").value

    // get the image url
    image = URL.createObjectURL(image[0])

    // count for how long working the project 
    const startMonth = new Date(startDate).getMonth()
    const endMonth = new Date(endDate).getMonth()
    
    const duration = endMonth - startMonth

    //create type data object for "data"
    const obj = {
        title,
        duration,
        image,
        description,
    }

    data.push(obj)
    createCard()

    console.log(data)
}

//create card in my project
function createCard() {
    document.getElementById("card-content").innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        document.getElementById ("card-content").innerHTML += `<div class="content-card">
        <div class="content-photo">
            <img src="${data[i].image}" alt="banner">
        </div>
        <a href="project-detail.html" target="_blank"><h6>${data[i].title}</h6></a>
        <br>
        <p>DURATION: ${data[i].duration} MONTHS</p>
        <br>
        <p>${data[i].description}</p>
        <br>
        <div class="content-card-icon">
            <img src="./asset/atom.png" alt="react">
            <img src="./asset/next.png" alt="next">
            <img src="./asset/node-js.png" alt="node">
            <img src="./asset/typescript.png" alt="ts">
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
