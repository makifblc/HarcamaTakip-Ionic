# HarcamaTakip-Ionic
İonic ile geliştirilen bir harcama takip uygulaması.

💰 Ionic Harcama Takip Uygulaması\

📑 Proje Senaryosu ve Amaç
Projenin temel amacı, mobil arayüz geliştirme, TypeScript ile veri yönetimi ve LocalStorage kullanarak veri kalıcılığı sağlama konularında yetkinlik kazanmaktır. Uygulama üzerinden harcama eklenebilir, listelenebilir, dinamik olarak toplam tutar görülebilir ve sliding (kaydırma) yöntemiyle kayıtlar silinebilir.

🚀 Öne Çıkan Özellikler & Bonuslar
Dinamik Veri Girişi: Harcama adı, tutar, kategori ve takvim üzerinden tarih seçimi yapılabilir.

Akıllı Özet Paneli: Toplam harcama miktarı ve kayıt sayısı anlık olarak hesaplanıp kullanıcıya sunulur.

Görsel Kategorizasyon: Her harcama türüne özel ikonlar ve renkli etiketler (Yiyecek, Ulaşım, Sağlık vb.) atanmıştır.

Kalıcı Hafıza: Veriler tarayıcının veya cihazın LocalStorage alanında saklanır, uygulama kapatılsa dahi kaybolmaz.

UX Odaklı Silme İşlemi: ion-item-sliding kullanılarak satırı kaydırınca çıkan silme butonu eklenmiştir.

Güvenli Silme: Veri kaybını önlemek adına silme işlemi öncesi kullanıcıdan onay (Alert) istenir.

Geri Bildirim: Yeni bir harcama eklendiğinde yeşil bir Toast mesajı ile kullanıcı bilgilendirilir.

🛠️ Teknik Bileşenler (UI Kit)
Ödevde istenen tüm Ionic bileşenleri projeye entegre edilmiştir:

Navigasyon: ion-header, ion-toolbar, ion-title.

Form Yapısı: ion-input, ion-select, ion-datetime, ion-button.

Veri Sunumu: ion-card, ion-list, ion-item, ion-item-sliding, ion-item-options.

📸 Uygulama Görüntüleri
Projenin arayüz akışını aşağıdaki görseller üzerinden inceleyebilirsiniz:
<br><br><br>
<img src="image/app_main.png" width="20%" alt="app">
<br>
<img src="image/ekleme_blip.png" width="20%" alt="ekleme_blip">
<br>
<img src="image/harcama.png" width="20%" alt="harcama">
<br>
<img src="image/silme.png" width="20%" alt="silme">
<br>
<img src="image/silme_slide.png" width="20%" alt="silme_slide">
<br>
<img src="image/total_harcama_kayıt.png" width="20%" alt="total_harcama_kayıt">
<br>
<img src="image/veri_ekleme.png" width="20%" alt="veri_ekleme">
<br><br><br>
Harcama Girişi: Form yapısı ve takvim kullanımı.

Liste Ekranı: Dinamik toplam tutar ve kategorize edilmiş harcamalar.

İşlem Akışı: Silme onayı ve başarılı işlem bildirimleri.

⚙️ Kurulum ve Çalıştırma
Projeyi yerel ortamınızda ayağa kaldırmak için:

Bağımlılıkları yükleyin:

Bash
npm install
Geliştirme sunucusunu başlatın:

Bash
ionic serve

Geliştirici: Mehmet Akif Balcı
