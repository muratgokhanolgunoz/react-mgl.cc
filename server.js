const express = require('express');
const app = express();
const path = require('path');
const http = require('https');
const fs = require('fs');

const port = process.env.PORT || 3000;
const apiUrl = "https://demo.frigian.net/";
const rootUrl = "https://mgl.cc/";

let result;
const meta = {
    "home": {
        "title": {
            "key": /\$OG_TITLE/g,
            "value": "Midas Global Lojistik - Türkiye' nin Dijital Nakliyecisi"
        },
        "description": {
            "key": /\$OG_DESCRIPTION/g,
            "value": "Midas Global Lojistik; kökleri 1996 yılına kadar dayanan İstanbul merkezli ve denizyolu parsiyel taşımacılığu üzerine uzmanlaşmış bir lojistik firmasıdır. Türkiye ana limanlarından Istanbul/Ambarlı (Kumport, Marport, Mardaş), Kocaeli (Evyap, Derince, DP Port), Bursa/Gemlik, Izmir (Alsancak, Aliağa), Mersin, İskenderun, Antalya ve Trabzon limanlarından; Uzakdoğu, Kuzey Amerika, Güney Amerika, Ortadoğu, Uzakdoğu, Akdeniz ve Afrika limanlarına full konteyner servisi, Fas, Cezayir, Tunus, Libya, Mısır, Lübnan, İsrail, Suudi Arabistan, Birleşik Arap Emirlikleri, Sri Lanka, ispanya, Amerika Birleşik Devletleri ve Singapur'a parsiyel servis hizmeti vermektedir. Proje taşımacılığı, fuar taşımacılığı, parsiyel, konteyner aktarma ve çapraz taşımalar uzman olduğumuz alanlardır. İstanbul Mecidiyeköy Merkez, Beylikdüzü, ve Çin Zuhai de kendi ofislerimiz vardır. Midas Global Lojistik, e-Booking, e-Navlun gibi dijital altyapı gerektiren uygulamaları hayata geçiren Türkiye'nin ilk dijital freight forwarderıdır, ve dijitalleşmede Türkiye'nin bayrak taşıyıcı yerel firmasıdır."
        },
        "image": {
            "key": /\$OG_IMAGE/g,
            "value": rootUrl + "/assets/img/apple-touch-icon.png"
        }
    },
    "admin": {
        "title": {
            "key": /\$OG_TITLE/g,
            "value": "Midas Global Lojistic - Admin Dashboard"
        },
        "description": {
            "key": /\$OG_DESCRIPTION/g,
            "value": "Midas Global Logistic - Admin Dashboard"
        },
        "image": {
            "key": /\$OG_IMAGE/g,
            "value": rootUrl + "/assets/img/apple-touch-icon.png"
        }
    }
};

app.get('/', function (request, response) {
    if (!request.query.language && !request.query.key) {
        fs.readFile(path.resolve(__dirname, './build', 'index.html'), 'utf8', function (error, data) {
            if (error) {
                return console.log(error);
            }

            data = data.replace(meta.home.title.key, meta.home.title.value);
            data = data.replace(meta.home.description.key, meta.home.description.value);
            result = data.replace(meta.home.image.key, meta.home.image.value);
            response.send(result);
        });
    } else {
        http.get(apiUrl + "assets/uploads/blog/" + request.query.language + ".json", function (res) {
            let body = "";
            let jsonResponse = {};

            res.on('data', function (chunk) {
                body += chunk;
            });

            res.on('end', function () {
                jsonResponse = JSON.parse(body);

                fs.readFile(path.resolve(__dirname, './build', 'index.html'), 'utf8', function (error, data) {
                    if (error) {
                        return console.log(error);
                    }

                    if (jsonResponse.length > 0 && jsonResponse.length > request.query.key) {
                        data = data.replace(/\$OG_TITLE/g, jsonResponse[request.query.key].BLOG_SECTION_ITEMS_TITLE);
                        data = data.replace(/\$OG_DESCRIPTION/g, jsonResponse[request.query.key].BLOG_SECTION_ITEMS_SUMMARY);
                        result = data.replace(/\$OG_IMAGE/g, jsonResponse[request.query.key].BLOG_SECTION_ITEMS_PHOTO);
                        response.send(result);
                    } else {
                        data = data.replace(meta.home.title.key, meta.home.title.value);
                        data = data.replace(meta.home.description.key, meta.home.description.value);
                        result = data.replace(meta.home.image.key, meta.home.image.value);
                        response.send(result);
                    }
                });
            });
        }).on('error', function (e) {
            console.log("Got an error: ", e);
        });
    }
});

app.get('/sarici2021', function (request, response) {
    fs.readFile(path.resolve(__dirname, './build', 'index.html'), 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }

        data = data.replace(meta.admin.title.key, meta.admin.title.value);
        data = data.replace(meta.admin.description.key, meta.admin.description.value);
        result = data.replace(meta.admin.image.key, meta.admin.image.value);
        response.send(result);
    });
});

app.get('/sarici2021/blog', function (request, response) {
    fs.readFile(path.resolve(__dirname, './build', 'index.html'), 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }

        data = data.replace(meta.admin.title.key, meta.admin.title.value);
        data = data.replace(meta.admin.description.key, meta.admin.description.value);
        result = data.replace(meta.admin.image.key, meta.admin.image.value);
        response.send(result);
    });
});

app.get('/sarici2021/career', function (request, response) {
    fs.readFile(path.resolve(__dirname, './build', 'index.html'), 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }

        data = data.replace(meta.admin.title.key, meta.admin.title.value);
        data = data.replace(meta.admin.description.key, meta.admin.description.value);
        result = data.replace(meta.admin.image.key, meta.admin.image.value);
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));