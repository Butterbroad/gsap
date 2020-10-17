
var tlFirstScroll = new TimelineMax();

tlFirstScroll
  .set('.iphone-image-wrapper', { scale: 4, transformOrigin: 'center top' })
  .to('.iphone-image-wrapper', 3, { scale: 2.2, y: '-30%' })
  .to('.iphone-image-wrapper', 3, { scale: 1, y: '0%' })

var controller = new ScrollMagic.Controller();

//scene1
var scene1 = new ScrollMagic.Scene({
  triggerElement: '.trigger1',
  triggerHook: 0,
  duration: '100%'
})

  .setTween(tlFirstScroll)
  .addIndicators()
  .addTo(controller);

var tlSecondScroll = new TimelineMax();

tlSecondScroll
  .to('.iphone1', 3, { x: '-50%' })
  .to('.iphone2', 3, { x: '50%' }, '-=3')
  .from('.iphone1-text', 0.3, { autoAlpha: 0 }, '-=3')
  .from('.iphone2-text', 0.3, { autoAlpha: 0 }, '-=3')
  .to('.iphone1-text', 3, { x: '-30%' }, '-=3')
  .to('.iphone2-text', 3, { x: '30%' }, '-=3')


var scene1 = new ScrollMagic.Scene({
  triggerElement: '.trigger2',
  triggerHook: 0,
  duration: '100%'
})
  .setTween(tlSecondScroll)
  .setPin('.trigger2')
  .addIndicators()
  .addTo(controller);











function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});