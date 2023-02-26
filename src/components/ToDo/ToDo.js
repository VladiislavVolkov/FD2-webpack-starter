import './Const';

const dataTasks = [];

class ToDo {
  constructor(data) {
    this.data = data;
  }

  // показывает все задачи - по умолчанию сортировка по приоритету
  showAllTasks() {
    if (this.data.length) {
      this.sortPriority();
    } else {
      console.log('No tasks.');
    }
  }

  // добавляет задачу
  addTask(title, description) {
    this.data.push({
      title,
      description,
      id: this.data.length + 1,
      isCompleted: false,
      priority: false,
      date: Date(),
    });
  }

  // удаляет задачу
  deleteTask(id) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  // выполнено
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

  // сортировка по приоритету (если тру - то выше)
  // sortPriority() {
  //   this.data = this.data.sort((x, y) => {
  //     const a = y;
  //     const b = x;
  //     if (a.priority < b.priority) {
  //       return -1;
  //     }
  //     if (a.priority > b.priority) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   console.log(this.data);
  // }

  sortPriority() {
    this.data.sort((x, y) => x.priority - y.priority);
    console.log(this.data);
  }

  //фильтрация по title - сделал вывод в новом массиве( Правильно ли? )
  filtredTitle(value) {
    const newData = this.data.filter((item) => {
      const search = value.toLowerCase();
      const titleTask = item.title.toLowerCase();
      return titleTask.includes(search);
    });
    console.log(newData);
  }

  // редактирование задачи
  editTask(task) {
    const { id, title, description, isCompleted } = task;
    this.data = this.data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title,
          description,
          isCompleted,
          date: Date(),
        };
      } else {
        return item;
      }
    });
  }

  // добавление приоритета
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
}

// создал дочерний класс (для примера, но снизу в методе всеравно проблема...
class ToDoPROF extends ToDo {
  constructor(data) {
    super(data);
    this.data = data;
  }

  // добавление задачи - всеравно у меня вывод dateee - в другом объекте
  addTask(title, description) {
    this.task.push({ ...super.addTask(title, description), dateee: true });
  }
}

const app = new ToDo(dataTasks);
app.showAllTasks();

app.addTask('Task-1', 'Descr-Task-1');
app.addTask('Task New 2', 'Descr Task New 2');
app.addTask('New 3', ' New 3');
app.addTask('Task 4', 'Descr 4');
app.showAllTasks();

app.addPriority(2);
app.showAllTasks();

app.addPriority(4);
app.editTask({ id: 2, title: 'this is new task 2', description: 'descr new', isCompleted: true });
app.showAllTasks();

app.filtredTitle('ew');
app.showAllTasks();
app.filtredTitle('Sk-1');

// const appProf = new ToDoPROF(dataTasks);

// appProf.addTask('qwerty', 'Descr-qwerty');
// appProf.showAllTasks();
