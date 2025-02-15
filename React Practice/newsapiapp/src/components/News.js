import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Charlotte Observer"
            },
            "author": "Alex Zietlow",
            "title": "Should NASCAR’s Cup Series return to Bowman Gray Stadium next year or look for change? - Charlotte Observer",
            "description": "NASCAR raced at North Carolina racetrack Bowman Gray Stadium for The Clash. Fans loved it. But should it come back in 2026?",
            "url": "https://www.charlotteobserver.com/sports/nascar-auto-racing/article299110465.html",
            "urlToImage": "https://www.charlotteobserver.com/sports/stpg4k/picture299622579/alternates/LANDSCAPE_1140/THE_CLASH_13.jpg",
            "publishedAt": "2025-02-03T10:30:00Z",
            "content": "NASCAR &amp; Auto Racing\r\nWINSTON=SALEMBy so many metrics, the NASCAR Cup Series season-opening event was a hit.\r\nThe Clash at Bowman Gray Stadium was a sellout, fit with intense race fans standing s… [+4790 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "DEREK GATOPOULOS",
            "title": "Emergency crews deployed on Santorini as an earthquake swarm worries Greek experts - The Associated Press",
            "description": "Santorini, the popular Greek holiday island, is taking emergency measures in response to intense seismic activity. More than 200 undersea earthquakes have been recorded in three days. Authorities closed schools and deployed emergency crews Monday as precautio…",
            "url": "https://apnews.com/article/greece-santorini-earthquake-volcano-8e5f6a16a3d6458aa86f3d0d06928292",
            "urlToImage": "https://dims.apnews.com/dims4/default/05b0cb4/2147483647/strip/true/crop/3500x1969+0+182/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F48%2Fab%2F1afbccb015330b9db72985225935%2F408d28dc28404a438da4231f00b407d9",
            "publishedAt": "2025-02-03T10:03:00Z",
            "content": "SANTORINI, Greece (AP) Schools were closed and emergency crews deployed on the volcanic Greek island of Santorini on Monday after a spike in seismic activity raised concerns about a potentially power… [+4308 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Jordain Carney",
            "title": "Lindsey Graham’s new challenge for Mike Johnson - POLITICO",
            "description": "Graham is ready and waiting if Johnson’s plan for the Trump agenda blows up.",
            "url": "https://www.politico.com/news/2025/02/03/graham-johnson-freedom-caucus-trump-00002318",
            "urlToImage": "https://static.politico.com/0f/ea/4116836e4e42bb819b8f8860c8f0/u-s-congress-46638.jpg",
            "publishedAt": "2025-02-03T09:45:00Z",
            "content": "The Freedom Caucus, according to one member, has Chair Andy Harris (R-Md.) and Rep. Chip Roy (R-Texas) taking an informal lead in talking with senators including Graham.\r\nAs lawmakers on both sides o… [+6554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Pia Singh",
            "title": "Dow futures drop more than 650 points after Trump hits U.S. trading partners with tariffs: Live updates - CNBC",
            "description": "President Donald Trump on Saturday slapped a 25% tariff on goods from Mexico and Canada. He also placed a 10% levy on imports from China.",
            "url": "https://www.cnbc.com/2025/02/02/stock-market-today-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108094258-1738172712700-Traders-OB-Photo-20250129-ACJ-4.jpg?v=1738172844&w=1920&h=1080",
            "publishedAt": "2025-02-03T08:51:00Z",
            "content": "Stock futures dropped to kick off a new trading month after President Donald Trump hit several key U.S. trading partners with tariffs, raising fears that a full-blown trade war would disrupt global s… [+2752 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "The Wall Street Journal",
            "title": "See How Russia Is Winning the Race to Dominate the Arctic - The Wall Street Journal",
            "description": null,
            "url": "https://www.wsj.com/politics/national-security/russia-china-artic-sea-nato-2ca1ea10",
            "urlToImage": null,
            "publishedAt": "2025-02-03T06:41:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Chris Willman",
            "title": "Grammy Snubs and Surprises: Taylor Swift and Billie Eilish Shut Out, Sabrina Carpenter Wins Pop Album and More - Variety",
            "description": "2025 Grammy snubs and surprises includes shutouts for Taylor Swift and Billie Eilish, even as Beyonce, Sabrina and Kendrick arguably overperformed.",
            "url": "https://variety.com/2025/music/news/grammy-snubs-surprises-taylor-swift-billie-eilish-sabrina-carpenter-1236294891/",
            "urlToImage": "https://variety.com/wp-content/uploads/2025/02/Grammys-Snubs-and-Surprises-Sabrina-Carpenter-Billie-Eilish-Taylor-Swift.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2025-02-03T06:36:00Z",
            "content": "Before we launch into this Grammys 2025 edition of Snubs and Surprises, let’s answer one question that may come up right at the outset: How can we characterize Beyoncé winning album of the year as a … [+7881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Jesse Coghlan",
            "title": "OpenAI’s newest ChatGPT agent can do ‘deep research’ online - Cointelegraph",
            "description": "OpenAI has launched a ChatGPT agent called “deep research,” which can search the web for information and generate a report “at the level of a research analyst” while citing its work.",
            "url": "https://cointelegraph.com/news/openai-new-chatgpt-agent-deep-research",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2025-02/0194ca51-9221-702a-a0bb-d912f4b1f420",
            "publishedAt": "2025-02-03T06:21:51Z",
            "content": "OpenAI has released a new agent for its flagship artificial intelligence product ChatGPT called deep research, which can trawl the internet for information to create a report at the level of a resear… [+2141 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Rebecca Falconer",
            "title": "Musk says Trump has agreed to \"shut\" USAID down - Axios",
            "description": "His comments follow reports that DOGE representatives visited USAID's D.C. HQ and accessed classified spaces and American citizens' data.",
            "url": "https://www.axios.com/2025/02/03/usaid-musk-trump-agreed-shut-down",
            "urlToImage": "https://images.axios.com/Lp5_hpDKhS9RVQuPAGY9GIQqse8=/0x139:4109x2450/1366x768/2025/02/03/1738560735166.jpg",
            "publishedAt": "2025-02-03T05:48:23Z",
            "content": "Elon Musk said President Trump has \"agreed\" to \"shut\" the U.S. Agency for International Development (USAID) down.\r\nThe big picture: Musk's comments early Monday followed reports that two senior USAID… [+2717 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Helen Regan, Robert Shackelford",
            "title": "Australia braces for more destruction as deadly floods devastate northeast - CNN",
            "description": "Deadly floodwaters triggered by record rainfall in Australia’s northeast rose for a third day Monday as authorities warned flood-stricken communities to brace themselves for further destruction.",
            "url": "https://www.cnn.com/2025/02/02/australia/queensland-townsville-floods-climate-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-03t004552z-1600891131-mt1aap0007m5tr0-rtrmadp-3-townsville-weather.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2025-02-03T05:48:00Z",
            "content": "Deadly floodwaters triggered by record rainfall in Australias northeast rose for a third day Monday as authorities warned flood-stricken communities to brace themselves for further destruction.\r\nOne … [+6320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Donald Trump threatens 'out of line' EU with tariffs - BBC.com",
            "description": "Trump accuses the EU of taking advantage of the US but says UK PM Starmer has been 'very nice'.",
            "url": "https://www.bbc.com/news/articles/cn4zgx808g7o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0c91/live/eae7ef80-e1df-11ef-ab53-29fe71798bc2.jpg",
            "publishedAt": "2025-02-03T05:40:21Z",
            "content": "US President Donald Trump has hinted the European Union (EU) could be next to face tariffs, after he slapped 25% levies on goods from Mexico and Canada, and an additional 10% tax on imports from Chin… [+2016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Heat.com"
            },
            "author": "NBA.com Staff",
            "title": "Reports: De'Aaron Fox headed to Spurs, Zach LaVine to Kings in 3-team trade - NBA.Com",
            "description": "The Kings, Spurs and Bulls reportedly coordinate a 7-player, 7-pick trade headlined by De'Aaron Fox going to San Antonio.",
            "url": "https://www.nba.com/news/deaaron-fox-trade-kings-spurs-bulls-zach-lavine-3-team-deal",
            "urlToImage": "https://cdn.nba.com/manage/2024/12/GettyImages-2191053512.jpg",
            "publishedAt": "2025-02-03T05:03:11Z",
            "content": "De'Aaron Fox will reportedly join Victor Wembanyama in San Antonio.\r\nIn what’s turned out to be a wild weekend for even the most advanced acolytes of the NBA trade machine, another deal has major tal… [+3260 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Nicole Friedman, Deborah Acosta",
            "title": "Climate Change to Wipe Away $1.5 Trillion in U.S. Home Values, Study Says - The Wall Street Journal",
            "description": "Rising home-insurance costs and more homeowners spurning some risky neighborhoods will drive these declines, according to First Street",
            "url": "https://www.wsj.com/real-estate/climate-change-to-wipe-away-1-5-trillion-in-u-s-home-values-study-says-60c6970b",
            "urlToImage": "https://images.wsj.net/im-22076891/social",
            "publishedAt": "2025-02-03T05:01:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "The Conversation",
            "title": "Astrophysicist Reveals The Key Facts About The Asteroid That May Hit Earth - ScienceAlert",
            "description": "On 27 December last year, astronomers using the ATLAS survey telescope in Chile discovered a small asteroid moving away from Earth.",
            "url": "https://www.sciencealert.com/astrophysicist-reveals-the-key-facts-about-the-asteroid-that-may-hit-earth",
            "urlToImage": "https://www.sciencealert.com/images/2025/02/AsteroidFlyingByEarth.jpg",
            "publishedAt": "2025-02-03T04:52:50Z",
            "content": "On 27 December last year, astronomers using the ATLAS survey telescope in Chile discovered a small asteroid moving away from Earth. Follow up observations have revealed that the asteroid, 2024 YR4, i… [+8328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Ambar Warrick",
            "title": "Nvidia supplier TSMC shares tumble as DeepSeek rout catches up - Investing.com",
            "description": "Nvidia supplier TSMC shares tumble as DeepSeek rout catches up",
            "url": "https://www.investing.com/news/stock-market-news/nvidia-supplier-tsmc-shares-tumble-as-deepseek-rout-catches-up-3844226",
            "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXNPEK32031_L.jpg",
            "publishedAt": "2025-02-03T04:14:10Z",
            "content": "Investing.com-- Taiwan shares of TSMC fell sharply on Monday as local trade resumed after a week, with the chipmakers shares now catching up with steep losses in their global peers on concerns over C… [+1220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Christian Arnold",
            "title": "Luka Doncic’s father blasts Mavericks’ handling of trade to Lakers: ‘Doesn’t deserve this’ - New York Post ",
            "description": "Luka Doncic’s father did not hold back when it came to discussing the shocking trade that sent his son from the Mavericks to the Lakers for Anthony Davis in a three-team deal.",
            "url": "https://nypost.com/2025/02/02/sports/luka-doncics-father-blasts-mavericks-handling-of-lakers-trade/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/02/newspress-collage-8r0q6pwp8-1738555563625.jpg?quality=75&strip=all&1738537603&w=1024",
            "publishedAt": "2025-02-03T04:07:00Z",
            "content": "Luka Doncics father did not hold back when it came to discussing the shocking trade that sent his son from the Mavericks to the Lakers for Anthony Davis in a three-team deal. \r\nSpeaking with Arena Sp… [+2582 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "NASA Uncovers Life’s Building Blocks in Asteroid Bennu’s Pristine Sample - SciTechDaily",
            "description": "NASA’s OSIRIS-REx mission delivered samples from asteroid Bennu, revealing crucial molecules linked to life, including amino acids and nucleobases found in DNA and RNA. The presence of ammonia and formaldehyde suggests conditions ripe for forming complex mole…",
            "url": "https://scitechdaily.com/?p=452718",
            "urlToImage": "https://scitechdaily.com/images/Jason-Dworkin-Asteroid-Bennu-Vial.jpg",
            "publishedAt": "2025-02-03T03:33:24Z",
            "content": "In this video frame, Jason Dworkin holds up a vial that contains part of the sample from asteroid Bennu delivered to Earth by NASA’s OSIRIS-REx (Origins, Spectral Interpretation, Resource Identificat… [+11273 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=42e165167a8b498f9d80803f00075cb9"
        let data = await fetch(url)
        let result = await data.json()
        this.setState({ articles: result.articles })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>NEWS App</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} />
                            </div>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default News
