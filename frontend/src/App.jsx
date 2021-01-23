import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateBlog from './components/CreateBlog'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/create'>
                            <CreateBlog />
                        </Route>
                        <Route path='/blogs/:blogId'>
                            <BlogDetails />
                        </Route>
                        <Route path='*'>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
export default App