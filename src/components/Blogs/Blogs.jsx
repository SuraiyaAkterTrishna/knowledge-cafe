import Blog from "../Blog/Blog";

const Blogs = (props) => {
    const {blogs, handleReadTime, handleMarkedBlog} = props;
    return (
        <div className="pt-12">
            {
                blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    handleReadTime={handleReadTime}
                    handleMarkedBlog = {handleMarkedBlog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;