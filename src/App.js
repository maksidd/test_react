import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  addItem(){
    this.props.onAddItem(this.itemInput.value);
    this.itemInput.value = '';
  }
  render() {
    console.log(this.props.testStote);
    return (
      <div>
        <input type="text" ref={(input) =>{this.itemInput = input}}/>
        <button onClick={this.addItem.bind(this  )}>Add todo</button>
        <ul>
          {this.props.testStore.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({
      onAddItem: (itemName) => {
        dispatch({type: 'ADD_ITEM', payload: itemName })
      }
    })
)(App);
