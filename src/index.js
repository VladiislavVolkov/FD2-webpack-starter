// import { Header } from './components/Header/Header';
// import './main.scss';

// const root = document.querySelector('#root');

// root.insertAdjacentHTML('beforeend', Header());

// console.log('Hello IT-academy student 🚀');

// class Button {
//   constructor(text, className) {
//     this.state = {
//       isActive: false,
//       isFocused: false,
//       text,
//       className,
//     };
//   }

//   onClick() {
//     this.state.isActive = true;
//   }

//   render() {
//     return `
//         <button
//             class='
//                 ${this.state.className}
//                 ${this.state.isActive ? 'active' : ''}
//             '>
//             ${this.state.text}
//         </button>`;
//   }
// }

// const btn1 = new Button('click');

class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(title) {
    this.tasks.push({
      title,
      id: this.tasks.length + 1,
      isCompleted: false,
    });
  }

  delete(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
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

  edit(task) {
    const { id, title, isCompleted } = task;
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title,
          isCompleted,
        };
      }
      return item;
    });
  }

  showAllTasks() {
    if (this.tasks.length) {
      this.tasks.forEach((item) => {
        console.log(item);
      });
    } else {
      console.log('нет задач');
    }
  }
}

const app = new TodoList();

app.showAllTasks();
