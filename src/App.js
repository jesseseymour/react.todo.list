import { Component } from 'react'
import CloseIcon from 'react-icons/lib/md/close'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  handleRemove = (id) => {
    const items = this.state.items.filter(item => item.id !== id)

    this.setState({items})
  }

  handleAdd = (e) => {
    //add to-do item and prevent default form submission behavior
    e.preventDefault()

    const input = document.getElementById('newItem')
    if (input.value.length <= 0) return

    const items = [
      ...this.state.items,
      {text:input.value,id:Date.now()}
    ]

    input.value = ''

    this.setState({items})
  }

  focusInput = () => {
    document.getElementById('newItem').focus()
  }

  componentDidMount(){
    this.focusInput()
  }

  componentDidUpdate(){
    this.focusInput()
  }

  render() {
    return(
      <div className="myList">
        <h1>My To-Do List</h1>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}
                id={item.id}>
              {item.text}
              <CloseIcon className='remove'
                         onClick={() => this.handleRemove(item.id)} />
            </li>
          ))}
          <li className='addItem'>
            <form onSubmit={this.handleAdd}>
              <input type='text' id='newItem' />
              <button type='submit'>Add</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
  
}

class App extends Component {
  render() {
    return(
      <TodoList />
    )
  }
}

TodoList.defaultProps = {
  items: []
}

export default App