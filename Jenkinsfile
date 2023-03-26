pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    IMAGE_NAME = 'olahurshy/Project-5'
    IMAGE_TAG = 'latest'
    APP_NAME = 'cyt300-group5-project'
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $HEROKU_API_KEY | docker login --username=_ --password-stdin registry.heroku.com'
      }
    }
    stage('Push to Heroku registry') {
      steps {
        sh '''
          docker tag $IMAGE_NAME:$IMAGE_TAG registry.heroku.com/$APP_NAME/web
          docker push registry.heroku.com/$APP_NAME/web
        '''
      }
    }
    stage('Release the image') {
      steps {
        sh '''
          heroku container:release web --app=$APP_NAME
        '''
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}







pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                git branch: 'main', url: 'https://github.com/group5five/CYT300.git'
            }
        }
        stage('Test') {
            steps {
                dependencyCheck additionalArguments: '', odcInstallation: 'CYT300'
            }
        }
        stage('Deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'group5@cyt300-group5-webserver', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/var/www/cyt300-group5', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*.php')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}

