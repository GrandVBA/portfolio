const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e){
  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
};