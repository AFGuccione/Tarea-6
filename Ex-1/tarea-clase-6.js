/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

let $executeButton = document.querySelector('#create-labels')
    $executeButton.onclick = agregarIntegrantes
let $reiniciarButton = document.querySelector("#reiniciar")
    $reiniciarButton.onclick = reiniciar
let $calcularButton = document.querySelector("#calcular")
    $calcularButton.onclick = tomarEdades
let $limpiarButton = document.querySelector("#limpiar")
    $limpiarButton.onclick = limpiarInputs
let $dinamicHTML = document.querySelector('#dinamic-html')
let $preCreatedHTML = document.querySelector('#pre-created-html')
let $hiddenButtons = document.querySelector("#hidden-buttons")

function agregarIntegrantes(){
    if($dinamicHTML.childNodes.length > 0){return}
    let cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);
    
    if(validarCantidadIntegrantes(cantidadIntegrantes) === ""){
        for(i=1;i<=cantidadIntegrantes;i++){
            createInputAndLabel(i)
        }
    
        showHiddenButtons()
        showReiniciarButton()
    }
}

function createInputAndLabel(i){
    let div = document.createElement("div")
    let label = document.createElement("label")
    let input = document.createElement("input")

    div.id = `Integrante-${i}`
    label.textContent = `Integrante n°${i}`
    input.type = "number"
    input.className = "edad-integrante"

    div.appendChild(label)
    div.appendChild(input)
    $dinamicHTML.appendChild(div)
}

function reiniciar(){
    $dinamicHTML.innerHTML = "";
    hideHiddenButtons();
    hidePreCreatedHTML();
}

function tomarEdades(){
    let $edades = document.querySelectorAll(".edad-integrante")
    let edades = []
    let errores = []

    $edades.forEach($edad => {
        let error = validarEdad($edad.value)
        if(error !== ""){
            $edad.classList.add("error")
            errores.push(error)
        }else{
            $edad.classList.remove("error")
            edades.push(Number($edad.value))
        }
    });

    if(errores.length === 0){
        console.log(edades)
        showPreCreatedHTML()
        showOlderAge(edades)
        showYoungerAge(edades)
        showAverageAge(edades)

    }else{
        hidePreCreatedHTML()
        //Añadir caja de errores
    }
}

function hideReiniciarButton(){$reiniciarButton.className = "oculto"}
function showReiniciarButton(){$reiniciarButton.classList.remove("oculto")}
function hideHiddenButtons(){$hiddenButtons.className = "oculto"}
function showHiddenButtons(){$hiddenButtons.className = "visible"}
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

function limpiarInputs(){
    hidePreCreatedHTML();

    $inputs = document.querySelectorAll(".edad-integrante")
    $inputs.forEach($input => {
        $input.value = ""
        $input.classList.remove("error")
    });
}


function validarCantidadIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes < 0){
        return "No se puede tener integrantes negativos"
    }
    if(cantidadIntegrantes === 0){
        return "No se puede tener 0 integrantes"
    }
    if(cantidadIntegrantes ===""){
        return "El campo no puede estar vacio"
    }
    if(!/^[0-9]\d*$/.test(cantidadIntegrantes)){
        return "Solo puede ingresarse números";
    }

    return ""
}

function validarEdad(edad) {
    if (edad === "") {
      return "El campo edad no puede estar vacío";
    }
    if (edad < 0) {
      return "La edad no puede contener numeros negativos";
    }
    if (edad > 100) {
      return "La edad no puede ser mayor a 100 años";
    }
    if (edad === 0) {
        return "La edad no puede ser 0";
      }
    if (!/^[0-9]+$/.test(edad)) {
      return "La edad solo debe llevar números enteros";
    }
    return "";
  }

