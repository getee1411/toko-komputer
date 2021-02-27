import React from "react"
import {Link} from "react-router-dom"

class navbar extends React.Component{
    Logout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location="/login"
    }
    render=()=>{
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navbar-brand">
                    Moklet Computer Store
                </a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <link to="/" className="nav-link">
                                Home
                            </link>
                        </li>
                        <li className="nav-item">
                            <link to="/product" className="nav-link">
                                Product
                            </link>
                        </li>
                        <li className="nav-item">
                            <link to="/customer" className="nav-link">
                                Customer
                            </link>
                        </li>
                        <li className="nav-item">
                            <link to="/transaction" className="nav-link">
                                Transaction
                            </link>
                        </li>
                        <li className="nav-item">
                            <link to="/admin" className="nav-link">
                                Administrator
                            </link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" onClick={()=>this.Logout()}>
                                Log Out
                            </link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default navbar;