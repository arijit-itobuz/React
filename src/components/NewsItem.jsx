import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl } = this.props
    return (
      <div className="card m-2" style={{width: "20rem"}}>
        <img src={imgUrl} className="card-img-top" alt={`img-${title}`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
