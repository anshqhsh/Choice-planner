import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> //habit이라는 props 데이터에 habit값을 전달함 오브젝트를 전달
        ))}
      </ul>
    );
  }
}

export default Habits;
