
/* =================================
   NEXGEN ENGINEERING
   WEBSITE INTERACTIONS
================================= */

// NEWS SEARCH AND CATEGORY FILTERS

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("newsSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const newsCards = document.querySelectorAll("#newsGrid .news-card");
    const noResults = document.getElementById("noResults");

    let activeCategory = "all";

    function filterNews() {

        if (!searchInput) return;

        const searchText = searchInput.value.toLowerCase();
        let visibleCount = 0;

        newsCards.forEach(function (card) {

            const category = card.dataset.category;
            const text = card.textContent.toLowerCase();

            const matchesCategory =
                activeCategory === "all" ||
                category === activeCategory;

            const matchesSearch = text.includes(searchText);

            if (matchesCategory && matchesSearch) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterNews);
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            activeCategory = button.dataset.filter;

            filterNews();

        });

    });

});


// NEWS ARTICLE DATABASE

const articles = {

    technology: {
        category: "TECHNOLOGY",
        date: "NOVEMBER 05, 2026",
        title: "NexGen Introduces Advanced 3D Modeling and Prototyping Services",
        image: "news-image-one",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces the expansion of its engineering capabilities through the introduction of advanced 3D modeling and prototyping services.",
            "The new service will allow clients to transform their product concepts into detailed three-dimensional models and physical prototypes. Using modern CAD software and additive manufacturing technology, the company aims to improve product development, reduce design errors and provide cost-effective engineering solutions.",
            "This development demonstrates NexGen's commitment to embracing modern engineering technologies and supporting innovation across different industries."
        ]
    },

    project: {
        category: "PROJECT MILESTONE",
        date: "OCTOBER 28, 2026",
        title: "Successful Mechanical System Improvement Project",
        image: "news-image-two",
        paragraphs: [
            "NexGen Engineering Solutions successfully completed a mechanical system improvement project for a local manufacturing facility.",
            "The project focused on evaluating existing machinery, identifying operational inefficiencies and recommending improvements to equipment performance. The engineering team conducted technical assessments and developed solutions to help improve equipment reliability and operational efficiency.",
            "Through this project, NexGen continues to demonstrate its dedication to delivering practical engineering solutions that address the needs of industrial clients."
        ]
    },

    energy: {
        category: "SUSTAINABILITY",
        date: "OCTOBER 15, 2026",
        title: "NexGen Launches Renewable Energy Consultation Services",
        image: "news-image-three",
        paragraphs: [
            "In support of sustainable development, NexGen Engineering Solutions announces the launch of its renewable energy consultation services.",
            "The initiative will focus on providing solar energy feasibility assessments, energy consumption evaluations and technical recommendations for businesses interested in adopting renewable energy systems.",
            "Through this initiative, NexGen aims to help organizations explore alternative energy solutions while promoting environmental responsibility and long-term energy efficiency."
        ]
    },

    safety: {
        category: "SAFETY",
        date: "SEPTEMBER 30, 2026",
        title: "Strengthening Workplace Safety and Quality Assurance",
        image: "news-image-four",
        paragraphs: [
            "NexGen Engineering Solutions reinforces its commitment to workplace safety and quality assurance through the implementation of an improved engineering safety inspection program.",
            "The program focuses on identifying potential workplace hazards, evaluating equipment conditions and promoting proper safety procedures during engineering operations.",
            "The company recognizes that successful engineering projects should not only meet technical requirements but also prioritize the safety of workers, clients and surrounding communities."
        ]
    },

    community: {
        category: "COMMUNITY",
        date: "SEPTEMBER 12, 2026",
        title: "Engineering Awareness and Technical Skills Workshop",
        image: "news-image-five",
        paragraphs: [
            "NexGen Engineering Solutions organized an engineering awareness workshop designed to introduce students to modern engineering technologies and practical technical applications.",
            "The activity featured discussions about mechanical systems, computer-aided design, renewable energy and the importance of engineering in solving real-world problems.",
            "The initiative reflects the company's commitment to supporting education, encouraging innovation and inspiring the next generation of engineers."
        ]
    },

    partnership: {
        category: "PARTNERSHIP",
        date: "AUGUST 20, 2026",
        title: "NexGen Establishes Strategic Engineering Partnership",
        image: "news-image-six",
        paragraphs: [
            "NexGen Engineering Solutions announces a new strategic partnership with a local technology and manufacturing company to strengthen its engineering service capabilities.",
            "The partnership aims to promote knowledge sharing, improve technical resources and develop innovative solutions for industrial clients.",
            "Both organizations look forward to working together to support technological advancement and contribute to the growth of the engineering industry."
        ]
    }

};


// DISPLAY INDIVIDUAL NEWS ARTICLE

const articleContainer = document.getElementById("articleContent");

if (articleContainer) {

    const params = new URLSearchParams(window.location.search);
    const articleID = params.get("id");

    const article = articles[articleID];

    if (article) {

        document.title = article.title + " | NexGen Engineering";

        articleContainer.innerHTML = `
            <div class="article-meta">
                ${article.category} &nbsp; | &nbsp; ${article.date}
            </div>

            <h1 class="article-title">
                ${article.title}
            </h1>

            <div class="article-cover ${article.image}"></div>

            <div class="article-body">

                <p><strong>NEXGEN ENGINEERING SOLUTIONS</strong></p>

                ${article.paragraphs.map(function(paragraph) {
                    return `<p>${paragraph}</p>`;
                }).join("")}

                <h3>About NexGen Engineering Solutions</h3>

                <p>
                    NexGen Engineering Solutions is a multidisciplinary
                    engineering services company committed to delivering
                    innovative, reliable and sustainable engineering
                    solutions for industries and communities.
                </p>

                <p>
                    For more information about our services and company
                    activities, visit our <a href="news.html">Newsroom</a>.
                </p>

            </div>
        `;

    } else {

        articleContainer.innerHTML = `
            <h1>Article Not Found</h1>
            <p>Sorry, the requested news article is unavailable.</p>
            <a href="news.html" class="back-link">
                RETURN TO NEWSROOM →
            </a>
        `;

    }

}

console.log("NexGen Engineering website loaded successfully.");
