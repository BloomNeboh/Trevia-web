// Typing effect for hero
const text = "Discover Tanzania with Nyota";
let i = 0;
const speed = 100;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Render tours dynamically
const tourList = document.getElementById("tour-list");
tours.forEach(t => {
  const card = document.createElement("div");
  card.className = "tour-card";
  card.innerHTML = `
    <img src="${t.img}" alt="${t.name}">
    <h3>${t.name}</h3>
    <p>${t.description}</p>
    <p><strong>${t.price}</strong></p>
  `;
  tourList.appendChild(card);
});
