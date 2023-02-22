import './Const';
const dataTasks = [];

class ToDo {
  constructor(data) {
    this.data = data;
  }

  showAllTasks() {
    if (this.data.length) {
      this.data.forEach((item) => {
        console.log(item);
      });
    } else {
      console.log('Attention! No tasks.');
    }
  }

  addTask(title, description) {
    this.data.push({
      title,
      description,
      id: this.data.length + 1,
      isCompleted: false,
    });
  }

  deleteTask(id) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  isCompleted(id) {
    this.data = this.data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: true,
        };
      } else {
        return item;
      }
    });
  }

  editTask(task) {
    const { id, title, description, isCompleted } = task;
    this.data = this.data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title,
          description,
          isCompleted,
        };
      } else {
        return item;
      }
    });
  }
}

class ToDoPROF extends ToDo {
  constructor(data) {
    super(data);
    this.data = data;
  }

  addPriority(id) {
    this.data = this.data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          priority: true,
        };
      } else {
        return item;
      }
    });
  }

  addTask(title, description) {
    super.addTask(title, description);
    this.data.push(new Date());
  }
}

const app = new ToDo(dataTasks);
const appProf = new ToDoPROF(dataTasks);

app.addTask('Task1', 'descr - task1');
app.showAllTasks();

appProf.addPriority(1);
appProf.showAllTasks();

appProf.addTask('New TASK PROF', 'DESCR_new-task-prof');
appProf.addTask('New TASK PROF 2', 'DESCR_new-task-prof 2');

appProf.addPriority(2);
appProf.showAllTasks();

appProf.showAllTasks();
app.showAllTasks();
