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
  2. **Responder una pregunta al azar**.  
  3. **Ver ranking de jugadores**.  
  4. **Reiniciar puntajes** y comenzar una nueva partida.  
  5. **Salir del juego**.  

- **Función constructora `Pregunta`** para crear objetos con:
  - Texto de la pregunta.  
  - Opciones de respuesta.  
  - Respuesta correcta.  
  - Métodos `mostrar()` y `verificar()`.  

- **Simulación de rivales**: Juan, María y Pedro reciben puntajes aleatorios cada vez que jugás, para que el ranking sea dinámico.  

---

## 🛠️ Tecnologías utilizadas
- **JavaScript** (ES6)  
- **Prompt/Alert** para interacción con el usuario en navegador.  

---

## 📂 Estructura del proyecto

Trivia-Millonaria/
│
├── README.md        # Documentación del proyecto
├── index.html       # Archivo HTML para correr el juego
└── script.js        # Lógica principal en JavaScript


---

🏆 Ejemplo de Ranking
Ranking:
1. Vos: 9
2. María: 7
3. Juan: 5
4. Pedro: 3

💡 Ideas futuras

Evitar que las preguntas al azar se repitan hasta que se terminen todas.

Guardar puntajes históricos en localStorage.

Agregar más jugadores ficticios o niveles de dificultad.

👨‍💻 Autor
Proyecto desarrollado por Ema como práctica de programación JS