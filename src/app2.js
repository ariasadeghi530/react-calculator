import React, {Component} from 'react'

class App extends Component  {

  state = {
    items: ['prepare lunch', 'laundry', 'library visit'],
    item: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
      }

      handleAddItem = event => {
        event.preventDefault()
        let items = JSON.parse(JSON.stringify(this.state.items))
        items.push(this.state.item)
        this.setState({ items, item: ''})
      }

  render() {
    return (
    <>
      <h1>Todo List</h1>
      <form>
        <p>
          <label htmlFor= "item">Item</label>
          <input
          type = "text"
          name = "item"
          value = {this.state.item}
          onChange = {this.handleInputChange}
          />
        </p>
        <button onClick={this.handleAddItem}> Add Item</button>
        </form>
        <ul>
          {
            this.state.items.map(x => <li>{x} <buton onClick = {this.handleDeleteItem}>X</buton></li>)
          }
        </ul>
    </>
  )
}
}

export default App
