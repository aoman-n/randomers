/** @jsx jsx */
import { FC, useState, ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Card, Image, Button, Checkbox } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';

import Spinner from 'components/common/Spinner';
import { User } from '../services/github/models';

export interface MembersProps {
  organizationName: string;
  users: User[];
  isLoading?: boolean;
  addMembers: (users: User[]) => void;
}

type EnhancedMemberProps = MembersProps & RouteComponentProps;

const Members: FC<EnhancedMemberProps> = ({
  organizationName = '<会社名>',
  users = [],
  isLoading = false,
  history,
  addMembers,
}) => {
  const initialState: string[] = [];
  const [checkedUesrs, checkUser] = useState(initialState);

  const handleAddButton = () => {
    const addUsers: User[] = users.filter(user =>
      checkedUesrs.includes(user.login),
    );
    addMembers(addUsers);
    history.push('/confirmation');
  };

  const handleChange = (e: FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.name);
    checkUser(checkedUesrs.concat(target.name));
  };

  return (
    <div>
      <Button onClick={handleAddButton}>Add</Button>
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
    </div>
  );
};

export default withRouter(Members);
