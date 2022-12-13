import React from 'react'

const Dropdown = ({options, id, selectedValue, onSelectedValueChange}) => (
  <select
    id={id}
    onChange={e => onSelectedValueChange(e.target.value)}
  >
    {/* <option value=''> -- Choose an option --</option> */}
    {options.map(({value, label}) => (
      <option
        key={value}
        value={value}
        selected={value === selectedValue}
      >
        { label }
      </option>
    ))}
  </select>
)


export default Dropdown