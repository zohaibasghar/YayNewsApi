import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  const [Page, setPage] = useState(1);
  const [article, setArticle] = useState({
    articles: [],
    loading: false,
  });
  const prePage = () => {
    setPage(Page - 1);
    console.log(Page);
  };
  const nextPage = () => {
    setPage(Page + 1);
    console.log(Page);
  };
  let dataMount = async (p) => {
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=461e8a97f3e2489cbf66ced97f13eb09&page=${p}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle({ articles: parsedData.articles });
    console.log(parsedData);
  };
  async function prePagefun() {
    prePage();
    dataMount(Page);
    window.scroll(0, 0);
  }
  async function nextPagefun() {
    nextPage();
    dataMount(Page);
    window.scroll(0, 0);
  }
  useEffect(() => {
    async function fetchData(Page){
      await dataMount(Page);
    }
    fetchData(Page)
  }, [Page]);
  return (
    <div className="container my-3">
      <h2 className="text-center">Yay News - Top headlines</h2>
      <div className="row my-3">
        {article.articles.map((element) => {
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
          disabled={Page === Math.ceil(article.articles.totalResults / 20) + 1}
          className="btn btn-dark"
          onClick={nextPagefun}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
