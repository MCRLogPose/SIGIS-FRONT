import React from 'react'

const statusSteps = ['PENDIENTE', 'EN PROCESO', 'CULMINADO']

const getStepIndex = (status) => statusSteps.indexOf(status)

const DetailStatus = ({ status }) => {
    const activeStep = getStepIndex(status)

    return (
        <div className="bg-blue-950 text-white rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-2">Estado</h2>
            <div className="flex items-center justify-between">
                {statusSteps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center flex-1">
                        <div
                            className={`w-5 h-5 rounded-full border-2 ${
                                index <= activeStep ? 'bg-green-500 border-green-500' : 'border-gray-500'
                            }`}
                        />
                        <span className="text-xs mt-1">{step}</span>
                        {index < statusSteps.length - 1 && (
                            <div
                                className={`h-1 w-full ${
                                    index < activeStep ? 'bg-green-500' : 'bg-gray-500'
                                }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailStatus