import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput( { value, onChange, Icon, ...restProps } ) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        onChange={onChange}
        value={value}
        type="text"
        {...restProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  border: 1px solid red;
  background-color: ${ theme.colors.white };
  border-radius:${ theme.borderRadius.round };
  display: flex;
  align-items: center; 
  padding: 18px 24px;
  margin: 18px 0;
;

input{
  border: none;
  font-size: 15px;
  color:${ theme.colors.dark };
  width:100%;
}

  .icon{
  color:${ theme.colors.greySemiDark };
  font-size: ${ theme.fonts.size.P0 };
  margin-right: 8px;
}
input{
  border: none;
  font-size: ${ theme.fonts.size.P0 };
  color:${ theme.colors.dark };

&::placeholder{
  background-color: ${ theme.colors.white };
  color: ${ theme.colors.greyMedium };
}

`;