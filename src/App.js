import './App.css';
import Navigation from './appNavigation/AppNavigation';
import Footer from './outline/Footer';
import { createContext, useState } from 'react';
import { useTranslation, t } from 'react-i18next';
export const CartContext = createContext()
function App() {
  const [cart, setCart] = useState({})
  const { i18n } = useTranslation();
  if (localStorage.getItem("Lang-pref") == null) {
    localStorage.setItem("Lang-pref", i18n.language)
  }
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />

      </CartContext.Provider>

      <Footer />

    </div >
  );
}

export default App;
