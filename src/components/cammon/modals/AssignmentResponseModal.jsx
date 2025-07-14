// src/components/cammon/modals/AssignmentResponseModal.jsx
import { useEffect, useState } from 'react';
import GenericButton from '@/components/cammon/buttons/GenericButton';
import { showConfirmationAlert, showMissingFieldsAlert, showSuccessAlert, showErrorAlert } from '@/utils/alerts';
import { X } from 'lucide-react';

const AssignmentResponseModal = ({
    isOpen,
    onClose,
    onSubmit,
    responseText,
    setResponseText
}) => {
    const handleSubmit = async () => {
        if (responseText.trim().length === 0) {
            await showMissingFieldsAlert(['response'], { response: 'Respuesta del operario' })
            return
        }

        const confirmed = await showConfirmationAlert('¿Estás seguro de registrar la respuesta?')
        if (!confirmed.isConfirmed) return

        try {
            await onSubmit(responseText)
            await showSuccessAlert('Respuesta registrada exitosamente')
            onClose()
        } catch (error) {
            console.error('Error en onSubmit:', error)
            await showErrorAlert('No se pudo registrar la asignación.')
        }
    }

    if (!isOpen) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm text-white">
            <div className="bg-gray-900 p-8 rounded shadow-md w-full max-w-[100vh] max-h-[100vh] flex flex-col min-h-[320px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Agregar respuesta del administrador</h2>
                    <GenericButton
                        onClick={onClose}
                        variant="destructive"
                        icon={X}
                        className="px-2 py-1"
                    />
                </div>

                <textarea
                    className="w-full border p-2 rounded text-sm resize-none mb-8 text-white bg-gray-800 border-gray-600 placeholder-gray-400"
                    placeholder="Describe la razón o detalle de asignación (máx. 255 caracteres)"
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
                        Confirmar Asignación
                    </GenericButton>
                </div>
            </div>
        </div>
    )
}

export default AssignmentResponseModal;