var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var gallery = document.getElementById("lightgallery");
var modalImg = document.getElementById("img01");

gallery.addEventListener('click', (e) => {
    const imgPath = e.target.closest('li');
    modal.style.display = "block";
    modalImg.src = imgPath.getAttribute('data-src');
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}