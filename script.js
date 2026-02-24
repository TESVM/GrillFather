const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, idx) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.classList.add("in");
      }, idx * 90);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const formNext = document.getElementById("form-next");
if (formNext) {
  const returnUrl = new URL(window.location.href);
  returnUrl.searchParams.set("submitted", "true");
  returnUrl.hash = "membership";
  formNext.value = returnUrl.toString();
}

const successNote = document.getElementById("form-success");
const query = new URLSearchParams(window.location.search);
if (query.get("submitted") === "true" && successNote) {
  successNote.textContent = "Success. Your signup was received.";
}
