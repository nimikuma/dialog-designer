import React from 'react';
import PropTypes from 'prop-types';
import EditComponentTooltip from '../EditComponentTooltip';

const EditComponentCheckbox = ({
  id,
  label,
  description,
  updateFieldValue,
  value,
}) => (
  <div className="coral-Form-field _coral-Checkbox">
    <input
      type="checkbox"
      handle="input"
      className="_coral-Checkbox-input"
      id={id}
      name={id}
      checked={value}
      value="true"
      onChange={({ target }) => updateFieldValue(id, target.checked)}
    />
    <span className="_coral-Checkbox-box" handle="checkbox" />
    <label className="_coral-Checkbox-label" handle="labelWrapper" htmlFor="coral-id-615">
      <span className="u-coral-screenReaderOnly" handle="screenReaderOnly" hidden="">Select</span>
      <coral-checkbox-label>{label}</coral-checkbox-label>
    </label>
    <EditComponentTooltip
      description={description}
      isValid
      id={id}
    />
  </div>
);

EditComponentCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  updateFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

EditComponentCheckbox.defaultProps = {
  label: null,
  description: null,
  value: 'false',
};

export default EditComponentCheckbox;
