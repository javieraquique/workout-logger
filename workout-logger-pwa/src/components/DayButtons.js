import React from 'react';

const DayButtons = ({ workoutData = [], onDaySelect }) => {
  if (!workoutData.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {workoutData.map(workout => (
        <button
          key={workout.day}
          id={`btn-${workout.day.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e')}`}
          className="day-btn bg-gray-700 hover:bg-gray-600 transition-all text-white text-base sm:text-lg font-semibold py-2 px-4 rounded-full shadow-md"
          onClick={() => onDaySelect(workout.day)}
        >
          {workout.day}
        </button>
      ))}
    </div>
  );
};

export default DayButtons;
