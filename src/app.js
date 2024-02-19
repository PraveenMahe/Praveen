// const express = require('express');
// const bodyParser = require('body-parser');
// const getAllTodosRouter = require('./routers/getAllTodosRoute');
// const getTodoByIdRouter = require('./routers/getTodoByIdRoute');
// const createTodoRouter = require('./routers/createTodoRoute');
// const updateTodoRouter = require('./routers/updateTodoRoute');
// const patchTodoRouter = require('./routers/patchTodoRoute');
// const deleteTodoRouter = require('./routers/deleteTodoRoute');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.use(getAllTodosRouter);
// app.use(getTodoByIdRouter);
// app.use(createTodoRouter);
// app.use(updateTodoRouter);
// app.use(patchTodoRouter);
// app.use(deleteTodoRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(routers);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
