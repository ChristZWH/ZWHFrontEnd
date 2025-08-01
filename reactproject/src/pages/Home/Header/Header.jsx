import './header.css'
function Header() {
  return (
    // 最顶部OK
    <div className="browser">
      <div className="top">
        <ul className="topliLEFT">
          <li className="liONE relative"><a href="/">中国大陆版-陕西西安</a>
            <ul className="dropdown">
              <li><a href="/">中国大陆版</a></li>
              <li><a href="/">中国港澳版</a></li>
              <li><a href="/">中国台湾版</a></li>
              <li><a href="/">京东全球版</a></li>
            </ul>
          </li>
          <li className="liONE space"></li>
          <li className="liONE"><a href="/">登录 注册</a></li>
          <li className="liONE space"></li>
          <li className="liONE"><a href="/">切换至至尊版</a></li>
        </ul>
        <ul className="topliRIGHT">
          <li className="liONE"><a href="/">购物车</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">我的订单</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">企业采购</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">商家服务</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">网站导航</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">手机京东</a></li>
          <li className="space"></li>
          <li className="liONE"><a href="/">网站无障碍</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header