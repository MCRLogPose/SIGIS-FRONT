//src/components/cammon/tables/GenericTable.jsx

const GenericTable = ({
  columns,
  data,
  onRowDoubleClick,
  selectable = false,
  selectedRows = [],
  onSelectRow
}) => {
  const isSelected = (row) =>
    selectedRows.some((selected) => selected.id === row.id);

  return (
    <div className="overflow-x-auto bg-transparent shadow-md rounded-lg">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-950 border-b text-white">
          <tr>
            {selectable && <th className="px-4 py-3">✓</th>}
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b hover:bg-gray-900 hover:text-gray-200"
              onDoubleClick={() => onRowDoubleClick?.(row)}
            >
              {selectable && (
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isSelected(row)}
                    onChange={() => onSelectRow?.(row)}
                    className="cursor-pointer"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default GenericTable