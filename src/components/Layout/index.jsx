import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}
export default Layout