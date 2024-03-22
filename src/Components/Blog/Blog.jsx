import React, { useState, useEffect } from "react";
import End from "../LandingPage/End";
import Navbar from "../LandingPage/Navbar";

function Blog() {
  const [blogPosts, setBlogPosts] = useState("[]");
  const [visiblePosts, setVisiblePosts] = useState(2);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tokenData = localStorage.getItem("token");
        console.log("Token data:", tokenData);
        if (!tokenData) {
          console.error("Token is missing");
          return;
        }
        const token = JSON.parse(tokenData);
        console.log("Parsed token:", token);

        const response = await fetch("http://127.0.0.1:8000/api/blog/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.warn(response);

        if (response.ok) {
          const responseData = await response.json();
          console.warn("Data", responseData.data);
          setBlogPosts(responseData.data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2); // Increase the number of visible posts by 5
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e9ecef" }}>
        <h3 className="d-flex justify-content-center text-secondary pt-5">
          Latest Blogs
        </h3>
        <div
          className="bg-white pt-3 offset-2 pb-2 mb-5"
          style={{ width: "67%", height: "100%" }}
        >
          {blogPosts.length
            ? Array.isArray(blogPosts) &&
              blogPosts.slice(0, visiblePosts).map((post, index) => (
                <div
                  className="offset-1 mx-4 "
                  style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                  key={index}
                >
                  <div className="card mb-3">
                    <div className="row">
                      <div className="col-sm-6 px-4 pt-2">
                        <video width="100%" height="auto" controls>
                          {/* <source src={post.content} type="video/mp4" /> */}
                        </video>
                      </div>
                      <div className="col-sm-6">
                        <div className="card-body">
                          <p className="card-title">Blog</p>
                          <h5 className="card-text">{post.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        {visiblePosts < blogPosts.length && (
          <div className="d-flex justify-content-center pt-4 pb-5 mb-5">
            <button
              className="btn px-5"
              style={{ backgroundColor: "#52AB98", color: "white" }}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
        <End />
      </div>
    </>
  );
}

export default Blog;
