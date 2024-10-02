class Jugador {
    constructor(nombre, edad, equipo, estadisticas) {
        this.nombre = nombre;
        this.edad = edad;
        this.equipo = equipo;
        this.estadisticas = estadisticas; 
    }

    calcularPromedio() {
        const { goles, asistencias, partidos } = this.estadisticas;
        return (goles + asistencias) / partidos;
    }
}

const jugadores = [];
const ganadores = [];

function agregarJugador() {
    const nombre = prompt("Ingresa el nombre del jugador:");
    const edad = parseInt(prompt("Ingresa la edad del jugador:"));

    if (isNaN(edad) || edad < 18) {
        alert('Este jugador es muy joven para entrar en la nominación.');
        return;
    }
        const equipo = prompt("Ingresa el equipo del jugador:");
        const goles = parseInt(prompt("Ingresa los goles anotados:"));
        const asistencias = parseInt(prompt("Ingresa las asistencias:"));
        const partidos = parseInt(prompt("Ingresa los partidos jugados:"));
    
        const estadisticas = { goles, asistencias, partidos };
        const jugador = new Jugador(nombre, edad, equipo, estadisticas);
        jugadores.push(jugador);
    
   

   
}

function calcularGanador(año) {
    let maxPromedio = 0;
    let ganador = null;

    for (const jugador of jugadores) {
        const promedio = jugador.calcularPromedio();
        if (promedio > maxPromedio) {
            maxPromedio = promedio;
            ganador = jugador;
        }
    }

    if (ganador) {
        ganadores.push({ año, ganador});
        alert(`El ganador del Balon de Oro ${año} es ${ganador.nombre} (${ganador.equipo}) con un promedio de ${maxPromedio.toFixed(2)}`);
    }
}
function mostrarGanadores() {
    if (ganadores.length === 0) {
        alert("No hay ganadores registrados.");
        return;
    }

    let mensaje = "Registro de ganadores:\n";
    ganadores.forEach(ele => {
        mensaje += `Año: ${ele.año}, Ganador: ${ele.ganador.nombre} (${ele.ganador.equipo})\n`;
    });
    alert(mensaje);
}


function iniciar() {
    let continuar = true;

    while (continuar) {
        const numJugadores = parseInt(prompt(" ¿Cuántos jugadores deseas ingresar?"));
        if (isNaN(numJugadores) || numJugadores <= 0) {
            alert("Por favor ingresa un número válido de jugadores.");
            continue;
        }

        for (let i = 0; i < numJugadores; i++) {
            agregarJugador(i);
        }

        const año = prompt("Ingresa el año que se esta evaluando:");
        calcularGanador(año);
        mostrarGanadores(año); 
        
        continuar = confirm("¿Quieres ingresar jugadores de otro año?");
    }
}

iniciar()


