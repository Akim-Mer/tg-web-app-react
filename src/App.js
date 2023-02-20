
import { useEffect } from 'react';

import './App.css';

function App() {
	const {onToggleButton, tg} = useTelegram();
	useEffect(() => {
		tg.ready()
	}, [])
	
  return (
    <div className="App">
		<h1>Hi World</h1>

		<button onClick={onToggleButton}>Закрыт-toggle</button>
    </div>
  );
}

export default App;
