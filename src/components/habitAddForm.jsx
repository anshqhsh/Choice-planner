import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); //맴버변수로 ref오브젝트를 만들고 이값은 input과 연결이 됨
  const onSubmit = event => {
    event.preventDefault(); //브라우저의 기본기능을 취소 (리프레쉬를 막음 );
    const name = inputRef.current.value; //habit의 name을 받아와서
    name && props.onAdd(name); //이름이 있으면 props에 있는 onAdd에 전달 해준다
    inputRef.current.value = ''; //input데이터 초기화
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
