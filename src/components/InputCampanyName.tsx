/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';

interface InputCampanyNameProps {
  getMembers?: (campanyName: string) => void;
}

const InputCampanyName: FC<InputCampanyNameProps> = () => {
  const [inputText, updateText] = useState('');

  return (
    <div>
      <h3>会社名を入力</h3>
      <input value={inputText} onChange={e => updateText(e.target.value)} />
      <button type="button" onClick={() => null}>
        send
      </button>
    </div>
  );
};

export default InputCampanyName;
