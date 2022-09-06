import './App.css';
import image from './bag.png';
import { GroceryList } from './GroceryList';
import imageTwo from './woman.png';

function App() {
  return (
    <div className='App'>
      <div className='container'>
      <img src={ image } alt='shoppingBag' width='200px' />
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className='container'>
      <img src={ imageTwo } alt="woman" width='200px' />
      </div>
    </div>
  );
}

export default App;
