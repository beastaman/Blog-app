import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogDetails from './BlogDetails';
import Error404 from './Error404';

function App() {
  const title = 'Welcome to the new blog';
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route  path="/" exact={true} element={<Home />} />
            <Route  path="/create" exact={true} element={<Create />} />
            <Route  path="/blogs/:id" exact={true} element={<BlogDetails />} />
            <Route  path="*" element={<Error404 />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}
// npx json-server --watch data/db.json --port 8000

export default App;
