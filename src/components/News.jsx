import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
        <div className='container my-3 p-3 border border-dark rounded-3 d-flex justify-content-center align-items-center'>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
          <NewsItem title="demo-title" description="demo-description"/>
        </div>      
    )
  }
}
