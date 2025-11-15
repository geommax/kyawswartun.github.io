// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // In a real implementation, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
        
        // Reset form
        this.reset();
    });
}

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'animate' to the section itself
            entry.target.classList.add('animate');
            // Also add 'animate' to any child elements that were prepared for animation
            // This ensures elements with the .animate-element class become visible
            // when their parent section enters the viewport.
            entry.target.querySelectorAll('.animate-element').forEach(el => el.classList.add('animate'));
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animate class to elements for entrance animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat-item');
    animatedElements.forEach(el => {
        el.classList.add('animate-element');
    });
    
    // Add staggered animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animations to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Simple animation for elements when they come into view
const style = document.createElement('style');
style.innerHTML = `
    .animate-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* Make animated elements visible either when they themselves get the
       'animate' class or when an ancestor section has the 'animate' class. */
    .animate-element.animate,
    .animate .animate-element {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Hamburger animation */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Update the year in footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${currentYear} Kyaw Swar Tun. All rights reserved.`;
    }
});

// Add mouse move effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            hero.style.setProperty('--x-move', `${xAxis}px`);
            hero.style.setProperty('--y-move', `${yAxis}px`);
        });
    }
});

// Add dynamic background effect
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const bubbles = 15;
    
    for (let i = 0; i < bubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 20 + 5}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(bubble);
    }
    
    // Add bubble styles
    const bubbleStyle = document.createElement('style');
    bubbleStyle.innerHTML = `
        .bubble {
            position: fixed;
            bottom: -100px;
            background: rgba(0, 198, 255, 0.1);
            border-radius: 50%;
            animation: rise linear infinite;
            z-index: -1;
        }
        
        @keyframes rise {
            to {
                transform: translateY(-120vh);
            }
        }
    `;
    document.head.appendChild(bubbleStyle);
});