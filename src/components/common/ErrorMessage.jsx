export const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('authToken');
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'API-Key': 'your-api-key-here', // Replace with your actual API key
    };
  
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });
  
    if (response.status === 401) {
      // Token is invalid or expired, redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      window.location.href = '/login';
      return;
    }
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
  };