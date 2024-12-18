$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});
document.addEventListener('DOMContentLoaded', function () {
    const gameSections = document.querySelectorAll('.game-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    gameSections.forEach((section) => observer.observe(section));
  });
  document.addEventListener('DOMContentLoaded', function () {
    const gameSections = document.querySelectorAll('.game-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    gameSections.forEach((section) => observer.observe(section));
  });
  document.addEventListener('DOMContentLoaded', function () {
	const gameSections = document.querySelectorAll('.game-section');
  
	const observer = new IntersectionObserver(
	  (entries) => {
		entries.forEach((entry) => {
		  if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		  }
		});
	  },
	  { threshold: 0.2 }
	);
  
	gameSections.forEach((section) => observer.observe(section));
  });
  
      const scriptURL =                       
      "https://script.google.com/macros/s/AKfycbxyv4ijv7azb3Me-hWfx3LJM9CHdPaNhCSzFHZL7SngfXI67LnJR7vhK2bKgHH43W8IyA/exec";
      const form = document.forms["submit-to-google-sheet"];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var ex = document.getElementById("ex").checked;
        var age = document.getElementById("age").checked;

        if (age) {
          formData.append("age", "Yes");
        } else {
          formData.append("age", "No");
        }
        if (ex) {
          formData.append("ex", "Yes");
        } else {
          formData.append("ex", "No");
        }

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });
   
