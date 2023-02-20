
import { useEffect } from 'react';
import useTelegram from './hooks/useTelegram';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

function App() {
	const {tg} = useTelegram();

	useEffect(() => {
		tg.ready()
	}, [])
	
  return (
    <div className="App">
		<Header/>
		<Routes>
			<Route path={'form'} element={<Form/>}/>
			<Route index element={<ProductList/>}/>
		</Routes>

    </div>
  );
}

export default App;
