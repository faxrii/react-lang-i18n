import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
function App() {
  
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value
      i18n.changeLanguage(languageValue);
    }
    return (
      <div className="App">
      {/* Select box to change language */}
      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en" >En</option>
        <option value="az" >Az</option>
      </select>
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t('text')}</h1> 
    </div>
      
    );
 
}

export default App;
