module.exports = (function () {
  var Calculadora = {
    somar: function (numero1, numero2) {
      if (!this.ehBinarioValido(numero1) || !this.ehBinarioValido(numero2)) {
        console.log("Numero inválido");
        return 0;
      }

      var res = parseInt(this.converterBinarioParaDecimal(numero1)) + parseInt(this.converterBinarioParaDecimal(numero2));

      return this.converterDecimalParaBinario(res);
    },

    subtrair: function (numero1, numero2) {
      if (!this.ehBinarioValido(numero1) || !this.ehBinarioValido(numero2)) {
        console.log("Numero inválido");
        return 0;
      }
      var res = parseInt(this.converterBinarioParaDecimal(numero1)) - parseInt(this.converterBinarioParaDecimal(numero2));

      return this.converterDecimalParaBinario(res);
    },

    multiplicar: function (numero1, numero2) {
      if (!this.ehBinarioValido(numero1) || !this.ehBinarioValido(numero2)) {
        console.log("Numero inválido");
        return 0;
      }

      var res = parseInt(this.converterBinarioParaDecimal(numero1)) * parseInt(this.converterBinarioParaDecimal(numero2));

      return this.converterDecimalParaBinario(res);
    },

    dividir: function (numero1, numero2) {
      if (!this.ehBinarioValido(numero1) || !this.ehBinarioValido(numero2)) {
        console.log("Numero inválido");
        return 0;
      }

      if (this.converterBinarioParaDecimal(numero2) == 0) {
        console.error("Divisão por zero!");
        return 0;
      }

      var res = parseInt(this.converterBinarioParaDecimal(numero1)) / parseInt(this.converterBinarioParaDecimal(numero2));
      return this.converterDecimalParaBinario(res);
    },
    calcularResto: function (numero1, numero2) {
      if (!this.ehBinarioValido(numero1) || !this.ehBinarioValido(numero2)) {
        console.log("Numero inválido");
        return 0;
      }

      var res = parseInt(this.converterBinarioParaDecimal(numero1)) % parseInt(this.converterBinarioParaDecimal(numero2));
      return this.converterDecimalParaBinario(res);
    },
    converterBinarioParaDecimal: (binario) => {
      return binario.split("").reduce(
        (sum, item, index, array) => sum + item * Math.pow(2, array.length - index - 1),
        // reverse index                  ^^^^^^^^^^^^^^^^^^^^^^^^
        0
      );
    },
    converterDecimalParaBinario(decimal) {
      return ("00000000" + parseInt(decimal).toString(2)).slice(-8);
    },
    ehBinarioValido: (valor) => {
      return !(/[^0-1]/g.test(valor) || valor == "" || valor.length > 8);
    },
  };

  return Calculadora;
})();
