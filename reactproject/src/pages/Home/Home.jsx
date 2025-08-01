import Header from './Header/Header'
import SearchArea from './SearchArea/SearchArea'
import MiddleSection from './MiddleSection/MiddleSection'
import ProductArea from './ProductArea/ProductArea'
import ServiceGuarantee from './ServiceGuarantee/ServiceGuarantee'
function Home() {
  return (
    <div>
      {/* 最顶部 */}
      <Header></Header>
      {/* 头部搜索框部分 */}
      <SearchArea></SearchArea>
      {/* 中间导航栏 */}
      <MiddleSection></MiddleSection>
      {/* 商品区域 */}
      <ProductArea></ProductArea>
      {/* 服务保障 */}
      <ServiceGuarantee></ServiceGuarantee>
    </div>
  )
}

export default Home