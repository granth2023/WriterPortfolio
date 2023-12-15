const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchMiniSites = async (): Promise<void> => {
    try{ 
        const response = await fetch(`${API_URL}/api/miniSites`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) { 
        console.error('Error fetching mini sites:', error);
        throw error;
    } 
};