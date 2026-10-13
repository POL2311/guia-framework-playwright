pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.63.0-jammy',
    args '--ipc=host'}}
    environment {
        BASE_URL = 'https://demo.playwright.dev/todomvc/'
        HEADLESS = 'true'
    }
    stages {
        stage('instalar dependencias'){
            steps {
                sh 'npm ci'
            }
        }
        stage('validar typescript'){
            steps{
                sh 'npm typecheck'
            }
        }
        stage('ejecutar pruebas bdd'){
            sh 'npm run test:smoke'
        }
    }
    post {
        always {
            publishHTML([
                reportName: 'Playwright Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])
         }
    }
}