import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        author: '' || 'norrico'
    })
    const history = useHistory()
    const [isPending, setIsPending] = useState(false)
    const onHandleInput = e => {
        setBlog(prevBlog => ({ ...prevBlog, [e.target.name]: e.target.value}))
    }
    const onHandleSubmit = e => {
        e.preventDefault()
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            setBlog({
                title: '',
                body: '',
                author: ''
            })
            setIsPending(false)
            console.log('new blog added')
            history.push('/')
        })    
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Blog title:</label>
                <input type="text" name="title" required value={blog.title} onChange={onHandleInput}/>
                <label>Blog body:</label>
                <textarea required name="body" value={blog.body} onChange={onHandleInput}></textarea>
                <label>Blog author:</label>
                <select name="author" value={blog.author} onChange={onHandleInput} >
                    <option value="norrico">Norrico</option>
                    <option value="gerald">Gerald</option>
                </select>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button type="submit" disabled>Add Blog...</button>}
            </form>
        </div>
    )
}
export default CreateBlog