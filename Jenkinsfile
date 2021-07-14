pipeline {
    agent any

    environment {
        dockerImage = ''
    }

    stages {
        stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/apetti1920/jenkins_test.git']]])
            }
        }

//         stage('Need to build?') {
//             steps {
//                 script {
//                     env.changesPending = Jenkins.instance.getItemByFullName('expensive').poll(hudson.model.TaskListener.NULL).hasChanges()
//                     echo "env.changesPending=" +env.changesPending
//                 }
//             }
//         }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage  = docker.build("test-image")
                }
            }
        }
    }
}
