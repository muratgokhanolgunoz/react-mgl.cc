import React, { Component, Fragment } from "react"
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap"

import blogImageFirst from '../../../assets/images/blog/1/photo.png'

class BlogPopup extends Component {

    render() {
        return (
            <Fragment>
                <Modal show={this.props.popupShow} fullscreen={true} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
                    <Modal.Header>
                        <Button className="template-button template-button-danger pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
                            {this.props.language('template.buttons.TEMPLATE_CLOSE_BUTTON')}
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col lg={2}></Col>
                                <Col className="modal-blog-preview-body" lg={8}>
                                    <Image src={blogImageFirst} alt="" fluid />
                                    <h1>LPI (LOJISTIK PERFORMANS ENDEKESI)</h1>
                                    <p>
                                        Amerika’da AMS (Otomatik Manifesto Sistemi) uygulaması başlayalı 16 yıl oldu, ardından Avrupa da ENS uygulamasını hayata geçirdi. Türkiye’de ise benzer çıktıları almak için “varış bildirimi” uygulaması başlatıldı. Amerika’da hedeflenen temel sonuçlar: risk analizi (erken aşamada önlem almak) ve şeffaflıktı.
                                        <br /><br />
                                        Ticaretin üç ana ögesi alıcı, satıcı ve üründür. Uluslararası ticarette onlarca farklı olgu; hizmet, altyapı, finans, devlet ve taşımacılık gibi, bu üç temel ögenin etrafında yer alır. Deniz yolu taşımalarında teslim anlaşması ne olursa olsun fabrika ya da liman teslim fark etmez, ticarete konu ürün taşıma aracına yüklendiği zaman, taşıyıcı aldığı mala karşılık bir konşimento (taşıma senedi) düzenler ve bu konşimentoyu göndericiye verir. Son dönemlerde teslimat -eğer taşıma bir akreditif veya kiralama sözleşmesi altında gerçekleşmiyorsa- konşimento yerine deniz yolu irsaliyesi olarak Türkçeleştirebileceğimiz SWB (basılı bir konşimentoda ki bütün bilgileri içerir fakat matbu bir çıktısı yoktur) ile de yapılabilmekte. Uluslararası demek farklı çıkış ve varış ülkesi olması durumudur. Mal çıkış ülkesinden hareket ettiğinde, alıcı için şartlar geri dönülmez şekilde kesinleşmiştir (düzeltme hakkı saklı). İşte risk analizi bu saat itibariyle başlayabilir. Amerika’da ki uygulama ise gemi çıkış limanından hareket etmeden 48 saat öncesidir. Amerikan sisteminde mal gerekirse red edilebilir, yani taşıyıcıya, “bu malı gemine hiç yükleme” diyebilir. Şeffaflık tarafı; alıcının gümrükleme işlemini mal çıkış ülkesinden yola çıktıktan sonra yapabilmesi ve uluslararası rekabette elini güçlü tutması, liman, gümrük, gümrükçü, taşıyıcı ve depolama kurumlarının ise çekirdek işlerine yoğunlaşıp hizmet kalitesini artırabilmesidir.
                                        <br /><br />
                                        Sektörün duayenleri bilirler; 3. dünya ülkelerinde hep bir fazladan demuraj serbest süresi talebi vardır ama Avrupa ve Amerika’da bu pek konu olmaz, hem de demuraj tarifelerinin masum olmamasına rağmen. Amerikalı alıcılar bunu pek konu da etmezler, çünkü bilirler ki gümrükleme yapmak için her zaman yeterli süreleri vardır. Mal gemiden indiğinde mallarını limandan alıp giderler. Tabii risk analizi tespit yapmak için malı başka bir sahaya da çekebilirler. Bu arada bahsetmeden geçmemek gerek FMC (Federal Denizcilik Komisyonu) 2019 yılında; konteyner alıcının çekebileceği duruma gelmeden (hafta sonu ve bayram tatilleri dahil) demuraj ve ardiye başlamamalı diye yeni bir tavsiye karar aldı. Bu bir zorunluluk değil ancak FMC‘nin aldığı kararların ortak çıkarı temsil ettiği armatörler, liman işletmeleri ve dış ticaret firmaları tarafından bilinir.
                                        <br /><br />
                                        Peki fazladan verilen demuraj serbest süresi bu konuyu çözmüyor mu veya 3. dünya ülkelerinde rekabet yok mu diye sorabilirsiniz. Tabii var, ama mal geldikten sonra yapılan gümrüklemenin baskı altında verilen ifade gibi olduğunu söylemek yanlış olmaz. Ayrıca ardiye için de herhangi bir serbest süre yoktur. Ardiye; gemi limana yanaşınca başlar. Yedi günden (geminin limana yanaşmasına müteakip) daha kısa sürede malını çekebilen alıcı; eğer çok şanslı değilse, camia tarafından “mutlaka iyi bağlantıları olan bir gümrükçüsü vardır” diye bilinir.
                                        <br /><br />
                                        “Amerika’yı yeniden keşfetmeye gerek yok” sözü sanki bu durum için söylenmiş. İthalat gümrüklemesi için gerekli şartlar mal çıktığında kesindir. Serbest rekabet koşullarını yaratmak, dijitalleşmeye ve şeffaflaşmaya öncü olmak kural koyucu kurumun sorumluluğudur. Rekabet adil koşullarda yapılır ise ciddi oranda ardiye ve demuraj parası yurt dışına çıkmaz. Gereksiz döviz çıkışını önlemek döviz kazandırıcı hizmet sayılabilir mi sorusu da aklıma geliyor. Daha az önemli bir çıktısı da LPI'deki yerimiz 15-20 sıra iyiye doğru gelişir.
                                        <br /><br />
                                        *konteyner taşımacılığında yerel armatörlerimizin payı %10’dan daha az.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}
export default BlogPopup
