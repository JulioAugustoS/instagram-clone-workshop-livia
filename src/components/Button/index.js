import React from 'react';

import {Btn, BtnText} from './styles';

function Button({title, action}) {
  return (
    <Btn onPress={action}>
      <BtnText>{title}</BtnText>
    </Btn>
  );
}

export default Button;
