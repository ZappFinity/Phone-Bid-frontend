import React, { useState, useEffect } from "react";

import End from "../LandingPage/End";
import Navbar from "../LandingPage/Navbar";

function Blog() {
  const [blogPosts, setBlogPosts] = useState("[]");
  const [visiblePosts, setVisiblePosts] = useState(2);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/blog/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
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
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2);
  };

  const handleReadMore = (postId) => {
    setExpandedPostId(postId === expandedPostId ? null : postId); // Toggle expanded post
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e9ecef" }}>
        <h3 className="d-flex justify-content-center text-secondary pt-5">
          Latest Blogs
        </h3>
        <div
          className="bg-white pt-3 offset-3 pb-2 mb-5"
          style={{ width: "50%", height: "100%" }}
        >
          {blogPosts && blogPosts.length > 0 
            ?( Array.isArray(blogPosts) &&
              blogPosts.slice(0, visiblePosts).map((blog) => (
                <div
                  className=" mx-4 "
                  style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                  key={blog.id}
                >
                  <div className="d-flex flex-row justify-content-center card mb-3">
                      <div className="col-sm-9">
                        <div className="card-body">
                          <p className="card-title">Blog</p>
                          <h5 className="card-text">{blog.title}</h5>
                          <p
                          className="text-primary"
                          onClick={() => handleReadMore(blog.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Read more
                        </p>
                        {expandedPostId === blog.id && (
                          <p>{blog.content}</p>
                        )}
                      </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blog posts available</p>
          )}
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
