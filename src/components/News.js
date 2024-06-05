import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
// export class News extends Component {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);
  //   document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(parseData.loading);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  },);
  
  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=59f643e2ded2472da60cf1cbf38c4874&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
   
  };
  // const handlePrevClick = async ()=>{
  //   setPage(page-1);
  //   updateNews();
  // }

  // const handleNextClick = async ()=>{
  //   setPage(page+1);
  //   updateNews();
  // }
  // render() {
    return (
      <div className='container my-3'>
        <h3 className="text-center">NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headline</h3>
       {loading && <Spinner /> } 
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader= {<Spinner />}
        >
          <div className="container">
            <div className="row">
              { articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={ element.title ? element.title:""} description={ element.description ? element.description:""} imageUrl={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  // }
}

News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
 }
News.propTypes = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string
 }
export default News