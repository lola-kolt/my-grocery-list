import { Component } from 'react';
import trolleyImage from './trolley.png';

export class GroceryList extends Component {
    constructor() {
        super();

    this.state = {
        userInput: '',
        groceryList: []
    }
    }


    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === '') {
            alert('Please, enter an item!')
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        console.log(listArray);
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const listName = event.target;
        listName.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <div className='container'>
                        <input type="text"
                        placeholder="What do you want to buy?"
                        onChange={ (e) => {this.onChangeEvent(e.target.value)} } 
                        value={ this.state.userInput } />
                    </div>

                    <div className='container'>
                        <button onClick={() => this.addItem(this.state.userInput)} className='btn btn-add'>Add</button>
                    </div>

                    <ul className='listContainer'>
                        {this.state.groceryList.map((item, index) => (
                            <li className='listItem' onClick={ this.crossedWord } key={ index }>
                            <img className='trolley' src={ trolleyImage } alt="trolley" width='20px' />{ item }</li>
                        ))}
                    </ul>

                    <div className='container'>
                        <button onClick={ () => this.deleteItem() } className='btn btn-delete'>Delete</button>
                    </div>
                    </form>
                </div>
            )
        }
    }