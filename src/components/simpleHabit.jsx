import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = props => {
  const [count, setCount] = useState(0); //count와 카운트를 업데이트할 수 있는setCount
  // const spanRef = React.createRef(); 함수형 컴포넌트에서는 계속 호출을 해주게됨
  const spanRef = useRef(); //래퍼런스를 한번만 만들어 메모리에 저장하여 재사용함
  //콜백함수도 메모리에 저장후 사용 가능함
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated : ${count}`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
