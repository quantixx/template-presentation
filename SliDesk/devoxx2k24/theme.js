document.addEventListener("DOMContentLoaded", () => {
  // on title-slide, change page presentation
  [...document.querySelectorAll(".title-slide")].forEach((el) => {
    const leftText = el.querySelector(".left-text");
    const h2 = el.querySelector("h2");
    const subtitle = el.querySelector(".subtitle");
    const content = el.querySelector(".content");
    if (leftText) el.prepend(leftText);
    const title = document.createElement("div");
    title.classList.add("title");
    if (h2) title.append(h2);
    if (subtitle) title.append(subtitle);
    el.append(title);
    if (content) el.append(content);
  });

  // add stamp on each slide
  [...document.querySelectorAll(".sd-slide")].forEach((el) => {
    const divEl = document.createElement("footer");
    divEl.classList.add("stamp");
    divEl.innerHTML = `Devox<span>x</span> France 2024`;
    el.appendChild(divEl);
  });
});
