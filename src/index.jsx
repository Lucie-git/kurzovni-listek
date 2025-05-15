import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage/HomePage';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
