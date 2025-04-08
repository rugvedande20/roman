// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Scroll Progress Bar
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight * 100;
        document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Fade-in Animation for Elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check elements on load
    checkFade();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkFade);

    // Expand Content Buttons
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.previousElementSibling;
            content.classList.toggle('active');
            
            if (content.classList.contains('active')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Interactive Map Points
    const mapPoints = document.querySelectorAll('.map-point');
    
    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            const targetElement = document.getElementById(location.toLowerCase());
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            alert(`Thank you for subscribing with ${email}! You will receive our Roman Chronicles soon.`);
            this.reset();
        });
    }

    // CTA Button Smooth Scroll
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const introSection = document.querySelector('.intro');
            
            if (introSection) {
                window.scrollTo({
                    top: introSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Parallax Effect for Images
    const parallaxElements = document.querySelectorAll('.parallax-effect');
    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight && elementTop > -elementHeight) {
                const scrollPosition = window.scrollY;
                const translateY = scrollPosition * 0.05;
                element.querySelector('img').style.transform = `translateY(-${translateY}px) scale(1.05)`;
            }
        });
    });

    // Rotating Effect Animation
    const rotatingElements = document.querySelectorAll('.rotating-effect');
    
    rotatingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'rotate(360deg)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'rotate(0deg)';
        });
    });

    // Add animation class to timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimeline() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < window.innerHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('fade-in', 'visible');
                }, index * 200);
            }
        });
    }
    
    // Check timeline items on load and scroll
    if (timelineItems.length > 0) {
        checkTimeline();
        window.addEventListener('scroll', checkTimeline);
    }

    // Attraction Cards Hover Effect
    const attractionCards = document.querySelectorAll('.attraction-card');
    
    attractionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-overlay').style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-overlay').style.transform = 'translateY(100%)';
        });
    });

    // Smooth Scroll for Navigation Links
    const navLinkElements = document.querySelectorAll('.nav-links a');
    
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply smooth scroll for links to the same page
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });

    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinkElements.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
});