const section = document.querySelector("section");

section.addEventListener("click", () => {
  if (section.classList.contains("active")) {
    section.classList.remove("active");
    section.classList.add("reverse");
  } else {
    section.classList.remove("reverse");
    section.classList.add("active");
  }
});
