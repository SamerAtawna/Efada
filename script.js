/**
 * ANIMATE SECOND SECTION ON SCROLL
 */
const controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom('.first-enter', 1.25, {
  scale: 0,
  cycle: {
    y: [-50, 50],
  },
  ease: Elastic.easeOut.config(1, 0.5),
  stagger: {
    from: 'right',
    amount: 0.5,
  },
});

var scene = new ScrollMagic.Scene({
  triggerElement: '#splide2',
  triggerHook: 0.1,
})

  .setTween(tl)
  .addTo(controller);

/**
 * ANIMATE THIRD SECTION ON SCROLL
 */
var t2 = new TimelineMax();
t2.staggerFrom('.third_section', 1.25, {
  scale: 0,
  cycle: {
    y: [-50, 50],
  },
  ease: Elastic.easeOut.config(1, 0.5),
  stagger: {
    from: 'right',
    amount: 0.5,
  },
});

var scene = new ScrollMagic.Scene({
  triggerElement: '#second_section',
  triggerHook: 0.1,
})

  .setTween(t2)
  .addTo(controller);
/**
 * ANIMATE FORTH SECTION ON SCROLL
 */
var splide = new Splide('.splide', {
  direction: 'ttb',
  height: '10rem',
  wheel: true,
  arrows: false,
  height: '300px',
  width: '500px',
  autoplay: true,
  classes: {
    pagination: 'splide__pagination your-class-pagination',
    page: 'splide__pagination__page your-class-page',
  },
});
splide.on('pagination:mounted', function (data) {
  data.list.classList.add('splide__pagination--custom');
});

splide.mount();
var splide2 = new Splide('.splide2', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  pagination: false,
  arrows: false,
  height: '400px',
  breakpoints: {
    480: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
  },
});

splide2.mount();

var splide3 = new Splide('.splide3', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  pagination: false,
  arrows: false,
  height: '400px',
  breakpoints: {
    480: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
  },
});
splide3.mount();
var splide4 = new Splide('.splide4', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  pagination: false,
  arrows: false,
  height: '400px',
  breakpoints: {
    480: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
  },
});
splide4.mount();
/**
 * ANIMATED COUNTERS FUNCTION
 */
function animateCounter(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = '+' + current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

/**
 * ANIMATE COUNTERS
 */
var scene = new ScrollMagic.Scene({
  triggerElement: '#fifthSection',
  triggerHook: 0.1,
})
  .on('enter', (a) => {
    animateCounter('firstNum', 0, 1475, 3000);
    animateCounter('secondNum', 0, 15, 3000);
    animateCounter('thirdNum', 0, 32, 3000);
    animateCounter('forthNum', 0, 1224, 3000);
  })
  .addTo(controller);

// map
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
map.setView([24.736435281794954, 46.738586], 10);

// hide loading on website ready
window.addEventListener('load', function () {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('html').style.overflowY = 'auto';
});
