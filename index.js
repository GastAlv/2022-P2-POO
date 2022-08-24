import Arma from './Arma.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';


const jugador = new Jugador(200, 50, []);
const armaSeleccionada = parseInt(window.prompt('Ingrese un numero: 0: [Cuchillo], 1: [Pistola], 2: [Escopeta], 3: [Espada]'));

const cuchillo = new Arma('cuchillo', 10, true);
const pistola = new Arma('pistola', 20, false, 7);
const escopeta = new Arma('escopeta', 40, false, 8);
const espada = new Arma('espada', 40, true, 8);


jugador.recolectarArma(cuchillo);
jugador.recolectarArma(pistola);
jugador.recolectarArma(escopeta);
jugador.recolectarArma(espada);

// Creo un array para pushear los enemigos dentro de el.
const enemigos = [];
for (let i = 1; i <= 10; i++) {
    const propiedadesEnemigos = {
        vida: Math.floor(Math.random() * 100),
        poder: Math.floor(Math.random() * 50),
        nombre: `Enemigo ${i}`
    }
    enemigos.push(new Enemigo(propiedadesEnemigos))
}
console.table(enemigos);

/* while (enemigos.length > 0 && jugador.estaVivo) {
    const enemigo = enemigos.pop();
    
    while(enemigo.vida > 0 && jugador.estaVivo) {
        if (enemigos.length <= 0) {
            console.log('%c GANASTE.', 'color: green; font-size: 25px');            
            break;
        }
        jugador.cambiarArma();
            jugador.atacar(enemigo, jugador.armaEquipada)
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);         
        }

    } 
}

 */

// SIMULAR ATAQUE A ENEMIGO
console.log('Simulacion de ataque');
while(enemigos.length > 0 && jugador.estaVivo){
    const enemigo = enemigos.pop();
    // console.log('enemigo', enemigo);
    while(enemigo.vida > 0 && jugador.estaVivo){
        // const arma = jugador.armas[parseInt(window.prompt('Ingrese un numero: 1: [Cuchillo], 2: [Pistola], 3: [Escopeta], 4: [Espada]'))];
        jugador.cambiarArma();
        // jugador.cambiarArma(armaSeleccionada)
        jugador.atacar(enemigo, arma);
        // console.log('enemigo', enemigo);
        console.log('arma', arma);
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
            // console.log('jugador atacado', jugador);
        }
    }
    console.log('enemigo muerto');
}
// console.warn('No hay mas enemigos');
