/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '송도 맛집', '남자 신발 추천', '인천 데이트코스 추천']);
  let posts = "강남 고기맛집"
  let [따봉, 따봉변경] = useState(0);

  function 제목변경() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{글제목[0]}
          <spun onClick={() => { 따봉변경(따봉 + 1) }}>👍
          </spun>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <button onClick={ 제목변경 }>변경</button>
        <hr />
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>3월 10일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>3월 19일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{글제목[3]}</h3>
        <p>3월 25일 발행</p>
        <hr />
      </div>

      <Modal/>
    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
