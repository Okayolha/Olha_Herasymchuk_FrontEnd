document.addEventListener("DOMContentLoaded", () => {
  const projectItem = document.querySelectorAll(".item");
  const photo = document.querySelector(".photo");
  const contacts = document.querySelector(".contacts");
  const techSkills = document.querySelector(".tech-skills");
  const softSkills = document.querySelector(".soft-skills");
  const language = document.querySelector(".languages");

  let photoCenter = photo.offsetHeight;
  let scrollPh = window.scrollY + photoCenter;

  if (scrollPh === photoCenter) {
    photo.classList.add("activeLeft");
    contacts.classList.add("activeRight");
    techSkills.classList.add("activeLeft");
    softSkills.classList.add("activeRight");
    language.classList.add("activeLeft");
  }
  const scrollAnimationPhoto = () => {
    let centerWind = window.scrollY;
    let techSkillsCenter = techSkills.offsetHeight;
    let scrollPh = (centerWind + techSkillsCenter) / 5;

    if (scrollPh <= techSkillsCenter) {
      photo.classList.add("activeLeft");
      contacts.classList.add("activeRight");
      techSkills.classList.add("activeLeft");
      language.classList.add("activeLeft");
    } else {
      photo.classList.remove("activeLeft");
      contacts.classList.remove("activeRight");
      techSkills.classList.remove("activeLeft");
      language.classList.remove("activeLeft");
    }
    let softSkilsCenter = softSkills.offsetHeight;

    let scrollSoft = centerWind + softSkilsCenter;

    if (scrollSoft > softSkilsCenter) {
      softSkills.classList.add("activeRight");
    }
    if (scrollSoft > 1000) {
      softSkills.classList.remove("activeRight");
    }
  };

  let center = window.innerHeight / 4;
  let projectCenter = center + window.scrollY;
  projectItem.forEach(el => {
    let scrollTop = el.offsetTop + el.offsetHeight;
    if (projectCenter > scrollTop) {
      el.classList.add("animation");
    }
  });
  const scrollAnimationProject = () => {
    let center = window.innerHeight / 4;
    let projectCenter = center + window.scrollY;
    projectItem.forEach(el => {
      let scrollTop = el.offsetTop + el.offsetHeight;
      if (projectCenter > scrollTop) {
        el.classList.add("animation");
      } else {
        el.classList.remove("animation");
      }
    });
  };

  window.addEventListener("scroll", () => {
    scrollAnimationProject();
    scrollAnimationPhoto();
  });
});
