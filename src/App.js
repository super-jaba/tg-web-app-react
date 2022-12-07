import { useEffect } from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from "./components/Form/Form";
import WebAppData from './components/WebAppData/WebAppData';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<WebAppData />}/>
        <Route path={"products"} element={<ProductList />}/>
        <Route path={"form"} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
