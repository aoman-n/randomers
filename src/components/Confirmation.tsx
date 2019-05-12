/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { User } from '../services/github/models';

import Layout from './Layout';

interface ConfirmationProps {
  users: User[];
  dispatchRemoveMember: (userLogin: string) => void;
}

const Confirmation: FC<ConfirmationProps> = ({
  users,
  dispatchRemoveMember,
}) => (
  <Layout>
    <p>confirmation page:</p>
    <Card.Group>
      {users.map(user => (
        <Card key={user.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={user.avatar_url} />
            <Card.Header>{user.login}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button
              color="red"
              onClick={() => dispatchRemoveMember(user.login)}
            >
              <Icon name="trash" />
              削除
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Link to="/random">
      <Button color="blue">ランダムを開始する</Button>
    </Link>
  </Layout>
);

export default Confirmation;
