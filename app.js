
alert("¡Bienvendio! Veo que te gusto nuestro Jean. Para realizar la compra necesitamos tus datos.")
let nombre = prompt("Ingrese su nombre")
alert( nombre +" "+ "el precio del jean es de $5000")

 let tarjeta = prompt (`¿Con qué medio de pago desea abonar?
C: CREDITO
D: DEBITO
(indicar con la inicial)`)

// for (let i = 7; i <= 14; i++) {
//     alert( `${i}`);
    
//  nose como incluirlo en mi formula 


let precio = 5000 

// FORMULA
function formula(porcentaje, numeroCuota)
{
let resultado = ((porcentaje * precio)/100+(precio/numeroCuota))
return resultado;
}

let cuota = precio/1
let cuota2 = formula (7,2)
let cuota3 = precio/3
let cuota4 = formula (8,4)
let cuota5 = formula (9,5)
let cuota6 = precio/6
let cuota7 = formula (10,7)
let cuota8 = formula (11,8)
let cuota9 = formula (12,9)
let cuota10 = formula (13,10)
let cuota11 = formula (14,11)
let cuota12 = precio/12


switch (tarjeta) {
    case "D", "d":
            alert( nombre +" vas a abonar $5000 pesos en debito")
        console.log("Debito")
        alert("Compra exitosa!")
            break;
    case "C", "c":
        let credito = prompt(nombre + ` Tenes:
        1: una cuota
        2: 7%
        3: SIN INTERES 
        4: 8%
        5: 9%
        6: SIN INTERES 
        7: 10%
        8: 11%
        9: 12%
        10: 13%
        11: 14%
        12:SIN INTERES
        (Ingrese la cantidad de cuotas)` )
        switch (credito) {
            case "1":
                alert( nombre + " vas a a abonar $" + cuota + " en una cuota")
                break;
                case "2":
                alert( nombre + " vas abonar $5000 en 2 cuotas con interes de: $"+ cuota2)
                break;
                case "3":
                alert(  nombre + " vas abonar $5000 en 3 cuotas sin interes de: $"+ cuota3)
                break;
                case "4":
                alert( nombre + " vas abonar $5000 en 4 cuotas con interes de: $"+ cuota4)
                break;
                case "5":
                alert( nombre + " vas abonar $5000 en 5 cuotas con interes de: $"+ cuota5)
                break;
                case "6":
                alert( nombre + " vas abonar $5000 en 6 cuotas sin interes de: $"+ cuota6)
                break;
                case "7":
                alert( nombre + " vas abonar $5000 en 7 cuotas con interes de: $"+ cuota7)
                break;
                case "8":
                alert( nombre + " vas abonar $5000 en 8 cuotas con interes de: $"+ cuota8)
                break;
                case "9":
                alert( nombre + " vas abonar $5000 en 9 cuotas con interes de: $"+ cuota9)
                break;
                case "10":
                alert( nombre + " vas abonar $5000 en 10 cuotas con interes de: $"+ cuota10)
                break;
                case "11":
                alert( nombre + " vas abonar $5000 en 11 cuotas con interes de: $"+ cuota11)
                break;case "12":
                alert( nombre + " vas abonar $5000 en 12 cuotas sin interes de: $"+ cuota12)
                break;
            default:
                alert("No tenemos ese medio de pago");
                console.log("No tenemos ese medio de pago")
                break;
        }
        console.log("Credito")
        
        break;
    default:
        alert("No tenemos ese medio de pago");
        console.log("No tenemos ese medio de pago")
        break;
}







