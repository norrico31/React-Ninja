const BlogList = props => {
    const blogs = props.blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </div>
    ))
    return blogs
}
 
export default BlogList