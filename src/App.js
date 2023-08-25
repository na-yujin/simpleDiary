import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id:1,
    author:"나유진",
    content:"안뇽 1",
    emotion:"5",
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:"홍길동",
    content:"안뇽 2",
    emotion:"4",
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:"아무개",
    content:"안뇽 3",
    emotion:"3",
    created_date: new Date().getTime()
  },
  {
    id:4,
    author:"룰루랄라",
    content:"안뇽 4",
    emotion:"2",
    created_date: new Date().getTime()
  },
]
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
