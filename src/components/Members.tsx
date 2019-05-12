/** @jsx jsx */
import { FC, useState, ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Card, Image, Button, Checkbox } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { RouteComponentProps, withRouter } from 'react-router';

import Spinner from 'components/common/Spinner';
import Layout from './Layout';
import { User } from '../services/github/models';

export interface MembersProps {
  organizationName: string;
  users: User[];
  isLoading?: boolean;
  handleAddButton: (checkedUesrs: string[]) => void;
}

const Members: FC<MembersProps> = ({
  organizationName = '<会社名>',
  users = [],
  isLoading = false,
  handleAddButton,
}) => {
  const initialState: string[] = [];
  const [checkedUesrs, checkUser] = useState(initialState);

  const handleChange = (e: FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      checkUser(checkedUesrs.concat(target.name));
    } else {
      checkUser(checkedUesrs.filter(user => user !== target.name));
    }
  };

  return (
    <Layout>
      <Button onClick={() => handleAddButton(checkedUesrs)}>Add</Button>
      <h3>{organizationName}のMembers:</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card.Group>
          {users.map(user => (
            <Card key={user.id}>
              <Card.Content>
                <Image floated="right" size="mini" src={user.avatar_url} />
                <Card.Header>{user.login}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Checkbox
                  name={user.login}
                  id={user.id}
                  value={user.login}
                  label={user.login}
                  onChange={handleChange}
                />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </Layout>
  );
};

export default Members;
