/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

// interface InputCampanyNameProps {
//   getMembers?: (campanyName: string) => void;
// }

const InputCampanyName: FC = () => {
  const [inputText, updateText] = useState('');

  return (
    <div>
      <h3>Githubから検索: 会社名を入力してください。</h3>
      <input value={inputText} onChange={e => updateText(e.target.value)} />
      <Link to={`/${inputText}/members`}>メンバー一覧を表示</Link>
    </div>
  );
};

export default InputCampanyName;
