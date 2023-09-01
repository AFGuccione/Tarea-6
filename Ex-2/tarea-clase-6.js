/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector("#agregar");
    $botonAgregar.onclick = agregarFamiliar;
const $botonQuitar = document.querySelector("#quitar");
    $botonQuitar.onclick = quitarUltimoFamiliar;
const $dinamicHTML = document.querySelector("#dinamic-html");
const $hiddenButtons = document.querySelector("#hidden-buttons");
const $preCreatedHTML = document.querySelector("#pre-created-html");
const $botonCalcular = document.querySelector("#calcular");
    $botonCalcular.onclick = calcularSalarios
const $botonLimpiar = document.querySelector("#limpiar");
    $botonLimpiar.onclick = limpiarCampos
let counter = 1;

function agregarFamiliar(){
    let p = document.createElement("p")
    let label = document.createElement("label")
    let input = document.createElement("input");
    let removeButton = document.createElement("button")

    label.textContent = `Salario de familiar n° ${counter}`;
    counter += 1;

    input.className = "salario-integrante"

    removeButton.textContent = "x"
    removeButton.onclick = quitarFamiliar

    p.appendChild(label)
    p.appendChild(input)
    p.appendChild(removeButton)
    $dinamicHTML.appendChild(p)

    checkearNodes()
}

function quitarUltimoFamiliar(){
    if($dinamicHTML.childNodes.length !== 0){
        $dinamicHTML.removeChild($dinamicHTML.lastChild);
        counter -= 1;
    }

    checkearNodes()
}

function quitarFamiliar(){
    this.parentNode.remove()
    counter -= 1;

    checkearNodes()
}

function checkearNodes(){
    if($dinamicHTML.childNodes.length === 0){
        $hiddenButtons.className = "oculto"
        $botonQuitar.className = "oculto"
        $preCreatedHTML.className = "oculto"
    }
    if($dinamicHTML.childNodes.length > 0){
        $hiddenButtons.className = "show-buttons"
        $botonQuitar.className = "show-buttons"
    }
}

function calcularSalarios(){
    let salarios = document.querySelectorAll(".salario-integrante")
    let arrayOfSalaries = nodeToArrayValue(salarios)

    let $mayorSalario = document.querySelector("#mayor-salario");
    let $menorSalario = document.querySelector("#menor-salario");
    let $promedioSalarioAnual = document.querySelector("#salario-anual-promedio");
    let $promedioSalarioMensual = document.querySelector("#salario-mensual-promedio");

    let mayorSalario = max(arrayOfSalaries)
    let menorSalario = min(arrayOfSalaries)
    let promedioSalarioAnual = avg(arrayOfSalaries)
    let promedioSalarioMensual = (avg(arrayOfSalaries)/12).toFixed(2)

    $mayorSalario.textContent = mayorSalario;
    $menorSalario.textContent = menorSalario;
    $promedioSalarioAnual.textContent = promedioSalarioAnual;
    $promedioSalarioMensual.textContent = promedioSalarioMensual;

    mostrarPreCreatedHTML()
}

function mostrarPreCreatedHTML(){
    $preCreatedHTML.className = "visible"
}

function ocultarPreCreatedHTML(){
    $preCreatedHTML.className = "oculto"
}

function limpiarCampos(){
    let salarios = document.querySelectorAll(".salario-integrante")
    salarios.forEach(salario => {
        salario.value = ""
    });
    ocultarPreCreatedHTML()

    /*
    $strongText = $preCreatedHTML.querySelectorAll("strong")
    $strongText.forEach(strong => {
        strong.textContent = ""
    });
    */
}

function nodeToArrayValue(nodeList){
    let array = [];
    nodeList.forEach(node => {
        array.push(Number(node.value))
    });
    return array
}
