import React, { useEffect, useState } from 'react';
import DayButtons from  './components/DayButtons'; 
import ExerciseForm from './components/ExerciseForm';
import LogTable from './components/LogTable';
import MessageBox from './components/MessageBox';
import Auth from "./components/Auth";
import { getWorkoutData, saveWorkoutData, getLogData } from './api/workoutData';

const App = () => {
  const [user, setUser] = useState(null);
  const [workoutData, setWorkoutData] = useState({});
  const [logData, setLogData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const fetchData = async () => {
      setMessage({ text: 'Cargando datos...', type: 'info' });
      try {
        const data = await getWorkoutData();
        setWorkoutData(data);
        if (Object.keys(data).length > 0) {
          setSelectedDay(Object.keys(data)[0]);
        }
        const log = await getLogData();
        setLogData(log);
        setMessage({ text: 'Datos cargados.', type: 'success' });
      } catch (error) {
        setMessage({ text: 'Error al cargar los datos.', type: 'error' });
      }
    };

    fetchData();
  }, []);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleSave = async (performanceData) => {
    setMessage({ text: 'Guardando registro...', type: 'info' });
    try {
      await saveWorkoutData({
        day: selectedDay,
        performanceData
      });
      setMessage({ text: 'Registro guardado.', type: 'success' });
      const log = await getLogData();
      setLogData(log);
    } catch (error) {
      setMessage({ text: 'Error al guardar el registro.', type: 'error' });
    }
  };

  // Optionally, restrict access to logged-in users:
  if (!user) {
    return <Auth onUser={setUser} />;
  }

  return (
    <div className="app-container">
      <MessageBox message={message} />
      <DayButtons workoutData={workoutData} onDaySelect={handleDaySelect} />
      {selectedDay && (
        <ExerciseForm day={selectedDay} onSave={handleSave} workoutData={workoutData[selectedDay]} />
      )}
      <LogTable logData={logData} />
    </div>
  );
};

export default App;