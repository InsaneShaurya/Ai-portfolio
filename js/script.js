// Smooth button navigation to projects section
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Clickable summary cards route to related sections
const cards = document.querySelectorAll('.grid-card');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// Chatbot logic based on keyword detection
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatOutput = document.getElementById('chatOutput');

function getBotResponse(query) {
  const q = query.toLowerCase().trim();

  if (q.includes('skills')) {
    return 'Skills: Frontend (HTML, CSS, JavaScript), Tools (Git, GitHub), Learning (AI, Startups).';
  }
  if (q.includes('education')) {
    return 'Education: Currently focused on self-learning, practical projects, and continuous upskilling in web development.';
  }
  if (q.includes('projects')) {
    return 'Projects: Freelance Landing Page Suite, Portfolio Builder Template, Startup Idea Validator.';
  }
  if (q.includes('experience')) {
    return 'Experience: I am a fresher, actively building strong project-based experience.';
  }
  return 'Ask about skills, projects, or education.';
}

function handleChat() {
  const text = chatInput.value;
  if (!text.trim()) return;
  chatOutput.textContent = getBotResponse(text);
  chatInput.value = '';
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleChat();
});

// Fade-in effect while scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
