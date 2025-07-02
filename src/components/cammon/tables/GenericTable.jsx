//src/components/cammon/tables/GenericTable.jsx

const GenericTable = ({ columns, data, onRowDoubleClick }) => {
  
    return (
      <div className="overflow-x-auto bg-transparent shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-950 border-b text-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-900 hover:text-gray-200" onDoubleClick={() => onRowDoubleClick?.(row)}>
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
    )
  }
  
  export default GenericTable