import React, { useState } from 'react';

const ExerciseForm = ({ workoutData = {}, selectedDay, onSave }) => {
  if (!selectedDay) return null;

  const exercises = workoutData[selectedDay]?.exercises || [];
  const [performanceData, setPerformanceData] = useState({});

  console.log('selectedDay:', selectedDay);
  console.log('workoutData:', workoutData);

  const handleChange = (exercise, field, value) => {
    setPerformanceData(prevData => ({
      ...prevData,
      [exercise]: {
        ...prevData[exercise],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(performanceData);
    setPerformanceData({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {exercises.map(exercise => (
        <div key={exercise.name} className="bg-gray-700 p-4 md:p-8 rounded-lg shadow-inner">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">{exercise.name}</h3>
          <div className="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
            <span className="font-semibold mb-1 md:mb-0">Series Objetivo: <span className="text-indigo-300">{exercise.targetSets}</span></span>
            <span className="font-semibold">Repeticiones Objetivo: <span className="text-indigo-300">{exercise.targetReps}</span></span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor={`${exercise.name}-reps`} className="block text-sm font-semibold text-gray-300 mb-1">Repeticiones:</label>
              <input
                type="text"
                id={`${exercise.name}-reps`}
                value={performanceData[exercise.name]?.reps || ''}
                onChange={(e) => handleChange(exercise.name, 'reps', e.target.value)}
                placeholder="Ej: 10, 12, 12"
                className="w-full bg-gray-900 text-white p-3 md:p-4 rounded-lg border border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor={`${exercise.name}-weight`} className="block text-sm font-semibold text-gray-300 mb-1">Peso (kg):</label>
              <input
                type="text"
                id={`${exercise.name}-weight`}
                value={performanceData[exercise.name]?.weight || ''}
                onChange={(e) => handleChange(exercise.name, 'weight', e.target.value)}
                placeholder="Ej: 20, 25"
                className="w-full bg-gray-900 text-white p-3 md:p-4 rounded-lg border border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-8 md:mt-10">
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold py-3 px-6 md:py-5 md:px-10 rounded-full shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
          Guardar Registro
        </button>
      </div>
    </form>
  );
};

export default ExerciseForm;