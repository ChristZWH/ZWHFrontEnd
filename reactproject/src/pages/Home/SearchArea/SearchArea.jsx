import { useEffect, useMemo, useRef, useState } from 'react'
import './searchArea.css'
function SearchArea() {
  const [inputInfo, setInput] = useState("")
  const searchInfo = useMemo(() => [
    { value: "铅笔" },
    { value: "蓝牙鼠标" },
    { value: "海飞丝洗发水" },
    { value: "电冰箱" },
    { value: "海尔空调" },
  ], [])
  // 获取输入信息
  const searchInputRef = useRef(null)
  const handleOnChange = (inputContent) => {
    // 目前不知道如何处理用户输入信息，暂时打印一下用户信息
    console.log(inputInfo)
    setInput(inputContent)
  }

  useEffect(() => {
    let intervalId = null
    const temp = searchInputRef.current
    if (temp) {
      let j = 0
      intervalId = setInterval(function () {
        if (temp) {
          temp.value = searchInfo[j].value
          j = (++j) % searchInfo.length
        }
      }, 2000)
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [searchInfo]) // 现在依赖是稳定的

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
            <input type="text" className="search-input" value="铅笔" placeholder="请输入搜索内容" ref={searchInputRef} onChange={handleOnChange} />
            <button className="searchButton absolute">搜索</button>
          </div>
        </div>
        {/* 热搜词 */}
        <div className="hotword relative">
          <a href="/">iPhone 15</a>
          <a href="/">空调</a>
          <a href="/">显卡</a>
          <a href="/">笔记本</a>
          <a href="/">洗衣机</a>
          <a href="/">电视</a>
          <a href="/">冰箱</a>
          <a href="/">显卡</a>
          <a href="/">笔记本</a>
          <a href="/">洗衣机</a>
          <a href="/">电视</a>
          <a href="/">冰箱</a>
        </div>
      </div>
    </div>
  )
}
export default SearchArea