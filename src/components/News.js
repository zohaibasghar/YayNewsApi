import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

export default function News(props) {
  const [Page, setPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [article, setArticle] = useState({
    articles: [],
    totalResults: 0,
  });
  let api = "461e8a97f3e2489cbf66ced97f13eb09";
  // console.log(props.newsCat);
  let dataMount = async () => {
    props.setProgress(10);
    document.title = `${
      props.newsCat[0].toUpperCase() + props.newsCat.slice(1)
    } | Yay News`;
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCat}&apiKey=${api}&page=${Page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    var parsedData = await data.json();
    props.setProgress(50);
    console.log(url);
    setArticle({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    setloading(false);
    props.setProgress(100);
    console.log(parsedData);
    setPage(Page + 1);
  };
  useEffect(() => {
    dataMount();
  });
  const fetchMoreData = async () => {
    console.log("fetch more data");
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCat}&apiKey=${api}&page=${Page}&pageSize=${props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    var parsedData = await data.json();
    setArticle({
      articles: article.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    setPage(Page + 1);
    console.log(article);
  };
  return (
    <div className="container">
      <h2 className="text-center my-3">Yay News - Top headlines</h2>
      <h3 className="text-center" onChange={dataMount}>
        {props.newsCat[0].toUpperCase() + props.newsCat.slice(1)} News
      </h3>
      {loading && <Loading />}
      <InfiniteScroll
        className="scroll"
        dataLength={article.articles.length}
        next={fetchMoreData}
        hasMore={article.articles.length !== article.totalResults}
        loader={<Loading />}
      >
        <div className="">
          <div className="row">
            {article.articles.map((element, index) => {
              return (
                <div className="col-md mx-1" key={index}>
                  <NewsItem
                    title={element.title}
                    newSrc={element.source.name}
                    author={element.author}
                    description={element.description}
                    publish={element.publishedAt}
                    source={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://s.yimg.com/ny/api/res/1.2/yxm.F4F1J3pDIqSzHgGglQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/a926720d1f53948beddbd852c36c9f66"
                    }
                    read={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
