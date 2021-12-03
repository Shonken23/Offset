
window.addEventListener('DOMContentLoaded', event => {
			// NAVBAR SHRINK FUNCTION
			var navbarShrink = function () {
				const navbarCollapsible = document.body.querySelector('#mNav');
				if (!navbarCollapsible) {
					return;
				}
				if (window.scrollY === 0) {
					navbarCollapsible.classList.remove('navbar-shrink')
				} else {
					navbarCollapsible.classList.add('navbar-shrink')
				}
			};
			// SHRINK THE NAVBAR
			navbarShrink();

			// SHRINK THE NAVBAR WHEN PAGE IS SCROLLED
			document.addEventListener('scroll', navbarShrink);

			// ACTIVATE BOOTSTRAP SCROLLSPY ON THE MAIN NAV ELEMENT
			const mNav = document.body.querySelector('#mNav');
			if (mNav) {
				new bootstrap.ScrollSpy(document.body, {
					target: '#mNav',
					offset: 74,
				});
			};
			// COLLAPSE RESPONSIVE NAVBAR WHEN TOGGLER IS VISIBLE
			const navbarToggler = document.body.querySelector('.navbar-toggler');
			const responsiveNavItems = [].slice.call(
				document.querySelectorAll('#navbarResp .nav-link')
			);
			responsiveNavItems.map(function (responsiveNavItem) {
				responsiveNavItem.addEventListener('click', () => {
					if (window.getComputedStyle(navbarToggler).display !== 'none') {
						navbarToggler.click();
					}
				});
			});
});