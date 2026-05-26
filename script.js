        // --- TYPING EFFECT ---
const typedTextSpan = document.getElementById("typed-text");
const textArray = ["BCA AI Student.","AI Learner.","Frontend Developer.", "Problem Solver."];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 1000);
});

// --- SCROLL ANIMATION ---
const scrollElements = document.querySelectorAll(".card");
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop <= (window.innerHeight) / 1.1) {
            el.classList.add("show-on-scroll");
        }
    });
}
window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// --- THEME TOGGLE WITH PERSISTENCE ---
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// 1. Check karein ki pehle se koi theme saved hai ya nahi
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
    body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

// 2. Click event handler
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    
    let theme = "dark"; // Default dark
    if (body.classList.contains("light-mode")) {
        theme = "light";
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
    
    // 3. Choice ko localStorage mein save karein
    localStorage.setItem("theme", theme);
});


// --- ALL PAGES PRELOADER LOGIC ---
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    
    // Thoda delay taaki user ko spinner dikhe (optional)
    setTimeout(() => {
        preloader.classList.add("preloader-hidden");
    }, 100); 
});













document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Hamburger icon pe click karte hi menu toggle hoga
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Icon ko change karne ke liye (Bars to Cross 'X')
            const icon = hamburger.querySelector('i');
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // X icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Wapas 3 lines
            }
        });
    }
});









 const scriptURL = 'https://script.google.com/macros/s/AKfycbyk4E27gMabmLFhn54fmFMIOb5DVexF-dP1GbCz0wB4P2cpNkZEYEVx1xk9MHnJ6-ptNA/exec';
  const form = document.getElementById('my-portfolio-form');
  const btn = document.getElementById('submit-btn');
  
  // Modal Variables
  const modal = document.getElementById('status-modal');
  const successDiv = document.getElementById('modal-success');
  const errorDiv = document.getElementById('modal-error');

  // Function to show modal
  function showModal(status) {
      modal.style.display = 'flex';
      if (status === 'success') {
          successDiv.style.display = 'block';
          errorDiv.style.display = 'none';
      } else {
          successDiv.style.display = 'none';
          errorDiv.style.display = 'block';
      }
  }

  // Function to close modal
  function closeModal() {
      modal.style.display = 'none';
  }

  // Close modal when clicking outside of it
  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        if(response.ok) {
            showModal('success'); // Open success popup
            form.reset();         // Form ke inputs clear kar dega
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        showModal('error');       // Open error popup
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    });
  });




//   download section ke liye function jo resume ko force download karega

  function forceDownload(event) {
    event.preventDefault();

    const link = document.createElement("a");

    // Resume ka path
    link.href = "./File/Hemang-vashi-resume.pdf";

    // Download hone par file name
    link.download = "Hemang_Vashi_Resume.pdf";

    // Hidden rakho
    link.style.display = "none";

    document.body.appendChild(link);

    // Direct download trigger
    link.click();

    document.body.removeChild(link);

}






