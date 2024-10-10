import { Link, useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import Cart from "./components/Cart"


function App() {
  let views = useRoutes(routes)
  return (<>
    <nav>
      <ul className="d-flex"><li><Link to={'/toDo'}>ToDo</Link></li>
        <li className="mx-2"><Link to={'/'}>Home</Link></li>
        <li><Link to={'/catalog'}>Catalog</Link></li>
        <li className="mx-2"><Link to={'/text'}>Text</Link></li>
      </ul>
    </nav >
    {views}
    <hr />
    <div><Cart /></div>
  </>)
}

export default App
