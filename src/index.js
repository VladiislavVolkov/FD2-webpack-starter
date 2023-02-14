class ToDo {
  construction() {
    this._tasks = [];
  }

  createTask(title, description) {
    this._tasks.push({
      title,
      description,
      id: this._tasks.length + 1,
      isCompleted: false,
      date: new Date(),
    });
  }

  getAllTasks() {
    if (this._tasks.length) {
      return this._tasks;
    } else {
      console.log('Not tasks!');
    }
  }

  deleteTask(id) {
    this._tasks = this._tasks.filter((item) => item.id == id);
  }

  completedTasks(id) {
    this.task = this._tasks.map((item) => {
      if (item.id === id) {
        return {
          isCompleted: true,
          ...item,
        };
      }
      return item;
    });
  }

  getTask(id) {
    this._tasks = this._tasks.find((item) => {
      if(item.id === id) {

      };
    });
  }

}
