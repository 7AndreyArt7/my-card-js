import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyles} from "./style/GlobalStyle.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <GlobalStyles/>
    </StrictMode>,
)
