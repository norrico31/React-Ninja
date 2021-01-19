import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All Blogs</h2>
                {blogs && <BlogList blogs={blogs}/>}
            </div>
        </div>
    )
}
 
export default Home;