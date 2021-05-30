import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  //input에 입력된 값을 받아와서 검색
  const handleSearch = () => {
    const value = inputRef.current.value; //inputref에 들어간 데이터
    onSearch(value);
    //검색하는 것을 props로 받아 와야함
  };
  //input된 값을 넘김
  const onClick = () => {
    handleSearch();
    console.log('onClick');
  };
  //키입력 이벤트
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search...?"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
