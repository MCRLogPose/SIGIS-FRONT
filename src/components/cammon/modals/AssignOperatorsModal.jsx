// src/components/cammon/modals/OperatorSelectionModal.jsx
import React from 'react';
import GenericTable from '@/components/cammon/tables/GenericTable';
import GenericButton from '@/components/cammon/buttons/GenericButton';
import { XCircle, UserCheck } from 'lucide-react';

const AssignOperatorsModal = ({
  isOpen,
  onClose,
  operators,
  selectedOperators,
  onToggleOperator,
  onConfirm
}) => {
  if (!isOpen) return null;

  const columns = [
    {
      key: 'select',
      label: '',
      render: (_, operator) => (
        <input
          type="checkbox"
          checked={selectedOperators.some(o => o.id === operator.id)}
          onChange={() => onToggleOperator(operator)}
        />
      ),
    },
    { key: 'username', label: 'Usuario' },
    { key: 'correo', label: 'Correo' },
    { key: 'rol', label: 'Rol' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Seleccionar Operadores</h2>

        <GenericTable columns={columns} data={operators} />

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Seleccionados:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedOperators.map((op) => (
              <span
                key={op.id}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {op.username || op.nombre}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <GenericButton variant="destructive" icon={XCircle} onClick={onClose}>
            Cancelar
          </GenericButton>
          <GenericButton variant="secondary" icon={UserCheck} onClick={onConfirm}>
            Asignar
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default AssignOperatorsModal;
