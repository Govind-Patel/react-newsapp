import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let  {title , description , imageUrl, newUrl , author ,date ,source} = this.props;
 
    return (
      <div className='my-3 mt-4'>
          <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:1}}>
              {source}</span>
            <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/05/27/1600x900/TOPSHOT-PNG-LANDSLIDE-RESCUE-0_1716842786732_1716842809283.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}  </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
            </div>
          </div>    
      </div>
    )
  }
}

export default NewsItem