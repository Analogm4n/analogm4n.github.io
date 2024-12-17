const pet = document.getElementById('pet');

const petGifRight = '../images/Pet_Animation/cat_right_sneak1_9fps.gif';  
const petGifLeft = '../images/Pet_Animation/cat_left_sneak1_9fps.gif';  

let positionX = window.innerWidth - pet.clientWidth - 20;
let direction = -1; // 1: derecha, -1: izquierda

// Establece los límites
const leftLimit = -80; // Límite izquierdo (0 píxeles desde el borde izquierdo)
const rightLimit = window.innerWidth - pet.clientWidth -20 ; // Límite derecho (0 píxeles desde el borde derecho)

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

//Colores "Table of Contents"
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces dentro de la barra lateral
    const enlaces = document.querySelectorAll(".rightsidebar a");

    // Seleccionamos las secciones correspondientes (basadas en el href de cada enlace)
    const secciones = Array.from(enlaces).map((enlace) => {
        return document.querySelector(enlace.getAttribute("href"));
    });

    // Función para resaltar el enlace activo
    function actualizarEnlaceActivo() {
        // Obtenemos la posición actual del scroll
        let scrollPos = window.scrollY + 10; // Offset pequeño para ajustes

        // Recorremos cada sección
        secciones.forEach((seccion, index) => {
            const sectionTop = seccion.offsetTop;
            const sectionBottom = sectionTop + seccion.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                // Quitamos el color de todos los enlaces
                enlaces.forEach((enlace) => enlace.style.color = "");

                // Asignamos color rojo al enlace correspondiente
                enlaces[index].style.color = "red";
            }
        });
    }

    // Evento de scroll para actualizar los enlaces
    window.addEventListener("scroll", actualizarEnlaceActivo);

    // Evento de clic para actualizar inmediatamente al hacer clic
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            // Opcional: prevenir el comportamiento predeterminado para suavizar
            e.preventDefault();
            const targetID = this.getAttribute("href");
            const targetSection = document.querySelector(targetID);

            // Desplazamiento suave hacia la sección
            window.scrollTo({
                top: targetSection.offsetTop - 10, // Ajustamos el offset
                behavior: "smooth",
            });

            // Actualizamos el enlace activo manualmente
            enlaces.forEach((link) => link.style.color = "");
            this.style.color = "red";
        });
    });
});


