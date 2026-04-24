document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', () => {
			const sections = document.querySelectorAll('.section-appear');
			const windowHeight = window.innerHeight;
			
			sections.forEach(section => {
					const sectionPosition = section.getBoundingClientRect().top;
					const triggerPoint = windowHeight - 150;
					
					if (sectionPosition < triggerPoint) {
							section.classList.add('visible');
					}
			});
	});
});
