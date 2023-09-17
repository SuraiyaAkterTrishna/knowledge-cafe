import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import History from "../History/History";

const Cafe = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  let totalTime;
  const handleReadTime = (time) => {
    totalTime = time + readTime;
    setReadTime(totalTime);
  };
  const handleMarkedBlog = (blog) => {
    const newBlogs = [...bookmark, blog];
    setBookmark(newBlogs);
  }
  return (
    <div className="cafe">
      <div
        className="grid"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
      >
        <Blogs blogs={blogs} handleReadTime={handleReadTime} handleMarkedBlog = {handleMarkedBlog}></Blogs>
        <div className="history-container" style={{ position: "sticky", top: "0", height: "100vh" }}>
          <History bookmark={bookmark} readTime={readTime}></History>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
