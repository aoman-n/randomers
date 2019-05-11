import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { RootStateType } from '../reducers';
import { User } from '../services/github/models';
import { getMembers } from '../actions/github';
import { addMembers } from '../actions/random';
import Members from '../components/Members';

interface StateProps {
  users: User[];
  isLoading: boolean;
}

interface DispatchProps {
  getMembersStart: (organization: string) => void;
  addMembers: (users: User[]) => void;
}

type EnhancedMembersProps = StateProps &
  DispatchProps &
  RouteComponentProps<{ organizationName: string }>;

const mapStateToProps = (state: RootStateType): StateProps => ({
  users: state.github.users,
  isLoading: state.github.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getMembersStart: (organizationName: string) =>
        getMembers.start({ organizationName }),
      addMembers: (users: User[]) => addMembers({ users }),
    },
    dispatch,
  );

const MembersContainer: FC<EnhancedMembersProps> = ({
  users,
  isLoading,
  getMembersStart,
  addMembers,
  match,
  // history,
}) => {
  const { organizationName } = match.params;

  // const handleAddButton = () => {
  //   history.push('/confirmation');
  // };

  useEffect(() => {
    getMembersStart(organizationName);
  }, []);

  return <Members {...{ users, isLoading, organizationName, addMembers }} />;
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MembersContainer),
);
