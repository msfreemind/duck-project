import { connect } from 'react-redux';
import { createFeeding } from '../actions/feeding_actions';
import DuckForm from './duck_form';

const mapDispatchToProps = dispatch => ({
  createFeeding: feeding => dispatch(createFeeding(feeding))
});

export default connect(null, mapDispatchToProps)(DuckForm);