import { useEffect, useMemo, useRef } from 'react';
import './middleSection.css'
function MiddleSection() {
    const middle1 = useRef(null)
    const specificClassAreaRef = useRef(null)
    const middle2Ref = useRef(null)
    const middle2imgchangeRef = useRef(null)
    const nextRef = useRef(null)
    const preRef = useRef(null)
    useEffect(() => {
        const temp = middle1.current
        if (temp) {
            const removeFunc = () => {
                temp.classList.remove("show")
                // temp.style.overflow = 'none'
            }
            const addFunc = () => {
                temp.classList.add("show")
                // temp.style.overflow = 'hidden'
            }
            temp.addEventListener("mouseenter", removeFunc)
            temp.addEventListener("mouseleave", addFunc)
            return () => {
                temp.removeEventListener("mouseenter", removeFunc)
                temp.removeEventListener("mouseleave", addFunc)
            }
        }
    }, [])

    useEffect(() => {
        // 使用事件委托高效处理
        const specificClassArea = specificClassAreaRef.current
        if (specificClassArea) {
            const handleMouseOver = function (e) {
                if (e.target.closest('.specificClass')) {
                    const li = e.target.closest('.specificClass');
                    const floatArea = li.querySelector('.floatArea');

                    // 隐藏所有浮层
                    document.querySelectorAll('.floatArea').forEach(el => {
                        el.style.display = 'none';
                    });

                    // 显示当前浮层
                    if (floatArea) {
                        floatArea.style.display = 'block';
                    }
                }
            }

            const handleMouseOut = function (e) {
                if (!e.relatedTarget || !e.relatedTarget.closest('.specificClass')) {
                    document.querySelectorAll('.floatArea').forEach(el => {
                        el.style.display = 'none';
                    });
                }
            }

            specificClassArea.addEventListener('mouseover', handleMouseOver)
            specificClassArea.addEventListener('mouseout', handleMouseOut)

            // 清理函数
            return () => {
                specificClassArea.removeEventListener('mouseover', handleMouseOver)
                specificClassArea.removeEventListener('mouseout', handleMouseOut)
            }
        }
    }, [])

    // 轮播图数据
    const infomation = useMemo(() => [
        { url: "./img/轮播图1.jpg" },
        { url: "./img/轮播图2.jpg" },
        { url: "./img/轮播图3.jpg" },
        { url: "./img/轮播图4.jpg" },
        { url: "./img/轮播图5.jpg" }
    ], [])
    useEffect(() => {
        // 实现中心图片轮播效果
        let currentIndex = 0
        let intervalId = null

        const updateDots = () => {
            const dots = document.querySelectorAll(".middle2footer ul li")
            dots.forEach(dot => dot.classList.remove("active"))
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add("active")
            }
        }

        const changeImg = (index) => {
            if (middle2imgchangeRef.current) {
                middle2imgchangeRef.current.src = infomation[index].url
                currentIndex = index
                updateDots()
            }
        }

        const next = nextRef.current
        const pre = preRef.current
        const middle2 = middle2Ref.current

        // 点击左侧箭头切换图片
        const handleNextClick = function () {
            currentIndex++
            currentIndex = currentIndex % infomation.length
            changeImg(currentIndex)
        }

        // 点击右侧箭头切换图片
        const handlePreClick = function () {
            currentIndex--
            currentIndex = currentIndex >= 0 ? currentIndex : infomation.length - 1
            changeImg(currentIndex)
        }

        if (next) {
            next.addEventListener("click", handleNextClick)
        }
        if (pre) {
            pre.addEventListener("click", handlePreClick)
        }

        // 自动轮播
        intervalId = setInterval(function () {
            if (next) {
                next.click()
            }
        }, 3000)

        // 鼠标悬停时暂停轮播
        const handleMouseEnter = function () {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }

        const handleMouseLeave = function () {
            if (intervalId) {
                clearInterval(intervalId)
            }
            intervalId = setInterval(function () {
                if (next) {
                    next.click()
                }
            }, 3000)
        }

        if (middle2) {
            middle2.addEventListener("mouseenter", handleMouseEnter)
            middle2.addEventListener("mouseleave", handleMouseLeave)
        }
        // 初始化第一张图片
        changeImg(0)

        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
            if (next) {
                next.removeEventListener("click", handleNextClick)
            }
            if (pre) {
                pre.removeEventListener("click", handlePreClick)
            }
            if (middle2) {
                middle2.removeEventListener("mouseenter", handleMouseEnter)
                middle2.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [infomation])

    return (
        // 中间主题部分
        <div className="middle relative">
            <div className="middle1" ref={middle1}>
                <div className="specificClassArea" ref={specificClassAreaRef}>
                    <ul>
                        <li className="specificClass relative">
                            家用电器
                            <div className="floatArea absolute">这是拓展内容</div>
                        </li>
                        <li className="specificClass relative">
                            手机 / 运营商 / 数码
                            <div className="floatArea absolute">这是拓展内容2</div>
                        </li>
                        <li className="specificClass"> 电脑 / 办公 / 文具用品</li>
                        <li className="specificClass"> 家居 / 家具 / 家装 / 厨具</li>
                        <li className="specificClass"> 男装 / 女装 / 童装 / 内衣</li>
                        <li className="specificClass"> 美妆 / 个护清洁 / 宠物</li>
                        <li className="specificClass"> 女鞋 / 箱包 / 钟表 / 珠宝</li>
                        <li className="specificClass"> 男鞋 / 运动 / 户外</li>
                        <li className="specificClass"> 房产 / 汽车 / 汽车用品</li>
                        <li className="specificClass"> 母婴 / 玩具乐器</li>
                        <li className="specificClass"> 食品 / 酒类 / 生鲜 / 特产</li>
                        <li className="specificClass"> 艺术 / 礼品鲜花 / 农牧园艺</li>
                        <li className="specificClass"> 京东买药 / 计生情趣</li>
                        <li className="specificClass"> 图书 / 文娱 / 教育 / 电子书</li>
                        <li className="specificClass"> 机票 / 酒店 / 旅游 / 生活</li>
                        <li className="specificClass"> 支付 / 白条 / 保险 / 企业金融</li>
                        <li className="specificClass"> 安装 / 维修 / 清洗 / 二手</li>
                        <li className="specificClass"> 元器件 / 原材料 / 五金机电</li>
                    </ul>
                </div>
            </div>
            {/* 轮播图部分  */}
            <div className="middle2" ref={middle2Ref}>
                <div className="wrapper">
                    <img src="./img/轮播图1.jpg" alt="" ref={middle2imgchangeRef} />
                </div>
                <div className="middle2footer relative">
                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="toggle">
                        <button className="pre" ref={preRef}>&lt;</button>
                        <button className="next" ref={nextRef}>&gt;</button>
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
        </div>
    )
}

export default MiddleSection