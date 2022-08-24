class Enemigo {
    constructor(props){
        const { nombre, vida, poder } = props; // destructuring
        this.vida = vida;
        this.poder = poder;
        this.nombre = nombre;
    }

    atacar(jugador){
        // console.log('dañar al jugador')
        jugador.recibirDano(this.poder);
    }

    recibirDano(dano, jugador){
        this.vida -= dano;
        if( this.vida <= 0 ){
            this.vida = 0;
            jugador.cambiarArma()
            console.log(`%c Muerto: ${this.nombre}`, 'color: yellow; background-color: red;')
        }
    }
}

export default Enemigo;