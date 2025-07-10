// src/components/cammon/modals/AssignmentResponseModal.jsx
import { useEffect, useState } from 'react';
import GenericButton from '@/components/cammon/buttons/GenericButton';
import { showConfirmationAlert, showMissingFieldsAlert, showSuccessAlert, showErrorAlert } from '@/utils/alerts';
import { X } from 'lucide-react';

const AssignmentResponseModal = ({ isOpen, onClose, onSubmit }) => {
    const [responseText, setResponseText] = useState('');

    const handleSubmit = async () => {
        // Validación de campo vacío
        if (responseText.trim().length === 0) {
            await showMissingFieldsAlert(['response'], { response: 'Respuesta del operario' });
            return;
        }

        // Confirmación previa
        const confirmed = await showConfirmationAlert('¿Estás seguro de actualizar tu respuesta?');
        if (!confirmed.isConfirmed) return;

        try {
            await onSubmit(responseText); // Debe ser una función async que use la API
            await showSuccessAlert('Respuesta registrada exitosamente');
            setResponseText('');
            onClose();
        } catch (error) {
            console.error(error);
            await showErrorAlert('No se pudo registrar la respuesta');
        }
    };

    useEffect(() => {
        if (isOpen) {
            setResponseText('');
        }
    }, [isOpen]);
    if (!isOpen) return null;




    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm text-white">
            <div className="bg-gray-900 p-8 rounded shadow-md w-full max-w-[100vh] max-h-[100vh] flex flex-col min-h-[320px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Actualizar respuesta</h2>
                    <GenericButton
                        onClick={onClose}
                        variant="destructive"
                        icon={X}
                        className="px-2 py-1"
                    />
                </div>

                <textarea
                    className="w-full border p-2 rounded text-sm resize-none mb-8 text-white bg-gray-800 border-gray-600 placeholder-gray-400"
                    placeholder="Describe tu respuesta (máx. 255 caracteres)"
                    maxLength={255}
                    rows={6}
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                />

                <div className="flex justify-end gap-4 mt-auto">
                    <GenericButton onClick={onClose} variant="default" className="px-4 py-1 text-sm">
                        Cancelar
                    </GenericButton>
                    <GenericButton
                        variant="secondary"
                        className="px-4 py-1 text-sm"
                        onClick={handleSubmit}
                    >
                        Actualizar
                    </GenericButton>
                </div>
            </div>
        </div>
    );
};

export default AssignmentResponseModal;
