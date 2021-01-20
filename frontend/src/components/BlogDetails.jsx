import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { blogId } = useParams()
    return (
        <div className="blog-details">
            <h2>Blog details - {blogId}</h2>
        </div>
    )
}
export default BlogDetails