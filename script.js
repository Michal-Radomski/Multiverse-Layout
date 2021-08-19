// ResponsiveMenu function
function ResponsiveMenu() {
  var nav_top = document.getElementById("Topnav");
  if (nav_top.className === "topnav") {
    nav_top.className += " responsive";
  } else {
    nav_top.className = "topnav";
  }
}

// Footer functions
function changeCurtain() {
  var x = document.getElementById("curtain").clientHeight;
  if (x == "0") {
    document.getElementById("curtain").style.height = "calc(65vh - 40px)";
  } else {
    document.getElementById("curtain").style.height = "0";
  }
}

function closeCurtain() {
  document.getElementById("curtain").style.height = "0%";
}

// Blur on click
$(".btn").on("click", function () {
  $("main").toggleClass("blurred");
});
$(".closebtn").on("click", function () {
  $("main").removeClass("blurred");
});

// Lightbox options script
lightbox.option({
  resizeDuration: 400,
  wrapAround: true,
  maxWidth: 1024,
  showImageNumberLabel: false,
  disableScrolling: true,
});
