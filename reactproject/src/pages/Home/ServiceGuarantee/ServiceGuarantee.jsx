import './serviceGuarantee.css'

function ServiceGuarantee() {
    return (
        // 服务保障
        <div className="service-bar">
            <div className="container">
                <div className="service-list">
                    <div className="service-item">
                        <div className="service-icon"><i className="fas fa-gem"></i></div>
                        <div className="service-title">正品保障</div>
                        <div className="service-desc">正品品质 放心选购</div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><i className="fas fa-truck"></i></div>
                        <div className="service-title">极速物流</div>
                        <div className="service-desc">211限时达 次日达</div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><i className="fas fa-undo"></i></div>
                        <div className="service-title">售后无忧</div>
                        <div className="service-desc">7天无理由退货</div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><i className="fas fa-comments"></i></div>
                        <div className="service-title">专属客服</div>
                        <div className="service-desc">一对一贴心服务</div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><i className="fas fa-gift"></i></div>
                        <div className="service-title">天天低价</div>
                        <div className="service-desc">30天价保 买贵退差</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceGuarantee