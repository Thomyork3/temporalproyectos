// Función que suma dos números
function sumarNumeros() {
    // Solicitar al usuario que ingrese el primer número
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));

    // Solicitar al usuario que ingrese el segundo número
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Sumar los dos números
    let resultado = numero1 + numero2;

    // Mostrar el resultado
    alert("El resultado de la suma es: " + resultado);
}

// Llamada a la función para que se ejecute
sumarNumeros();
