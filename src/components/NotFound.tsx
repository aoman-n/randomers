/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <div>
    <h3>Not Found Page ...</h3>
    <Link to="/" />
  </div>
);

export default NotFound;
