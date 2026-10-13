pipeline {
    agent {
        // Puedes usar un contenedor que ya tenga Node y Playwright integrados
        docker {
            image 'mcr.microsoft.com/playwright:v1.63.0-jammy'
            args '--ipc=host'
        }
    }
    
    environment {
        BASE_URL = 'https://demo.playwright.dev/todomvc/'
        HEADLESS = 'true'
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                // Instala las dependencias limpias del proyecto
                sh 'npm ci'
            }
        }
        
        stage('Validar TypeScript') {
            steps {
                // Valida los tipos antes de generar código o ejecutar
                sh 'npm run typecheck'
            }
        }
        
        stage('Ejecutar Pruebas BDD') {
            steps {
                // Genera las pruebas BDD y ejecuta Playwright
                sh 'npm test'
            }
        }
    }
    
    post {
        always {
            // Guarda los reportes HTML y Cucumber JSON como artefactos en Jenkins (equivalente al upload-artifact)
            archiveArtifacts artifacts: 'reports/**, test-results/**', fingerprint: true, allowEmptyArchive: true
        }
    }
}