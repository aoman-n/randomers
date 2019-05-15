import React, { FC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { removeMember } from '../actions/random';

import { RootStateType } from '../reducers';
// import { User } from '../services/github/models';
import { User } from '../reducers/github';
import Confirmation from '../components/Confirmation';

interface StateProps {
  users: User[];
}

interface DispatchProps {
  dispatchRemoveMember: (userLogin: string) => void;
}

type EnhancedConfirmationProps = StateProps & DispatchProps;

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

const ConfirmationContainer: FC<EnhancedConfirmationProps> = ({
  users,
  dispatchRemoveMember,
}) => {
  return <Confirmation {...{ users, dispatchRemoveMember }} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmationContainer);
