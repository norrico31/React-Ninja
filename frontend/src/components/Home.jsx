import { useState, useEffect } from 'react'
import BlogList from '../BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const [name, setName] = useState('gerald')
    const onHandleDelete = blogId => {
        setBlogs(prevBlog => prevBlog.filter(blog => blog.id !== blogId))
    }
    
    useEffect(() => {
        console.log('useEffect ran')
        console.log(blogs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All Blogs</h2>
                <BlogList blogs={blogs} onHandleDelete={onHandleDelete}/>
                <button onClick={() => setName('norrico')}>Change name</button>
                <p>{name}</p>
            </div>
        </div>
    )
}
 
export default Home;