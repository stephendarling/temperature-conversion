# Temperature Conversion Grading Tool
[![Build Status](https://travis-ci.org/stephendarling/temperature-conversion.svg?branch=master)](https://travis-ci.org/stephendarling/temperature-conversion)
This projects allows a user (e.g. a teacher) to check if a heat/temperature conversion is correct (e.g. from a student exam). Conversion between any of the below units are supported:
- Celsius
- Kelvin
- Fahrenheit
- Rankine

The current build is deployed [here](http://temperature-conversion.s3-website-us-east-1.amazonaws.com/).

### Dependencies
This project was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app) which requires npm version 5.2+. Please see the [official documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for more information. 

### Getting Started
Use the below commands to move to your working directory, clone the project and install project dependencies:
```sh
$ cd <working directory>
$ git clone https://github.com/stephendarling/temperature-conversion.git <project name>
$ cd <project name>
$ npm install
```

### Run
Use the below command to start the application:
```sh
$ npm start
```
A browser window will open by default to localhost:3000. While running the application any saved changes to the project code will live-reload without the need to restart the running server. 

### Test
The following command will run all testing using [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html):
```sh
$ npm test 
```
The test files are denoted in the project with <filename>.test.js. 

### Build
Create React App has a built-in build script:
```sh
$ npm run build
```
This will create a production build of the application and output all files/folders to the ./build directory. 

### Deploy
Because the application is pure client-side it can be deployed to any platform configured for static website hosting. Copy the contents of the ./build directory to the root of any httpd server and the application should be live. 

Alternatively you can deploy to Amazon S3 if you have an active AWS account and like saving money/resources/time:
1. Login to the AWS Console and open the S3 Resources Landing Page
2. Create an S3 Bucket with public permissions. See [this article](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) for more detailed configuration information on required bucket security policies and configuration. 
3. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
4. Open ./package.json and update the following section with your bucket name
```sh
# ./package.json
...
    "deploy": "npm run build && aws s3 sync build/ s3://<YOUR BUCKET NAME HERE>"
  }
}
```
Once package.json has been updated you can run the following command to do an application build and directly upload the contents of the ./build directory to your new S3 bucket:
```sh
$ npm run deploy
```

### CI/CD
This project uses Travis-CI for continuous integration and continous development. The current build status can be seen at the top of this page. The basic pipeline workflow is outlined below:
1. Travis monitors this repository for new pull requests
2. Once a pull request has been accepted Travis runs all unit tests and builds the application using the PR branch
3. If all tests and build are successful the PR is marked as "Ready to merge"
4. Once merged, the master branch is re-tested and built
5. If the tests and build are successful the project is deployed to AWS S3

For more information about Travis-CI see their getting started guide [here](https://docs.travis-ci.com/user/getting-started/)

### Bonus Features!
  - If a user inputs are valid but the conversion is incorrect the response will now include the correct conversion value
