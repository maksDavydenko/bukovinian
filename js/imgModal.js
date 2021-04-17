var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var gallery = document.getElementById("lightgallery");
var modalImg = document.getElementById("img01");

gallery.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-item');
    modal.style.display = "block";
    modalImg.src = img.src;
});



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}