import React from "react";
import styles from "./PG.module.css";

const PG = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>
          <span style={{ color: "#ff5722" }}> Popular </span>
          Gadgets, Phones, and Laptops
          <span style={{ color: "#ff5722" }}> Retail & Online </span> Shop
        </h1>
      </header>

      <main className={styles.main}>
        <section id="welcome" className={styles.section}>
          <h2 className={styles.title}>Welcome to Our Tech Gadget Store</h2>
          <p className={styles.text}>
            Welcome to our trusted online and physical store for the latest and
            authentic gadgets, including laptops, smartphones, tablets, and
            other premium tech products. We offer the best deals on tech gadgets
            at competitive prices. Our store started with a focus on providing
            exceptional customer service, and our motto is “Customer Comes
            First.” This commitment has made us a trusted destination for tech
            enthusiasts. We are proud to maintain high-quality standards and
            serve a large customer base both online and offline, with multiple
            outlets across the region.
          </p>
        </section>

        <section id="best-mobile" className={styles.section}>
          <h2 className={styles.title}>Best Smartphone Shop</h2>
          <p className={styles.text}>
            Smartphones have become an essential part of our daily lives, and we
            offer a wide range of devices to meet your needs. Whether you're
            looking for the latest models or budget-friendly options, we have
            something for everyone. Our collection includes devices from various
            brands, ensuring you find the perfect smartphone. We also provide
            international warranties and a hassle-free replacement policy within
            7 days for valid reasons, making us a reliable choice for your tech
            needs.
          </p>
        </section>

        <section id="best-laptop" className={styles.section}>
          <h2 className={styles.title}>Best Laptop Shop</h2>
          <p className={styles.text}>
            We are known for our extensive collection of laptops, catering to
            professionals, students, and gamers. Whether you need a
            high-performance laptop for work or a gaming laptop for
            entertainment, we have the perfect device for you. Our focus is on
            providing products that match your budget and requirements. Explore
            our range of laptops from trusted brands and find the latest models
            to suit your needs.
          </p>
        </section>

        <section id="why-choose" className={styles.section}>
          <h2 className={styles.title}>Why Choose Our Store?</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>Wide Range of Gadgets:</strong> We offer a diverse
              collection of gadgets, including smartphones, laptops, tablets,
              and accessories.
            </li>
            <li className={styles.listItem}>
              <strong>Competitive Prices:</strong> Enjoy the best prices on the
              latest tech products, with frequent promotions and discounts.
            </li>
            <li className={styles.listItem}>
              <strong>Quality Assurance:</strong> We provide genuine products
              with warranties, ensuring you get the best value for your money.
            </li>
            <li className={styles.listItem}>
              <strong>Excellent Customer Service:</strong> Our team is dedicated
              to providing top-notch support and a seamless shopping experience.
            </li>
          </ol>
        </section>

        <section id="top-gadget" className={styles.section}>
          <h2 className={styles.title}>Top Gadget Shop</h2>
          <p className={styles.text}>
            In today’s fast-paced world, technology is constantly evolving, and
            gadgets have become an integral part of our lives. We offer a wide
            range of smart gadgets, from smartphones and tablets to smart home
            devices and accessories. Our collection is designed to make your
            life smarter and more convenient, with the latest innovations and
            features.
          </p>
        </section>

        <section id="best-home-appliance" className={styles.section}>
          <h2 className={styles.title}>Best Home Appliance Shop</h2>
          <p className={styles.text}>
            We also provide a variety of home appliances to enhance your living
            experience. From smart TVs and monitors to air conditioners and
            washing machines, our collection includes essential appliances for
            every home. Our products meet international quality standards,
            ensuring durability and performance at competitive prices.
          </p>
        </section>

        <section id="large-collection" className={styles.section}>
          <h2 className={styles.title}>Explore Our Collection</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Smartphones:</strong> Discover the latest models and
              features in our smartphone collection.
            </li>
            <li className={styles.listItem}>
              <strong>Laptops:</strong> Find the perfect laptop for work, study,
              or gaming.
            </li>
            <li className={styles.listItem}>
              <strong>Smart Gadgets:</strong> Explore our range of smartwatches,
              headphones, and other accessories.
            </li>
            <li className={styles.listItem}>
              <strong>Home Appliances:</strong> Upgrade your home with our
              selection of smart TVs, monitors, and more.
            </li>
          </ul>
        </section>

        <section id="why-buy" className={styles.section}>
          <h2 className={styles.title}>Why Buy From Us?</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>Genuine Products:</strong> We offer authentic products
              with official warranties.
            </li>
            <li className={styles.listItem}>
              <strong>Affordable Prices:</strong> Get the best deals on the
              latest tech gadgets.
            </li>
            <li className={styles.listItem}>
              <strong>Fast Delivery:</strong> Enjoy reliable and secure shipping
              services.
            </li>
            <li className={styles.listItem}>
              <strong>Flexible Payment Options:</strong> Choose from various
              payment methods, including cash on delivery and installment plans.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default PG;
