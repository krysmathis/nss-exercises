const reindeer = coloredReindeerBuilder();
const reindeerColorEl = document.getElementById("colored-reindeer");
for (let i = 0; i < reindeer.length; i++) {
    let currentReindeer = reindeer[i];
    reindeerColorEl.innerHTML += `<section style="color: ${currentReindeer.color}">${currentReindeer.name}</section>`;
}