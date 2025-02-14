export const apiCall = async (endpoint, options = {}) => {
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};
