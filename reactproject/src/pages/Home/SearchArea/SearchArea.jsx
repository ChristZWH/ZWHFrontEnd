import { useEffect, useRef, useState } from 'react'
import './searchArea.css'
const searchInfo = [
  { id: 1, value: "铅笔" },
  { id: 2, value: "蓝牙鼠标" },
  { id: 3, value: "海飞丝洗发水" },
  { id: 4, value: "电冰箱" },
  { id: 5, value: "海尔空调" },
]
function SearchArea() {
  const hotWord = [
    { id: 1, content: "iPhone 15" },
    { id: 2, content: "空调" },
    { id: 3, content: "显卡" },
    { id: 4, content: "笔记本" },
    { id: 5, content: "洗衣机" },
    { id: 6, content: "电视" },
    { id: 7, content: "冰箱" },
    { id: 8, content: "显卡" },
    { id: 9, content: "笔记本" },
    { id: 10, content: "洗衣机" },
    { id: 11, content: "电视" },
    { id: 12, content: "冰箱" },
  ]
  const [index, setIndex] = useState(0)
  let intervalId = useRef(0)
  const [inputInfo, setInput] = useState("铅笔")
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setIndex((index + 1) >= searchInfo.length ? 0 : (index + 1))
    }, 1000);
    setInput(searchInfo[index].value)
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [index])

  return (
    // 头部搜索框部分
    <div className="head">
      <div className="headcontent relative">
        {/* 京东logo */}
        <div>
          <h1 className="absolute">
            <a href="/">
              <img src='./img/jingdongLOGO.png' alt="" />
            </a>
          </h1>
        </div>
        {/* 搜索框 */}
        <div className="search relative">
          <div className="searchInfomation relative">
            <input type="text" className="search-input" placeholder={inputInfo} />
            <button className="searchButton absolute">搜索</button>
          </div>
        </div>
        {/* 热搜词 */}
        <div className="hotword relative">
          {hotWord.map((item) => <a key={item.id} href="/">{item.content}</a>)}
        </div>
      </div>
    </div>
  )
}
export default SearchArea