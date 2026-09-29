const projectData = {
  "smart-house": {
    label: "WEB DEVELOPMENT",
    title: "Smart House Finding & Rental Recommendation System",
    description:
      "A web-based project focused on helping users find suitable houses and rental options in a more organized way. The project is presented as a smart house-finding and rental recommendation system, with a focus on a smoother experience for people searching for homes.",
    tags: ["HTML", "CSS", "JavaScript", "MERN"]
  },
  "irrigation": {
    label: "IOT / EMBEDDED",
    title: "Smart Irrigation System",
    description:
      "Developed using Arduino Uno, a soil moisture sensor and a water pump. The system automatically controls irrigation based on the detected soil moisture level, helping automate watering.",
    tags: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump"]
  },
  "health": {
    label: "HEALTH MONITORING",
    title: "Paralysis Patient Health Monitoring",
    description:
      "A patient health monitoring project using Arduino and biomedical sensors to monitor body temperature and heart rate.",
    tags: ["Arduino", "Biomedical Sensors"]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLabel = document.getElementById("modalLabel");
const modalTags = document.getElementById("modalTags");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = projectData[card.dataset.project];
    if (!data) return;

    modalLabel.textContent = data.label;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
