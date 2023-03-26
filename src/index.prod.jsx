import * as ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.hydrateRoot(document.getElementById('root'),
    <BrowserRouter>
        <App />
    </ BrowserRouter>
)
