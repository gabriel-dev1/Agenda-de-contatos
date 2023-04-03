const form = document.getElementById("form-cadastro")

let linhas = ""

form.addEventListener("submit", function(e){
    e.preventDefault()

    addRow()
    updateTable()
})

function addRow() {
    const inputNome = document.getElementById("nome")
    const inputTelephone = document.getElementById("telephone")

    let linha = "<tr>"
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelephone.value}</td>`
    /*linha += `<td>${}</td>`*/
    linha += "</tr>"

    linhas += linha

    inputNome.value = ""
    inputTelephone.value = ""
}

function updateTable() {
    const bodyElement = document.querySelector("tbody")
    bodyElement.innerHTML = linhas
}