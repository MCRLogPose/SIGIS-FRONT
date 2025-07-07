// src/components/operators/OperatorPreviewCard.jsx

const OperatorPreviewCard = ({ operator, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
      <span className="text-sm">{operator.nombre || operator.username}</span>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700 text-xs">✕</button>
    </div>
  );
};

export default OperatorPreviewCard;
