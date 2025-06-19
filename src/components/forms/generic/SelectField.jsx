// src/components/form/generic/SelectField.jsx
const SelectField = ({ id, label, type, name, value, onChange, options = [] }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-gray-100">
        {label}
      </label>
      <select
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        {options.map((opt) => (
          <option key={opt.id ?? opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;