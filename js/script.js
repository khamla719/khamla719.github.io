document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill bar animations
    initSkillBars();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Setup dark mode toggle
    setupDarkModeToggle();
    
    // Setup section entrance animations
    setupSectionAnimations();
    
    // Setup contact button click event
    const contactMeBtn = document.querySelector('.hero-content button:nth-of-type(2)');
    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

/**
 * Animate skill bars when they come into view
 */
function initSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.width = level + '%';
                    
                    // Only need to animate once
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        skillLevels.forEach(skillLevel => {
            observer.observe(skillLevel);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        skillLevels.forEach(skillLevel => {
            const level = skillLevel.getAttribute('data-level');
            skillLevel.style.width = level + '%';
        });
    }
}

/**
 * Setup smooth scrolling for all anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Setup dark/light mode toggle
 */
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                darkModeToggle.textContent = 'Dark Theme';
                saveThemePreference('light');
            } else {
                darkModeToggle.textContent = 'Light Theme';
                saveThemePreference('dark');
            }
        });
        
        // Check saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            darkModeToggle.textContent = 'Dark Theme';
        } else {
            darkModeToggle.textContent = 'Light Theme';
        }
    }
}

/**
 * Save theme preference to localStorage
 */
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

/**
 * Add entrance animations for sections as they come into view
 * This can be expanded for more advanced animations
 */
function setupSectionAnimations() {
    const sections = document.querySelectorAll('.glass-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            section.classList.add('animate-section');
            observer.observe(section);
        });
    }
} 