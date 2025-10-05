// Sample data for movies/series/anime with working poster URLs
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
   /* {
    id: 2,
    title: "One Punch Man",
    type: "anime",
    genre: ["Action", "Comedy", "Sci-Fi"],
    year: 2015,
    rating: 8.8,
    description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
    poster: "https://image.tmdb.org/t/p/w500/3LGWj9Q37qYRzZ54hY1QjQoJQqN.jpg",
    duration: "24 min"
    },*/
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
    }, /*
    {
    id: 5,
    title: "Tokyo Ghoul",
    type: "anime",
    genre: ["Action", "Drama", "Horror"],
    year: 2014,
    rating: 7.8,
    description: "A college student is attacked by a ghoul and becomes a half-ghoul himself, forced to consume human flesh to survive.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTk3ODA1NDY4NF5BMl5BanBnXkFtZTgwMzI1MzQ3NjM@._V1_.jpg",
    duration: "24 min"
    },*/
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
        title: "Money Heist",
        type: "series",
        genre: ["Action", "Crime", "Mystery"],
        year: 2017,
        rating: 8.2,
        description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        poster: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
        duration: "70 min"
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
        title: "Game of Thrones",
        type: "series",
        genre: ["Action", "Adventure", "Drama"],
        year: 2011,
        rating: 9.2,
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        duration: "57 min"
    },/*
{
    id: 11,
    title: "Neon Genesis Evangelion",
    type: "anime",
    genre: ["Animation", "Action", "Drama"],
    year: 1995,
    rating: 8.5,
    description: "A teenage boy finds himself recruited as a member of an elite team of pilots by his father, who directs a special agency created to fight mysterious beings known as Angels.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjNhM2Q1NTQtZDY5NS00ZDQ0LTk2ZmQtYzI3MmQ2YjQ5ZjM1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    duration: "24 min"
},*/
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