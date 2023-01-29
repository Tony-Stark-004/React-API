import {createRoot} from 'react-dom/client'
import App from './App'

const nodeDoom = document.getElementById('root')
const root = createRoot(nodeDoom)
root.render(<App />)