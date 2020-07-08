## Prerequisites

-This app is entirely run on the client side. You will need an IDE e.g. VS Code

## Technical note
the api is passed through a heroku site I hosted to tackle the CORS error. Heroku may have slow start up time, 
but once it is up and running everything will function as intended.

## Installation


* Run `npm install`
* Run `npm run start`
* Navigate to `localhost:3000`


## USAGE
A table displaying the S&P 500 Returns will be displayed on the dom in ascending order. 
A dynamic column with the cumulative values is included as the third row. Upon 
manipulation of the double sided slider located above the table it will change the effective data range
and the information included.

## Technologies 

React, Redux, Sagas, rc-slider, s&p api
