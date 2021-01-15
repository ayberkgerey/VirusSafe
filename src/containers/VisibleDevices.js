import {connect} from 'react-redux';
import DeviceList from '../components/DeviceList';
import {toggleDevice} from '../redux/actions';

const mapStateToProps = (state) => ({
  name: state.name,
  code: state.code,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDevice: (id) => dispatch(toggleDevice(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
