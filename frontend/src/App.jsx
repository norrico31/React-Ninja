import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateBlog from './components/CreateBlog'

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
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
export default App