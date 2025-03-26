import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/OrderHistory.css";

const OrderHistory = ({ orderHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const orderHistoryRef = useRef(null); // Ref for the order history container

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentOrders = [...orderHistory]
    .reverse()
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orderHistory.length / itemsPerPage);

  // Function to scroll to the top of the order history container
  const scrollToOrderHistory = () => {
    if (orderHistoryRef.current) {
      const offset = -100; // Adjust this value to control the scroll offset
      const elementPosition =
        orderHistoryRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to handle pagination
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);
    scrollToOrderHistory(); // Scroll to the top of the order history container
  };

  // Scroll to the top of the order history container when the page changes
  useEffect(() => {
    scrollToOrderHistory();
  }, [currentPage]);

  const renderPagination = () => {
    if (totalPages <= 1) return null; // Only render pagination if there are multiple pages

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((number) => {
          if (
            number === 1 ||
            number === totalPages ||
            Math.abs(currentPage - number) <= 1
          ) {
            return (
              <button
                key={number}
                className={`pagination-btn ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            );
          } else if (
            (number === 2 && currentPage > 3) ||
            (number === totalPages - 1 && currentPage < totalPages - 2)
          ) {
            return (
              <span key={number} className="pagination-ellipsis">
                ...
              </span>
            );
          }
          return null;
        })}
        <button
          className="pagination-btn"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="order-history-container" ref={orderHistoryRef}>
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p style={{ marginTop: "-9px", fontWeight: "600" }}>
          No <span style={{ color: "orange" }}>orders</span> placed yet
          <span style={{ color: "orange" }}> !!</span>
        </p>
      ) : (
        <>
          {currentOrders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <p>
                    <strong>Order ID:</strong> {order.id}
                  </p>
                  <p>
                    <strong>Date:</strong> {order.date}
                  </p>
                </div>
                <div
                  className={`order-status ${
                    order.status === "Delivered" ? "delivered" : "pending"
                  }`}
                >
                  {order.status}
                </div>
              </div>
              <div className="order-items">
                {order.products.map((product) => (
                  <div key={product.id} className="item">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ marginTop: "7px" }}
                    />
                    <div>
                      <p>
                        <strong>Product Name:</strong> {product.name}
                      </p>
                      <p>
                        <strong>Color:</strong>{" "}
                        <span style={{ color: "orange" }}>
                          {product.selectedColor}
                        </span>
                      </p>
                      <p>
                        <strong>Storage:</strong>{" "}
                        <span style={{ color: "orange" }}>
                          {product.selectedStorage}
                        </span>
                      </p>
                      <p>
                        <strong>Quantity:</strong> {product.quantity}
                      </p>
                      <p>
                        <strong>Price:</strong> {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-footer">
                <strong>Total: BDT {order.total}</strong>
              </div>
            </div>
          ))}
          {orderHistory.length > itemsPerPage && renderPagination()}
        </>
      )}
    </div>
  );
};

export default OrderHistory;
