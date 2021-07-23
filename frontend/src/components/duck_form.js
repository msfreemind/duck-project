import React from 'react';

class DuckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: "", foodType: [], city: "", neighbourhood: "", numDucks: 0, foodAmount: 0 }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Time:
        <input type="time" width="50" onChange={this.handleInput} id="time" value={this.state.time}/>
        {/* <strong className="error">{this.props.errors.time}</strong> */}

        Food Type (select multiple):
        <select onChange={this.handleInput} id="foodType" value={this.state.foodType} multiple>
          <option value={"seeds"}>Seeds</option>
          <option value={"oats"}>Oats</option>
          <option value={"nuts"}>Nuts</option>
          <option value={"grapes"}>Grapes</option>
          <option value={"rice"}>Rice</option>
          <option value={"junk"}>Junk Food (Bread, Chips, etc.)</option>
          <option value={"other"}>Other</option>
        </select>
        {/* <strong className="error">{this.props.errors.foodType}</strong> */}

        City:
        <input type="text" placeholder="City" onChange={this.handleInput} id="city" value={this.state.city}/>
        {/* <strong className="error">{this.props.errors.city}</strong> */}

        Neighbourhood:
        <input type="text" placeholder="Neighbourhood" onChange={this.handleInput} id="neighbourhood" value={this.state.neighbourhood}/>
        {/* <strong className="error">{this.props.errors.neighbourhood}</strong> */}

        # of Ducks:
        <input type="number" placeholder="# of Ducks" onChange={this.handleInput} id="numDucks" value={this.state.numDucks}/>
        {/* <strong className="error">{this.props.errors.numDucks}</strong> */}

        Amount of Food (in handfuls):
        <input type="number" placeholder="Food Amount" onChange={this.handleInput} id="foodAmount" value={this.state.foodAmount}/>
        {/* <strong className="error">{this.props.errors.foodAmount}</strong> */}

        <br/>

        <button>Submit</button>
      </form>
    );
  }
}

export default DuckForm;