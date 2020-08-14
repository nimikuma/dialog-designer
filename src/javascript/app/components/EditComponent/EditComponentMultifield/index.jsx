import React from 'react';
import EditComponentTooltip from '../EditComponentTooltip';

const EditComponentMultifield = ({ id, isValid, label, value, description, updateFieldValue }) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
    >
      {label}
    </label>
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      key={id}
      name={id}
      labelledby={`label_${id}`}
      data-foundation-validation=""
      data-validation=""
      id={id}
      aria-labelledby={`label_${id}`}
      variant="default"
      value={value}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />

    <coral-multifield>
      <coral-multifield-item>
        <input is="coral-textfield" aria-label="input" type="text" value="Basel" />
      </coral-multifield-item>
      <button coral-multifield-add="" type="button" is="coral-button">Add a field</button>
      <template coral-multifield-template="">
        <input is="coral-textfield" aria-label="input" type="text" />
      </template>
    </coral-multifield>


    <EditComponentTooltip
      description={description}
      isValid={isValid}
    />
  </>
);

export default EditComponentMultifield;
