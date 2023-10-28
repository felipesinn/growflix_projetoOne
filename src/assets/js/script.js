
const movies = [
  {
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
    title: "Growcast #00 - Conheça a Growdev",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
    title: "Growcast #01 - As profissões do futuro",
    link: "https://www.youtube.com/embed/7OWT3lfHYvE",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
    title: "Growcast #02 - Como seguir a carreira internacional?",
    link: "https://www.youtube.com/embed/ci1eQGPK89o",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
    title: "Growcast #03 - Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
    title: "Growcast #04 - Agile Master: tudo sobre a profissão!",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
    title:
      "Growcast #5 - Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/embed/mxnEm03cYPc",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
    title: "Growcast #06 - Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/embed/m7DyR07KrOE",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
    title: "Growcast #07 - Desenvolvendo profissionais na área de TI",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
    title:
      "Growcast #8 - A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
    title:
      "Growcast #9 - Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI",
    link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    category: "ux-ui",
  },
]

function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("col-4");

  card.innerHTML = `
    <div class="card">
      <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <button class="btn btn-primary btn-watch" data-link="${movie.link}" onclick=" openMovieSegundary('${movie.link}')">Assistir</button>
      </div>
    </div>
  `;

  return card;
}

function renderCardsByCategory(category) {
  const container = document.getElementById(category + "-movies");

  movies.forEach((movie) => {
    if (movie.category === category) {
      const card = createCard(movie);
      card.classList.add("col-4");
      container.appendChild(card);
    }
  });
}

function showCardDetails(event) {
  const cardBody = event.currentTarget.querySelector('.card-body');
  cardBody.style.display = 'block';
}

function hideCardDetails(event) {
  const cardBody = event.currentTarget.querySelector('.card-body');
  cardBody.style.display = 'none';
}

function openMovie(button) {
  const videoLink = button.getAttribute('data-link');
  
  const videoIframe = document.getElementById('videoIframe');
  videoIframe.src = videoLink;

  const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  videoModal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  const categories = ["growcast", "webinar", "ux-ui", "outrasCategorias"];
  categories.forEach((category) => {
    renderCardsByCategory(category);
  });

const watchButtons = document.querySelectorAll('.btn btn-primary');
watchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openMovie(button);
  });
});

  const closeModalButton = document.querySelector(".btn-close");
  closeModalButton.addEventListener("click", () => {
    const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
    videoModal.hide();
  });
});


function openMovieSegundary(videoLink) {
  const videoIframe = document.getElementById('videoIframe');
  videoIframe.src = videoLink;

  const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  videoModal.show();
}
