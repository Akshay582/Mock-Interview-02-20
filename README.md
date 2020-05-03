# Mock-Interview-02-20

The mock interview contains the expected web app that currently can do the crud operations on necessary database set-up in mongo dB using **mongoose**.

### Schemas

1. batch
2. company
3. interview
4. result 
5. student

The interview and student schemas refer to student and company to save space and populate the web page when needed.

### Routers

The routers point to the crud functionality implemented in each controller.

### EJS is used as the templating engine.

<hr>

### Bootstrap is used to create a very basic view of the homepage and the placement page for demonstration of the schemas.

<hr>

## To start the server:

1. Do `npm install` in the terminal. This will install the node_modules package as appropriate according to the `package.json` specifications.
2. Type `npm start` to run the server.
3. The project is not fully setup but you can do the following things:
   - Using postman, you can do crud into the database. This will start showing the data into the views which don't have a route for now so can be manually seen as specified in the next point.
   - In the browser type `https://localhost:8000/home`
   - In the browser type `https://localhost:8000/placement`

#### Thank You













