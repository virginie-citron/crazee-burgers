import styled from "styled-components";

export default function Input( { value, onChange, Icon, ...restProps } ) {
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
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center; 
  padding: 18px 24px;
  margin: 18px 0;
;

input{
  border: none;
  font-size: 15px;
  color:#17161a;
width:100%;
}

  .icon{
  color:#93a2b1;
  font-size: 15px;
  margin-right: 8px;
}
input{
  border: none;
  font-size: 15px;
  color:#17161a;
}
&::placeholder{
  background-color: white;
  color: lightgrey;
}

`;