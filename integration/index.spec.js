import Nightmare from 'nightmare';

const path = 'http://localhost:9001/';

const nightmare = Nightmare({
  waitTimeout: 5000,
  gotoTimeout: 1000,
  loadTimeout: 1000,
  typeInterval: 20,
  show: true,
});

describe('#integration tests', () => {
  it('should add new task and show it at first position', (done) => {
    const task = {
      title: 'integration test title',
      description: 'integration test description',
    };
    let tasks = 0;

    nightmare
      .goto(path)
      .wait('.header')
      .wait(() => {
        return document.getElementsByClassName('task').length || document.getElementsByClassName('board-empty').length;
      })
      .evaluate(() => {
        tasks = document.getElementsByClassName('task').length;
      })
      .click('.add-task')
      .wait('.header_dropdown')
      .type('.header_dropdown .form input[type=text]', task.title)
      .type('.header_dropdown .form textarea', task.description)
      .click('.header_dropdown .form [type=submit]')
      .wait(() => {
        return document.getElementsByClassName('task').length === tasks + 1;
      })
      .evaluate(() => ({
        title: document.querySelector('.task .task-view_title').innerText,
        description: document.querySelector('.task .task-view_description').innerText,
      }))
      .end()
      .then((value) => {
        expect(value).toEqual(task);
        done();
      });
  }, 30000);
});
