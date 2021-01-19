import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        const fetchTimeout = setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
        }, 1000)
        return () => clearTimeout(fetchTimeout)
    }, [])

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All Blogs</h2>
                {isPending && (<div>Loading...</div>)}
                {blogs && <BlogList blogs={blogs}/>}
            </div>
        </div>
    )
}
 
export default Home;