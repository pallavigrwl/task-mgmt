# TaskManagementApplication
## Backend
This is a Spring boot REST API project as per the specifications: https://github.com/PestoTech/takehome/blob/main/backend.md

### Model
Tasks table with columns for:
* id (primary key)
* title
* description
* status
 
### Setup:
1. Import the project in IDE.
2. Run build.gradle
3. Run Application by running main program in TaskManagementApplication.java
4. Default h2 db has been used, one can configure db in application.properties.

### Endpoints:
* GET /tasks: Get all tasks.
* GET /tasks/:id: Get a specific task by ID.
* POST /tasks: Create a new task.
* PUT /tasks/:id: Update a task.
* DELETE /tasks/:id: Delete a task.

## Front end
React js based task management project. 

### Setup
1. Run `npm install`
2. Run `npm start` to start the project npm server will get launched in dev mode.
3. Open browser and open http://localhost:3000

## How to use
![image](https://github.com/pallavigrwl/task-mgmt/assets/1866037/e9cdbcb0-9614-4793-b166-281698719af2)

* Fill the form and press add task to add new task in db.
* The list of task will autorefresh on every action.
* Change the status in list drop down will make an update call and will update the task in db.
* Delete button will delete list of task in db.
