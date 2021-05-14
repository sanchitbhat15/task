// POST REQUEST
const dt = axios.post("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisterUser",{
    "name": "Sohil Bhat",
    "email": "bhat.sohil@gmail.com"
}).then(data => console.log(data))