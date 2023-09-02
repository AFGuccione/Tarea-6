function probarValidarCantidadIntegrantes() {
    console.assert(
        validarSalario(-5) === "El salario no puede ser negativo",
      "El campo salario acepta números negativos"
    );
    console.assert(
        validarSalario("") === "El salario no puede estar vacio",
      "El campo salario acepta campos vacios"
    );
    console.assert(
        validarSalario(0) === "El salario no puede ser 0",
      "El campo salario acepta salarios de valor 0"
    );
    console.assert(
        validarSalario("#%&ad&9") === "El salario solo puede ser expresado en números",
      "El campo salario acepta caracteres especiales"
    );
  }