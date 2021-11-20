class VideoJuego {
    constructor (nombre, fecha_lanzamiento, multijugador = False){
        this._nombre = nombre;
        this._genero = Genero();
        this._fecha_lanzamiento = fecha_lanzamiento;
        this._clasificacion = Clasificacion();
        this._multijugador = multijugador;
        this._plataforma = Plataforma();
    }
}

class Genero {
    constructor (nombre, tipo) {
        this._nombre = nombre;
        this._tipo = tipo;
    }

    Combate (){
        console.log ("Estos son los mejores juegos de combate: Call of Duty: Heroes. Modern Combat 5: Blackout. Sniper Fury. Tiny Troopers. World at Arms")
    }

    // Faltan mas pero ya toca subir el trabajo :(((
}

class Plataforma{
    constructor(nombre, tipo, fecha_lanzamiento){
        this._nombre = nombre;
        this._tipo = tipo;
        this._fecha_lanzamiento = fecha_lanzamiento;
    }
}

class Clasificacion {
    constructor(categoria, publico){
        this._categoria = categoria;
        this._publico = publico;
    }
}