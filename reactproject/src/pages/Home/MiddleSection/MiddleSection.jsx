import { useEffect, useRef, useState } from 'react';
import './middleSection.css'

function MiddleSection() {
    // 二级菜单栏悬浮
    const [addTrue, setAddTrue] = useState(true)
    const handleMouseEnter = () => setAddTrue(true)
    const handleMouseLeave = () => setAddTrue(false)
    // 三级菜单栏显示区域 数据
    const [flag, setFlag] = useState(-1)
    const menuItems = [
        { id: 1, title: "家用电器", content: "这是拓展内容" },
        { id: 2, title: "手机 / 运营商 / 数码", content: "这是拓展内容2" },
        { id: 3, title: "电脑 / 办公 / 文具用品" },
        { id: 4, title: "家居 / 家具 / 家装 / 厨具" },
        { id: 5, title: "男装 / 女装 / 童装 / 内衣" },
        { id: 6, title: "美妆 / 个护清洁 / 宠物" },
        { id: 7, title: "女鞋 / 箱包 / 钟表 / 珠宝" },
        { id: 8, title: "男鞋 / 运动 / 户外" },
        { id: 9, title: "房产 / 汽车 / 汽车用品" },
        { id: 10, title: "母婴 / 玩具乐器" },
        { id: 11, title: "食品 / 酒类 / 生鲜 / 特产" },
        { id: 12, title: "艺术 / 礼品鲜花 / 农牧园艺" },
        { id: 13, title: "京东买药 / 计生情趣" },
        { id: 14, title: "图书 / 文娱 / 教育 / 电子书" },
        { id: 15, title: "机票 / 酒店 / 旅游 / 生活" },
        { id: 16, title: "支付 / 白条 / 保险 / 企业金融" },
        { id: 17, title: "安装 / 维修 / 清洗 / 二手" },
        { id: 18, title: "元器件 / 原材料 / 五金机电" },
    ];
    function listItems() {
        return (
            menuItems.map((item) => {
                return (
                    <li
                        key={item.id}
                        className="specificClass relative"
                        onMouseEnter={() => setFlag(item.id)}
                        onMouseLeave={() => setFlag(-1)}
                    >
                        {item.title}
                        {/* <div className="floatArea absolute">{item.content}</div> */}
                        {flag === item.id && (<div className="floatArea absolute"></div>)}
                    </li>)
            }
            )
        )
    }
    // 图片轮播
    const [currentIndex, setcurrentIndex] = useState(1)
    const imgInfomation = [
        { id: 1, url: "./img/轮播图1.jpg" },
        { id: 2, url: "./img/轮播图2.jpg" },
        { id: 3, url: "./img/轮播图3.jpg" },
        { id: 4, url: "./img/轮播图4.jpg" },
        { id: 5, url: "./img/轮播图5.jpg" }
    ]
    let intervalId = useRef(null)
    function handlePreClick() {
        setcurrentIndex((currentIndex - 1) > 0 ? (currentIndex - 1) : imgInfomation.length)
    }
    function handleNextClick() {
        setcurrentIndex((currentIndex + 1) > imgInfomation.length ? 1 : ((currentIndex + 1)))
    }
    function currentImg() {
        return (
            imgInfomation.map((item) => {
                return (
                    <li key={item.id} className={item.id === currentIndex && 'active'}></li>
                )
            }
            )
        )
    }
    useEffect(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        intervalId.current = setInterval(() => {
            setcurrentIndex((currentIndex + 1) > imgInfomation.length ? 1 : ((currentIndex + 1)))
        }, 1000);
        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, [imgInfomation.length, currentIndex]);
    function handleMiddle2Enter() {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
    }
    function handleMiddle2Leave() {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        intervalId.current = setInterval(() => {
            setcurrentIndex((currentIndex + 1) > imgInfomation.length ? 1 : ((currentIndex + 1)))
        }, 1000);
    }
    return (
        // 中间主题部分
        <div className="middle relative">
            <div className={`middle1${addTrue ? '' : ' show'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="specificClassArea">
                    <ul>{listItems()}</ul>
                </div>
            </div>
            {/* 轮播图部分  */}
            <div className="middle2" onMouseEnter={handleMiddle2Enter} onMouseLeave={handleMiddle2Leave}>
                <div className="wrapper">
                    <img src={`./img/轮播图${currentIndex}.jpg`} alt="" />
                </div>
                <div className="middle2footer relative">
                    <div>
                        <ul>{currentImg()}</ul>
                    </div>
                    <div className="toggle">
                        <button className="pre" onClick={handlePreClick}>&lt;</button>
                        <button className="next" onClick={handleNextClick}>&gt;</button>
                    </div>
                </div>
            </div>
            {/* 登陆部分 */}
            <div className="middle3">
                {/* 登陆部分设计 */}
                <div className="sinInImgDIV">
                    <a href="/" className="sinInImg">
                        <img src="./img/loginIMG.png" alt="" />
                    </a>
                    <p>Hi, 欢迎来到京东</p>
                    <a href="/" className="login-btn">登录</a>
                    <div className="user-links">
                        <a href="/">我的订单</a>
                        <a href="/">我的优惠券</a>
                        <a href="/">我的足迹</a>
                    </div>
                </div>
                {/* <div style="text-align: center;font-size: 30px; margin-top: 45px;">
            其他信息
        </div> */}
            </div>
        </div >
    )
}

export default MiddleSection