import { useParams, useLocation } from 'react-router-dom'
import { getIncidentsByID } from '@/api/service/incidentService';
import { getIncidenceAssignments } from '@/api/service/assignmentService';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout'
import IncidentDetailSection from '@/components/details/IncidentDetailSection'

// IncidentDetailPage.jsx
const normalizeIncidentData = (data, type) => {
    if (type === 'assignment') {
        const assignment = data;
        const inc = assignment.incidency;

        return {
            id: inc.id,
            title: inc.title,
            description: inc.description,
            imageUrl: inc.image,
            status: inc.state,
            emissionDate: inc.dateEmision,
            acceptanceDate: inc.dateAccept,
            user: inc.user,
            category: inc.category?.typeCategory || 'Sin categoría',
            location: {
                pavilion: inc.location?.pavilion ?? 'N/A',
                floor: inc.location?.floor ?? 'N/A',
                reference: inc.location?.reference ?? '',
            },
            operators: assignment.users?.map((u) => ({
                fullName: `${u.nombre} ${u.apellidos}`,
                username: u.username,
                specialty: u.especialidad || 'Sin especialidad',
            })) || [],
            administrator: assignment.users?.find(u => u.rol === 'admin')?.nombre,
            updates: assignment.history?.map((h) => ({
                date: h.createdAt,
                user: h.username,
                comment: h.response,
            })) || [],
        };
    } else {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            imageUrl: data.image,
            status: data.state,
            emissionDate: data.dateEmision,
            acceptanceDate: data.dateAccept,
            user: data.user,
            category: data.category?.typeCategory || 'Sin categoría',
            location: {
                pavilion: data.location?.pavilion ?? 'N/A',
                floor: data.location?.floor ?? 'N/A',
                reference: data.location?.reference ?? '',
            },
            operators: [],
            administrator: null,
            updates: [],
        };
    }
};



const IncidentDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type'); // 'incidence' o 'assignment'

    console.log("El tipo recibido en URL es:", type);

    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIncident = async () => {
            try {
                let rawData;
                if (type === 'incidence') {
                    const [res] = await getIncidentsByID(Number(id));
                    rawData = res;
                } else {
                    rawData = await getIncidenceAssignments(id);
                }

                const normalized = normalizeIncidentData(rawData, type);
                setIncident(normalized);
            } catch (error) {
                console.error('Error al cargar la incidencia', error);
            } finally{
                setLoading(false);
            }
        };

        fetchIncident();
    }, [id, type]);


    if (loading) return <p className="p-4">Cargando...</p>;
    if (!incident) return <p className="p-4 text-red-500">Incidencia no encontrada</p>;

    return (
        <DashboardLayout>
            <IncidentDetailSection incident={incident} />
        </DashboardLayout>
    );
};

export default IncidentDetailPage;
