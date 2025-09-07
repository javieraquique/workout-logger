import React from 'react';

const LogTable = ({ logData, exerciseFilter, onFilterChange }) => {
  const renderLogTable = () => {
    if (!logData || logData.length === 0) {
      return (
        <tr>
          <td colSpan="3" className="text-center text-gray-400 py-4 text-xs md:text-sm">No hay registros que coincidan.</td>
        </tr>
      );
    }

    return logData
      .filter(row => exerciseFilter === 'all' || row.exercise === exerciseFilter)
      .map((row, index) => {
        const formattedDate = new Date(row.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
        const performance = row.reps ? `${row.reps} reps a ${row.weight ? `${row.weight} kg` : ''}` : 'Sin registro';

        return (
          <tr key={index} className="hover:bg-gray-600 transition-colors">
            <td className="rounded-l-xl py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">{formattedDate}</td>
            <td className="py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">{row.exercise}</td>
            <td className="rounded-r-xl py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">{performance}</td>
          </tr>
        );
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-700 rounded-xl">
        <thead className="bg-gray-700 border-b border-gray-600">
          <tr className="text-left text-gray-300 text-xs uppercase">
            <th className="rounded-tl-xl py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">Fecha</th>
            <th className="py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">Ejercicio</th>
            <th className="rounded-tr-xl py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-3">Rendimiento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600 text-xs md:text-sm">
          {renderLogTable()}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;