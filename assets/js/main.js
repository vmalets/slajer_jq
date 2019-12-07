let $slideItems = $('.slide');
let $indContainer = $('.indicators');
let $indItems = $('.indicator');
let $pauseBtn = $('#pause');
let $prevBtn = $('#prev');
let $nextBtn = $('#next');
let playbackStatus = true;
let slideLenght = $slideItems.length;
let currentSlide = 0;
let carouselInterval = 3000;
let slideInterval;

const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const SPACE = ' ';

$('.controls').css('display', 'block');
$indContainer.css('display', 'flex');

gotonSlide = (n) => {
  $($slideItems[currentSlide]).toggleClass('active');
  $($indItems[currentSlide]).toggleClass('active');
  currentSlide = (n + slideLenght) % slideLenght;
  $($slideItems[currentSlide]).toggleClass('active');
  $($indItems[currentSlide]).toggleClass('active');
};

gotoPrevSlide = () => {
  gotonSlide(currentSlide - 1);
};

gotoNextSlide = () => {
  gotonSlide(currentSlide + 1);
};


pauseSlideShow = () => {
  if (playbackStatus) {
    clearInterval(slideInterval);
    $pauseBtn.removeClass('fa-pause');
    $pauseBtn.addClass('fa-play');
    playbackStatus = !playbackStatus;
  }
};

playSlideShow = () => {
  slideInterval = setInterval(gotoNextSlide, carouselInterval);
  $pauseBtn.removeClass('fa-play');
  $pauseBtn.addClass('fa-pause');
  playbackStatus = !playbackStatus;
};

clickPausePlayBtn = () => playbackStatus ? pauseSlideShow() : playSlideShow();

clickPrevPlayBtn = () => {
  pauseSlideShow();
  gotoPrevSlide();
};

clickNextPlayBtn = () => {
  pauseSlideShow();
  gotoNextSlide();

};

$pauseBtn.on('click', clickPausePlayBtn);
$prevBtn.on('click', clickPrevPlayBtn);
$nextBtn.on('click', clickNextPlayBtn);

clickIndicatorBtn = (e) => {
  pauseSlideShow();
  gotonSlide(+e.target.getAttribute('data-slide-to'));
};

$indContainer.on('click', '.indicator', clickIndicatorBtn);

pressKeyControl = (e) => {
  if (e.key === LEFT_ARROW) clickPrevPlayBtn();
  if (e.key === RIGHT_ARROW) clickNextPlayBtn();
  if (e.key === SPACE) clickPausePlayBtn();
};

$(document).on('keydown', pressKeyControl);

slideInterval = setInterval(gotoNextSlide, carouselInterval);
