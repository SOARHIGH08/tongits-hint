function toggleCard(card) {
  card.classList.toggle("off");
}

function toggleOff(setId) {
  const set = document.getElementById(setId);
  const cards = set.getElementsByClassName("card");
  for (const card of cards) {
    card.classList.toggle("off", false);
  }
}
function toggleOn(setId) {
  const set = document.getElementById(setId);
  const cards = set.getElementsByClassName("card");
  for (const card of cards) {
    card.classList.toggle("off", true);
  }
}
