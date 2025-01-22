
import { User, Edit, Dumbbell, Timer, TrendingUp } from 'lucide-react'
import StatCard from './StatCard'
import ClassItem from './ClassItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AuthService from '../../../services/AuthService';
export default function ProfilePage() {
  const {email}  = useParams();
  const [user, setUser] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  useEffect(()=>{
    const authService = new AuthService();

    authService.getUserByEmail(email)
      .then(response => {
        if (response.data) {
          const { name, fecha_registro } = response.data;
          setUser(name); 

    
          const fecha = new Date(fecha_registro);
          const year = fecha.getFullYear();
          const month = fecha.toLocaleString('es-ES', { month: 'long' }); 
          setFechaRegistro(`${month} ${year}`); 

        }
      })
      .catch(error => {
        console.error('Error al obtener el usuario:', error);
      });
  }, [email])
  return (
    <div className="profile-container">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-1/3">
          <div className="user-card">
            <div className="user-card__image">
              <User className="w-20 h-20 text-black" />
            </div>
           
            <h1 className="user-card__name">{user || 'cargando...'}</h1>
            <p className="user-card__membership">Miembro desde {fechaRegistro || 'Cargando...'}</p>
            <button className="user-card__button">
              <Edit className="mr-2 h-4 w-4" /> Editar Perfil
            </button>
          </div>
        </div>


        <div className="md:w-2/3">
          <div className="stats-card">
            <h2 className="stats-card__title">Estadísticas de Entrenamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard icon={<Dumbbell className="stat-icon" />} title="Sesiones" value="24" />
              <StatCard icon={<Timer className="stat-icon" />} title="Horas Totales" value="36" />
              <StatCard icon={<TrendingUp className="stat-icon" />} title="Progreso" value="65%" />
            </div>
            
          </div>

          <div className="stats-card">
            <h2 className="stats-card__title">Próximas Clases</h2>
            <ul className="class-list">
              <ClassItem name="Yoga" date="Lunes, 10:00 AM" />
              <ClassItem name="Spinning" date="Miércoles, 6:00 PM" />
              <ClassItem name="Boxeo" date="Viernes, 7:00 PM" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
