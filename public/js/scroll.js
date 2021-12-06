

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

// Ici, nous disons que cela scrolldevrait être la window.requestAnimationFrameméthode, ou (si ce n'est pas disponible), utilisez cette fonction simple qui attend un soixantième de seconde avant d'appeler le rappel.




var elementsToShow = document.querySelectorAll('.show-on-scroll');

// Ensuite, nous allons récupérer les éléments de la page que nous voulons rechercher.
// Cela recherchera tous les éléments avec classe show-on-scrollet les renverra sous forme de tableau que nous pouvons parcourir en boucle.




function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }

  loop();


  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }