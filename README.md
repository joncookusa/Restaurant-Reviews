# Restaurant Review Project

The restaurant review project takes the shell of a poorly designed and maintained website, which barely works on a desktop computer screen. The task 
is to take the website and refactor it to be responsive and work on all screen sizes, as well as add accessibility features so that the app will work
with a screen reader. The addition of a Service Worker facilitates some offline functionality.


### Installing

To install the Restaurant Review Project, you will need to ensure that git is installed on your computer. If you don't have git, follow the instructions at...
 
    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
    
To install the project, open a command line or terminal window and navigate to a folder where you want to install the application. Then clone the project by entering...

    git clone https://github.com/joncookusa/Restaurant-Reviews.git

To run the project locally, you will need to start a web client server, and have it listen on a local port. Python provides a HTTP server which will
work a treat. For most people, it's already installed on your computer. You can check the version of Python from a command prompt by typing...

    python -v

If you don't have Python installed, navigate to Python's website at ...

    https://www.python.org/
    
... and download and install the software.

If you have Python installed, use the terminal window to navigate to the root folder of the project. If you have Python 2.x, type...

    python -m SimpleHTTPServer 8000
    
If you have Python 3.x, type...

    python3 -m http.server 8000

Then visit the site in your browser at http://localhost:8000
 
### Dependencies
 
The project is built using HTML5, CSS and Javascript. There are dependencies on...

* Mapbox
* Google fonts
* Leaflet
* Normalize.css

###Acknowledgements

The project is based around the starter project supplied by Udacity at ...

    https://github.com/udacity/mws-restaurant-stage-1
    


