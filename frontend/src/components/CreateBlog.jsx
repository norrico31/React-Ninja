import { useState } from 'react'

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        author: ''
    })
    const onHandleInput = e => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }
    const onHandleSubmit = e => {
        e.preventDefault()
        console.log(blog)
        setBlog({
            title: '',
            body: '',
            author: ''
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
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}
export default CreateBlog