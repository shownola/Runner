# README
* Runner will be a command line tool that will monitor any changes made in you code and will automatically restart your server. This app will be similar to 'nodemon'.
* To run program either call the program name(runner) or node index.js
* From terminal call runner -h for help

USAGE:
* runner [filename]
ARGUMENTS:
* [filename]  Name of a file to execute    optional

REQUIRMENTS/ISSUES:
* Need to detect when a file changes - 'chokidar' package should do this
* Provide some help to users of the CLI tool - use 'caporal' to build the CLI tool
* Figure out how to execute some JS code form within a JS program - use the standard library module 'child_process' to execute a program
