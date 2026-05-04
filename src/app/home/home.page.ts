import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption,
  IonButton, IonIcon, IonList, IonItemSliding,
  IonItemOptions, IonItemOption, IonNote, IonBadge,
  IonDatetime,
  AlertController, ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircleOutline, trashOutline,
  calendarOutline, walletOutline,
} from 'ionicons/icons';

interface Harcama {
  id: number;
  ad: string;
  tutar: number;
  kategori: string;
  tarih: string;
}

interface Kategori {
  ad: string;
  deger: string;
  icon: string;
  renk: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonSelect, IonSelectOption,
    IonButton, IonIcon, IonList, IonItemSliding,
    IonItemOptions, IonItemOption, IonNote, IonBadge,
    IonDatetime,
  ],
})
export class HomePage implements OnInit {

  yeniAd: string = '';
  yeniTutar: number | null = null;
  secilenKategori: string = '';
  yeniTarih: string = new Date().toISOString();
  bugun: string = new Date().toISOString();
  aktifFiltre: string = '';
  harcamalar: Harcama[] = [];

  kategoriler: Kategori[] = [
    { ad: 'Yiyecek',   deger: 'Yiyecek',   icon: '🍔', renk: 'warning'   },
    { ad: 'Ulaşım',    deger: 'Ulaşım',    icon: '🚌', renk: 'primary'   },
    { ad: 'Eğlence',   deger: 'Eğlence',   icon: '🎮', renk: 'tertiary'  },
    { ad: 'Sağlık',    deger: 'Sağlık',    icon: '💊', renk: 'danger'    },
    { ad: 'Giyim',     deger: 'Giyim',     icon: '👕', renk: 'secondary' },
    { ad: 'Faturalar', deger: 'Faturalar', icon: '📄', renk: 'medium'    },
    { ad: 'Diğer',     deger: 'Diğer',     icon: '📦', renk: 'dark'      },
  ];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) {
    addIcons({ addCircleOutline, trashOutline, calendarOutline, walletOutline });
  }

  ngOnInit() {
    this.verileriYukle();
  }

  harcamaEkle() {
    const ad = this.yeniAd.trim();
    const tutar = this.yeniTutar;

    if (!ad || !tutar || tutar <= 0 || !this.secilenKategori) {
      this.toastGoster('Lütfen tüm alanları eksiksiz doldurunuz.', 'warning');
      return;
    }

    const yeni: Harcama = {
      id: Date.now(),
      ad,
      tutar,
      kategori: this.secilenKategori,
      tarih: this.yeniTarih,
    };

    this.harcamalar.unshift(yeni);
    this.verileriKaydet();
    this.formuSifirla();
    this.toastGoster(`"${ad}" harcaması eklendi ✔`, 'success');
  }

  async harcamaSil(id: number, slidingItem: IonItemSliding) {
    await slidingItem.close();

    const alert = await this.alertCtrl.create({
      header: 'Silme Onayı',
      message: 'Bu harcamayı silmek istediğinizden emin misiniz?',
      buttons: [
        { text: 'İptal', role: 'cancel' },
        {
          text: 'Sil',
          role: 'destructive',
          handler: () => {
            this.harcamalar = this.harcamalar.filter(h => h.id !== id);
            this.verileriKaydet();
            this.toastGoster('Harcama silindi.', 'danger');
          },
        },
      ],
    });
    await alert.present();
  }

  toplamHarcama(): number {
    return this.filtreliHarcamalar().reduce((top, h) => top + h.tutar, 0);
  }

  filtreliHarcamalar(): Harcama[] {
    if (!this.aktifFiltre) return this.harcamalar;
    return this.harcamalar.filter(h => h.kategori === this.aktifFiltre);
  }

  filtreAyarla(kategori: string) {
    this.aktifFiltre = kategori;
  }

  kategoriIcon(deger: string): string {
    return this.kategoriler.find(k => k.deger === deger)?.icon ?? '📦';
  }

  kategoriRenkKodu(deger: string): string {
    return this.kategoriler.find(k => k.deger === deger)?.renk ?? 'medium';
  }

  kategoriRengi(deger: string): string {
    return `bg-${this.kategoriler.find(k => k.deger === deger)?.renk ?? 'medium'}`;
  }

  verileriKaydet() {
    localStorage.setItem('harcamalar', JSON.stringify(this.harcamalar));
  }

  verileriYukle() {
    const veri = localStorage.getItem('harcamalar');
    this.harcamalar = veri ? JSON.parse(veri) : [];
  }

  formuSifirla() {
    this.yeniAd = '';
    this.yeniTutar = null;
    this.secilenKategori = '';
    this.yeniTarih = new Date().toISOString();
  }

  async toastGoster(mesaj: string, renk: string) {
    const toast = await this.toastCtrl.create({
      message: mesaj,
      duration: 2500,
      color: renk,
      position: 'bottom',
    });
    await toast.present();
  }
}
