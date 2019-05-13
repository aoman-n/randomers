/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Card, Image } from 'semantic-ui-react';

import { User } from '../services/github/models';
import Layout from './Layout';

interface RandomProps {
  isActive: boolean;
  startRandom: () => void;
  stopRandom: (user: User) => void;
  apointUser: User | null;
  users: User[];
}

const useRandomUser = (users: User[]): [User, () => void] => {
  const initialUser = users[0];
  const [activeUser, switchActiveUser] = useState(initialUser);

  const updateActiveUser = () => {
    switchActiveUser(users[Math.floor(Math.random() * users.length)]);
  };

  return [activeUser, updateActiveUser];
};

const Random: FC<RandomProps> = ({
  users,
  isActive,
  startRandom,
  stopRandom,
  apointUser,
}) => {
  const [activeUser, updateActiveUser] = useRandomUser(users);
  const [intervalId, updateIntervalId] = useState<NodeJS.Timer | null>(null);

  const handleStartButton = () => {
    const id: NodeJS.Timer = setInterval(() => {
      updateActiveUser();
    }, 50);
    updateIntervalId(id);
    startRandom();
  };

  /* 参考:https://blog.kubosho.com/entry/setinterval-trap-on-typescript/ */
  const handleStopButton = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    updateIntervalId(null);
    stopRandom(activeUser);
  };

  return (
    <Layout>
      <p>random page: </p>
      {isActive ? (
        <Button color="red" onClick={handleStopButton}>
          stop
        </Button>
      ) : (
        <Button color="teal" onClick={handleStartButton}>
          start
        </Button>
      )}
      {isActive && (
        <Card key={activeUser.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={activeUser.avatar_url} />
            <Card.Header>{activeUser.login}</Card.Header>
          </Card.Content>
        </Card>
      )}
      {apointUser && (
        <div>
          <p>あなたです！</p>
          <Card key={apointUser.id}>
            <Card.Content>
              <Image floated="right" size="mini" src={apointUser.avatar_url} />
              <Card.Header>{apointUser.login}</Card.Header>
            </Card.Content>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Random;
