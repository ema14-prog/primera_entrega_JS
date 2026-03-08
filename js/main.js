

alert("Bienvenido a la trivia millonaria!\nEstaras compitiendo contra otras 3 personas.\nEl juego es simple,el que saque mayor puntaje gana.\nSeran 5 preguntas.\nPor cada respuesta correcta se suman 3 puntos.\nPor cada incorrecta se resta 1 punto.\nSuerte!");


function Pregunta (id, texto, opciones, correcta){
    this.id = id;
    this.texto = texto;
    this.opciones = opciones;
    this.correcta = correcta;
    this.respondida = false;

    this.mostrar = function() {
        let mensaje = this.texto + "\n";
        for (let i=0; i < this.opciones.length; i++){
            mensaje += (i+1) + ". " + this.opciones[i] + "\n"
        }
        return mensaje;
    }

    this.verificar = function (respuestaUsuario){
        this.respondida = true;
        if (this.opciones[respuestaUsuario - 1] == this.correcta){
            alert ("Correcta!");
            return true;
        }else {
            alert("Incorrecta. La respuesta era: " + this.correcta);
            return false;
        }
    }
}

const preguntas = []

preguntas.push( new Pregunta("p01", "En que año le gano la libertadores River a boca en madrid:",["2000","2004", "2018"], "2018"))
preguntas.push(new Pregunta("p01", "En que año se fundo el club River Plate?:", ["1924", "1895", "1901", "1907"], "1901"))
preguntas.push(new Pregunta("p03","En que año gano River su primera copa libertadores?:",["1960","1975","1996","1986"],"1986"))
preguntas.push(new Pregunta("p04","Que equipo fue rival en la final de la copa sudamericana 2014?:",["atletico nacional","santos","atletico mineiro","peñarol"],"atletico nacional"))
preguntas.push(new Pregunta("p05","Quien es el goleador historico del club?:",["gabriel batistuta","el charro moreno","angel labruna","rafael santos borre"],"angel labruna"))

function Jugador (id,nombre){
    this.id = id;
    this.nombre = nombre;
    this.puntaje = 0;
}

const jugadores = []

jugadores.push( new Jugador("j01","vos"));
jugadores.push( new Jugador("j02","juan"));
jugadores.push( new Jugador("j03","maria"));
jugadores.push( new Jugador("j01","pedro"));

let opcion = prompt("Menú Trivia River:\n1- Jugar trivia completa\n2- Pregunta al azar\n3- Ver ranking\n4- Reiniciar puntaje\nX- Salir")

while (opcion.toLowerCase() != "x") {

    if (opcion == "1"){
        for(let i=0; i < preguntas.length; i++){
            let mensaje = preguntas[i].mostrar();
            let respuesta = prompt(mensaje);
            if(preguntas[i].verificar(parseInt(respuesta))) {
                jugadores.find(j => j.nombre == "vos"). puntaje += 3 ;
            }else {
                jugadores.find(j => j.nombre == "vos"). puntaje -- ;
            }
        }

            for (let j=0; j < jugadores.length; j++) {
                if (jugadores[j].nombre != "vos") {
                    jugadores[j].puntaje = Math.floor(Math.random() * 15);
                }
            }

        alert(("Terminaste la trivia, tu puntaje es: " + jugadores.find(j => j.nombre == "vos").puntaje))
        
        jugadores.sort((a,b) => b.puntaje - a.puntaje);
        let ranking = "Ranking:\n";
        for (let j=0; j < jugadores.length; j++){
            ranking += (j+1) + "." + jugadores[j].nombre + ": " + jugadores[j].puntaje + "\n"
        }
        alert(ranking)

    }else if (opcion == "2"){
        let indice = Math.floor(Math.random() * preguntas.length);
        let mensaje = preguntas[indice].mostrar();
        let respuesta = prompt(mensaje);
        if (preguntas[indice].verificar(parseInt(respuesta))) {
            jugadores.find(j => j.nombre == "vos").puntaje += 3 ;
        }else {
            jugadores.find(j => j.nombre == "vos").puntaje -- ;
        }

        for (let j=0; j < jugadores.length; j++) {
        if (jugadores[j].nombre != "vos") {
            jugadores[j].puntaje += Math.floor(Math.random() * 3) - 1;
        }
    }
    
        jugadores.sort((a,b) => b.puntaje - a.puntaje);
        let ranking = "Ranking:\n";
        for (let j=0; j < jugadores.length; j++){
            ranking += (j+1) + "." + jugadores[j].nombre + ": " + jugadores[j].puntaje + "\n"
        }
        alert(ranking)

    }else if (opcion == "3") {


        jugadores.sort((a,b) => b.puntaje - a.puntaje);
        let ranking = "Ranking:\n";
        for (let j=0; j < jugadores.length; j++){
            ranking += (j+1) + "." + jugadores[j].nombre + ": " + jugadores[j].puntaje + "\n"
        }
        alert(ranking)

    }else if (opcion == "4") {
        for (let j=0; j < jugadores.length; j++){
            jugadores[j].puntaje = 0;
        }
        alert("Puntajes reiniciado.\nPodes arrancar una nueva partida");
    }

    opcion = prompt("Menú Trivia River:\n1- Jugar trivia completa\n2- Pregunta al azar\n3- Ver ranking\n4- Reiniciar puntaje\nX- Salir")
}
alert("Gracias por jugar");

