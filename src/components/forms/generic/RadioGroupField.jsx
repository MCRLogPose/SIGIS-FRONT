// src/components/forms/generic/RadioGroupField.jsx

const RadioGroupField = ({ label, name, options = [], value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-100 mb-1">{label}</label>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-1">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="text-blue-600"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroupField
