import React from "react";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsDetails = ({ params }) => {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

   if(!newsItem){
      notFound();
    }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>News Details Page</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetails;
