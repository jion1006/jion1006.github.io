const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const progressBar = document.querySelector("#scrollProgress");
const year = document.querySelector("#currentYear");

year.textContent = new Date().getFullYear();

/* 모바일 메뉴 */
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* 요소 등장 애니메이션 */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

/* 현재 보고 있는 섹션 메뉴 강조 */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => sectionObserver.observe(section));

/* 상단 스크롤 진행률 */
function updateScrollProgress() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

  progressBar.style.width = `${Math.min(ratio * 100, 100)}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

/* About Me 모달 */
const aboutModal = document.querySelector("#aboutModal");
const openAboutModalButton = document.querySelector("#openAboutModal");
const closeAboutModalButtons = document.querySelectorAll("[data-modal-close]");

function openAboutModal() {
  aboutModal.classList.add("is-open");
  aboutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeAboutModal() {
  aboutModal.classList.remove("is-open");
  aboutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

openAboutModalButton.addEventListener("click", openAboutModal);

closeAboutModalButtons.forEach((button) => {
  button.addEventListener("click", closeAboutModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && aboutModal.classList.contains("is-open")) {
    closeAboutModal();
  }
});