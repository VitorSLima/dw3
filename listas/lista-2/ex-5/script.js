const btn = document.getElementById("addBox");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("box");
  container.appendChild(div);
});