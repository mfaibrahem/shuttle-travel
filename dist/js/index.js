new WOW().init();
$('.owl-home').owlCarousel({
  autoplay: true,
  rtl: true,
  animateIn: 'fadeInLeft',
  animateOut: 'fadeOutRight',
  items: 1,
  smartSpeed: 600,
  loop: true
});
$('.owl-details').owlCarousel({
  items: 1,
  loop: true,
  rtl: true,
  animateIn: 'fadeInRight',
  animateOut: 'fadeOutLeft',
  center: true,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: 'URLHash'
});

window.addEventListener('scroll', function() {
  const UIheader = document.querySelector('.header-container');
  if (window.scrollY >= 100) {
    UIheader.classList.add('header-colored');
  } else {
    UIheader.classList.remove('header-colored');
  }
});

const UIlines = document.querySelector('.lines');
const UIheaderMd = document.querySelector('.header-md');
const UIinsideUlA = document.querySelector('.md-inside-ul-A');
const UIinsideUlB = document.querySelector('.md-inside-ul-B');
const UIdropA = document.querySelector('.drop-A');
const UIdropB = document.querySelector('.drop-B');
function handleClickLines() {
  UIheaderMd.classList.toggle('toggle-header-md');
  UIlines.classList.toggle('toggle-lines');
}
function handleClickDropA(e) {
  UIinsideUlA.classList.toggle('toggle-md-inside-ul-A');
  e.preventDefault();
}
function handleClickDropB(e) {
  UIinsideUlB.classList.toggle('toggle-md-inside-ul-B');
  e.preventDefault();
}
UIlines.addEventListener('click', handleClickLines);
UIdropA.addEventListener('click', handleClickDropA);
UIdropB.addEventListener('click', handleClickDropB);
