var modal = document.getElementById('modalWindow');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("btnClose");
var spant = document.getElementsByClassName("btnCloseText");


// When the user clicks the button, open the modal 
	btn.addEventListener("click", function(e) {
		var modal = document.getElementById(this.dataset.modal);
	  modal.style.display = "block";
	}, false);

// When the user clicks anywhere outside of the modal, close it
	modal.addEventListener("click", function(e) {
		if (e.target == modal) {
			modal.style.display = "none";
		}
	}, false);

	// When the user clicks on <span> (x), close the modal
	modal.addEventListener("click", function(e) {
		if(e.target.className === 'btnClose') {
		  modal.style.display = 'none';
		}
	  }, false);

	  // When the user clicks on <spant> (Close), close the modal
	  modal.addEventListener("click", function(e) {
		if(e.target.className === 'btnCloseText') {
		  modal.style.display = 'none';
		}
	  }, false);