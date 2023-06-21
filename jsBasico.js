/*
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar. */


function totalAPagar(vehiculo , litrosConsumidos) {
    if (vehiculo === "coche") {
        let precioPorLitro = 86
    }else if (vehiculo === "moto") {
        let precioPorLitro = 70
        
    }else if(vehiculo === "autobús") {
        let precioPorLitro = 55
    const total = precioPorLitro * litrosConsumidos;

    }


    if(litrosConsumidos > 0 && litrosConsumidos < 25){
        let precioPorLitro = 55
    }
    
}

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco =  {
    clientes : arrayCuentas,
    consultarCliente  : function (nombreDelCliente) {
        let clientes = this.clientes;

        clientes.forEach(function (cliente) {
                if (cliente.titularCuenta === nombreDelCliente) {
                    let usuarioEncontrado = cliente;
                    console.log("este es el usuario " + usuarioEncontrado.titularCuenta);
                    return usuarioEncontrado
                
            }
        })
    }
  }

  banco.consultarCliente("Jacki Shurmer")