pipeline{
    agent any 
   
tools {nodejs 'node'}
        stages{
            stage('Hello'){
                steps{
                    echo 'hello world'
                }
            }
            stage('GIT'){
                steps{
                    echo'Getting project from Git';
                    git branch:'yasmine',
                    url:'https://gitlab.intra.formi.fr/YasmineManitaFormi/devops-test.git'
            }
                
            }
    //         stage('Example') {
    //   steps {
    //     sh 'npm config ls'
    //   }
    //         }
    //         stage('Test ionic') {
    //   steps {
    //     sh 'npm install ionic'
    //     //sh "npm install  ionic/cli@latest"
       
    //   }
    //         }
    //         stage ('Build'){
    //             steps{
    //                 echo"Building states"
    //                 sh 'node -v'
    //                 sh 'npm install'
    //             }
    //         }
    // stage('Test'){
    //     steps{
    //         echo 'testing stage'
    //         sh 'npm test'
    //     }
    // }

            
        }
        
    
}
















