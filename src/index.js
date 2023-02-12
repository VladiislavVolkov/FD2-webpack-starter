class ToDoList {
  constructor() {
    this.tasks = [];
  }

  add(title, descr) {
    this.tasks.push({
      title,
      descr,
      id: this.tasks.length + 1,
      isCompleted: false,
    });
  }

  delete(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  edit(task) {
    const { id, descr, title, isCompleted } = task;
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title,
          descr,
          isCompleted,
        };
      }
      return item;
    });
  }

  complete(id) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: true,
        };
      }
      return item;
    });
  }

  allTasks() {
    if (this.tasks.length) {
      this.tasks.forEach((item) => {
        console.log(item);
      });
    } else {
      console.log(`not tasks`);
    }
  }

}

const app = new ToDoList();

app.add('Учить JS', 'descr')
app.complete(1)

app.edit({
  id: 1,
  title: 'Учить дважды JS',
  isCompleted: true,
})

app.allTasks();
