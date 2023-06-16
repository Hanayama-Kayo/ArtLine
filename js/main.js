window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.bottom = "60px";
    } else {
      backtop.style.bottom = "-60px";
    }
  }
  function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "0";
  document.getElementById("down2").style.opacity = "0"
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-100%";
  document.getElementById("down2").style.opacity = "1"
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

window.addEventListener("scroll", function () {
  down();
});

let down2 = document.getElementById("down2");

function down() {
  if (scrollY > 530) {
    down2.classList.add("down-remove");
  } else {
		down2.classList.remove("down-remove");
	}
}











//card-1-start


const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

//card-1-end
//catr-2-start

// const images2 = document.querySelectorAll('.slider2 .slider-line2 img');
// const sliderLine2 = document.querySelector('.slider2 .slider-line2');

// function init2() {
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine2.style.width = width * images2.length + 'px';
//     images2.forEach(item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider2();
// }

// init2();
// window.addEventListener('resize', init2);

// document.querySelector('.slider-next2').addEventListener('click', function () {
//     count++;
//     if (count >= images2.length) {
//         count = 0;
//     }
//     rollSlider2();
// });

// document.querySelector('.slider-prev2').addEventListener('click', function () {
//     count--;
//     if (count < 0) {
//         count = images2.length - 1;
//     }
//     rollSlider2();
// });

// function rollSlider2() {
//     sliderLine2.style.transform = 'translate(-' + count * width + 'px)';

// }

//card-2-end


























document.getElementById("click").addEventListener("click", modal);
document.getElementById("close-modal").addEventListener("click", close);




function modal() {
    document.getElementById("grand-body").style.transform = ("scale(1)");
    document.getElementById("grand-body").style.opacity = ("1"); 

}
function close(){
    document.getElementById("grand-body").style.transform = ("scale(0)");
    document.getElementById("grand-body").style.opacity = ("0");

}





// document.getElementById("click-2").addEventListener("click", modal2);
// document.getElementById("close-modal2").addEventListener("click", close2);


// function modal2() {
//   document.getElementById("grand-body2").style.transform = ("scale(1)");
//   document.getElementById("grand-body2").style.opacity = ("1"); 

// }
// function close2(){
//   document.getElementById("grand-body2").style.transform = ("scale(0)");
//   document.getElementById("grand-body2").style.opacity = ("0");

// }