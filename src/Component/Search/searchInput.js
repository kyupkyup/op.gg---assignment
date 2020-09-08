import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputType = styled.input`
  width: 260px;
  height: 32px;

  border-radius: 2px;
  border: 0.5px solid #eaeaea;
  padding-left: 10px;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #727272;
`;

const SearchInput = ({
  placeholder = "소환사명, 챔피언...",
  className,
  value,
  onChange,
  type = "text",
  disabled = false,
  onKeyPress,
  onClick,
}) => {
  return (
    <InputType
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onKeyPress={onKeyPress}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onKeyPress: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchInput;
