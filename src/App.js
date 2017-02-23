import React, { Component } from 'react';
import { connect } from 'react-redux'
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import SelectFieldExampleSimple from './SelectFieldExampleSimple';
import PopoverExampleSimple from './PopoverExampleSimple';
import MenuExampleSimple from './MenuExampleSimple';
import MyCheckbox from './MyCheckbox';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  addItem(){
    this.props.onAddItem(this.itemInput.value, this.myCheckbox.state.switched);
    this.itemInput.value = '';
  }
  render() {
      return (
        <div>
          <MuiThemeProvider>
            <SelectFieldExampleSimple />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <MenuExampleSimple />
          </MuiThemeProvider>
           <MuiThemeProvider>
            <PopoverExampleSimple />
          </MuiThemeProvider>

          <br/><br/>

          <input type="text" ref={(input) =>{this.itemInput = input}}/>
          <button onClick={this.addItem.bind(this)}>Add todo</button>
          <MuiThemeProvider>
            <MyCheckbox  ref={(myCheckbox) =>{this.myCheckbox = myCheckbox}} />
          </MuiThemeProvider>
          add to subList

          <ul>
            {this.props.testStore.map((item, index) => (
              <li key={index}>
                {item.itemName}
                {item.itemList.map(function(item, index){
                  return (<ul><li key={index}>{item}</li></ul>);
                })}
              </li>
            ))}
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
      onAddItem: (itemName, isSubList) => {
        dispatch({type: 'ADD_ITEM', payload: itemName, isSubList: isSubList })
      }
    })
)(App);

//export default App;
