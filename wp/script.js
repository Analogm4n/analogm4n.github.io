const pet = document.getElementById('pet');

const petGifRight = '../images/cat_right_sneak1_9fps.gif';  
const petGifLeft = '../images/cat_left_sneak1_9fps.gif';  

let positionX = window.innerWidth - pet.clientWidth;
let direction = -1; // 1: derecha, -1: izquierda

// Establece los límites
const leftLimit = 0; // Límite izquierdo (0 píxeles desde el borde izquierdo)
const rightLimit = window.innerWidth - pet.clientWidth ; // Límite derecho (0 píxeles desde el borde derecho)

// Función para mover de un lado a otro
function movePet() {
    // Cambia la dirección si alcanza un borde de la pantalla
    if (positionX <= leftLimit) {
        direction = 1; 
        pet.src = petGifRight; 
    } else if (positionX >= rightLimit) {
        direction = -1; 
        pet.src = petGifLeft; 
    }

    // Actualiza la posición en X
    positionX += 5 * direction;
    pet.style.transform = `translateX(${positionX}px)`;
}

// Mueve continuamente cada 50 ms
setInterval(movePet, 50);
