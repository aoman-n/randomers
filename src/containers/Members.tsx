import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { RootStateType } from '../reducers';
import { User } from '../services/github/models';
import { getMembers } from '../actions/github';
import Members, { MembersProps } from '../components/Members';

interface StateProps {
  users: User[];
  isLoading: boolean;
}

interface DispatchProps {
  getMembersStart: (organization: string) => void;
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
    },
    dispatch,
  );

const MembersContainer: FC<EnhancedMembersProps> = ({
  users,
  isLoading,
  getMembersStart,
  match,
}) => {
  const { organizationName } = match.params;

  useEffect(() => {
    console.log('useEffect!!!!');
    getMembersStart(organizationName);
  }, []);

  return <Members {...{ users, isLoading, organizationName }} />;
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MembersContainer),
);
