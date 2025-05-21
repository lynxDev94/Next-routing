import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";

const News = () => {
  return (
    <>
      <h1>News Page</h1>

      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem, id) => {
          return (
            <li key={id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img
                  src={`images/news/${newsItem.image}`}
                  alt={newsItem.title}
                />
                <span>{newsItem.title}</span>
              </Link>
            </li>
        
          );
        })}
      </ul>
    </>
  );
};

export default News;
