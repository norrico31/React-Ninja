import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTimeout = setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setError(null)
                setBlogs(data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        }, 1000)
        return () => clearTimeout(fetchTimeout)
    }, [])

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All Blogs</h2>
                {isPending && (<div>Loading...</div>)}
                {error && <div>{error}</div>}
                {blogs && <BlogList blogs={blogs}/>}
            </div>
        </div>
    )
}
 
export default Home;