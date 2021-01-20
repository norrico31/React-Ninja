import { Link } from 'react-router-dom'

const BlogList = props => {
    const blogs = props.blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </Link>
        </div>
    ))
    return blogs
}
 
export default BlogList