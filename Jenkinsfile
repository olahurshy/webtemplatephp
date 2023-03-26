pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    IMAGE_NAME = 'olahurshy/project'
    HEROKU_AUTH_TOKEN=credentials('heroku-auth-token')
    IMAGE_TAG = 'latest'
    APP_NAME = 'cyt300-group5-project'
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $IMAGE_TAG .'
      }
    }
    // stage('Login') {
    //   steps {
    //     bat 'echo $HEROKU_API_KEY | docker login --username=_ --password=$HEROKU_AUTH_TOKEN registry.heroku.com'
    //   }
    // }
    // stage('Push to Heroku registry') {
    //   steps {
    //     bat '''
    //       docker tag $IMAGE_NAME:$IMAGE_TAG registry.heroku.com/$APP_NAME/web
    //       docker push registry.heroku.com/$APP_NAME/web
    //     '''
    //   }
    // }
    // stage('Release the image') {
    //   steps {
    //     bat '''
    //       heroku container:release web --app=$APP_NAME
    //     '''
    //   }
    // }
  }
//   post {
//     always {
//       bat 'docker logout'
//     }
//   }
}