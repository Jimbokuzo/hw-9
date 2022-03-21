"use strict"

var users = [{

    "id": 1,

    "first_name": "Dulcinea",

    "last_name": "Beeton",

    "email": "dbeeton0@google.co.uk"

}, {

    "id": 2,

    "first_name": "Shoshanna",

    "last_name": "Eymer",

    "email": "seymer1@behance.net"

}, {

    "id": 3,

    "first_name": "Cull",

    "last_name": "Nazareth",

    "email": "cnazareth2@squidoo.com"

}, {

    "id": 4,

    "first_name": "Dorella",

    "last_name": "Damerell",

    "email": "ddamerell3@taobao.com"

}, {

    "id": 5,

    "first_name": "Robena",

    "last_name": "Jankovic",

    "email": "rjankovic4@youtube.com"

}, {

    "id": 6,

    "first_name": "Jarret",

    "last_name": "Guitton",

    "email": "jguitton5@ucoz.ru"

}, {

    "id": 7,

    "first_name": "Elias",

    "last_name": "Hanson",

    "email": "ehanson6@aol.com"

}, {

    "id": 8,

    "first_name": "Corby",

    "last_name": "Gartrell",

    "email": "cgartrell7@sogou.com"

}, {

    "id": 9,

    "first_name": "Scarlet",

    "last_name": "Eilhertsen",

    "email": "seilhertsen8@reverbnation.com"

}, {

    "id": 10,

    "first_name": "Merv",

    "last_name": "Lequeux",

    "email": "mlequeux9@sohu.com"

}]

var contentHTML = document.querySelector(".table")
tableHTML(users, contentHTML)

function toggle() {
    var content = this.classList.contains("hide")
    if (content) {
        this.classList.replace("hide", "show")
    } else {
        this.classList.replace("show", "hide")
    }
}

function showName(event) {
    alert(event.target.innerText)
}

function tableHTML(data, node) {
    for (var users of data) {
        var tegTr = document.createElement("tr")
        tegTr.className = "hide"
        tegTr.innerHTML = `        
        <td class="id">${users.id}</td>
        <td class="first_name">${users.first_name}</td>
        <td class="last_name">${users.last_name}</td>
        <td class="email">${users.email}</email></td>        
    `
        var nameUser = tegTr.querySelector(".first_name")
        nameUser.ondblclick = showName
        tegTr.onclick = toggle
        node.appendChild(tegTr)
    }
}
