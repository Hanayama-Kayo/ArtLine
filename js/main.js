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
