## MERN STACK
=============

MERN : MongoDB, Express, ReactJS, NodeJS
1. download and install nodeJS here: https://phoenixnap.com/kb/install-node-js-npm-on-windows
2. download and install MongoDB here:  https://www.mongodb.com/try/download/community?tck=docs_server
3. download or clone the project here: [ https://github.com/happymalyo/article-mode ]
4. Project will be like:
   article-mode
     backend 
     node_modules
     public
     src 
     build
     commands.md  
     installation.md 
     package.json  
     package-lock.json  
     postcss.config.js    
     README.md
     tailwind.config.js
5. Open your terminal or cmd and Go to ./article-mode 
   Tape the following command line to install all React dependencies

   > npm install

6. Now, Open your terminal or cmd and Go to ./article-mode/backend 
   Tape the following command to install all NodeJS dependencies
   > npm install

7. We use API Rest
   To Test all endpoints
       - install POSTMAN or Install Thunder Client extension on VSCode

8. DATABASE Connection seems like: mongodb://127.0.0.1:27017/article-mode
   - You can also check out the DB Connection in ./article-mode/.env

9. To Run the app
   - Go to ./article-mode/backend to start NodeJS server
   > npm start
   - Go to ./article-mode to start React server. It will open your browser on http://localhost:3000
   > npm start 

10. Test the API:
   - to add a new Client

        POST: http://localhost:5000/clients/add ]
	Body: 
        {
		"nom": "Mario",
		"prenom": "Anaquine",
		"adresse": "Ambalafary",
		"telephone": "lacoste",
		"ville": "Farafangana"
	 }

    - to retrieve all clients
      GET: [ http://localhost:5000/clients ]
    - to retrieve all produits (the article)
      GET: [ http://localhost:5000/produits ]

    - to add a new Article,Open your browser and  go to: http://localhost:3000/admin
      Click on button : [ Nouvel Article ]
        
    
   

