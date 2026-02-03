# Comandos
``git --version``
``node -v``
``npm -v``
## Inicializar un proyecto
``npm init -y``
`` npm install express``
## Manejo de Git
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``



# 📁Estructura profesionales de una API en Node.js
api-node
    |-src **Aquí vive todo el código real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediarios de seguridad y validación**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Lógica del negocio**
        |-utils **Funciones reutilizables**
        |-app.js **Configuración de la aplicación**
        |-server.js **Punto de arranque**