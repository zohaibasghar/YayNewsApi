import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

export default function News(props) {
  const [Page, setPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [article, setArticle] = useState({
    articles: [],
    totalResults: 0,
  });
  console.log(props.newsCat)
  let dataMount = async (p) => {
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCat}&apiKey=461e8a97f3e2489cbf66ced97f13eb09&page=${p}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(url)
    setArticle({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    setloading(false);
    console.log(parsedData);
  };
  async function prePagefun() {
    setloading(true);
    setPage(Page - 1);
    dataMount(Page);
    window.scroll(0, 0);
  }
  async function nextPagefun() {
    setloading(true);
    setPage(Page + 1);
    dataMount(Page);
    window.scroll(0, 0);
  }
  useEffect(() => {
    async function fetchData(Page) {
      await dataMount(Page);
    }
    fetchData(Page);
  }, [Page]);
  return (
    <div className="container my-3">
      <h2 className="text-center">Yay News - Top headlines</h2>
      {loading && <Loading />}
      <div className="row my-3">
        <h3 className="text-center" onChange={dataMount}>{props.newsCat[0].toUpperCase() + props.newsCat.slice(1)} News</h3>
        {!loading &&
          article.articles.map((element) => {
            return (
              <div className="col-md-3 mx-2" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
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
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={Page <= 1}
          className="btn btn-dark"
          onClick={prePagefun}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          disabled={Page === Math.ceil(article.totalResults / 20)}
          className="btn btn-dark"
          onClick={nextPagefun}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
