let acordion = document.getElementsByClassName("accordion");
console.log(acordion);

for (let i = 0; i < acordion.length; i++) {
  //   console.log("here=>", acordion[i]);
  acordion[i].addEventListener("click", function () {
    acordion[i].classList.toggle("active");

    let paragraph = acordion[i].nextElementSibling;
    console.log("All Siblling of the accordion => ", paragraph);
    if (paragraph.style.maxHeight) {
      paragraph.style.maxHeight = null;
    } else {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
    }
    // if (paragraph.style.display === "block") {
    //   paragraph.style.display = "none";
    // } else {
    //   paragraph.style.display = "block";
    // }
  });
}
