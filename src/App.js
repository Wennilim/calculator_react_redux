import { CalculatorApp } from './components/CalculatorApp';
import './App.css';
import {store} from './redux/store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <CalculatorApp/>  
      </Provider>
  );
}

export default App;
