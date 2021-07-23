import { connect } from 'react-redux';
import { fetchFeedings } from '../actions/feeding_actions';
import ResultsPage from './results';

const mapStateToProps = state => ({
  feedings: Object.values(state.feedings)
});

const mapDispatchToProps = dispatch => ({
  fetchFeedings: () => dispatch(fetchFeedings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);