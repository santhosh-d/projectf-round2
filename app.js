const doc = document.addEventListener("DOMContentLoaded", getCount);
const unclap = document.getElementById("unclap");
const clap = document.getElementById("clap");
const count = document.getElementById("count-clap");
const like = document.getElementById("like");
const olike = document.getElementById("olike");
const flike = document.getElementById("flike");

var ccount, clike;
function getCount() {
  if (localStorage.getItem("count") === null) {
    ccount = 0;
    getLikes();
  } else {
    ccount = JSON.parse(localStorage.getItem("count"));
    clap.style.display = "inline";
    unclap.style.display = "none";
    count.innerText = `+${ccount}`;
    count.classList.add("count-clap");
    clap.classList.add("user-clap");
    localStorage.setItem("count", JSON.stringify(ccount));
    getLikes();
  }
}

function getLikes() {
  if (
    localStorage.getItem("like") === null ||
    localStorage.getItem("like") === "null"
  ) {
    clike = 0;
    olike.style.display = "inline-block";
  } else {
    clike = JSON.parse(localStorage.getItem("like"));
    flike.style.display = "inline-block";
    olike.style.display = "none";
  }
}

unclap.addEventListener("click", function (e) {
  ccount++;
  clap.style.display = "inline";
  unclap.style.display = "none";
  count.innerText = `+${ccount}`;
  count.classList.add("count-clap");
  clap.classList.add("user-clap");
  localStorage.setItem("count", JSON.stringify(ccount));
  console.log(clap);
});

clap.addEventListener("click", function (e) {
  ccount = JSON.parse(localStorage.getItem("count"));
  console.log(ccount);
  ccount++;
  count.innerText = `+${ccount}`;
  localStorage.setItem("count", JSON.stringify(ccount));
});

like.addEventListener("click", function () {
  clike = JSON.parse(localStorage.getItem("like"));
  if (clike === null || clike === "null") {
    clike = 1;
    localStorage.setItem("like", JSON.stringify(clike));
    flike.style.display = "inline-block";
    olike.style.display = "none";
  } else {
    localStorage.setItem("like", null);
    olike.style.display = "inline-block";
    flike.style.display = "none";
  }
});
