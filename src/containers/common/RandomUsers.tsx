import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { removeMember } from '../../actions/random';
import { RootStateType } from '../../reducers';
import { User } from '../../reducers/github';
import RandomUsers from '../../components/common/RandomUsers';

interface StateProps {
  users: User[];
}

interface DispatchProps {
  dispatchRemoveMember: (userLogin: string) => void;
}

const mapStateToProps = (state: RootStateType): StateProps => ({
  users: state.random.users,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      dispatchRemoveMember: (userLogin: string) => removeMember({ userLogin }),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomUsers);
