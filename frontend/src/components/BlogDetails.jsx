import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
    const { blogId } = useParams()
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${blogId}`)
    const history = useHistory()

    const onHandleClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => [
            history.push('/')
        ])
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by <b>{blog.author}</b></p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={onHandleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}
export default BlogDetails