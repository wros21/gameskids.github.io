# Prueba DevOps - VANA.GT
## Descripción
### Objetivo: Este ejercicio evaluará su capacidad para diseñar y configurar una solución de API en la nube de AWS, documentar la infraestructura como código y establecer un flujo de CI/CD en GitHub Actions para lograr una implementación eficiente y controlada.

Instalación
Clonar el Repositorio
Para comenzar, clona el repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

Configuración
Requisitos Previos
Asegúrate de tener instalado en tu máquina:

AWS CLI
SAM CLI
GitHub CLI
Configurar Credenciales de AWS
Asegúrate de tener configuradas las credenciales de AWS en tu máquina local:

bash
Copy code
aws configure
Despliegue
Configurar y Desplegar con SAM
Edita el archivo samconfig.toml con la configuración específica de tu aplicación.

Luego, despliega la aplicación con el siguiente comando:

bash
Copy code
sam deploy --guided
Sigue las instrucciones interactivas para configurar tu despliegue.

GitHub Actions
Configuración de Acciones
Las GitHub Actions están configuradas para desplegar automáticamente en AWS cuando haces push a la rama principal (main).

El flujo de trabajo se encuentra en el archivo .github/workflows/main.yml.

Asegúrate de configurar las siguientes variables de entorno en tu repositorio de GitHub:

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
Uso del API
Una vez desplegado, tu API estará disponible en la URL proporcionada por AWS API Gateway.

Adapta esta estructura según las necesidades específicas de tu proyecto y asegúrate de proporcionar detalles específicos sobre la configuración de tu aplicación, las variables de entorno necesarias y cualquier otra información relevante. ¡Buena suerte con tu proyecto!




Is this conversation helpful so far?




