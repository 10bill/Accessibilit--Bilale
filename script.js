function addComment(articleId) {
    var commentInput = document.getElementById(`comment-input-${articleId}`).value;

    if (commentInput.trim() !== "") {
        var commentsList = document.getElementById(`comments-list-${articleId}`);
        var newComment = document.createElement("li");
        newComment.textContent = commentInput;
        commentsList.appendChild(newComment);

        // Efface le champ de commentaire après soumission
        document.getElementById(`comment-input-${articleId}`).value = "";
    }
}
function populateTable() {
    var tableBody = document.getElementById('tableBody');

    // Exemple d'articles (remplacez cela par les données réelles de vos articles)
    var articles = [
        { date: '12 Fevrier 2024', title: 'GLE Mercedes-Benz', price: '104 550 €' },
        { date: '22 Mars 2024', title: '2024 Mercedes-Benz Classe G', price: '142 650 €' },
        { date: '18 Avril 2024', title: 'MERCEDES-MAYBACH CLASSE S', price: '340243.75€' }
    ];

    // Boucle à travers les articles et ajoute chaque ligne au tableau
    articles.forEach(function (article) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = article.date;
        cell2.textContent = article.title;
        cell3.textContent = article.price;
    });
}

document.addEventListener("DOMContentLoaded", populateTable);

// Fonction pour afficher/masquer la section de commentaires
function toggleComments(sectionId) {
    var commentsSection = document.getElementById(sectionId);
    commentsSection.style.display = (commentsSection.style.display === 'none' || commentsSection.style.display === '') ?
        'block' : 'none';
}

// Fonction pour ajouter un commentaire
function addComment(articleId) {
    var commentInput = document.getElementById(`comment-input-${articleId}`).value;

    if (commentInput.trim() !== "") {
        var commentsList = document.getElementById(`comments-list-${articleId}`);
        var newComment = document.createElement("li");
        newComment.textContent = commentInput;
        commentsList.appendChild(newComment);

        // Efface le champ de commentaire après soumission
        document.getElementById(`comment-input-${articleId}`).value = "";
    }
}

function toggleAccessibilityMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    // Vous pouvez également stocker le choix de l'utilisateur dans localStorage
    var isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Appliquer le mode enregistré dans localStorage au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    var body = document.body;
    if (isDarkMode) {
        body.classList.add("dark-mode");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var data = {
        labels: ['Janv', 'Fév', 'Mar', 'Avr', 'Mai'],
        datasets: [{
            label: 'Exemple de graphique',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }
    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');

        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }
    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });

    }
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}


const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();