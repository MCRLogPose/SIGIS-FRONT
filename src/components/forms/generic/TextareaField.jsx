// src/components/forms/generic/TextareaField.jsx

const TextareaField = ({ label, name, value, onChange, rows = 4, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold text-gray-100 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-white"
      />
    </div>
  )
}

export default TextareaField
