var links = document.querySelectorAll('.aboutnav ul li a');

		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function(e) {
				e.preventDefault();

				var targetId = this.getAttribute('href');

				var contentElements = document.querySelectorAll('.content');
				for (var j = 0; j < contentElements.length; j++) {
					contentElements[j].classList.remove('active');
				}

				var targetElement = document.querySelector(targetId);
				targetElement.classList.add('active');
			});
		}