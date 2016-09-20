# ng-proj
Set the below configs
--  git config --global user.name "YOUR NAME"
Set the below git configs
-- git config --global user.email "YOUR EMAIL ADDRESS"

Clone the repo 
    >> https://github.com/swaroopjayanthi9/ng-proj.git


Follow the links for bootstrapping Angular Gulp
1) http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.V9lvrPl96M8
2) http://mherman.org/blog/2014/08/15/kickstarting-angular-with-gulp-and-browserify-part-2/#.V9lv8vl96M8

Steps to configure:

1) Install Node:
    apt-get install nodejs

2) Install NPM
     apt-get install npm

3) Install bower and gulp for globall installing Gulp & Bower
      npm install -g gulp bower

For Project specific configurations:

1) Create project direction 
     mkdir project-name
     cd project-name

2) Initialize Node Package manager in the project directory, creates package.json
     project-name$ npm init
 
3) Initialize bower package and accept default values, creates by default bower.json
     project-name$ bower init

4) Add a file .bowerrc in the project level and add entry for installing all the packages.
        cat   .bowerrc  //Add the below content.
              {
                     "directory":"app/bower_components"

              }

5) to install any packages at the gulp level that will be added to package.json with --save option
    eg:
      project-name$npm install gulp bower gulp-connect gulp-clean --save

6) to install any packages at the bower client level that will be added to bower.json with --save option
     eg:
       project-name$ bower install jquery angular angular-animate --save


