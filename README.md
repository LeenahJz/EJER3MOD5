# [EJERCICIO PRACTICO 3, MODULO 5]


Este ejercicio se llevó haciendo uso de los hooks para manejos de errores.

## [GITHUB: https://github.com/LeenahJz/EJER3MOD5.git]

## To install before execution: 
-npm install msw@latest
-npm install crypto-js 
-npm install dompurify     
-npm install json-server
-npx json-server --watch db.json --port 3000  

## Estructura

├─ node_modules
├─ public
│   └── mockServiceWorker.js  
├─ src
├── api/                           # API-related utilities
│   ├── api.js                     # Functions for making API requests
│   └── encryption.js                     # Functions for encrypt and decrypts passwords 
│
├── auth/                          # Authentication-related files
│   ├── AuthContext.jsx            # Context for managing authentication state
│   └── PrivateRoute.jsx           # Component for protecting routes
│
├── components/                    # Reusable UI components
│   ├── AppointmentForm.jsx        # Form for scheduling appointments
│   ├── DoctorCard.jsx             # Cards for displaying doctors
│   ├── ServiceList.jsx            # List of services
│   ├── Homepage.jsx               # Homepage component
│   └── common/                    # Common reusable components (e.g., buttons, modals)
│       └── ErrorMessage.jsx       # Component for displaying error messages
│   └── hooks/                    
│       └── useForm.js           # Usage of hooks and errors
│   └── mocks/                    # MockAPI to simulate API calls
│       ├── handlers.js           # use of handlers for the CryptoJS and appointments manage.       
│       └── browser.js  
│
├── pages/                         # Page components (views)
│   ├── AdminDashboard.jsx         # Admin dashboard page
│   ├── DoctorDashboard.jsx        # Doctor dashboard page
│   ├── UserDashboard.jsx          # User dashboard page
│   └── Login.jsx                  # Login page
│
├── App.jsx                        # Main application component (routes and layout)
├── main.jsx                       # Entry point for the app
└── index.css                      # Global style

## Este código cumple con: 

1. Uso de useState para la Gestión de Estado
- Implementa el Hook useState para gestionar el estado en los componentes del sistema,
como:
- El manejo de formularios de pacientes o citas médicas.
- Almacenar temporalmente la información ingresada por el usuario hasta que sea
enviada o actualizada en la base de datos.

2. Uso de useEffect para la Gestión de Efectos Secundarios
- Utiliza useEffect para manejar efectos secundarios como:
- Realizar peticiones a la API para obtener los datos del sistema del hospital
(doctores, pacientes).
- Controlar cuándo y cómo se deben ejecutar ciertos procesos, como la
actualización automática de datos.

3. Construcción de un Hook Personalizado 
- Crea un Hook personalizado para resolver una funcionalidad recurrente en la
aplicación. Algunas ideas incluyen:
- Un Hook que maneje el formulario de registro de doctores y pacientes, validando
los datos y devolviendo errores si es necesario.
- Un Hook para gestionar la autenticación del usuario, verificando si el usuario
está autenticado o no.

4. Manejo de Errores en la Aplicación 
- Implementa un mecanismo para el manejo de errores y excepciones en la aplicación
React, asegurando que:
- Los errores durante las peticiones a la API se capturen y manejen
adecuadamente, mostrando mensajes claros al usuario.
- Se manejen errores comunes en la interfaz, como la validación de formularios o
la ausencia de datos requeridos.

5. Aplicación Correcta de las Reglas de los Hooks 
- Asegúrate de seguir correctamente las reglas de los Hooks, evitando:
- Llamar Hooks de manera condicional o dentro de bucles.
- Asegurarte de que los Hooks se llamen en el nivel superior del componente y
respeten las mejores prácticas de ReactJS.
