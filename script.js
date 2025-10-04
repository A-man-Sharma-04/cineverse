// Sample data for movies/series/anime
const mediaData = [
    {
        id: 1,
        title: "Stranger Things",
        type: "series",
        genre: ["Sci-Fi", "Horror", "Drama"],
        year: 2016,
        rating: 8.7,
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        duration: "51 min"
    },
    {
        id: 2,
        title: "Attack on Titan",
        type: "anime",
        genre: ["Action", "Adventure", "Drama"],
        year: 2013,
        rating: 9.0,
        description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        poster: "https://m.media-amazon.com/images/M/MV5BNjZjODI5NmUtZTc2My00NThjLWE0YjgtMjkwM2Q1ZTY4N2I0XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        duration: "24 min"
    },
    {
        id: 3,
        title: "Inception",
        type: "movie",
        genre: ["Action", "Sci-Fi", "Thriller"],
        year: 2010,
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        duration: "2h 28m"
    },
    {
        id: 4,
        title: "The Mandalorian",
        type: "series",
        genre: ["Action", "Adventure", "Fantasy"],
        year: 2019,
        rating: 8.7,
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        poster: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
        duration: "40 min"
    },
    {
        id: 5,
        title: "Demon Slayer",
        type: "anime",
        genre: ["Action", "Fantasy", "Adventure"],
        year: 2019,
        rating: 8.5,
        description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MmYtYmFjYS00OWYzLTg0YTYtYzFjNzMzNjFjMjFkXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
        duration: "23 min"
    },
    {
        id: 6,
        title: "Parasite",
        type: "movie",
        genre: ["Comedy", "Drama", "Thriller"],
        year: 2019,
        rating: 8.6,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        duration: "2h 12m"
    },
    {
        id: 7,
        title: "The Queen's Gambit",
        type: "series",
        genre: ["Drama"],
        year: 2020,
        rating: 8.6,
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        poster: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJkXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
        duration: "60 min"
    },
    {
        id: 8,
        title: "Your Name",
        type: "anime",
        genre: ["Animation", "Drama", "Fantasy"],
        year: 2016,
        rating: 8.4,
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        poster: "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg",
        duration: "1h 46m"
    },
    {
        id: 9,
        title: "Interstellar",
        type: "movie",
        genre: ["Adventure", "Drama", "Sci-Fi"],
        year: 2014,
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        duration: "2h 49m"
    },
    {
        id: 10,
        title: "Breaking Bad",
        type: "series",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2008,
        rating: 9.5,
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM3ZWQ4N2Y4NzQ0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        duration: "49 min"
    },
    {
        id: 11,
        title: "Fullmetal Alchemist",
        type: "anime",
        genre: ["Action", "Adventure", "Drama"],
        year: 2003,
        rating: 8.1,
        description: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong and leaves them in damaged physical forms.",
        poster: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTQtMDY0Yy00OGJlLTkzNDgtNjNhNjZkMzZkNjdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        duration: "24 min"
    },
    {
        id: 12,
        title: "The Dark Knight",
        type: "movie",
        genre: ["Action", "Crime", "Drama"],
        year: 2008,
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        duration: "2h 32m"
    }
];

// DOM Elements
const movieGrid = document.getElementById('movie-grid');
const watchlistGrid = document.getElementById('watchlist-grid');
const paginationEl = document.getElementById('pagination');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const modal = document.getElementById('movie-modal');
const closeModal = document.getElementById('close-modal');
const modalPoster = document.getElementById('modal-poster');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalRating = document.getElementById('modal-rating');
const modalDescription = document.getElementById('modal-description');
const modalWatchlistBtn = document.getElementById('modal-watchlist-btn');
const watchlistLink = document.getElementById('watchlist-link');
const homeLink = document.getElementById('home-link');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const watchlistPage = document.getElementById('watchlist-page');
const errorPage = document.getElementById('error-page');
const backToHome = document.getElementById('back-to-home');
const backHome = document.getElementById('back-home');
const loginToSignup = document.getElementById('login-to-signup');
const signupToLogin = document.getElementById('signup-to-login');
const emptyWatchlist = document.getElementById('empty-watchlist');

// State variables
let currentPage = 1;
const itemsPerPage = 8;
let currentFilter = 'all';
let currentSort = 'rating';
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let currentMedia = null;

// Initialize the app
function init() {
    renderMovies();
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.type;
            currentPage = 1;
            renderMovies();
        });
    });

    // Sort select
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        currentPage = 1;
        renderMovies();
    });

    // Modal close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Modal watchlist button
    modalWatchlistBtn.addEventListener('click', () => {
        if (currentMedia) {
            toggleWatchlist(currentMedia.id);
            updateModalWatchlistButton();
        }
    });

    // Watchlist link
    watchlistLink.addEventListener('click', (e) => {
        e.preventDefault();
        showWatchlistPage();
    });

    // Home link
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });

    // Back to home from watchlist
    backToHome.addEventListener('click', () => {
        showHomePage();
    });

    // Back to home from error
    backHome.addEventListener('click', () => {
        showHomePage();
    });

    // Auth buttons
    loginBtn.addEventListener('click', () => {
        showLoginPage();
    });

    signupBtn.addEventListener('click', () => {
        showSignupPage();
    });

    // Auth page switches
    loginToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        showSignupPage();
    });

    signupToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginPage();
    });

    // Form submissions
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, this would handle login
        alert('Login functionality would be implemented with a backend');
        showHomePage();
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, this would handle signup
        alert('Signup functionality would be implemented with a backend');
        showHomePage();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Render movies based on current filters and pagination
function renderMovies() {
    // Filter data
    let filteredData = mediaData;
    if (currentFilter !== 'all') {
        filteredData = mediaData.filter(item => item.type === currentFilter);
    }

    // Sort data
    filteredData.sort((a, b) => {
        if (currentSort === 'rating') {
            return b.rating - a.rating;
        } else if (currentSort === 'title') {
            return a.title.localeCompare(b.title);
        } else if (currentSort === 'year') {
            return b.year - a.year;
        }
        return 0;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Render movie cards
    movieGrid.innerHTML = '';
    paginatedData.forEach(item => {
        const isInWatchlist = watchlist.includes(item.id);
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${item.poster}" alt="${item.title}" class="movie-poster">
            <button class="watchlist-btn ${isInWatchlist ? 'added' : ''}" data-id="${item.id}">
                <i class="fas ${isInWatchlist ? 'fa-bookmark' : 'fa-plus'}"></i>
            </button>
            <div class="movie-info">
                <h3 class="movie-title">${item.title}</h3>
                <div class="movie-meta">
                    <span>${item.year}</span>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>
            </div>
        `;
        movieGrid.appendChild(card);

        // Add event listeners to the card
        card.addEventListener('click', () => {
            showMovieModal(item);
        });

        // Add event listener to watchlist button
        const watchlistBtn = card.querySelector('.watchlist-btn');
        watchlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWatchlist(item.id);
            watchlistBtn.classList.toggle('added');
            watchlistBtn.innerHTML = `<i class="fas ${watchlist.includes(item.id) ? 'fa-bookmark' : 'fa-plus'}"></i>`;
        });
    });

    // Render pagination
    renderPagination(totalPages);
}

// Render pagination controls
function renderPagination(totalPages) {
    paginationEl.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMovies();
        }
    });
    paginationEl.appendChild(prevButton);
    
    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderMovies();
        });
        paginationEl.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderMovies();
        }
    });
    paginationEl.appendChild(nextButton);
}

// Show movie details modal
function showMovieModal(media) {
    currentMedia = media;
    modalPoster.src = media.poster;
    modalTitle.textContent = media.title;
    
    // Render meta info
    modalMeta.innerHTML = `
        <span>${media.type.charAt(0).toUpperCase() + media.type.slice(1)}</span>
        <span>${media.year}</span>
        <span>${media.duration}</span>
    `;
    
    // Render rating
    modalRating.innerHTML = `
        <i class="fas fa-star"></i>
        <span>${media.rating}</span>
    `;
    
    modalDescription.textContent = media.description;
    
    // Update watchlist button
    updateModalWatchlistButton();
    
    modal.style.display = 'block';
}

// Update modal watchlist button state
function updateModalWatchlistButton() {
    if (currentMedia) {
        const isInWatchlist = watchlist.includes(currentMedia.id);
        modalWatchlistBtn.innerHTML = `
            <i class="fas ${isInWatchlist ? 'fa-bookmark' : 'fa-plus'}"></i>
            ${isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        `;
    }
}

// Toggle watchlist item
function toggleWatchlist(id) {
    const index = watchlist.indexOf(id);
    if (index === -1) {
        watchlist.push(id);
    } else {
        watchlist.splice(index, 1);
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    renderWatchlist();
}

// Render watchlist
function renderWatchlist() {
    const watchlistItems = mediaData.filter(item => watchlist.includes(item.id));
    
    if (watchlistItems.length === 0) {
        emptyWatchlist.classList.remove('hidden');
        watchlistGrid.innerHTML = '';
    } else {
        emptyWatchlist.classList.add('hidden');
        watchlistGrid.innerHTML = '';
        watchlistItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${item.poster}" alt="${item.title}" class="movie-poster">
                <button class="watchlist-btn added" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </button>
                <div class="movie-info">
                    <h3 class="movie-title">${item.title}</h3>
                    <div class="movie-meta">
                        <span>${item.year}</span>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                </div>
            `;
            watchlistGrid.appendChild(card);
            
            // Add event listeners
            card.addEventListener('click', () => {
                showMovieModal(item);
            });
            
            const watchlistBtn = card.querySelector('.watchlist-btn');
            watchlistBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleWatchlist(item.id);
                card.remove();
                if (watchlist.length === 0) {
                    emptyWatchlist.classList.remove('hidden');
                }
            });
        });
    }
}

// Show different pages
function showHomePage() {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelector('main').classList.remove('hidden');
    history.pushState({page: 'home'}, '', '#');
}

function showWatchlistPage() {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.add('hidden');
    });
    watchlistPage.classList.remove('hidden');
    renderWatchlist();
    history.pushState({page: 'watchlist'}, '', '#watchlist');
}

function showLoginPage() {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.add('hidden');
    });
    loginPage.classList.remove('hidden');
    history.pushState({page: 'login'}, '', '#login');
}

function showSignupPage() {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.add('hidden');
    });
    signupPage.classList.remove('hidden');
    history.pushState({page: 'signup'}, '', '#signup');
}

function showErrorPage() {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.add('hidden');
    });
    errorPage.classList.remove('hidden');
    history.pushState({page: 'error'}, '', '#error');
}

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (state) {
        if (state.page === 'home') showHomePage();
        else if (state.page === 'watchlist') showWatchlistPage();
        else if (state.page === 'login') showLoginPage();
        else if (state.page === 'signup') showSignupPage();
        else if (state.page === 'error') showErrorPage();
        else showHomePage();
    } else {
        showHomePage();
    }
});

// Handle navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        if (target === 'watchlist') showWatchlistPage();
        else if (target === 'login') showLoginPage();
        else if (target === 'signup') showSignupPage();
        else showHomePage();
    });
});

// Initialize the app
init();