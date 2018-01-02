'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const tasksContainer = require('./tasks.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Generate unique id based on tasks
 * @param {Object[]} tasks
 * @return {number} - new unique id
 */
const getUniqId = (tasks) => {
  return Math.max(...tasks.map(({ id }) => id), 0) + 1;
};

/**
 * GET /tasks
 * Return first 10 elements from query startAt position
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) => {
  const startIndex = +req.query.startAt;
  const tasks = tasksContainer.tasks.slice(startIndex, startIndex + 10);
  return res.status(200).json({
    tasks,
  });
});

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/api/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.find(item => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    }
    return res.status(404).json({
      message: 'Not found.',
    });
  }
  return res.status(400).json({
    message: 'Bad request.',
  });
});

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/api/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find(item => item.id === id);
    if (task !== null) {
      task.title = req.body.title;
      task.description = req.body.description;
      return res.status(204).send();
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return new task and status code 201.
 */
app.post('/api/task', (req, res) => {
  const { title, description } = req.body;
  const task = {
    id: getUniqId(tasksContainer.tasks),
    title,
    description,
  };

  tasksContainer.tasks.unshift(task);
  return res.status(201).json({
    task,
  });
});

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);

    if (taskIndex > -1) {
      tasksContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully',
      });
    }
    return res.status(404).json({
      message: 'Not found',
    });
  }
  return res.status(400).json({
    message: 'Bad request',
  });
});

app.use(express.static('dist'));

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
