var data = {
    "Political": [
        {
            "url": "https://www.foxnews.com/media/dan-kildee-republican-defenses-ukraine-call",
            "title": "House Democrat Kildee on Republicans' defense of Ukraine call: 'In no real world is this OK'",
            "author": "Brooke Singman",
            "bias": 5,
            "news_org": "Fox News",
            "keyword": "Political",
            "img": "fox-news-logo.jpg"
        },
        {
            "url": "https://thehill.com/regulation/court-battles/470075-supreme-court-sharply-divided-over-trumps-daca-repeal",
            "title": "Divided Supreme Court leans toward allowing Trump to end DACA",
            "author": "John Kruzel",
            "bias": 4,
            "news_org": "The Hill",
            "keyword": "Political",
            "img": "the-hill-logo.png"
        },
        {
            "url": "https://www.cnn.com/2019/11/12/politics/house-republicans-trump-memo-impeachment-defense/index.html",
            "title": "House Republicans lay out central defenses of Trump in memo ahead of public impeachment hearings",
            "author": "Phil Mattingly, Manu Raju, Veronica Stracqualursi",
            "bias": 1,
            "news_org": "CNN",
            "keyword": "Political",
            "img": "cnn-logo.png"
        },
        {
            "url": "https://www.cnbc.com/2019/11/12/watch-trump-speaks-at-the-economic-club-of-new-york.html",
            "title": "Trump speaks on trade, domestic growth at the Economic Club of New York",
            "author": "Kevin Breuninger",
            "bias": 3,
            "news_org": "CNBC",
            "keyword": "Political",
            "img": "cnbc-logo.png"
        },
    ],
    "Breaking News": [
        {
            "url": "https://www.cbsnews.com/news/sdsu-student-death-14-fraternities-suspended-after-death-of-dylan-hernandez-possible-misconduct/",
            "title": "San Diego State cites possible fraternity 'misconduct' after freshman's death",
            "bias": 5,
            "news_org": "CBS News",
            "keyword": "Breaking News",
            "img": "cbs-logo.jpg"
        },
        {
            "url": "https://www.thedailybeast.com/stephen-miller-pushed-racist-stories-to-breitbart-leaked-emails-show",
            "title": "Stephen Miller Pushed Racist Stories to Breitbart, Leaked Emails Show",
            "author": "Danika Fears",
            "bias": 2,
            "news_org": "Daily Beast",
            "keyword": "Breaking News",
            "img": "news.jpeg"
        },
        {
            "url": "https://www.nbcnews.com/politics/donald-trump/private-speech-bolton-suggests-some-trump-s-foreign-policy-decisions-n1080651",
            "title": "Private Speech Bolton Suggests Some Trump's Foreign Policy Decisions…",
            "author": "Stephanie Ruhle, Carol E. Lee",
            "bias": 5,
            "news_org": "NBC News",
            "keyword": "Breaking News",
            "img": "news.jpeg"
        },
        {
            "url": "https://www.wsj.com/articles/google-s-secret-project-nightingale-gathers-personal-health-data-on-millions-of-americans-11573496790",
            "title": "Google’s ‘Project Nightingale’ Gathers Personal Health Data on Millions of Americans",
            "author": "Rob Copeland",
            "bias": 1,
            "news_org": "Wall Street Journal",
            "keyword": "Breaking News",
            "img": "wsj-logo.jpg"
        },
        {
            "url": "https://www.inc.com/chris-matyszczyk/united-airlines-just-made-an-extraordinary-maddening-statement-about-fees-it-may-make-passengers-truly-angry.html",
            "title": "United Airlines Just Made an Extraordinary, Maddening Statement About Fees. It May Make Passengers Truly Angry",
            "author": "Chris Matyszczyk",
            "bias": 6,
            "news_org": "Inc",
            "keyword": "Breaking News",
            "img": "news.jpeg"
        },
        {
            "url": "https://www.npr.org/2019/11/12/778530312/mcdonalds-is-sued-over-systemic-sexual-harassment-of-female-workers",
            "title": "McDonald's Is Sued Over 'Systemic Sexual Harassment' Of Female Workers",
            "author": "Alina Selyukh",
            "bias": 10,
            "news_org": "NPR",
            "keyword": "Breaking News",
            "img": "news.jpeg"
        }
    ]
}

var all_filters = []
for (var key in data) {
    all_filters.push(key);
}

var filters_to_display = new Set();

function init() {
    populateNews();
}

function populateNews() {
    var articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = "";
    var htmlString = "";
    if (filters_to_display.size) {
        for (var key in data) {
            if (filters_to_display.has(key)) {
                for (var i = 0; i < data[key].length; i++) {
                    htmlString += createHtmlString(data[key][i]);
                }
            }
        }
    }
    else { //no filters == all filters
        for (var key in data) {
            for (var i = 0; i < data[key].length; i++) {
                if (i % 2 == 0) {
                    htmlString += '<div class="article-row">';
                }
                htmlString += createHtmlString(data[key][i]);
                if (i % 2 == 1) {
                    htmlString += '</div>';
                }
            }
            if (data[key].length % 2 == 0) {
                htmlString += '</div>';
            }
        }
    }

    articlesContainer.innerHTML = htmlString;
}

function createHtmlString(obj) {
    htmlString = `
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title" style="background:url('imgs/newslogos/${obj.img}') center / cover">
            <h2 class="mdl-card__title-text"></h2>
        </div>
        <div class="mdl-card__supporting-text">
            <div>
                <a href=${obj.url} target="_blank" class="mdl-typography--title article-title">${obj.title}</a>
            </div>
            <div class="article-info">
                <div>
                    <p class="article-news-org">${obj.author ? (obj.author + ", ") : ""}${obj.news_org}</p>
                </div>
                <div>
                    <p class="article-bias">Bias Score: ${obj.bias}</p>
                </div>
            </div>

        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a href=${obj.url} target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Open Externally
            </a>
        </div>
    </div>
    `;

    return htmlString;
}




document.addEventListener("DOMContentLoaded", function (event) {
    init();
    document.getElementById("breaking-news-filter").onclick = function () {
        if (this.checked) {
            filters_to_display.add("Breaking News");
        }

        else {
            filters_to_display.delete("Breaking News");
        }

        populateNews();
    };

    document.getElementById("political-filter").onclick = function () {
        if (this.checked) {
            filters_to_display.add("Political");
        }

        else {
            filters_to_display.delete("Political");
        }

        populateNews();
    };
});
