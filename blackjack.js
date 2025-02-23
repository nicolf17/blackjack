console.log("Bienvenidos, disfruten del juego !!")

function iniciarJuego () {
    alert("El juego ha comenzado !!")
window.iniciar= iniciarJuego

document.addEventListener("DOMContentLoaded", function(){
    const botonIniciar= document.getElementById("iniciarBtn")
    botonIniciar.addEventListener("click", iniciarJuego)
})


function jugadorRonda(jugador){
    console.log("\nTURNO DE: " +  jugador);
    

let num1= Math.floor(Math.random() * 10) + 1
let num2= Math.floor(Math.random() * 10) + 1
let num3= Math.floor(Math.random() * 10) + 1

let carta1= num1
console.log("Tu primera carta es la numero: " + carta1);

let carta2= num2
console.log("Tu segunda carta es la numero: " + carta2);

let carta3= 0

let suma= carta1 + carta2

console.log("Tu puntuacion hasta el momento es de: " + suma);
let ingresado  
    if (suma<21){
    }ingresado= prompt("¿Deseas sacar tu ultima carta? 1. Si / 2. No")
        
        if (ingresado !=="1" && ingresado !=="2"){
        }else if(ingresado==="1"){
            console.log("Elegiste si y...")
            carta3= num3
            console.log("Tu ultima carta es la numero: " + carta3);
            } else {
            console.log("Elegiste No")
            carta3= 0
            }


let sumaFinal= carta1 + carta2 + carta3
console.log("\nTu puntuacion final es de: " + sumaFinal);
return sumaFinal
}

let puntuacionJugador1 = jugadorRonda("JUGADOR 1")
let puntuacionJugador2 = jugadorRonda("JUGADOR 2")

console.log("\n--- RESULTADO FINAL ---");
if (puntuacionJugador1 > 21 && puntuacionJugador2 > 21) {
    console.log("Ambos jugadores se pasaron de 21. ¡Empate!");
} else if (puntuacionJugador1 > 21) {
    console.log("Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
} else if (puntuacionJugador2 > 21) {
    console.log("Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
} else if (puntuacionJugador1 > puntuacionJugador2) {
    console.log("¡Jugador 1 gana!");
} else if (puntuacionJugador2 > puntuacionJugador1) {
    console.log("¡Jugador 2 gana!");
} else {
    console.log("¡Empate!");
}


}

