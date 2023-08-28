/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

let nMembers = document.querySelector('#nMembers')
let $executeButton = document.querySelector('#create-labels')
let $dinamicHTML = document.querySelector('#dinamic-html')
let $preCreatedHTML = document.querySelector('#pre-created-html')

$executeButton.onclick = function(){
    if(nMembers.value <= 0){
        return
    }

    for(i=1;i<=Number(nMembers.value);i++){
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
        hidePreCreatedHTML()
        nMembers.value = "";
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