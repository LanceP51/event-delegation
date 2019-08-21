const navbar = document.querySelector(".navbar")
const container = document.querySelector("#container")
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

navbar.addEventListener("click", function (){
    if (event.target.id === "home") {
        container.innerHTML = `<h1>Home</h1><p>${lorem}</p>`
        }
    else if (event.target.id === "contact") {                     container.innerHTML = `<h1>Contact</h1><p>${lorem}</p>
    <fieldset>
    <label for="fullName">Name</label>
    <input type="text" id="fullName" placeholder="Enter person's full name" autofocus />
    </fieldset>
    <fieldset>
    <label for="message">Message</label>
    <input type="text" id="message" placeholder="Message" />
    </fieldset>
    <button id="sendMessage">Send</button>
    ` 
    
    document.querySelector("#container").addEventListener("click", function(){
    const contactNameField = document.querySelector("#fullName")
    const contactMessageField = document.querySelector("#message")
    if (event.target.id === "sendMessage"){
        // clear text fields here
        contactNameField.value = ""
        contactMessageField.value = ""
        alert("Message Sent")
    }})
}
    else if (event.target.id === "about") {                       container.innerHTML = `<h1>About</h1><p>${lorem}</      p>` }
    else if (event.target.id === "projects") {                    container.innerHTML = `<h1>Projects</h1><p>${lorem}     </p>` }
    })

    // Dynamic Cards Challenge

    const createBtn = document.querySelector("#create-card")
    const card = document.querySelector("#card")

    createBtn.addEventListener("click", function(){
        const newCard = `<div>${document.querySelector("#card").value}<br><button id="delete-btn">Delete</button>`
        document.querySelector("#new-card").innerHTML= newCard
    })

    const deleteBtn = document.querySelector("#delete-btn")
    const newCardArticle = document.querySelector("#new-card")
    newCardArticle.addEventListener("click",function(){
        if (event.target.id === "delete-btn"){
            newCardArticle.innerHTML =""
        }
    })