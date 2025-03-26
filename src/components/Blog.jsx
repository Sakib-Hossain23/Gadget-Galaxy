import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const blogContainerRef = useRef(null); // Ref for the blog container

  const blogs = [
    {
      title: "Realme GT 5 Pro",
      img: "img/b realme.jpg",
      description:
        "Realme GT 5 Pro packs high-end performance and ultra-fast charging at an affordable price... With a powerful chipset, stunning display, and an impressive camera setup, the Realme GT 5 Pro is a game-changer for budget-conscious flagship users.",
    },
    {
      title: "iPhone 16",
      img: "img/b ip 16.png",
      description:
        "Apple continues to innovate with the iPhone 16, bringing cutting-edge technology and sleek design... The iPhone 16 redefines the smartphone experience with advanced features, improved performance, and a stunning design that pushes the boundaries of mobile technology.",
    },
    {
      title: "Samsung Galaxy S24",
      img: "img/b samsung.jpg",
      description:
        "Samsung Galaxy S24 offers powerful performance, an enhanced camera, and a seamless user experience... Samsung's latest flagship, the Galaxy S24, brings an advanced chipset, high refresh rate display, and AI-powered photography to redefine the Android smartphone experience.",
    },
    {
      title: "Vivo X100 Pro",
      img: "img/b vivo.jpg",
      description:
        "Vivo X100 Pro delivers a premium smartphone experience with its advanced camera system and elegant design... The Vivo X100 Pro is designed for photography lovers, featuring Zeiss optics, AI-enhanced imaging, and a powerful processor for smooth performance.",
    },
    {
      title: "Xiaomi 14 Ultra",
      img: "img/b xiaomi.jpg",
      description:
        "Xiaomi 14 Ultra sets new standards in mobile photography and performance... Xiaomi 14 Ultra features Leica-powered cameras, a Snapdragon flagship processor, and a high-end AMOLED display, making it a strong competitor in the premium segment.",
    },
    {
      title: "Best Power Banks",
      img: "img/b powerbanks.jpg",
      description:
        "Never run out of charge with the best power banks... From high-capacity power banks to ultra-fast charging options, we explore the top choices that keep your devices powered on the go.",
    },
    {
      title: "Samsung Smartwatch",
      img: "img/a4.png",
      description:
        "Experience innovation on your wrist with Samsung's latest smartwatches... Samsung smartwatches combine advanced health tracking, seamless connectivity, and stylish designs. From the Galaxy Watch series to fitness models, find the perfect one for you!",
    },
    {
      title: "Apple AirPods",
      img: "img/a2.png",
      description:
        "Enjoy premium sound quality and seamless connectivity with Apple AirPods... Apple AirPods deliver crystal-clear audio, active noise cancellation, and effortless integration with Apple devices. Whether you choose AirPods Pro, AirPods Max, or standard AirPods, experience the best of wireless audio.",
    },
    {
      title: "Apple Watch",
      img: "img/b aw.jpg",
      description:
        "Stay ahead with the latest Apple Watch models, featuring advanced health and fitness tracking... Apple Watch offers a premium smartwatch experience with features like ECG monitoring, fitness tracking, and deep integration with the Apple ecosystem. Choose from the Apple Watch Series, SE, or Ultra for the perfect fit.",
    },
    // Your blog data here...
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Scroll to the top of the blog container with an offset
  const scrollToBlogContainer = () => {
    if (blogContainerRef.current) {
      const offset = -100; // Adjust this value to control how much higher to scroll
      const elementPosition =
        blogContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(scrollToBlogContainer, 100); // Ensures smooth scrolling after pagination update
  };

  return (
    <div className={styles.blogContainer} ref={blogContainerRef}>
      <div className={styles.blogGrid}>
        <h1 className={styles.title}>
          Blog<span style={{ color: "orange" }}>s</span>
        </h1>

        <div className={styles.blogMain}>
          {currentBlogs.map((blog, index) => {
            const isExpanded = expandedIndex === index;
            const shortDescription = blog.description.split("...")[0] + "...";
            return (
              <div className={styles.blogItem} key={index}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className={styles.blogImage}
                />
                <div className={styles.blogContent}>
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <p className={styles.blogText}>
                    {isExpanded ? blog.description : shortDescription}
                  </p>
                  <Link
                    to="#"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className={styles.readMore}
                  >
                    {isExpanded ? "Read Less ↑" : "Read More →"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.paginationBtn}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num}
                className={`${styles.paginationBtn} ${
                  currentPage === num + 1 ? styles.active : ""
                }`}
                onClick={() => paginate(num + 1)}
              >
                {num + 1}
              </button>
            ))}
            <button
              className={styles.paginationBtn}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
