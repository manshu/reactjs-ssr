import * as ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
)
