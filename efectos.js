
//pagina de inicio

//cambiar el tamaño de la imagen del logo de Frozurt

let imagen = document.getElementById("imagen1");
imagen.onclick= function(){imagen.style.width="220px"; imagen.style.height="220px"}

//efecto de movimiento de la imagen al pasar el mouse

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.imagen2');
    const image = document.getElementById('imagen12');
  
    container.addEventListener('mousemove', function(event) {
      const mouseX = event.clientX - container.offsetLeft;
      const mouseY = event.clientY - container.offsetTop;
      
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      
      const moveX = (mouseX - centerX) / 10;
      const moveY = (mouseY - centerY) / 10;
  
      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  
    container.addEventListener('mouseleave', function() {
      image.style.transform = 'translate(0, 0)';
    });
});

//pagina 2 Mision y Vision

//efecto de opacidad de laimagen de los tres vasos de yogurt

document.addEventListener("DOMContentLoaded", function() {
  const opacityImage = document.getElementById('yogurt1');

  opacityImage.addEventListener('mouseover', function() {
    opacityImage.style.opacity = '0.5';
  });

  opacityImage.addEventListener('mouseout', function() {
    opacityImage.style.opacity = '1';
  });
});

//efecto de movimiento de los parrafos de mision y vision

document.addEventListener("DOMContentLoaded", function() {
    const movingParagraph = document.getElementById('parrafoyog1');
    const containerWidth = document.querySelector('.parrafo1').offsetWidth;
    
    let position = containerWidth;
  
    function animate() {
      position--;
      movingParagraph.style.left = position + 'px';
      
      if (position < -movingParagraph.offsetWidth) {
        position = containerWidth;
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
});

document.addEventListener("DOMContentLoaded", function() {
    const movingParagraph = document.getElementById('parrafoyog2');
    const containerWidth = document.querySelector('.parrafo2').offsetWidth;
    
    let position = containerWidth;
  
    function animate() {
      position--;
      movingParagraph.style.left = position + 'px';
      
      if (position < -movingParagraph.offsetWidth) {

        position = containerWidth;
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
});

//pagina 3 - nuestro producto frozurt

//efecto cambio de tamañoo de la letra

document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('nuestro');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '20px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '25px';
  });
});

//efecto de cambio de color en el texto 

document.addEventListener("DOMContentLoaded", function() {
  const coloredText = document.getElementById('parrafoyog4');

  coloredText.addEventListener('mouseover', function() {
    coloredText.style.color = '#FFFCF7';
  });

  coloredText.addEventListener('mouseout', function() {
    coloredText.style.color = '#493725';
  });
});

//pagina 4 Registrate y conoce mas

//efecto cambio de tamaño de letra en titulo

document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('registrate');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '20px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '25px';
  });
});

//efecto cambio de tamaño en imagen

document.addEventListener("DOMContentLoaded", function() {
  const scalingImage = document.getElementById('imgform1');

  scalingImage.addEventListener('mouseover', function() {
    scalingImage.classList.add('scalingTransition');
    scalingImage.style.transform = 'scale(1.2)';
  });

  scalingImage.addEventListener('mouseout', function() {
    scalingImage.classList.remove('scalingTransition');
    scalingImage.style.transform = 'scale(1)';
  });
});

// pagina 5 - Frozurt una experiencia unica de sabor

//efecto de cambio de tamaño titulo

document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('experiencia');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '25px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '35px';
  });
});

//efecto de transparecia imagenes de pagina Frozurt una experiencia de sabor

document.addEventListener("DOMContentLoaded", function() {
  const opacityImage = document.getElementById('imgset1');

  opacityImage.addEventListener('mouseover', function() {
    opacityImage.style.opacity = '0.5';
  });

  opacityImage.addEventListener('mouseout', function() {
    opacityImage.style.opacity = '1';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const opacityImage = document.getElementById('imgset2');

  opacityImage.addEventListener('mouseover', function() {
    opacityImage.style.opacity = '0.5';
  });

  opacityImage.addEventListener('mouseout', function() {
    opacityImage.style.opacity = '1';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const opacityImage = document.getElementById('imgset3');

  opacityImage.addEventListener('mouseover', function() {
    opacityImage.style.opacity = '0.5';
  });

  opacityImage.addEventListener('mouseout', function() {
    opacityImage.style.opacity = '1';
  });
});

//efecto cambio de tamaño titulo segmento con imagen


document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('artesanal');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '25px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '21px';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('ingredientes');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '25px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '21px';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById('nutritivo');

  changingText.addEventListener('mouseover', function() {
    changingText.style.fontSize = '25px';
  });

  changingText.addEventListener('mouseout', function() {
    changingText.style.fontSize = '21px';
  });
});

//Pagina 6 - Plan de precios Frozurt

//efecto de titulo en movimiento

let titulo = document.getElementById("plan"); 
let texto = "Plan de Precios Frozurt"; 
let velocidad = 100; 
  function animarTexto() {
let i = 0; setInterval(()=>{if(i < texto.length){  
  titulo.innerHTML += texto.charAt(i); i++;}}, velocidad)} 
animarTexto();

//efecto cambio de color en el texto 

document.addEventListener("DOMContentLoaded", function() {
  const coloredText = document.getElementById('sabores');

  coloredText.addEventListener('mouseover', function() {
    coloredText.style.color = '#FFFCF7';
  });

  coloredText.addEventListener('mouseout', function() {
    coloredText.style.color = '#493725';
  });
});

// Pagina 7 - Contactanos

//efecto de movimiento de los parrafos de mision y vision

document.addEventListener("DOMContentLoaded", function() {
  const movingParagraph = document.getElementById('contacto2');
  const containerWidth = document.querySelector('.contactosf').offsetWidth;
  
  let position = containerWidth;

  function animate() {
    position--;
    movingParagraph.style.left = position + 'px';
    
    if (position < -movingParagraph.offsetWidth) {

      position = containerWidth;
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
});

//efecto cambio de tamaño en imagen

document.addEventListener("DOMContentLoaded", function() {
  const scalingImage = document.getElementById('vasoyog3');

  scalingImage.addEventListener('mouseover', function() {
    scalingImage.classList.add('scalingTransition');
    scalingImage.style.transform = 'scale(1.2)';
  });

  scalingImage.addEventListener('mouseout', function() {
    scalingImage.classList.remove('scalingTransition');
    scalingImage.style.transform = 'scale(1)';
  });
});
