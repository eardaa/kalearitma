export interface Product {
  slug: string;
  name: string;
  tag: string;
  description: string;
  imageUrl: string;
  features: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "class",
    name: "Class",
    tag: "Tezgah Altı",
    description:
      "Kapalı kasa kompakt tasarımıyla mutfak tezgahı altında minimum yer kaplayan, tazyikli su üreten güvenilir bir su arıtma cihazı.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/class.png",
    features: ["Kompakt", "Tazyikli Su", "Kapalı Kasa"],
    featured: true,
  },
  {
    slug: "crypto",
    name: "Crypto",
    tag: "Tezgah Altı",
    description:
      "Takçevir filtre teknolojisi ve minimal futuristik tasarım. 6 aşamalı filtrasyon ile Hindistan cevizi kabuğu karbon filtresi sayesinde sağlıklı içme suyu üretir.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/6209132a53258crypto-main.png",
    features: ["Dahili Tank", "Takçevir Filtre", "Tazyikli Su", "6 Aşamalı"],
  },
  {
    slug: "digiclass",
    name: "Digiclass",
    tag: "Tezgah Altı",
    description:
      "5 aşamalı filtrasyon ile 8.5 pH alkalin su üretir. Bluetooth teknolojisi ve mobil uygulama desteğiyle filtre değişimini hatırlatır.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/6204bbd7eba98digiclass-main.png",
    features: ["Bluetooth", "Dijital Ekran", "Mobil Uygulama", "5 Aşamalı"],
  },
  {
    slug: "vision",
    name: "Vision",
    tag: "Tezgah Üstü",
    description:
      "Modern kapalı kasa tasarımı ile tazyikli temiz su üreten, mutfak tezgahı altına kolayca sığan şık bir arıtma cihazı.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/vision.png",
    features: ["Modern Tasarım", "Kapalı Kasa", "Tazyikli Su"],
  },
  {
    slug: "gold",
    name: "Gold",
    tag: "Tezgah Altı",
    description:
      "Premium altın rengi tasarımı ve üst düzey filtrasyon teknolojisiyle kalite ve estetiği bir arada sunan özel bir arıtma cihazı.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/645ccfec317e2gold_thumbnail.jpg",
    features: ["Premium", "Altın Renk", "Alkalin Filtre"],
  },
  {
    slug: "premium",
    name: "Premium",
    tag: "Tezgah Altı",
    description:
      "Colour Premium serisi, şık renkli tasarımı ve üst düzey filtrasyon teknolojisiyle evinizin mutfağına estetik bir dokunuş katar.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/premium.png",
    features: ["Renkli Tasarım", "Şık Görünüm", "Ev Tipi"],
  },
  {
    slug: "new-prestij",
    name: "New Prestij",
    tag: "Tezgah Altı",
    description:
      "Açık kasa tasarımıyla bakımı ve filtre değişimi kolay, ekonomik ve güvenilir ev tipi su arıtma cihazı.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/606eb501e144cnewprestij-thumbnail.jpg",
    features: ["Açık Kasa", "Ekonomik", "Kolay Kullanım"],
  },
  {
    slug: "business",
    name: "Business",
    tag: "Ticari",
    description:
      "Ofis ve işyerlerine özel tasarlanan Business modeli, yüksek kapasiteli filtrasyon ile çok sayıda kullanıcıya sağlıklı içme suyu sağlar.",
    imageUrl: "https://www.conax.com.tr/Public/uploads/products/business.png",
    features: ["İşyeri Tipi", "Yüksek Kapasite", "Dayanıklı"],
  },
];