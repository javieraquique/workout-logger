// This file contains utility functions that assist with various tasks throughout the application.

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

export const calculateTotalWeight = (exercises) => {
    return exercises.reduce((total, exercise) => {
        const weight = parseFloat(exercise.weight) || 0;
        const reps = parseInt(exercise.reps) || 0;
        return total + (weight * reps);
    }, 0);
};

export const validateFormData = (data) => {
    for (const key in data) {
        if (!data[key].reps || !data[key].weight) {
            return false;
        }
    }
    return true;
};