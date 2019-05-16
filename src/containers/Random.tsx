import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { User } from 'src/reducers/github';
import Random from 'src/components/Random';
import { RootStateType } from 'src/reducers';
import { start, stop, clearApointUser } from 'src/actions/random';

interface StateProps {
  isActive: boolean;
  apointUser: User | null;
  users: User[];
}

interface DispatchProps {
  startRandom: () => void;
  stopRandom: (user: User) => void;
  clearRandom: () => void;
}

type EnhancedRandomProps = StateProps & DispatchProps;

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
      clearRandom: () => clearApointUser(),
    },
    dispatch,
  );

const RandomContainer: FC<EnhancedRandomProps> = ({
  isActive,
  apointUser,
  users,
  startRandom,
  stopRandom,
  clearRandom,
}) => {
  useEffect(() => {
    return () => clearRandom();
  }, []);

  return (
    <Random
      {...{ isActive, apointUser, users, startRandom, stopRandom, clearRandom }}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(RandomContainer);
