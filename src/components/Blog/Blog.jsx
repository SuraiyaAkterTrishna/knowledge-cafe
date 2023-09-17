
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = ({blog, handleReadTime, handleMarkedBlog}) => {
  const { img, title, author_name, author_img, read_time, publish_date} = blog;
  
  return (
    <div className="card w-full bg-base-100 mb-12 border-b-2 rounded-none">
      <figure>
        <img
          src={img}
        />
      </figure>
      <div className="card-body px-0">
        <div className="blog-info flex justify-between">
            <div className="flex items-center">
                <img className="w-14" src={author_img} alt="" />
                <div className="pl-6">
                    <h3 className="text-xl font-bold">{author_name}</h3>
                    <span className="text-gray-500">{publish_date}</span>
                </div>
            </div>
            <div>
                <span className="text-gray-500">{read_time} min read </span>
                <button onClick={() => handleReadTime(read_time)} className="text-gray-400"><FontAwesomeIcon icon={faBookmark} /></button>
            </div>
        </div>
        <h1 className="card-title text-4xl">{title}</h1>
        <p className="text-gray-500">#beginner #programming</p>
        <div className="card-actions">
          <button onClick={() => handleMarkedBlog(blog)} className="btn btn-link px-0 py-0">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
