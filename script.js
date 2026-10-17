const stories = [
    ["The Four Bad Boys and Me",
     "Tina Lata", "Romance, Teen Fiction, Comedy", 
     "A young woman finds herself caught up in the lives of four popular boys",
     "images/four.jpg"
    ],
    ["The Good Girl's Revenge", 
        "Tina Lata", "Romance, Drama",
         "A story about heartbreak, revenge, and unexpected relationships.",
        "images/good.jpg"
        ],
    ["The Bad Boy's Love", "Tina Lata",
         "Romance, Teen Fiction, Fantasy",
          "A complicated romance develops between characters with different personalities.",
        "images/bad.jpg"
        ],
    ["Destined", "Tina Lata", 
        "Romance, Drama",
        "Two people discover how fate and their choices affect their relationship.",
       "images/destined.jpg"
    ],
    ["Dear Tadhana", 
        "Tina Lata",
        "Romance, Drama", 
        "A romantic story about love, fate, and the challenges of relationships.",
        "images/tadhana.jpeg"
    ],
    ["Breaking the Bad Boy",
         "Tina Lata",
          "Romance, Teen Fiction, Fantasy", 
          "A relationship challenges the reputation of a boy known for his attitude.",
            "images/breaking.jpg"
        ],
    ["Don't Break the Bad Boy's Heart",
         "Tina Lata", "Romance, Drama", 
         "Love and trust are tested as the characters face relationship problems.",
            "images/dont.jpg"
        ],
    ["I'm in Love with a DOTA Player,", 
        "Tina Lata", 
        "Romance, Comedy, Thriller", 
        "Gaming and romance meet in a story about an unexpected attraction.",
         "images/dota.jpg"
    ],
    ["Totally in Love with a DOTA Player", 
        "Tina Lata", "Romance, Comedy", 
        "A romantic story that combines gaming, friendship, and relationships.",
           "images/totally.jpg"
    ],
    ["He's Into Her", 
        "Maxinejiji", 
        "Romance, Teen Fiction", 
        "A school romance unfolds as two students deal with misunderstandings and growing feelings.",
        "images/hes.jpg"
    ],
    ["Teen Clash", 
        "Aii",
        "Romance, Teen Fiction", 
        "Students face friendship issues, rivalries, and romance during their school years.",
        "images/clash.jpg"
    ], 
    ["Teen Clash 2: Battle Between Heart and Mind",
         "Aii", "Romance, Drama, Thriller", 
         "The Teen Clash story continues with difficult choices and complicated relationships.",
                 "images/clash2.jpg"
        ],
    ["The Trouble with the Rule",
         "Aii", 
         "Romance, Teen Fiction", 
         "A story about rules, relationships, and the unexpected complications of young love.",
        "images/trouble.jpeg"
        ],
    ["The Relationship Code",
         "Aii", 
         "Romance, Drama",
         "Characters navigate the challenges of understanding love and relationships.",
                 "images/code.jpg"
        ],
    ["Mapapansin Kaya?",
         "Jonaxx", 
         "Romance, Drama",
          "A romance involving Wade Rivas and Reina Carmela, with family expectations and emotional challenges.",
                  "images/kaya.jpg"
        ],
    ["Heartless", 
        "Jonaxx", 
        "Romance, Drama", 
        "A relationship story exploring complicated emotions and personal struggles.",
                "images/heart.jpg"
    ],
    ["Worthless",
         "Jonaxx",
          "Romance, Drama",
          "A romance shaped by personal insecurities, relationships, and difficult choices.",
                  "images/worth.jpg"
        ],
    ["Every Beast Needs a Beauty", 
        "Jonaxx", "Romance, Drama", 
        "An intense romance explores the relationship between two very different people.",
                "images/beast.jpg"
    ],
    ["One Night, One Lie", 
        "Jonaxx", 
        "Romance, Drama",
         "A romantic story where secrets and difficult decisions affect a relationship.",
                 "images/one.jpg"
        ],
    ["Give In to You",
         "Jonaxx", 
         "Romance, Drama", 
         "A story about attraction, emotional conflict, and the complications of love.",
                 "images/give.jpg"
        ],
    ["Baka Sakali",
         "Jonaxx", 
         "Romance, Drama", 
         "A romance about possibilities, feelings, and the choices that shape relationships.",
         "images/baka.jpg"
        ],
    ["End This War", 
        "Jonaxx",
         "Romance, Drama",
         "A relationship develops amid conflict, emotional struggles, and difficult decisions.",
         "images/end.jpg"
        ],
    ["Until He Was Gone", 
        "Jonaxx",
         "Romance, Drama", 
         "A love story about separation, loss, and the impact of someone important leaving.",
           "images/until.jpg"
        ],
        
    ["Until He Returned", 
        "Jonaxx", 
        "Romance, Drama", 
        "The story continues as a relationship faces the challenges of reunion and unresolved feelings.",
        "images/until2.jpg"
    ],
    ["Until Forever", 
        "Jonaxx",
         "Romance, Drama",
         "The final part of the Until trilogy explores love and the future of a relationship.",
         "images/until3.jpg"
        ],
    ["Scorching Love",
         "Jonaxx", 
         "Romance, Drama", 
         "A romance set in the Costa Leona series, filled with emotional conflicts and relationships.",
         "images/soarching.jpeg"
                ] ,
    ["Waves of Memories", 
        "Jonaxx", 
        "Romance, Drama",  
        "A Costa Leona story about love, memories, and complicated relationships.",
                 "images/wave.jpeg"
    ],
    ["Island of Fire", 
        "Jonaxx", 
        "Romance, Drama",
        "A story in the Costa Leona series centered on romance and personal struggles.",
                 "images/island.jpeg"
    ],
    ["Diary ng Panget", 
        "HaveYouSeenThisGirL", 
        "Romance, Comedy", 
        "Eya, a young woman working as a maid, finds her life changing after meeting a wealthy and difficult young man.",
                 "images/diary.jpg"
    ],
    ["She's Dating the Gangster", 
        "Bianca Bernardino", 
        "Romance, Drama", 
        "A pretend relationship between two young people develops into a complicated love story.",
                 "images/gangster.jpg"
    ]

    
].map((s, i) => ({
    id: i + 1,
    title: s[0],
    author: s[1],
    genre: s[2],
    synopsis: s[3],
    cover: s[4] || `images/cover${(i % 5) + 1}.svg`,
    chapterTitle: "Chapter 1: A New Beginning",
    content: [
        `The day began like any other, but ${s[0]} would soon become a story worth remembering.`,
        "A small detail caught the main character's attention. It seemed ordinary at first, yet something about it felt different.",
        "With questions growing and answers still far away, they decided to take the first step. That simple choice would lead to unexpected discoveries.",
        "For now, the road ahead remained uncertain. This was only the beginning of a much bigger adventure."
    ]
}));




const genres = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy",
    "Horror", "Mystery", "Romance", "Sci-Fi", "Sports", "Thriller"
];

function makeHeader(active = "home") {
    const links = [
        ["home", "index.html", "Home"],
        ["browse", "browse.html", "Browse"],
        ["genres", "genre.html", "Genres"]
    ];

    return `
        <div class="container nav">
            <a class="logo" href="index.html">E<span>YY</span></a>

            <nav class="nav-links">
                ${links.map(([id, url, label]) =>
                    `<a class="${active === id ? "active" : ""}"
                        href="${url}">${label}</a>`
                ).join("")}
            </nav>
            <div class="nav-spacer"></div>
            <button class="theme-btn" id="themeToggle"
                aria-label="Toggle light mode">☼</button>
        </div>`;
}

function makeFooter() {
    return `<div class="container">
       
    </div>`;
}

function makeCard(story) {
    const rating = (4.1 + (story.id % 9) / 10).toFixed(1);

    return `
        <article class="book-card">
            <a href="story.html?id=${story.id}">
                <div class="cover-wrap">
                    <img src="${story.cover}" alt="Cover for ${story.title}">
                    <span class="genre-pill">${story.genre.split(",").map(genre => `
    <span class="genre-badge">${genre.trim()}</span>
`).join("")}</span>
                </div>
            </a>

            <div class="book-info">
                <h3><a href="story.html?id=${story.id}">${story.title}</a></h3>
                <p class="author">by ${story.author}</p>
                <div class="rating">★ ${rating}</div>

                <div class="card-actions">
                    <button class="outline like-btn" data-id="${story.id}">
                        ♡ Like
                    </button>
                    <a class="btn" href="story.html?id=${story.id}">Read</a>
                </div>
            </div>
        </article>`;
}

function renderCards(selector, list) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.innerHTML = list.length
        ? list.map(makeCard).join("")
        : '<p class="empty">No stories found. Try another search.</p>';

    bindLikes();
}

function bindLikes() {
    document.querySelectorAll(".like-btn").forEach(button => {
        const key = `eyy-liked-${button.dataset.id}`;

        function updateButton() {
            const liked = localStorage.getItem(key) === "yes";
            button.textContent = liked ? "♥ Liked" : "♡ Like";
        }

        updateButton();

        button.onclick = () => {
            const liked = localStorage.getItem(key) === "yes";
            localStorage.setItem(key, liked ? "no" : "yes");
            updateButton();
        };
    });
}

function setupTheme() {
    const button = document.querySelector("#themeToggle");
    if (!button) return;

    function updateTheme() {
        const light = localStorage.getItem("eyy-theme") === "light";
        document.body.classList.toggle("light-mode", light);
        button.textContent = light ? "☾" : "☼";
    }

    updateTheme();

    button.onclick = () => {
        const isLight = document.body.classList.contains("light-mode");
        localStorage.setItem("eyy-theme", isLight ? "dark" : "light");
        updateTheme();
    };
}

function setupGlobalSearch() {
    const form = document.querySelector("#globalSearch");
    if (!form) return;

    form.onsubmit = event => {
        event.preventDefault();
        const query = document.querySelector("#globalSearchInput").value.trim();

        location.href = "browse.html" +
            (query ? "?q=" + encodeURIComponent(query) : "");
    };
}

function initHome() {
    renderCards("#featuredBooks", stories.slice(0, 8));
    renderCards("#moreBooks", stories.slice(8, 20));

    const popular = document.querySelector("#popularList");

    if (popular) {
        popular.innerHTML = stories.slice(0, 6).map((story, index) => `
            <a class="popular-item" href="story.html?id=${story.id}">
                <span class="rank">${index + 1}</span>
                <img src="${story.cover}" alt="">
                <span>
                    <strong>${story.title}</strong>
                    <small>${story.genre.split(", ")[0]} · ★ 4.5</small>
                </span>
            </a>
        `).join("");
    }
}

function initBrowse() {
    const search = document.querySelector("#browseSearch");
    const genre = document.querySelector("#genreFilter");
    const sort = document.querySelector("#sortFilter");
    const params = new URLSearchParams(location.search);

    search.value = params.get("q") || "";

    if (params.has("genre")) {
        genre.value = params.get("genre");
    }

    function update() {
        const query = search.value.toLowerCase().trim();
        const selectedGenre = genre.value;

        let results = stories.filter(story => {
            const matchesText =
                `${story.title} ${story.author} ${story.genre} ${story.synopsis}`
                    .toLowerCase().includes(query);

            const matchesGenre = selectedGenre === "All" ||
                story.genre.split(", ").includes(selectedGenre);

            return matchesText && matchesGenre;
        });

        if (sort.value === "az") {
            results.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort.value === "za") {
            results.sort((a, b) => b.title.localeCompare(a.title));
        }

        renderCards("#browseBooks", results);
        document.querySelector("#resultCount").textContent =
            `${results.length} stories found`;
    }

    search.addEventListener("input", update);
    genre.addEventListener("change", update);
    sort.addEventListener("change", update);

    update();
}

function initGenres() {
    const descriptions = {
        Action: "Battles, challenges, and daring missions.",
        Adventure: "Explore places and discover new worlds.",
        Comedy: "Funny moments and lighthearted stories.",
        Drama: "Emotions, relationships, and life choices.",
        Fantasy: "Magic, mystery, and imaginary worlds.",
        Horror: "Spooky tales and frightening mysteries.",
        Mystery: "Clues, secrets, and unexpected answers.",
        Romance: "Love, friendship, and relationships.",
        "Sci-Fi": "Technology and futuristic adventures.",
        Sports: "Competition, teamwork, and determination.",
        Thriller: "Suspense, danger, and tension."
    };

    const grid = document.querySelector("#genreGrid");

    grid.innerHTML = genres.map(genre => {
        const count = stories.filter(story =>
            story.genre.split(", ").includes(genre)
        ).length;

            return `
            <a class="genre-card"
            href="browse.html?genre=${encodeURIComponent(genre)}">
                <h2>${genre}</h2>
                <p>${descriptions[genre]}</p>
            </a>`;
    }).join("");
}

function initStory() {
    const id = Number(new URLSearchParams(location.search).get("id")) || 1;
    const story = stories.find(item => item.id === id) || stories[0];

    document.title = `${story.title} | Eyy`;

    const content = document.querySelector("#storyContent");

    content.innerHTML = `
        <section class="story-layout">
            <div>
                <img class="story-cover" src="${story.cover}"
                    alt="Cover for ${story.title}">
            </div>

            <div class="story-meta">
                <span class="eyebrow">${story.genre}</span>
                <h1>${story.title}</h1>
                <p>Written by <strong>${story.author}</strong></p>

                <p class="synopsis" id="synopsis">${story.synopsis}</p>

                <div class="story-toolbar">
                    <button class="outline" id="toggleSynopsis">
                        Hide synopsis
                    </button>
                    <button class="like-btn" data-id="${story.id}">
                        ♡ Like
                    </button>
                    <a class="btn" href="#chapter">Start Reading ↓</a>
                </div>

                <p><strong>Chapters:</strong> 1</p>
            </div>
        </section>

        <article class="reader" id="chapter">
            <span class="eyebrow">CHAPTER 1</span>
            <h2>${story.chapterTitle}</h2>

            <img class="reader-image" src="${story.cover}"
                alt="Illustration for ${story.title}">

            ${story.content.map(paragraph => `<p>${paragraph}</p>`).join("")}

            <div class="progress-track">
                <div class="progress-fill" id="progressFill"></div>
            </div>

            <small class="muted" id="progressLabel">
                Reading progress: 0%
            </small>

            <p class="muted">
                Original sample chapter created for this school project.
            </p>
        </article>`;

    document.querySelector("#toggleSynopsis").onclick = event => {
        const synopsis = document.querySelector("#synopsis");
        synopsis.hidden = !synopsis.hidden;
        event.target.textContent = synopsis.hidden
            ? "Show synopsis"
            : "Hide synopsis";
    };

    bindLikes();

    function updateProgress() {
        const reader = document.querySelector("#chapter");
        const rect = reader.getBoundingClientRect();
        const total = reader.offsetHeight - window.innerHeight;
        const passed = Math.max(0, Math.min(total, -rect.top));
        const percent = total > 0
            ? Math.round(passed / total * 100)
            : 100;

        document.querySelector("#progressFill").style.width = percent + "%";
        document.querySelector("#progressLabel").textContent =
            `Reading progress: ${percent}%`;
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();
}

document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname.split("/").pop() || "index.html";

    const active = path === "genre.html" ? "genres"
        : path === "browse.html" || path === "story.html" ? "browse"
        : "home";

    document.querySelector("#header").innerHTML = makeHeader(active);
    document.querySelector("#footer").innerHTML = makeFooter();

    setupTheme();


    if (path === "index.html") initHome();
    if (path === "browse.html") initBrowse();
    if (path === "genre.html") initGenres();
    if (path === "story.html") initStory();
});

const storyData = stories.map((story, index) => ({
    id: index + 1,
    title: story[0],
    author: story[1],
    genre: story[2].split(",").map(item => item.trim()),
    description: story[3],
    cover: story[4],
    chapters: [
        {
            number: 1,
            title: "Chapter 1",
            content: "Start reading this story."
        }
    ]
}));
