import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

 class News extends Component {

  static props = {
    country: 'in',
    pageSize: 15,
    category: 'general'

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  articles =  [
    {
      "source": { "id": "nhl-news", "name": "NHL News" },
      "author": "NHL.com",
      "title": "Projected lineups, starting goalies for today",
      "description": "Below are projected lineups compiled by NHL.com staff writers and independent correspondents.",
      "url": "https://www.nhl.com/news/nhl-lineups-goalie-starters-fantasy-projections-injury-updates/c-278165828",
      "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/300583846/1024x576/cut.jpg",
      "publishedAt": "2023-01-22T16:22:11Z",
      "content": "Below are projected lineups compiled by NHL.com staff writers and independent correspondents. For more fantasy coverage, visit NHL.com/Fantasy and subscribe for free to the \"NHL Fantasy on Ice\" podca… [+2451 chars]"
    },

    {
      "source": { "id": "polygon", "name": "Polygon" },
      "author": "Michael McWhertor",
      "title": "The Callisto Protocol gets new game plus mode, bug fixes in new patch",
      "description": "Striking Distance Studios’ The Callisto Protocol gets a much-needed new feature.",
      "url": "https://www.polygon.com/23564428/callisto-protocol-update-new-game-plus-patch-changes",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/iL6fCGu9DC3uP-82EJ3tUNIg308=/0x0:3840x2010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24248782/The_Callisto_Protocol__20221201173637.jpg",
      "publishedAt": "2023-01-20T20:23:13Z",
      "content": "Developer Striking Distance Studios released a new update for its sci-fi horror game, The Callisto Protocol, on Thursday, with the biggest new addition coming in the form of a new game plus mode. Tha… [+2497 chars]"
    },
    {
      "source": {
        "id": "the-washington-times",
        "name": "The Washington Times"
      },
      "author": "The Washington Times https://www.washingtontimes.com",
      "title": "Special Section: Bold & Blunt Podcast",
      "description": "Washington Times online opinion editor Cheryl Chumley brings her no-holds-barred take on.",
      "url": "https://www.washingtontimes.com/specials/bold-blunt-podcast/",
      "urlToImage": "https://media.washtimes.com/media/specials/thumbnails/BoldBluntThumbnailB.jpg",
      "publishedAt": "2023-01-17T20:07:38.8409515Z",
      "content": "Listen here or click the RSS icon \r\n() below to subscribe. Available on Apple Podcasts, Google, Stitcher, TuneIn, Spotify, or wherever you get your podcasts. For comments or feedback, email media@was… [+1597 chars]"
    },
    {
      "source": {
        "id": "the-washington-times",
        "name": "The Washington Times"
      },
      "author": "The Washington Times https://www.washingtontimes.com",
      "title": "Special Section: History As It Happens Podcast",
      "description": "This is a podcast for people who want to think historically about current events.",
      "url": "https://www.washingtontimes.com/specials/history-happens-podcast/",
      "urlToImage": "https://media.washtimes.com/media/specials/thumbnails/HistoryAsItHappensThumbnailV2.jpg",
      "publishedAt": "2023-01-17T12:22:47.0214436Z",
      "content": "Listen here or click the RSS icon \r\n() below to subscribe. Available on Apple Podcasts, Google, Stitcher, TuneIn, Spotify, or wherever you get your podcasts. For comments or feedback, email media@was… [+3386 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": null,
      "title": "USA TODAY Podcasts",
      "description": "Stay informed, and delightfully entertained, with USA TODAY Podcasts, including 5 Things.",
      "url": "https://www.usatoday.com/podcasts/",
      "urlToImage": "https://www.gannett-cdn.com/usat-storytelling/usatpodmedia/USAT_Podcasts_MetaImage.png",
      "publishedAt": "2022-12-16T05:13:09+00:00",
      "content": "USA TODAY podcasts bring a fresh mix and perspective on the nation's news and stories straight to your earbuds. Catch up on the daily news that matters most - from breaking news with 5 Things to the … [+397 chars]"
    },
    {
      "source": { "id": "ign", "name": "IGN" },
      "author": null,
      "title": "Big News For Harley Quinn on HBO Max- IGN",
      "description": "Harley Quinn season 4 is coming to HBO Max.",
      "url": "https://www.ign.com/videos/big-news-for-harley-quinn-on-hbo-max-ign-the-fix-entertainment",
      "urlToImage": "https://assets-prd.ignimgs.com/2022/08/31/efix-083122-blogroll-1661978432833.jpg?width=1280",
      "publishedAt": "2022-09-01T17:52:24.9579624Z",
      "content": "Harley Quinn season 4 is coming to HBO Max, and fans of the DC animated series are excited. In the wake of a bunch of canceled animated shows, #HBOMax is showing some favor to a special malet-wieldin… [+239 chars]"
    }
  ]

  constructor(props) {
    super(props)

    this.state = {
      article: this.articles,
      loading: false,
      page: 1,
      totalResult: 0
    }
  }

  async componentDidMount() {
    // let url = "https://newsapi.org/v2/everything?q=apple&from=2023-01-22&pageSize=12&to=2023-01-22&sortBy=popularity&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9"
    // let url = "https://newsapi.org/v2/everything?domains=wsj.com&pageSize=30&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=1"
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=1`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({article:parsedData.articles, totalResult: this.state.totalResult + parsedData.totalResults, loading:false})
    
  }

  previousHandler = async () => {
    // let url = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=30&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=${this.state.page-1}`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=${this.state.page-1}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({article:parsedData.articles, page: this.state.page-1, loading: false})
  }

  nextHandler = async () => {
    // let url = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=30&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=${this.state.page+1}`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=4504bfa67f7f47f0a15d84d160b68ca9&page=${this.state.page+1}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({article:parsedData.articles, page: this.state.page+1, loading:false})
  }

  render() {
    return (
      <>
        <div className='container'>
        {this.state.loading && <div className='text-center'><Spinner></Spinner></div>}
          <h5 className='my-3'>NewsMonkey - Top Headlines</h5>
        
         {!this.state.loading && <div className='row'>
            {this.state.article.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewItems title={element.title? element.title.slice(0, 25):""} description={element.description? element.description.slice(0, 60): ""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              )
            })}

          </div>}
        </div>

        <div className='container d-flex justify-content-between my-3'>
              <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.previousHandler}>&larr; Previous</button>
              <button disabled={this.state.page===Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextHandler}>Next &rarr;</button>
        </div>
        
      </>
    )
  }
}

export default News 
