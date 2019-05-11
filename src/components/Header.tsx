/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Header, Segment } from 'semantic-ui-react';

interface HeaderComponentProps {
  title: string;
}

const header = css`
  background: gray !important;
`;

const headerText = css`
  color: white !important;
`;

const HeaderComponent: FC<HeaderComponentProps> = ({ title = '' }) => (
  <Segment clearing css={header}>
    <Header as="h2" floated="left" css={headerText}>
      {title}
    </Header>
  </Segment>
);

export default HeaderComponent;
