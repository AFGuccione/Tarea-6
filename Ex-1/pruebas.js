function validacionesEdad() {
    console.assert(
      validarEdad("") === "El campo edad no puede estar vacío",
      "Validar edad aceptó un campo vacio"
    );
    console.assert(
        validarEdad(-7) === "La edad no puede contener numeros negativos",
        "Validar edad aceptó una edad negativa"
      );
    console.assert(
        validarEdad(150) === "La edad no puede ser mayor a 100 años",
        "Validar edad aceptó una edad mayor a 100"
    );
    console.assert(
        validarEdad(0) === "La edad no puede ser 0",
        "Validar edad aceptó una edad de 0 años"
      );
    console.assert(
        validarEdad(1.59) === "La edad solo debe llevar números enteros",
        "Validar edad aceptó numeros con coma o simbolos"
    );
  }

  function validacionesCantidadIntegrantes() {
    console.assert(
      validarCantidadIntegrantes(-5) === "No se puede tener integrantes negativos",
      "Validar cantidad integrantes validó un número negativo"
    );
    console.assert(
        validarCantidadIntegrantes(0) === "No se puede tener 0 integrantes",
        "Validar cantidad integrantes validó una cantidad de 0 integrantes"
      );
    console.assert(
        validarCantidadIntegrantes("asd") === "Solo puede ingresarse números",
        "Validar cantidad integrantes validó texto"
    );
    console.assert(
        validarCantidadIntegrantes("") === "El campo no puede estar vacio",
        "Validar cantidad integrantes validó un campo vacio"
      );
  }

  validacionesEdad();
  validacionesCantidadIntegrantes();