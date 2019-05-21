# Mail Box React

Inbox SPA applicaion with ReactJS using:

  - Redux
  - Redux-saga
  - moment JS
  - Ant Design Components 
  - ..

# Features!

  - Show list of threads (inbox)
  - Show list of messages for each thread
  - Send a reply message on a thread
  - Send a new thread


Virtual server used for API:
  - GET https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/ : list of threads
  - POST https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/ : send a thread
  - GET https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/{uuid} : get details of one thread
  - POST https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/{uuid} send a message on a thread



### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.
Clone the git repository : 

```sh
$ git clone https://github.com/adelDjidji/Inbox.git
$ cd Inbox
```

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

or

```sh
$ yarn
$ yarn start
```

###  
if it doesn't open on your navigator
navigate to :

https://localhost:3000/

Happy coding !
