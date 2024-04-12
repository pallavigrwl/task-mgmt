TaskManagementApplication : Details of requirements are  https://github.com/PestoTech/takehome/blob/main/backend.md
This is a Spring boot REST API project. 
Model : tasks table with columns for id (primary key), title, description, and status. 
Setup:
Import the project in IDE.
Run build.gradle
Run Application by running main program in TaskManagementApplication.java
Default h2 db has been used, one can configure db in application.properties.

Endpoints:
GET /tasks: Get all tasks.
GET /tasks/:id: Get a specific task by ID.
POST /tasks: Create a new task.
PUT /tasks/:id: Update a task.
DELETE /tasks/:id: Delete a task.

Front end:
React js based task management project.
Run npm start to start the project
npm server will start.
Open browser , run localhost:3000
![image](https://github.com/pallavigrwl/task-mgmt/assets/1866037/e9cdbcb0-9614-4793-b166-281698719af2)

Fill the form and press add task to add new task in db.
The list of task will autorefresh on every action.
Change the status in list drop down will make an update call and will update the task in db.
delete button will delete list of task in db.


