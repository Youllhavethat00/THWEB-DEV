document.addEventListener('DOMContentLoaded', () => {
     const navLinks = document.querySelectorAll('nav a'); 

    // Add smooth scrolling behavior for nav links
 navLinks.forEach(link => {
     link.addEventListener ('click', function(e) {
         e.preventDefault();
          const target id = this.getAttribute('href');
           const targetElement = document.querySelector(targetld); 

           targetElement.scrollIntoView({
             behavior: 'smooth',
              block: 'start' 
            }); 
        });     
    }); 
});

