pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 echo 'Building...'

                 checkmarxASTScanner additionalOptions: '--project-tags jenkins --scan-types sast,sca,kics --file-source https://github.com/group5five/ProjectCYT300.git'
             }
             post {
                 always {
                     jiraSendBuildInfo site: 'example.atlassian.net'
                 }
             }
         }
         stage('Deploy - Staging') {
             when {
                 branch 'main'
             }
             steps {
                 echo 'Deploying to Staging from main...'
             }
             post {
                 always {
                     jiraSendDeploymentInfo environmentId: 'us-stg-1', environmentName: 'us-stg-1', environmentType: 'staging'
                 }
             }
         }
         stage('Deploy - Production') {
            when {
                branch 'mains'
            }
            steps {
                echo 'Deploying to Production from main...'
            }
            post {
                always {
                    jiraSendDeploymentInfo environmentId: 'us-prod-1', environmentName: 'us-prod-1', environmentType: 'production'
                }
            }
         }
     }
 }
