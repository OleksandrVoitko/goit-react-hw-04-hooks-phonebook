import React from "react";
import PropTypes from "prop-types";
import { LabelFilter, InputFilter } from "./Filter.styled";

function Filter({ value, onChange }) {
  return (
    <LabelFilter>
      <InputFilter
        type="text"
        placeholder="Find contacts by name..."
        value={value}
        onChange={onChange}
      />
    </LabelFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
