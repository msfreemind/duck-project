import React from 'react';
import ResultsItem from './results_item';

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedingsLoaded: false };
  }

  componentDidMount() {
    this.props.fetchFeedings().then( () => this.setState({ feedingsLoaded: true }) );
  }

  printFeedings() {
    if (this.props.feedings.length > 0) {
      return (
        <ul className="results">
          { this.props.feedings.map((feeding, idx) => <ResultsItem key={idx} feeding={feeding}/>) }
        </ul>
      );
    } else {
      return this.state.feedingsLoaded ? "None." : "";
    }
  }

  render() {
    return (
      <div className="index col col-7-8">
        <h2>Submitted Feedings</h2>
        { this.printFeedings() }
      </div>
    );
  } 
}

export default ResultsPage;