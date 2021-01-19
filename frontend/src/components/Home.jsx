import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
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