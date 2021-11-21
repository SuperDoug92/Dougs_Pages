#!/bin/bash
#to see resolved yaml:
#sls print
#
#to run backend offline:
#serverless offline --ignoreJWTSignature
#
#to build frontend:
#npm run build
#
#to deploy frontend:
#sls client deploy

slsh(){
    if [ $1 == 'new' ]
        then
        if [ $2 == 'function' ]
        then
            parent=$(cd ../ && pwd) 
            parent=${parent##*/}
            functionPath=""
            testPath=""
            curFolder=${PWD##*/} 
            if [ $parent == "services" ]
            then 
                functionPath="src/functions"
                testPath="src/tests/"
            
            elif [ $curFolder == "services" ]
            then
                echo "This command must be used in a service directory"
                # PS3='Select the service you would like to add this function to:'
                # select serviceName in $(find -maxdepth 1 -mindepth 1 -type d | sed 's%^./%%')   
                # do 
                #     functionPath="$serviceName/src/functions"
                #     testPath="$serviceName/src/tests/"
                #     break
                # done
            fi
            if [ $functionPath != "" ]
            then
                # cd $serviceName && serverless plugin install --name serverless-mocha
                # cd ..
                sls create function --function $3 --handler "$functionPath/$3.$3" --path $testPath
                echo "Created $3 function in $functionPath"
                echo "Created $3 function test in $testPath"
            else
                echo "This command must be used in a service directory or the services directory"
            fi        
        elif [ $2 == 'service' ]
        then 
            servicePath=""
            curFolder=${PWD##*/} 
            if [ $curFolder == "backend" ]
            then
                servicePath="services/$3"
                serviceTemplatePath="servicetemplate"
            elif [ $curFolder == "services" ]
            then
                servicePath=$3
                serviceTemplatePath="../servicetemplate"
            fi
            if [ "$servicePath" != "" ]
            then
                sls create --template-path $serviceTemplatePath --path $servicePath
                rm -r "$servicePath/templates/"
                npm install
                echo "Created $3 service in $servicePath" 
            else
                echo "This command must be used in the backend directory or services directory"
            fi
        fi
    elif [ $1 == "test" ]
        then npx mocha src/tests
    fi
}