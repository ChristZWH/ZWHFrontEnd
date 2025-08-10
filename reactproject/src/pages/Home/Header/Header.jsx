import './header.css'
function Header() {
  const aList = [
    { id: 1, version: "中国大陆版" },
    { id: 2, version: "中国港澳版" },
    { id: 3, version: "中国台湾版" },
    { id: 4, version: "京东全球版" },
  ]
  const listLeft = [
    { id: 1, item: "购物车" },
    { id: 2, item: "我的订单" },
    { id: 3, item: "企业采购" },
    { id: 4, item: "商家服务" },
    { id: 5, item: "网站导航" },
    { id: 6, item: "手机京东" },
    { id: 7, item: "网站无障碍" },
  ]
  return (
    // 最顶部OK
    <div className="browser">
      <div className="top">
        <ul className="topliLEFT">
          <li className="liONE relative"><a href="/">中国大陆版-陕西西安</a>
            <ul className="dropdown">
              {aList.map(
                item => <li key={item.id}><a href="/">{item.version}</a></li>
              )}
            </ul>
          </li>
          <li className="liONE space"></li>
          <li className="liONE"><a href="/">登录 注册</a></li>
          <li className="liONE space"></li>
          <li className="liONE"><a href="/">切换至至尊版</a></li>
        </ul>
        <ul className="topliRIGHT">
          {listLeft.map((item) =>
            <>
              <li key={item.id} className="liONE"><a href="/">{item.item}</a></li>
              {item.id !== listLeft.length ? <li className="space"></li> : ""}
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header