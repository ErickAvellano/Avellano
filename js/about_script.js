var links = document.querySelectorAll('.aboutnav ul li a');

		// Loop through each link and add a click event listener
		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function(e) {
				// Prevent the default link behavior
				e.preventDefault();

				// Get the ID of the content to show
				var targetId = this.getAttribute('href');

				// Hide all the content elements
				var contentElements = document.querySelectorAll('.content');
				for (var j = 0; j < contentElements.length; j++) {
					contentElements[j].classList.remove('active');
				}

				// Show the selected content element
				var targetElement = document.querySelector(targetId);
				targetElement.classList.add('active');
			});
		}