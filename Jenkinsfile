pipeline {
    agent any
    
    tools {
        nodejs 'node24'
    }
    
    environment {
        BASE_URL = 'https://demo.playwright.dev/todomvc/'
        HEADLESS = 'true'
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Instalar Navegador Playwright') {
            steps {
                sh 'npx playwright install --with-deps chromium'
            }
        }
        
        stage('Validar TypeScript') {
            steps {
                sh 'npm run typecheck'
            }
        }
        
        stage('Ejecutar Pruebas BDD') {
            steps {
                sh 'npm test'
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'reports/**, test-results/**', fingerprint: true, allowEmptyArchive: true
        }
    }
}