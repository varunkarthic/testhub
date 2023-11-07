var modal = document.getElementById('modal01');
var img = document.querySelector('.rounded-img');
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);

    $('a.page-link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newPage);
    });

    function newPage() {
        window.location = newLocation;
    }
});

