import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  //useState는 안의 내용이 바뀔때마다 재랜더링이 자동으로 된다(웹앱처럼 쓰기위해 필수)
  let [글제목, 글제목변경] = useState(['여자 코트 추천','남자 코트 추천', '강아지 코트 추천']);
  //일반변수는 자동랜더링 안됨주의
  let posts = " 오늘의 todo list";

  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {  //state를 변경하는것은 원래의 array전체를 put으로 덮어버리는것을 의미, 그래서 원래내용과 형식을 가져와서 수정할부분만 작업
    //글제목수정(['여자 코트 추천','남자댕댕이 코트 추천', '강아지 코트 추천']);

    //개발자스럽게 변경
    let newArray = [...글제목]; //값공유가아닌 새로운 복사본으로 딥카피한다 /복사한다
    newArray[0] = newArray[1]
    newArray[1] = "여자 코트 추천"
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>정렬</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>3월 3일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 3일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>3월 3일 발행</p>
        <hr/>
      </div>
        <Modal/>
    </div>
  );
}

function Modal() {
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default App;
