export const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User',
  },
  {
    id: 2,
    username: 'doctor',
    password: 'doctor123',
    role: 'doctor',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
  },
  {
    id: 3,
    username: 'patient',
    password: 'patient123',
    role: 'patient',
    name: 'Jane Smith',
    appointments: [
      { id: 1, date: '2023-10-15', time: '10:00 AM', doctor: 'Dr. John Doe' },
    ],
    testResults: [
      { id: 1, testName: 'Blood Test', result: 'Normal', date: '2023-10-10' },
    ],
  },
];

export const fetchWithAuth = async (url, options = {}) => {
  // Simulate API call for login
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
  

  // Simulate other API calls
  const token = localStorage.getItem('token');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
};