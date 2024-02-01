import React from 'react';
import Styled from 'styled-components';

const StyledInput = Styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

function Input({ ...props }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledInput {...props} />
    </div>
  );
}

export default Input;
