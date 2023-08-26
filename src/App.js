import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

// const dummyList = [
//   {
//     id:1,
//     author:"나유진",
//     content:"안뇽 1",
//     emotion:"5",
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"홍길동",
//     content:"안뇽 2",
//     emotion:"4",
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"아무개",
//     content:"안뇽 3",
//     emotion:"3",
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author:"룰루랄라",
//     content:"안뇽 4",
//     emotion:"2",
//     created_date: new Date().getTime()
//   },
// ]
function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/*<DiaryList diaryList={dummyList} />*/}
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
