import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits]; // ...기존의 배열을 복사해온다.
    const index = habits.indexOf(habit); //index값을 가져옴
    console.log('habits + index : ' + habits + ';;' + index);
    habits[index].count++;
    this.setState({ habits }); // == habit(key) : habit(value(로컬변수))키와 벨류가 같으면 생략이 가능함
    // habit.count++;
    // this.setState(this.state);
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = habit => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
