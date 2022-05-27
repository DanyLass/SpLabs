import React from "react";

import "./styles.scss";

export function Checkbox({ label, isSelected, onCheckboxChange }) {
  return (
    <div class="form__check">
      <input
        type="checkbox"
        name={label}
        id={label}
        value={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
    </div>
  );
}
