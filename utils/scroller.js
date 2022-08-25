const scrollCenter = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  const position =
    document.getElementById(id).getBoundingClientRect().top +
    window.pageYOffset -
    150;
  window.scrollTo({ top: position, behavior: "smooth" });
};

const scrollCenterTop = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  const position =
    document.getElementById(id).getBoundingClientRect().top +
    window.pageYOffset -
    110;
  window.scrollTo({ top: position, behavior: "smooth" });
};

const scrollYFocus = (id) => {
  const position =
    document.getElementById(id).getBoundingClientRect().top +
    window.pageYOffset -
    70;
  window.scrollTo({ top: position, behavior: "smooth" });
};

export { scrollCenter, scrollYFocus, scrollCenterTop };
