pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.63.0-jammy'}}
    stages {
        stage('e2e-test'){
            steps {
                sh 'npm typecheck'
                sh 'npm run test:headed'
                sh 'npm run test:smoke'
                sh 'npm run report'
            }
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