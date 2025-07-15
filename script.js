// Menu toggle for mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu ul').classList.toggle('active');
});

//btn ver mais
const players = document.querySelectorAll('.player');
const toggleButton = document.getElementById('toggleButton');
let expanded = false;

function updateView() {
  players.forEach((player, index) => {
    if (expanded || index < 8) {
      player.classList.add('show');
    } else {
      player.classList.remove('show');
    }
  });
  toggleButton.textContent = expanded ? 'Ocultar' : 'Ver Tudo';
}

toggleButton.addEventListener('click', () => {
  expanded = !expanded;
  updateView();
});

updateView();