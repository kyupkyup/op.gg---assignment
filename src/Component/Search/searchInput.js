import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputType = styled.input``;

const SearchInput = ({
  placeholder,
  className,
  value,
  onChange,
  type = "text",
  disabled = false,
  onKeyPress,
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
};

export default SearchInput;
