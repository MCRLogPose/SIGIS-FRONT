// src/components/details/DetailRow.jsx

const DetailRow = ({ label, value }) => (
  <div className="flex gap-2">
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
)

export default DetailRow
