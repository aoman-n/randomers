import React, { FC, useEffect } from 'react';
// import { connect } from 'react-redux';
import Members from '../components/Members';

const MembersContainer: FC = () => {
  useEffect(() => {
    console.log('useEffect!!!!');
  }, []);

  return <Members />;
};

export default MembersContainer;
