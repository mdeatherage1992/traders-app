import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      id: '',
      side: '',
      symbol: '',
      quantity: '',
      committed: 0,
      executed: 0,
      open: true,
      complete: false
    }
  }

handleSubmit(event){
event.preventDefault(event);
fetch('http://localhost:8080/orders', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: this.state.id,
    side: this.state.side,
    symbol:this.state.symbol,
    quantity: this.state.quantity
  })
})
.then(this.setState({
  id: '',
  side: '',
  symbol: '',
  quantity: '',
  committed: 0
  }))
}


render () {
  return (
    <div id="Form">
    <form onSubmit={this.handleSubmit}>
    <input placeholder="id" type="text" value={this.state.id} onChange={(ev)=>this.setState({id:ev.target.value})}/>
    <input placeholder="side" type="text" value={this.state.side} onChange={(ev)=>this.setState({side:ev.target.value})}/>
    <input placeholder="symbol" type="text" value={this.state.symbol} onChange={(ev)=>this.setState({symbol:ev.target.value})}/>
    <input placeholder="quantity" type="text" value={this.state.quantity} onChange={(ev)=>this.setState({quantity:ev.target.value})}/>
       <button type="Submit">Start</button>
    </form>
   </div>
    )
  }
}

export default Form;
