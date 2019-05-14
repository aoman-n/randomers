/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Input, Button, Icon } from 'semantic-ui-react';

const input = css`
  margin-right: 16px !important;
`;

const link = css`
  display: inline-block;
  height: 100%;
`;

const InputCampanyName: FC = () => {
  const [inputText, updateText] = useState('');

  return (
    <div>
      <h3>Githubから検索: 会社名を入力してください。ee</h3>
      <div>
        <Input
          // action={{ icon: 'search' }}
          id="organizationName"
          css={input}
          placeholder="Search..."
          value={inputText}
          onChange={e => updateText(e.target.value)}
        />
        <Link to={`/${inputText}/members`} css={link}>
          {/* <Icon bordered name="search" /> */}
          <Button>Search</Button>
        </Link>
      </div>
    </div>
  );
};

export default InputCampanyName;
