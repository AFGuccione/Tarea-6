/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

let $executeButton = document.querySelector('#create-labels')
let $dinamicHTML = document.querySelector('#dinamic-html')
let $preCreatedHTML = document.querySelector('#pre-created-html')

$executeButton.onclick = function(){
    let cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value
    if(cantidadIntegrantes <= 0){
        return
    }
    if($dinamicHTML.innerText !== ""){
        return
    }

    validarCantidadIntegrantes

    for(i=1;i<=Number(cantidadIntegrantes);i++){
        createInputAndLabel(i)
    }

    createCalculateButton();
    createClearButton();
}

function createInputAndLabel(i){
    let div = document.createElement("div")
    let label = document.createElement("label")
    let input = document.createElement("input")

    div.id = `Integrante-${i}`
    label.textContent = `Integrante n°${i}`
    input.type = "number"

    div.appendChild(label)
    div.appendChild(input)
    $dinamicHTML.appendChild(div)
}

function createCalculateButton(){
    let calculateButton = document.createElement("button")
    calculateButton.textContent = "Calcular"

    calculateButton.onclick = function(){
        let arrMembers = document.querySelectorAll("#dinamic-html input")
        let membersAgeList = []
        for(i=0;i<arrMembers.length;i++){
            if(arrMembers[i].value === ""){continue}
            validarEdad(arrMembers[i].value)
            console.log(arrMembers[i].value)
            membersAgeList.push(Number(arrMembers[i].value))
        }
        if(membersAgeList.length !== 0){
            showPreCreatedHTML()
        }else{
            hidePreCreatedHTML()
        }
        showOlderAge(membersAgeList);
        showYoungerAge(membersAgeList);
        showAverageAge(membersAgeList);
    }
    $dinamicHTML.appendChild(calculateButton)
}

function createClearButton(){
    let clearButton = document.createElement("button")
    clearButton.textContent = "Clear"
    clearButton.onclick = function(){
        while($dinamicHTML.childNodes[0] !== undefined){
            $dinamicHTML.removeChild($dinamicHTML.childNodes[0])
        }
        hidePreCreatedHTML();
        document.querySelector('#cantidad-integrantes').value = "";
    }

    $dinamicHTML.appendChild(clearButton)
}

function hidePreCreatedHTML(){$preCreatedHTML.className = "oculto"}
function showPreCreatedHTML(){$preCreatedHTML.className = "visible"}

function showOlderAge(membersAgeList){
    $olderMember = document.querySelector('#mayor-edad')
    $olderMember.textContent = max(membersAgeList)
}
function showYoungerAge(membersAgeList){
    $youngerMember = document.querySelector('#menor-edad')
    $youngerMember.textContent = min(membersAgeList)
}
function showAverageAge(membersAgeList){
    $averageMember = document.querySelector('#promedio-edad')
    $averageMember.textContent = avg(membersAgeList)
}

/*
function validarCantidadIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes < 0){
        return "No se puede tener integrantes negativos"
    }
    if(cantidadIntegrantes === 0){
        return "No se puede tener 0 integrantes"
    }
    if (!/^[0-9]\d*$/.test(cantidadIntegrantes)) {
        return "Solo puede ingresarse números";
      }
      if(cantidadIntegrantes === ""){
        return "El campo no puede estar vacio"
    }
    return ""
}

function validarEdad(edad) {
    if (edad === "") {
      return "El campo edad no debe estar vacío";
    }
  
    if (edad < 0) {
        console.log("asd")
      return "La edad no puede contener numeros negativos";
    }
  
    if (edad > 100) {
      return "La edad no puede ser mayor a 100 años";
    }
  
    if (/^[0-9]+$/.test(edad)) {
      return "La edad solo debe llevar números enteros";
    }
    return "";
  }
  */
 