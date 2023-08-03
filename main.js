/// funcion boton color

document.getElementById("btnChangeColor").addEventListener("click", function() {
    var cambio_color = document.getElementById("cambio_color");
    var randomColor = getRandomColor();
    cambio_color.style.backgroundColor = randomColor;
    

    var btnChangeColor = document.getElementById("btnChangeColor");
    var randomColor2 = getRandomColor2();
    btnChangeColor.style.backgroundColor = randomColor2;
    btnChangeColor.style.color = randomColor;

  });
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomColor2() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  /// boton agregar botones
  let contador = 2;

  document.getElementById("mas_uno").addEventListener("click", function() {
    var newDiv = document.createElement("div");
    newDiv.textContent = "+" + contador;    
    contador++;
    newDiv.classList.add("boton_color");
    newDiv.id = "div_borrar"
    var divContainer = document.getElementById("contenedor_botones");
     divContainer.appendChild(newDiv);

     newDiv.addEventListener("click", function() {
        this.remove();
      });
  });

  
/// boton girar animacion

let isRotating = false;

const rotatingImage = document.getElementById("rotatingImage");

document.getElementById("boton_girar_izq").addEventListener("click", function() {
    if (isRotating) {
        rotatingImage.classList.remove("rotating_izq");
        rotatingImage.classList.remove("rotating_der"); /* Eliminar clase con animación */
      } else {
        rotatingImage.classList.add("rotating_izq"); /* Agregar clase con animación */
      }
      isRotating = !isRotating;
});


document.getElementById("boton_girar_der").addEventListener("click", function() {
    if (isRotating) {
        rotatingImage.classList.remove("rotating_izq");
        rotatingImage.classList.remove("rotating_der"); /* Eliminar clase con animación */
      } else {
        rotatingImage.classList.add("rotating_der"); /* Agregar clase con animación */
      }
      isRotating = !isRotating;
});


/// boton agrandar y disminuir fuente

document.getElementById("agrandar_fuente").addEventListener("click", function() {

    var content = document.querySelector("body");
    var currentFontSize = window.getComputedStyle(content).fontSize;
    var newFontSize = parseInt(currentFontSize) + 2;
    content.style.fontSize = newFontSize + "px";
});

document.getElementById("disminuir_fuente").addEventListener("click", function() {

    var content = document.querySelector("body");
    var currentFontSize = window.getComputedStyle(content).fontSize;
    var newFontSize = parseInt(currentFontSize) - 2;
    content.style.fontSize = newFontSize + "px";
});


/// funcion mover

document.getElementById("arriba").addEventListener("click", function() {
    moveElement("container", 0, -100);
  });
  
  document.getElementById("derecha").addEventListener("click", function() {
    moveElement("container", 100, 0);
  });
  
  document.getElementById("izquierda").addEventListener("click", function() {
    moveElement("container", -100, 0);
  });
  
  document.getElementById("abajo").addEventListener("click", function() {
    moveElement("container", 0, 100);
  });
  
  function moveElement(elementId, xOffset, yOffset) {
    var element = document.getElementById(elementId);
    var currentLeft = parseInt(getComputedStyle(element).left) || 0;
    var currentTop = parseInt(getComputedStyle(element).top) || 0;
    element.style.left = (currentLeft + xOffset) + "px";
    element.style.top = (currentTop + yOffset) + "px";
  }


  /// funcion no me toques

  let contador2 = 0;

  document.getElementById("no").addEventListener("click", function() {
    contador2++;
    var nuevotexto = document.getElementById("no");
    if (contador2 === 1) {
        nuevotexto.textContent = "NO ME TOQUES.";    
    }
    if (contador2 === 2) {
        nuevotexto.textContent = "NO ME TOQUES.." ;    
    }
    if (contador2 === 3) {
        nuevotexto.textContent = "NO ME TOQUES...";    
    }
    if (contador2 === 5) {
        nuevotexto.textContent = "NO ME TOQUES..." + "tanto...";    
    }
    if (contador2 === 7) {
        nuevotexto.textContent = "Te lo advierto ";    
    }
    if (contador2 === 8) {
        nuevotexto.textContent = "Te lo advierto >:C";    
    }
    if (contador2 === 11) {
        nuevotexto.textContent = "Te lo advierto >:C >:C >:C";    
    }
    if (contador2 > 18) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("fin_juego");

        var divContainer = document.getElementById("todo");
        divContainer.appendChild(newDiv);
    }
    
  });