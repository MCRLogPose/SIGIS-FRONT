import DetailRow from './DetailRow'

const IncidentDetailSection = ({ incident }) => (
  <div className="space-y-3">
    <DetailRow label="Descripción" value={incident.description} />
    <DetailRow label="Ubicación" value={incident.location} />
    <DetailRow label="Reportado por" value={incident.reporter} />
    <DetailRow label="Fecha de reporte" value={incident.date} />

    {incident.administrator && <DetailRow label="Administrador" value={incident.administrator} />}
    {incident.operator && <DetailRow label="Operador" value={incident.operator} />}
    {incident.assignedDate && <DetailRow label="Fecha de asignación" value={incident.assignedDate} />}
  </div>
)

export default IncidentDetailSection