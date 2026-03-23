<h1 align="center">Node.js Basic Project (RESTful API)</h1>

<p align="center">
  <i>Güvenli, ölçeklenebilir ve modern Node.js tabanlı Backend API şablonu.</i>
</p>

<p align="center">
  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" title="Node.js" />
  <img src="https://img.icons8.com/color/48/000000/express-js.png" alt="Express.js" title="Express.js" />
  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" title="MongoDB" />
</p>

---

## 🚀 Proje Özeti

Bu proje, **Node.js** ve **Express.js** kullanılarak geliştirilmiş, ölçeklenebilir ve güvenli bir RESTful API temel (starter) şablonudur. Veritabanı olarak **MongoDB** entegrasyonu bulunmakta olup, kullanıcı kimlik doğrulama, veri doğrulama, oran sınırlama (rate-limiting) ve gelişmiş hata yönetimi gibi modern backend uygulamalarının ihtiyaç duyduğu tüm temel gereksinimleri barındırır. Yeni projelere hızlıca başlamak ve temiz bir mimari üzerinden ilerlemek için tasarlanmıştır.

## ✨ Temel Özellikler

*   **RESTful API Mimarisi:** Express.js ile yapılandırılmış temiz ve esnek yönlendirme (routing).
*   **MongoDB Veritabanı:** Mongoose kullanılarak kurgulanan güçlü veri modelleri ve veritabanı bağlantısı.
*   **JWT Kimlik Doğrulama (Authentication):** JSON Web Token ile güvenli kullanıcı girişi ve oturum yönetimi.
*   **Şifre Güvenliği (Bcrypt):** Kullanıcı şifrelerinin veritabanına şifrelenerek güvenle kaydedilmesi.
*   **Veri Doğrulama (Joi):** Gelen isteklerin (request) model seviyesinde sıkı bir şekilde denetlenmesi.
*   **Gelişmiş Hata Yönetimi:** `express-async-errors` ve özelleştirilmiş *Error Handler middleware* ile asenkron fonksiyonlarda güvenli hata yakalama.
*   **Rate Limiting:** Sunucuyu kötü amaçlı ardışık isteklere ve DDoS benzeri saldırılara karşı koruyan istek sınırlandırıcı.

## ⚙️ Kurulum Rehberi

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla izleyebilirsiniz:

1. **Projeyi Klonlayın**
```bash
git clone https://github.com/oguzhan1414/NodeJs-Basic-Project.git
cd NodeJs-Basic-Project
```

2. **Gerekli Paketleri Yükleyin**
```bash
npm install
# Not: Express bağımlılığında bir sorun yaşarsanız aşağıdaki komutu da çalıştırın:
# npm install express
```

3. **Çevresel Değişkenleri Ayarlayın**
Projenin ana dizininde bir `.env` dosyası oluşturun ve içerisine aşağıdaki gibi kendi ayarlarınızı ekleyin:
```env
PORT=5001
# MongoDB bağlantı diziniz ve JWT_SECRET gibi diğer gerekli ortam değişkenlerini de buraya ekleyin.
```

4. **Uygulamayı Başlatın**
```bash
npm start
```
Sunucu başladığında terminalde `Server 5001 portunda çalışıyor...` mesajını göreceksiniz. Ardından isteklerinizi Postman veya benzeri bir API aracıyla test edebilirsiniz.