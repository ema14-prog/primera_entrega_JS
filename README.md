# 🎮 Trivia Millonaria

Bienvenido a **Trivia Millonaria**, un juego interactivo en JavaScript donde competís contra otros jugadores ficticios para ver quién obtiene el mayor puntaje respondiendo preguntas sobre River Plate. ⚽🔥

---

## 📖 Descripción
El juego consiste en responder preguntas de opción múltiple.  
- Cada respuesta **correcta suma 3 puntos**.  
- Cada respuesta **incorrecta resta 1 punto**.  
- Al finalizar, se muestra un **ranking** con tu puntaje y el de otros jugadores simulados.  

---

## 🚀 Funcionalidades
- Menú principal con distintas opciones:
  1. **Jugar trivia completa** (5 preguntas seguidas).  
     - Al terminar, se muestra tu puntaje final y el ranking actualizado.  
  2. **Responder una pregunta al azar**.  
     - También muestra tu puntaje y el ranking al finalizar.  
  3. **Ver ranking de jugadores** en cualquier momento.  
  4. **Reiniciar puntajes** y comenzar una nueva partida.  
  5. **Salir del juego**.  

- **Función constructora `Pregunta`** para crear objetos con:
  - Texto de la pregunta.  
  - Opciones de respuesta.  
  - Respuesta correcta.  
  - Métodos `mostrar()` y `verificar()`.  

- **Función constructora `Jugador`** para crear jugadores con:
  - ID único.  
  - Nombre.  
  - Puntaje inicializado en 0.  

- **Simulación de rivales**: Juan, María y Pedro reciben puntajes aleatorios cada vez que jugás, para que el ranking sea dinámico y competitivo.  

---

## 🛠️ Tecnologías utilizadas
- **JavaScript** (ES6)  
- **Prompt/Alert** para interacción con el usuario en navegador.  

---

## 📂 Estructura del proyecto