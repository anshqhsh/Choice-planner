import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef(); //맴버변수로 ref오브젝트를 만들고
  onSubmit = event => {
    event.preventDefault(); //브라우저의 기본기능을 취소 (리프레쉬를 막음 );
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = ''; //input데이터 초기화
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
