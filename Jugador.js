import Enemigo from "./Enemigo.js";

class Jugador {
    constructor(vida, tiempo, armas = [], estaVivo = true, armaEquipada = undefined){
        this.estaVivo = estaVivo;
        this.vida = vida;
        this.tiempoDeVida = tiempo;
        this.armas = armas;
        this.armaEquipada = armaEquipada;
        // arma seleccionada
        this.descontarTiempoDeVida();
    }
    
    // seleccionar arma

    recolectarArma(nuevaArma){
        this.armas.push(nuevaArma);
    }

    
    cambiarArma(){
        // const numeroRandom = Math.floor(Math.random()* this.armas.length);
        const arma = this.jugador.armas[parseInt(window.prompt('Ingrese un numero: 0: [Cuchillo], 1: [Pistola], 2: [Escopeta], 3: [Espada]'))];
        this.equiparArma(arma)

    }
    
    equiparArma(){
        return this.armaEquipada = this.armas[armaSeleccionada];
    }

    atacar(enemigo, arma){
        enemigo.recibirDano(arma.poder, this);
    }

    recibirDano(dano) {
        // animacion de daño
        // sonido
        // etc
        this.vida -= dano;
        if (this.vida <= 0) {
            // animacion muerte
            this.estaVivo = false;
            this.vida = 0;
            console.log('%c HAS MUERTO.', 'color: red; font-size: 25px; background-color: black;')
        }
    }

    // evento recursivo que descuente tiempo
    descontarTiempoDeVida(){
        //console.info('descontar tiempo de vida', this.tiempoDeVida);
        if(this.tiempoDeVida <= 0 || !this.estaVivo) {
            return;
        };

        this.tiempoDeVida--;
        setTimeout(() => {
            this.descontarTiempoDeVida();
        }, 1000);
    }
}

export default Jugador;