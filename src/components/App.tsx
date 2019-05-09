import * as React from 'react';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import Footer from './Footer';
import StorybookSmaple from './StorybookSample';

const component: React.SFC = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <StorybookSmaple />
    </>
  );
};

export default component;
