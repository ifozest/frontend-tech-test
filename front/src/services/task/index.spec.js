import { request } from 'utils/request';
import { getTasks, requestAddTask, requestDeleteTask, requestUpdateTask } from './';

jest.mock('utils/request');

request.mockImplementation(() => ({}));

describe('#services/task', () => {
  describe('#getTasks', () => {
    it('should call request with arguments', () => {
      getTasks(10);
      expect(request).toBeCalledWith('/api/tasks?startAt=10');
    });
  });

  describe('#requestAddTask', () => {
    it('should call request with arguments', () => {
      const task = {
        title: 'title',
        description: 'description',
      };
      requestAddTask(task);
      expect(request).toBeCalledWith('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    });
  });

  describe('#requestUpdateTask', () => {
    it('should call request with arguments', () => {
      const task = {
        id: 10,
        title: 'title',
        description: 'description',
      };
      requestUpdateTask(task);
      expect(request).toBeCalledWith('/api/task/10', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    });
  });

  describe('#requestDeleteTask', () => {
    it('should call request with arguments', () => {
      const id = 10;
      requestDeleteTask(id);
      expect(request).toBeCalledWith('/api/task/10', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  });
});
