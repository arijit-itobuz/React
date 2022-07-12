import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3 p-3 border border-dark rounded-3'>
        <h1 className='mb-3 fw-bold'>Top Headlines - Explore</h1>
        <div className='d-flex justify-content-center align-items-start flex-wrap'>
          <NewsItem title="" description="" imgUrl="" />
          <NewsItem title="" description="" />
          <NewsItem title="" description="" />
          <NewsItem title="" description="" />
        </div>
      </div>

    )
  }
}
