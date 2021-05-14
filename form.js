
const btn = document.querySelector(".btn")
const nameInput = document.querySelector("#name").value
const emailInput = document.querySelector("#email").value
const apiEndpoint = 'https://crudcrud.com/api/d8ecdc198dfe4227a379d9ea1352f68c'
var idCurrentlyEditing = ""
var isEditing = false
var currentElement = ""


// GET REQUEST 
async function getUserData(){
    axios.get(`${apiEndpoint}/RegisterUser`).then((data) => {
        for(let i=0; i<data.data.length ; i++){
            console.log("creating" , data.data[i])
            addNewLineElement(data.data[i])
        }
    })
}
getUserData()


// PUT REQUEST
btn.addEventListener('click', async (e)=>{
    e.defaultPrevented()

    if(nameInput.length>0 && emailInput.length>0){
        var object = {
            name = nameInput,
            email = emailInput
        }

    if(isEditing){
        axios.put(`${apiEndpoint}/RegisterUser/${idCurrentlyEditing}`, object)
        .then((data) => {
            const ul = document.getElementById('users')
            ul.removeChild(currentElement)
            addNewLineElement({ ...object, _id: idCurrentlyEditing})
        }).catch((err) => {
            const errorspan = document.createElement('span')
            errorspan.appendChild(document.createTextNode("Something went wrong, Retry!"))

            errorspan.style.color = 'red'
            currentElement.appendChild(errorspan)
            setTimeout(() => {
                currentElement.removeChild(errorspan)
            },2000)
        })

        isEditing = false
    } else {
        const response = await axios.post(`${apiEndpoint}/RegisterUser`, object)
        addNewLineElement(response.data)
        }
    }
})

function addNewLineElement(object) {
    const ul = document.getElementById('users')
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(object.name + " " + object.email + " "))

    // DELETE
    const deleteButton = document.createElement("input")
    deleteButton.type = "button"
    deleteButton.value = "delete"

    deleteButton.addEventListener('click', ()=> {
        axios.delete(`${apiEndpoint}/RegisterUser/${object._id}`)
        .then((data) => ul.removeChild(li))
        .catch((err) => {
            const errorspan = document.createElement('span')
            errorspan.appendChild(document.createTextNode("Something went wrong, Retry!"))

            errorspan.style.color = 'red'
            currentElement.appendChild(errorspan)
            setTimeout(() => {
                currentElement.removeChild(errorspan)
            },2000)
        })
    })

    deleteButton.className = 'delete'
    deletebutton.style.border = "2px solid red";
    li.appendChild(deleteButton)


    // EDIT
    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'edit'

    editButton.addEventListener('click', () => {
        isEditing = true
        idCurrentlyEditing = object._id
        currentElement = li

        document.querySelector('name').value = object.value
        document.querySelector('email').value = object.value
    })
    editbutton.style.border = "2px solid green";
    li.appendChild(editButton)
    ul.appendChild(li)
}



// POST REQUEST
// const dt = axios.post("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisterUser",{
//     "name": "Payal",
//     "email": "payal.com"
// }).then(data => console.log(data))















