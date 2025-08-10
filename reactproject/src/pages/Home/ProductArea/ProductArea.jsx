import './productarea.css'

const productInfomation = [
    { src: "./img/产品图1.jpg", product_name: "Go语言权威指南", product_price: "¥8999" },
    { src: "./img/产品图2.jpg", product_name: "iPadPro11英寸 iPadPro13英寸M2/M4芯片2022年/24年新款学生平板电脑 深空黑色11英寸【2022款】 128GB WIFI 标配【原装】", product_price: "¥6999" },
    { src: "./img/产品图3.jpg", product_name: "联想拯救者Y7000P 2025补贴20% 16英寸电竞游戏笔记本电脑r Y9000P同款旗舰i9可选 2025款丨16核i7 16G 1T 满血5060 16英寸丨2.5K丨高刷屏｜京东快递 更快更好", product_price: "¥6999" },
    { src: "./img/产品图4.jpg", product_name: "【国家3C安全认证丨可上飞机】120W超级快充自带线充电宝20000M毫安小巧便捷移动电源适用苹果华为 3C认证【顶配版20000M+进口升级电芯】 【全国当/次日达】已售200万+｜小巧便捷", product_price: "¥5699" },
    { src: "./img/产品图5.jpg", product_name: "漫步者（EDIFIER）X5pro 真无线主动降噪蓝牙耳机金榜第1名新款入耳式排行前十情人节礼物男女 适用于苹果华为小米 月白", product_price: "¥4999" },
    { src: "./img/产品图1.jpg", product_name: "Go语言权威指南", product_price: "¥8999" },
    { src: "./img/产品图2.jpg", product_name: "iPadPro11英寸 iPadPro13英寸M2/M4芯片2022年/24年新款学生平板电脑 深空黑色11英寸【2022款】 128GB WIFI 标配【原装】", product_price: "¥6999" },
    { src: "./img/产品图3.jpg", product_name: "联想拯救者Y7000P 2025补贴20% 16英寸电竞游戏笔记本电脑r Y9000P同款旗舰i9可选 2025款丨16核i7 16G 1T 满血5060 16英寸丨2.5K丨高刷屏｜京东快递 更快更好", product_price: "¥6999" },
    { src: "./img/产品图4.jpg", product_name: "【国家3C安全认证丨可上飞机】120W超级快充自带线充电宝20000M毫安小巧便捷移动电源适用苹果华为 3C认证【顶配版20000M+进口升级电芯】 【全国当/次日达】已售200万+｜小巧便捷", product_price: "¥5699" },
    { src: "./img/产品图5.jpg", product_name: "漫步者（EDIFIER）X5pro 真无线主动降噪蓝牙耳机金榜第1名新款入耳式排行前十情人节礼物男女 适用于苹果华为小米 月白", product_price: "¥4999" },
    { src: "./img/产品图1.jpg", product_name: "Go语言权威指南", product_price: "¥8999" },
    { src: "./img/产品图2.jpg", product_name: "iPadPro11英寸 iPadPro13英寸M2/M4芯片2022年/24年新款学生平板电脑 深空黑色11英寸【2022款】 128GB WIFI 标配【原装】", product_price: "¥6999" },
    { src: "./img/产品图3.jpg", product_name: "联想拯救者Y7000P 2025补贴20% 16英寸电竞游戏笔记本电脑r Y9000P同款旗舰i9可选 2025款丨16核i7 16G 1T 满血5060 16英寸丨2.5K丨高刷屏｜京东快递 更快更好", product_price: "¥6999" },
    { src: "./img/产品图4.jpg", product_name: "【国家3C安全认证丨可上飞机】120W超级快充自带线充电宝20000M毫安小巧便捷移动电源适用苹果华为 3C认证【顶配版20000M+进口升级电芯】 【全国当/次日达】已售200万+｜小巧便捷", product_price: "¥5699" },
    { src: "./img/产品图5.jpg", product_name: "漫步者（EDIFIER）X5pro 真无线主动降噪蓝牙耳机金榜第1名新款入耳式排行前十情人节礼物男女 适用于苹果华为小米 月白", product_price: "¥4999" },
    { src: "./img/产品图1.jpg", product_name: "Go语言权威指南", product_price: "¥8999" },
    { src: "./img/产品图2.jpg", product_name: "iPadPro11英寸 iPadPro13英寸M2/M4芯片2022年/24年新款学生平板电脑 深空黑色11英寸【2022款】 128GB WIFI 标配【原装】", product_price: "¥6999" },
    { src: "./img/产品图3.jpg", product_name: "联想拯救者Y7000P 2025补贴20% 16英寸电竞游戏笔记本电脑r Y9000P同款旗舰i9可选 2025款丨16核i7 16G 1T 满血5060 16英寸丨2.5K丨高刷屏｜京东快递 更快更好", product_price: "¥6999" },
]

function ProductArea() {
    return (
        // 商品展示区
        <div className="product-section">
            <div className="section-header">
                <h2 className="section-title">京东秒杀</h2>
                <a href="/" className="more-link">更多秒杀</a>
            </div>
            {/* 重复的产品展示区 */}
            <div className="product-list">
                {productInfomation.map((item) => {
                    return (
                        <div className="product-item">
                            <div className="product-img">
                                <img src={item.src} alt="商品" />
                            </div>
                            <div className="product-name">{item.product_name}</div>
                            <div className="product-price">{item.product_price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductArea