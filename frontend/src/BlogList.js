const BlogList = props => {
    return props.blogs && props.blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => props.onHandleDelete(blog.id)}>delete blog</button>
        </div>
    ))
}
 
export default BlogList