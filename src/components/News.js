import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { loadingActions } from "../features/loadingBar/loadingProgressSlice";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

export default function News(props) {
  let [Page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [article, setArticle] = useState({
    articles: [],
    totalResults: 0,
  });

  let category = useSelector((state) => state.category.category);
  let api = "461e8a97f3e2489cbf66ced97f13eb09";

  useEffect(() => {
    let dataMount = async () => {
      document.title = `${
        category[0].toUpperCase() + category.slice(1)
      } | Yay News`;
      dispatch(loadingActions.proChange(10));
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
        window.location.pathname.split("/")[1] || category
      }&apiKey=${api}&page=${Page}&pageSize=${15}`;
      let data = await fetch(url);
      dispatch(loadingActions.proChange(30));
      let parsedData = await data.json();
      dispatch(loadingActions.proChange(50));
      setArticle({
        ...article,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
      setloading(false);
      dispatch(loadingActions.proChange(100));
      setPage(Page++);
    };
    dataMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}&page=${Page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle({
      ...article,
      articles: article.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    setPage(Page + 1);
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Yay News - Top headlines</h2>
      <h3 className="text-center">
        {category[0].toUpperCase() + category.slice(1)} News
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
