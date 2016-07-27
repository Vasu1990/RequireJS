# RequireJS

This is a POC to illustrate the use of requireJS
App is generated using Yeoman Webapp generator .
It uses jQUery and Underscore (for templating)

If you navigat from the index page to about page you will se jQuery getting included asynchronously,
furthure clicking on the button on about us page a template and it's assocaited libraries will load asynchronously.

To run the application type

bower install

npm install

gulp serve

the application is configured to run only in dev env not in prod 
as the default gulp tasks by the webapp generator was not acording to require.
