import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootStateType } from '../reducers';
import { start, stop } from '../actions/random';
import { User } from '../services/github/models';
import Random from '../components/Random';

interface StateProps {
  isActive: boolean;
  apointUser: User | null;
  users: User[];
}

interface DispatchProps {
  startRandom: () => void;
  stopRandom: (user: User) => void;
}

const mapStateToProps = (state: RootStateType): StateProps => ({
  isActive: state.random.isActive,
  apointUser: state.random.apointUser,
  users: state.random.users,
});

const mapDispathToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      startRandom: () => start(),
      stopRandom: (user: User) => stop({ user }),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Random);
