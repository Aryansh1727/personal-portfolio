const PortfolioData = {
    name: "Aryan Bharadwaj",
    tagline: "Computer Science student focused on Software Engineering, Web Development, and Cybersecurity.", 
    objective: "A Computer Science student focused on Software Engineering and Cybersecurity, with hands-on experience building web applications, REST APIs, and desktop applications. Passionate about developing practical, efficient, and secure software solutions.",    interests: "Web Development, Backend Development, Cybersecurity, REST API Development, Network Programming, Automation, and exploring modern software technologies.",    github: "https://github.com/Aryansh1727",
    linkedin: "https://www.linkedin.com/in/aryan-bharadwaj-403b35350/",
    email: "bharadwajaryan27@gmail.com",
    
    education: [
        { title: "Bachelors in Computer Science", school: "Gurugram University (Haryana)", meta: "2024 — 2028 | CGPA: 7.6/10" },
        { title: "Senior Secondary", school: "Public School Darbhanga (Bihar)", meta: "2022 — 2024 | 75.6%" }
    ],

    experience: [
        {
            title: "Web Development Intern",
            company: "BeeSkilled",
            meta: "6 Weeks | Virtual | 2026",
            desc: "Completed a 6-week web development internship, gaining practical experience in building responsive and interactive web projects using HTML, CSS, and JavaScript."
        },
        {
            title: "Internshala Student Partner (ISP)",
            company: "Internshala",
            meta: "June 2026 | Hybrid",
            desc: "Promoted Internshala's learning and internship opportunities among students, building communication, networking, and community engagement skills."
        }
    ],
        
    projects: [
        {
            title: "Django Blog REST API",
            desc: "Designed and developed a RESTful Blog API with Django REST Framework, enabling secure CRUD operations, authentication, filtering, search, ordering, and pagination. The project demonstrates backend development, API design, and clean code organization using Python and Django.",
            tech: ["Python", "Django",  "SQLite", "Django REST Framework", "Django Filter"],
            links: { github: "https://github.com/Aryansh1727/django-blog-rest-api" },
            demos: ["assets/projects/django-blog/admin.png", 
                "assets/projects/django-blog/login.png", 
                "assets/projects/django-blog/pagination_page1.png",
                "assets/projects/django-blog/pagination_page2.png",
                "assets/projects/django-blog/filter_post.png"] 
        },
        {
            title: "Real-Time Desktop Chat Application",
            desc: "A feature-rich real-time desktop chat application built with Python Sockets, Tkinter, and SQLite. Features a dual-mode dynamic theme (Dark/Light), active text keyword searching, live character constraints, and an integrated SQLite data audit utility.",
            tech: ["Python", "Sockets (TCP)", "Tkinter GUI", "SQLite3", "Multi-threading"],
            links: { github: "https://github.com/Aryansh1727/Chat-Application" },
            demos: ["assets/projects/chat/desktop-live-chat.png"] 
        },
        {
            title: "SkyCast Weather",
            desc: "A responsive weather application that delivers real-time weather conditions, hourly forecasts, and location-based weather updates through a clean and intuitive interface. Designed to provide fast, accurate weather information with a seamless user experience.",
            tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Fetch API", "OpenWeather API", "Geolocation API", "Local Storage"],
            links: {
                github: "https://github.com/Aryansh1727/SkyCast",
                live: "https://skycast-online.vercel.app"
            },
            demos: [
                "assets/projects/skycast/SkyCast-Front.png",
                "assets/projects/skycast/SkyCast-output1.png",
                "assets/projects/skycast/SkyCast-output2.png"
            ]
        },
        {
            title: "Password Analyzer & Cracker Simulator",
            desc: "A comprehensive cybersecurity auditing tool developed using Python and Java. It features a multi-layered password strength evaluation engine and a simulated brute-force attack module. Designed to educate users on entropy, common attack vectors, and the necessity of secure hashing algorithms in modern application infrastructure.",
            tech: ["Python", "Java"],
            links: { github: "https://github.com/Aryansh1727/Password-Strength-Analyzer-Cracker-Simulator" },
            demos: [
                "assets/projects/analyzer/analyzer-output1.png", 
                "assets/projects/analyzer/analyzer-output2.png"
            ] 
        },
    ],

    certificates: [
        {
            title: "Python Programming",
            org: "TuteDude",
            date: "July 2026",
            skills: ["Python", "OOP", "File Handling", "Modules", "Django"],
            id: "TD-ARYA-PY-1754",
            link: "https://drive.google.com/file/d/1_TLR7nRnNo0XfND8ZLd0c9vNXJ6hkmYr/view?usp=drive_link"
        },
        {
            title: "Web Development Internship",
            org: "BeeSkilled",
            date: "September 2026",
            skills: ["HTML", "CSS", "JavaScript"],
            id: "N/A",
            link: "https://drive.google.com/file/d/1oHEu1S_O41JyBdL3gKMWygv9_cT7ybVM/view?usp=drive_link"
        }
    ],
    
    categorizedSkills: {
        "Languages": ["C", "Python", "Java", "JavaScript", "HTML", "CSS"],
        "Frameworks": ["Django", "Django REST Framework"],
        "Databases": ["SQLite", "PostgreSQL"],
        "Tools": ["GitHub", "VS Code", "Linux"]
    },
    
    softSkills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Communication"],
    learning: ["React"]
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hero-name').innerText = PortfolioData.name;
    document.getElementById('hero-tagline').innerText = PortfolioData.tagline;
    document.getElementById('objective-text').innerText = PortfolioData.objective;
    document.getElementById('interests-text').innerText = PortfolioData.interests;
    
    document.getElementById('link-github').href = PortfolioData.github;
    document.getElementById('link-linkedin').href = PortfolioData.linkedin;
    document.getElementById('link-email').href = `mailto:${PortfolioData.email}`;

    const eduCont = document.getElementById('edu-container');
    PortfolioData.education.forEach(e => {
        eduCont.innerHTML += `
            <div class="edu-card">
                <h4>${e.title}</h4>
                <p>${e.school}</p>
                <p>${e.meta}</p>
            </div>
        `;
    });

    const expCont = document.getElementById('exp-container');
    PortfolioData.experience.forEach(exp => {
        expCont.innerHTML += `
            <div class="exp-card">
                <h4>${exp.title}</h4>
                <p>${exp.company} | ${exp.meta}</p>
                <p class="exp-desc">${exp.desc}</p>
            </div>
        `;
    });

    const projCont = document.getElementById('project-container');
    PortfolioData.projects.forEach((p, index) => {
        const tags = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        let linksHTML = `
        <a href="${p.links.github}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
            <span>Github</span>
        </a>
        `;
        if (p.demos && p.demos.length > 0) {
            linksHTML += `
            <button class="view-demo-btn" data-project-index="${index}">
                <i class="fa-regular fa-image"></i>
                <span>Demo</span>
            </button>
            `;
        }
        if (p.links.live) {
            linksHTML += `
            <a href="${p.links.live}"
            target="_blank"
            rel="noopener noreferrer"
            class="live-demo-btn">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Live</span>
            </a>
            `;
        }
        projCont.innerHTML += `
            <div class="project-card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="tech-stack">${tags}</div>
                <div class="project-links">
                    ${linksHTML}
                </div>
            </div>
        `;
    });

    const certCont = document.getElementById('certificate-container');
    PortfolioData.certificates.forEach(c => {
        const tags = c.skills.map(t => `<span class="tech-tag">${t}</span>`).join('');
        certCont.innerHTML += `
            <div class="cert-card">
                <h3>${c.title}</h3>
                <div class="cert-org">Issued by: ${c.org}</div>
                <div class="cert-date">Completed: ${c.date}</div>
                <div class="tech-stack" style="margin-bottom: 0.5rem;">${tags}</div>
                <div class="cert-id">Credential ID: ${c.id}</div>
                <div class="cert-links">
                    <a href="${c.link}" target="_blank">📄 View Certificate</a>
                </div>
            </div>
        `;
    });

    const techCatCont = document.getElementById('tech-categories-container');
    for (const [category, items] of Object.entries(PortfolioData.categorizedSkills)) {
        let itemsHTML = '';
        items.forEach(item => {
            itemsHTML += `<div class="skill-item">${item}</div>`;
        });
        
        techCatCont.innerHTML += `
            <div class="tech-category-group">
                <div class="tech-category-title">${category}</div>
                <div class="tech-items-grid">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }

    const softCont = document.getElementById('soft-container');
    PortfolioData.softSkills.forEach(sf => {
        softCont.innerHTML += `<div class="soft-item">${sf}</div>`;
    });

    const learnCont = document.getElementById('learning-container');
    PortfolioData.learning.forEach(l => {
        learnCont.innerHTML += `<div class="learning-item">${l}</div>`;
    });

    document.getElementById('year').innerText = new Date().getFullYear();

    /* --- THEME CONTROLLER --- */
    const themeBtn = document.getElementById('themeBtn');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerText = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
    }

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeBtn.innerText = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeBtn.innerText = '🌙';
        }
    });

    /* --- MODAL LOGIC --- */
    const modal = document.getElementById('imageModal');
    const modalWrapper = document.getElementById('modalWrapper');
    const closeModal = document.getElementById('closeModal');
    
    document.addEventListener('click', (e) => {
        const demoBtn = e.target.closest('.view-demo-btn');
        if (demoBtn) {
            const projectIndex = demoBtn.getAttribute('data-project-index');
            const project = PortfolioData.projects[projectIndex];
            modalWrapper.innerHTML = '';
            modalWrapper.scrollTop = 0;
            project.demos.forEach(mediaSrc => {
                const srcTrimmed = mediaSrc.trim();
                const isVideo =
                    srcTrimmed.endsWith('.mp4') ||
                    srcTrimmed.endsWith('.webm') ||
                    srcTrimmed.endsWith('.ogg');
                if (isVideo) {
                    const video = document.createElement('video');
                    video.src = srcTrimmed;
                    video.controls = true;
                    video.autoplay = true;
                    video.muted = true;
                    modalWrapper.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.src = srcTrimmed;
                    img.alt = `${project.title} Screenshot`;
                    modalWrapper.appendChild(img);
                }
            });
            modal.classList.add('show');
        }
    });

    const handleClose = () => {
        modal.classList.remove('show');
        modalWrapper.innerHTML = '';
    };
    closeModal.addEventListener('click', handleClose);
    modal.addEventListener('click', (e) => { if(e.target === modal) handleClose(); });

    /* --- MODERN INTERSECTION OBSERVER SCROLL REVEAL --- */
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealCallback, observerOptions);
    revealElements.forEach(el => sectionObserver.observe(el));

    /* --- BACK TO TOP DYNAMIC VISIBILITY & EVENT HANDLER --- */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        // Show button when scrolled down more than 400px
        if (window.pageYOffset > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
});

/* --- ACTIVE NAVIGATION SYNC --- */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    const reachedBottom = (window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 50;

    if (reachedBottom) {
        current = 'contact';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Theme-based favicon
const favicon = document.getElementById("favicon");

function updateFavicon() {
    const isLightTheme =
        document.documentElement.getAttribute("data-theme") === "light";

    const newFavicon = isLightTheme
        ? "assets/favicon/favicon-light.png"
        : "assets/favicon/favicon-dark.png";

    // Fade effect by temporarily removing the favicon
    favicon.removeAttribute("href");

    setTimeout(() => {
        favicon.href = newFavicon;
    },20);
}

updateFavicon();

const themeObserver = new MutationObserver(() => {
    updateFavicon();
});

themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
});