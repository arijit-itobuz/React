import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  constructor() {
    super()
    // console.log('constructor');
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    // console.log('cdm');
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f46ca323c38f4c1fbe8b5f46fe3de358&page=1'
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    this.setState({ articles: data.articles })
  }

  
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f46ca323c38f4c1fbe8b5f46fe3de358&page=${this.state.page + 1}`
    let response = await fetch(url)
    let data = await response.json()
    this.setState({
      articles: data.articles,
      page: ++this.state.page
    })
  }
  
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f46ca323c38f4c1fbe8b5f46fe3de358&page=${this.state.page - 1}`
    let response = await fetch(url)
    let data = await response.json()
    this.setState({
      articles: data.articles,
      page: --this.state.page
    })
  }

  render() {
    // console.log('render');
    return (
      <div className='container my-3 p-3 border border-muted rounded-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='mb-3 fw-bold text-center text-lg-start'>Top Headlines - Explore</h1>
          <button type='button' className='btn btn-sm btn-dark ms-auto' onClick={this.handlePreviousClick} disabled={this.state.page < 1}>Previous</button>
          <button type='button' className='btn btn-sm btn-dark ms-2' onClick={this.handleNextClick}>Next</button>
        </div>
        <div className='d-flex justify-content-evenly align-items-start flex-wrap'>
          {this.state.articles.map((e) => {
            return <NewsItem key={e.url} title={e.title} description={e.description !== null ? e.description.slice(0, 99) + "....." : ''} imgUrl={e.urlToImage !== null ? e.urlToImage : 'https://telecomtalk.info/wp-content/uploads/2022/07/5g-smartphones-coming-in-july-2022-india.jpg'} newsUrl={e.url} />
          })}
        </div>
        <hr />
        <div className="container d-flex justify-content-between align-items-center">
          <button type='button' className='btn btn-sm btn-dark' onClick={this.handlePreviousClick} disabled={this.state.page < 1}>Previous</button>
          <button type='button' className='btn btn-sm btn-dark' onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}
