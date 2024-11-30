import "./header.css"
import logo from "../../assets/images/header_logo.jpg"
import { Link } from "react-router-dom"

const header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />

      <div className="linklar">
        <Link to="/">Bosh_sahifa</Link>
        <Link to="/shifokorlar">Shifokorlar</Link>
        <Link to="/ilovalar">Ilovalar</Link>
        <Link to="/yangiliklar">Yangiliklar</Link>
        <Link to="/bosh_ish_orni">Bo'sh ish o'rni</Link>
        <Link to="/QVP">QVP</Link>
        <Link to="/aloqa">Aloqa</Link>
      </div>
      <select>
        <option value="uz">uz</option>
        <option value="rus">rus</option>

      </select>

    </div>
  )
}

export default header