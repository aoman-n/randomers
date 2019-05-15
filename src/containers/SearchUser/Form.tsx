import React, { FC, useState, useEffect, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { searchUser, SearchUserParams } from '../../actions/github';
import {
  addMembers,
  removeMember,
  AddMembersParams,
  RemoveMemberParams,
} from '../../actions/random';
import { RootStateType } from '../../reducers';
// import { User } from '../../services/github/models';
import { User } from '../../reducers/github';

import Form from '../../components/SearchUser/Form';

interface StateProps {
  addedUsers: User[];
  searchedUsers: User[];
  isLoading: boolean;
}

interface DispatchProps {
  dispatchSearchUserStart: (params: SearchUserParams) => void;
  dispatchAddMembers: (params: AddMembersParams) => void;
  dispatchRemoveMember: (params: RemoveMemberParams) => void;
}

type EnhancedFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootStateType): StateProps => ({
  addedUsers: state.random.users,
  searchedUsers: state.github.users,
  isLoading: state.github.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      dispatchSearchUserStart: params => searchUser.start(params),
      dispatchAddMembers: params => addMembers(params),
      dispatchRemoveMember: params => removeMember(params),
    },
    dispatch,
  );

/* custom hooks 参照: https://qiita.com/seya/items/4ef1ef643b4e5f63dd92 */
const useDebounce = (fn: () => any, ms: number = 0, args: any[] = []) => {
  useEffect(() => {
    const handle = setTimeout(fn.bind(null, args), ms);

    return () => {
      clearTimeout(handle);
    };
  }, args);
};

const useDebouncedQuery = (onChange: (query: string) => void) => {
  const [searchQuery, setSearchQuery] = useState('');

  useDebounce(
    () => {
      onChange(searchQuery);
    },
    500,
    [searchQuery],
  );

  const clearQuery = useCallback(() => {
    setSearchQuery('');
  }, []);

  return { searchQuery, setSearchQuery, clearQuery };
};
/* ここまで */

const SearchUserFormContainer: FC<EnhancedFormProps> = ({
  addedUsers,
  searchedUsers,
  isLoading,
  dispatchSearchUserStart,
  dispatchAddMembers,
  dispatchRemoveMember,
}) => {
  const loadSuggestions = (q: string) => {
    if (q) {
      dispatchSearchUserStart({ q });
    }
  };

  const { searchQuery, setSearchQuery } = useDebouncedQuery(loadSuggestions);

  const handleSubmit = () => {
    console.log('handle submit!!!');
  };

  return (
    <Form
      {...{
        addedUsers,
        searchedUsers,
        isLoading,
        searchQuery,
        setSearchQuery,
        handleSubmit,
        dispatchRemoveMember,
      }}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchUserFormContainer);
