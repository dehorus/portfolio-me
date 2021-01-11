/* PARTICULAS */
particlesJS(
  {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#1170DF", "#233944"]
      },
      "shape": {
        "type": ["image", "triangle", "edge"],
        "stroke": {
          "width": 1,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "coding.png",
          "width": 500,
          "height": 500
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.6
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);


/* TILT */
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 500px)");
  const mq2 = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  mq2.addListener(WidthUp);
  WidthChange(mq);
}
function WidthChange(mq) {
  if (mq.matches) {
    let element = document.getElementById("ph-box");
    element.classList.remove("photo-tilt");
  }
}

function WidthUp(mq2) {
  if (mq2.matches) {
    let element = document.getElementById("ph-box");
    element.classList.add('photo-tilt');
  }

}



/* SLIDES */

/* FULL PAGE JS */

const seccionesPage = new fullpage('#fullpage', {
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 20,
  navigation: true,
  menu: '#menu',
  showActiveTooltip: false,
  responsiveHeight: 410
});

