import React from "react";
import styles from "./latestblogs.module.css";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      author: "Rahul Nikam",
      date: "20 Mar 2025",
      title:
        "How FestConnect helped Mood Indigo track their merch sales analytics to increase revenue",
      image: "/blogs.png",
    },
    {
      id: 2,
      author: "Rahul Nikam",
      date: "20 Mar 2025",
      title:
        "How FestConnect helped Mood Indigo track their merch sales analytics to increase revenue",
      image: "/blogs.png",
    },
    {
      id: 3,
      author: "Rahul Nikam",
      date: "20 Mar 2025",
      title:
        "How FestConnect helped Mood Indigo track their merch sales analytics to increase revenue",
      image: "/blogs.png",
    },
  ];

  return (
    <section className={styles.blogsWrapper}>
      <h2 className={styles.title}>Discover Latest Blogs</h2>

      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            {/* Blog Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className={styles.image}
              />
            </div>

            {/* Blog Content */}
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <span className={styles.author}>{blog.author}</span>
                <span className={styles.date}>{blog.date}</span>
              </div>

              {/* Title + Arrow same row */}
              <div className={styles.titleRow}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <div className={styles.arrow}>
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
