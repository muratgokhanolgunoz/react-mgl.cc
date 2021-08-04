import React, { Component, Fragment } from 'react'
import Titles from './titles/Titles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'
import blogImageFirst from '../../assets/images/blog/blog_1.jpg'

class Blog extends Component {

    state = {
        popupShow: false,
        selectedBlog: null // Seçilen bloğun id sini buton click ile buraya set ediceksin 
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    render() {
        return (
            <Fragment>
                <div id="blog" className="blog section-padding">
                    <Row>
                        <Titles title="Bizden Yazılar" subtitle="" description="" textAlign="text-center" color="text-dark" fontSize="section-title-description-font-size" />
                    </Row>
                    <Row>
                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item">
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>4 Ağu 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h6>LPI (Lojistik Performans Endekesi)</h6>
                                <p>Amerika’da AMS (Otomatik Manifesto Sistemi) uygulaması başlayalı 16 yıl oldu, ardından Avrupa da ENS uygulamasını hayata geçirdi. Türkiye’de ise benzer çıktıları almak için “varış bildirimi” uygulaması başlatıldı. Amerika’da hedeflenen temel sonuçlar: risk analizi (erken aşamada önlem almak) ve şeffaflıktı.</p>
                                <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>DEVAMI . . .</a>
                            </div>
                        </Col>      

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item">
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>4 Ağu 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h6>LPI (Lojistik Performans Endekesi)</h6>
                                <p>Amerika’da AMS (Otomatik Manifesto Sistemi) uygulaması başlayalı 16 yıl oldu, ardından Avrupa da ENS uygulamasını hayata geçirdi. Türkiye’de ise benzer çıktıları almak için “varış bildirimi” uygulaması başlatıldı. Amerika’da hedeflenen temel sonuçlar: risk analizi (erken aşamada önlem almak) ve şeffaflıktı.</p>
                                <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>DEVAMI . . .</a>
                            </div>
                        </Col>           

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item">
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>4 Ağu 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h6>LPI (Lojistik Performans Endekesi)</h6>
                                <p>Amerika’da AMS (Otomatik Manifesto Sistemi) uygulaması başlayalı 16 yıl oldu, ardından Avrupa da ENS uygulamasını hayata geçirdi. Türkiye’de ise benzer çıktıları almak için “varış bildirimi” uygulaması başlatıldı. Amerika’da hedeflenen temel sonuçlar: risk analizi (erken aşamada önlem almak) ve şeffaflıktı.</p>
                                <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>DEVAMI . . .</a>
                            </div>
                        </Col>           

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item">
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>4 Ağu 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h6>LPI (Lojistik Performans Endekesi)</h6>
                                <p>Amerika’da AMS (Otomatik Manifesto Sistemi) uygulaması başlayalı 16 yıl oldu, ardından Avrupa da ENS uygulamasını hayata geçirdi. Türkiye’de ise benzer çıktıları almak için “varış bildirimi” uygulaması başlatıldı. Amerika’da hedeflenen temel sonuçlar: risk analizi (erken aşamada önlem almak) ve şeffaflıktı.</p>
                                <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>DEVAMI . . .</a>
                            </div>
                        </Col>                             
                    </Row>

                    <BlogPopup popupShow={this.state.popupShow} popupShowToggle={this.handlePopupShow} />
                </div>
            </Fragment>
        )
    }
}
export default Blog