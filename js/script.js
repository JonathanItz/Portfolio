window.addEventListener('load', function() {
  AOS.init();

  document.querySelector('.hero-image i').addEventListener('click', function() {
    this.classList.toggle('rotate')
  	document.querySelector('.hero-image img').classList.toggle('move-left')
  })

})
