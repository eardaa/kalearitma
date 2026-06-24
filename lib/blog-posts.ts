export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  intro: string;
  date: string;
  readTime: string;
  category: string;
  categorySlug: string;
  contentSections: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "blockquote" | "cta";
  text?: string;
  items?: string[];
  ctaTitle?: string;
  ctaText?: string;
  ctaLabel?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "isparta-suyu-neden-sert",
    title: "Isparta'nın Şebeke Suyu Neden Sert ve Kireçlidir?",
    description:
      "Isparta'nın karstik yapısı ve kireçli şebeke suyunun nedenleri. Sert suyun sağlığa, çay lezzetine ve beyaz eşyalara etkileri ile arıtma çözümleri.",
    intro:
      "Isparta'da musluk sularından akan yoğun kirecin arkasındaki coğrafi nedenleri ve bu sert suyun günlük yaşamımıza etkilerini masaya yatırıyoruz.",
    date: "2026-05-30",
    readTime: "4 dk okuma",
    category: "Isparta Suyu",
    categorySlug: "isparta-suyu",
    contentSections: [
      {
        type: "paragraph",
        text: "Isparta'da yaşayan hemen herkesin ortak şikayetlerinden biri, musluk sularının aşırı derecede kireçli olmasıdır. Çaydanlıkların tabanında kısa sürede oluşan kalın kireç tabakaları, çamaşır ve bulaşık makinelerinin rezistanslarında biriken tortular ve banyo sonrasında saçta ve ciltte hissedilen kuruluk... Peki, Isparta şebeke suyunun bu denli sert ve kireçli olmasının asıl sebebi nedir?",
      },
      {
        type: "heading",
        text: "Jeolojik Yapı ve Karstik Havzalar",
      },
      {
        type: "paragraph",
        text: "Suyun sertliği, içinde çözünmüş halde bulunan kalsiyum ve magnezyum minerallerinin miktarı ile ölçülür. Isparta ve çevresi, jeolojik olarak <strong>karstik yapıya</strong> sahiptir. Karstik yapılar, kireç taşı (kalsiyum karbonat) ve dolomit gibi kolayca eriyebilen kayaçlardan oluşur.",
      },
      {
        type: "paragraph",
        text: "Bölgemizin içme suyu kaynakları büyük oranda yeraltı sularından ve Davraz Dağı çevresindeki karstik sızıntılardan beslenir. Kar, yağmur ve yüzeysel sular toprağa süzülürken kireç taşı tabakalarıyla temas eder. Bu temas sırasında kireç taşını çözen sular, bünyesine yüksek miktarda kalsiyum ve magnezyum iyonları katar. Sonuç olarak musluklarımızdan akan su, yüksek mineralli ve oldukça 'sert' bir suya dönüşür.",
      },
      {
        type: "blockquote",
        text: "Fransız sertlik derecesine göre Isparta şebeke suları genellikle 'çok sert' veya 'aşırı sert' sınıfında yer almaktadır. Bu durum sağlığa doğrudan zararlı olmasa da yaşam kalitesini ciddi ölçüde düşürür.",
      },
      {
        type: "heading",
        text: "Sert Suyun Günlük Yaşama ve Ev Aletlerine Etkileri",
      },
      {
        type: "paragraph",
        text: "Kireçli ve sert suyun evimizde yarattığı problemler sadece çaydanlıkla sınırlı kalmaz:",
      },
      {
        type: "list",
        items: [
          "<strong>Enerji Sarfiyatı ve Beyaz Eşya Hasarları:</strong> Çamaşır makinesi, bulaşık makinesi ve kombi rezistanslarında biriken kireç, ısı transferini engeller. Cihazlar suyu ısıtmak için çok daha fazla elektrik harcar ve zamanla rezistanslar yanarak arızalanır.",
          "<strong>Çay ve Yemek Lezzeti:</strong> Sert sular, çayın demini almasını engeller; çayın mat, bulanık görünmesine ve acımsı bir tat almasına neden olur. Yemeklerin pişme süresini uzatır.",
          "<strong>Temizlik Zorluğu ve Sabun Tüketimi:</strong> Sert su sabun ve deterjanın köpürmesini zorlaştırır. Bu da temizlik malzemesi tüketimini artırır. Ayrıca duşakabinlerde, musluklarda ve fayanslarda inatçı gri kireç lekeleri bırakır.",
          "<strong>Cilt ve Saç Sağlığı:</strong> Kireçli su cildin doğal nem dengesini bozarak kuruluk, kaşıntı ve egzamaya yol açabilir. Saçların matlaşmasına ve sertleşmesine neden olur.",
        ],
      },
      {
        type: "heading",
        text: "Çözüm: Ters Ozmoz (Reverse Osmosis) Su Arıtma Teknolojisi",
      },
      {
        type: "paragraph",
        text: "Isparta'daki sert su sorununu çözmenin en pratik ve kalıcı yolu, ev tipi bir ters ozmoz su arıtma sistemi kullanmaktır. Ters ozmoz sistemlerindeki <strong>membran filtre</strong>, gözenek yapısı sayesinde sudaki kireç (kalsiyum/magnezyum) iyonlarını, kloru, ağır metalleri ve bakterileri %98 oranında süzerek dışarı atar.",
      },
      {
        type: "paragraph",
        text: "Arıtılan su, kireçten tamamen temizlendiği için yumuşak içimli, berrak ve sağlıklı bir suya dönüşür. Ev aletleriniz kirecin zararlarından korunurken, çayınız tam renginde ve lezzetinde demlenir.",
      },
      {
        type: "cta",
        ctaTitle: "Isparta'nın Kireçli Suyuna Son Verin",
        ctaText:
          "Kale Su Arıtma olarak, Conax marka premium su arıtma cihazlarımızla evinizdeki kireci tamamen yok ediyoruz. Isparta içi ücretsiz keşif ve montaj hizmetimizden yararlanmak için hemen bizi arayın.",
        ctaLabel: "📞 Bizi Arayın: 0546 257 47 73",
      },
    ],
  },
  {
    slug: "su-aritma-cihazi-nasil-secilir",
    title: "Eviniz İçin En Doğru Su Arıtma Cihazı Nasıl Seçilir?",
    description:
      "Su arıtma cihazı seçerken dikkat edilmesi gerekenler. Filtre aşamaları, pompalı/pompasız modeller, açık/kapalı kasa karşılaştırması ve NSF sertifikası.",
    intro:
      "Piyasada onlarca model ve marka var. Peki eviniz için en ideal su arıtma sistemini nasıl seçersiniz? İşte bilmeniz gereken tüm teknik kriterler.",
    date: "2026-05-28",
    readTime: "5 dk okuma",
    category: "Satın Alma Rehberi",
    categorySlug: "satin-alma-rehberi",
    contentSections: [
      {
        type: "paragraph",
        text: "Su arıtma cihazı satın alırken karşınıza onlarca farklı model, marka ve filtre teknolojisi çıkıyor. Fiyat aralığı da 2.000 TL'den 15.000 TL'ye kadar genişleyebiliyor. Peki, bütçenize ve ihtiyaçlarınıza en uygun arıtma sistemini nasıl seçeceksiniz? Bu rehberde, su arıtma cihazı seçiminde dikkat etmeniz gereken 7 temel faktörü detaylıca inceliyoruz.",
      },
      {
        type: "heading",
        text: "1. Filtre Aşama Sayısı ve Kalitesi",
      },
      {
        type: "paragraph",
        text: "Bir ters ozmoz su arıtma cihazı genellikle 5 ila 6 aşamalı filtrasyon kullanır. Her aşamanın farklı bir görevi vardır:",
      },
      {
        type: "list",
        items: [
          "<strong>1. Aşama — Sediment Filtre:</strong> Sudaki kum, çamur, pas gibi büyük partikülleri tutar. Cihazın ömrünü uzatır.",
          "<strong>2. ve 3. Aşama — Granül ve Blok Aktif Karbon Filtreler:</strong> Kloru, kötü tat ve kokuyu, organik maddeleri sudan uzaklaştırır.",
          "<strong>4. Aşama — Membran Filtre (Ters Ozmoz):</strong> Sistemin kalbi burasıdır. 0.0001 mikron gözenek yapısıyla bakterileri, virüsleri, ağır metalleri ve kireci %98'e varan oranda süzer.",
          "<strong>5. Aşama — Tatlandırıcı / Post Karbon Filtre:</strong> Membrandan çıkan suya son dokunuşu yapar; suya berrak, yumuşak ve taze bir içim kazandırır.",
          "<strong>6. Aşama (Opsiyonel) — Mineral / Alkalin Filtre:</strong> pH seviyesini yükselterek alkali su üretir, kalsiyum ve magnezyum gibi faydalı mineralleri suya geri kazandırır.",
        ],
      },
      {
        type: "heading",
        text: "2. Açık Kasa vs. Kapalı Kasa",
      },
      {
        type: "paragraph",
        text: "<strong>Açık kasa</strong> modellerde filtreler dışarıdadır, değişimi pratiktir ve fiyatı daha ekonomiktir. <strong>Kapalı kasa</strong> modeller ise hijyen standartları daha yüksek, kompakt ve estetik görünümlüdür. Mutfak tezgahı altında az yer kaplar.",
      },
      {
        type: "heading",
        text: "3. Pompalı vs. Pompasız Modeller",
      },
      {
        type: "paragraph",
        text: "Şebeke su basıncınız 3 bar'ın altındaysa pompalı model tercih etmelisiniz. Pompa, membranın verimli çalışması için gerekli basıncı sağlar ve atık su oranını düşürür. Isparta'nın birçok mahallesinde şebeke basıncı düşük olduğu için pompalı modeller öneriyoruz.",
      },
      {
        type: "heading",
        text: "4. NSF Sertifikalı Depolama Tankı",
      },
      {
        type: "paragraph",
        text: "Tank malzemesi kesinlikle NSF/ANSI Standard 58 sertifikalı olmalıdır. Paslanmaz çelik sacdan üretilmiş, iç yüzeyi gıdaya uygun membran kaplı tanklar tercih edin. Plastik tanklar zamanla bakteri üretebilir.",
      },
      {
        type: "cta",
        ctaTitle: "Size En Uygun Cihazı Birlikte Seçelim",
        ctaText:
          "Kale Su Arıtma uzmanları olarak, evinizin su basıncını ücretsiz ölçüyor, mutfağınıza en uygun modeli belirliyoruz. Hemen arayın, ücretsiz keşif randevusu alın.",
        ctaLabel: "📞 Ücretsiz Keşif İçin Arayın",
      },
    ],
  },
  {
    slug: "su-aritma-bakim-rehberi",
    title: "Su Arıtma Cihazı Filtre Değişim ve Periyodik Bakım Kılavuzu",
    description:
      "Ön sediment, aktif karbon, blok karbon filtreler ile membran filtrelerin görevleri ve değişim sıklığı. Zamanında yapılan filtre değişiminin arıtılmış su kalitesine katkısı.",
    intro:
      "Su arıtma cihazınızdan sürekli yüksek kalitede su alabilmek için filtre değişim takvimine sadık kalmanız şarttır. İşte eksiksiz bakım rehberi.",
    date: "2026-05-25",
    readTime: "4 dk okuma",
    category: "Bakım & Servis",
    categorySlug: "bakim-servis",
    contentSections: [
      {
        type: "paragraph",
        text: "Su arıtma cihazları, düzenli bakım ve zamanında filtre değişimi yapıldığı sürece yıllarca sorunsuz çalışır. Peki hangi filtre ne zaman değişmeli? Hangi belirtiler filtre değişim zamanının geldiğini gösterir? Bu kapsamlı bakım rehberinde tüm detayları bulacaksınız.",
      },
      {
        type: "heading",
        text: "Filtre Değişim Periyotları",
      },
      {
        type: "list",
        items: [
          "<strong>Sediment Filtre (1. Aşama):</strong> 6 ayda bir değiştirilmeli. Kahverengileşme veya gözle görülür kirlenme varsa daha erken değişim gerekebilir.",
          "<strong>Granül Aktif Karbon (2. Aşama):</strong> 6 ayda bir değiştirilmeli. Suyun tadında veya kokusunda değişiklik hissederseniz değişim zamanı gelmiştir.",
          "<strong>Blok Karbon Filtre (3. Aşama):</strong> 6 ayda bir değiştirilmeli. 3. aşama filtre, klor arıtımında kritik rol oynar.",
          "<strong>Membran Filtre (4. Aşama):</strong> 2 yılda bir değiştirilmeli. Su debisi düştüyse veya atık su miktarı arttıysa membran tıkanmış olabilir.",
          "<strong>Tatlandırıcı / Post Karbon (5. Aşama):</strong> Yılda bir değiştirilmeli. Suya son lezzet dokunuşunu yapan bu filtredir.",
          "<strong>Mineral / Alkalin Filtre (6. Aşama, opsiyonel):</strong> Yılda bir değiştirilmeli.",
        ],
      },
      {
        type: "heading",
        text: "Bakım Zamanının Geldiğini Gösteren İşaretler",
      },
      {
        type: "list",
        items: [
          "Musluktan akan suyun debisi belirgin şekilde azaldıysa",
          "Suyun tadında metalik veya farklı bir tat oluştuysa",
          "Cihaz normalden daha fazla ses çıkarıyorsa",
          "Atık su miktarı arttıysa",
          "Filtrelerin üzerinde gözle görülür kirlenme veya renk değişimi varsa",
        ],
      },
      {
        type: "heading",
        text: "Kale Su Arıtma Bakım Avantajları",
      },
      {
        type: "paragraph",
        text: "Kale Su Arıtma olarak, Isparta içi satışını yaptığımız tüm Conax cihazların periyodik bakımını uzman ekibimizle gerçekleştiriyoruz. Filtre değişim takviminizi biz tutuyor, zamanı geldiğinde sizi arıyor ve yerinde servis hizmeti sunuyoruz.",
      },
      {
        type: "cta",
        ctaTitle: "Bakım Zamanınız Geldi mi?",
        ctaText:
          "Cihazınızın filtre değişim zamanını öğrenmek veya yerinde bakım randevusu oluşturmak için hemen bizi arayın. Isparta içi aynı gün servis.",
        ctaLabel: "📞 Bakım Randevusu İçin Arayın",
      },
    ],
  },
  {
    slug: "damacana-vs-su-aritma",
    title: "Damacana Su Kullanımı ile Su Arıtma Cihazı Karşılaştırması",
    description:
      "Damacana suların plastik mikropartikül riskleri, depolama koşullarındaki hijyen problemleri ve bütçeniz üzerindeki yıllık birikimli maliyetlerin su arıtma sistemleriyle amortisman kıyası.",
    intro:
      "Sağlık standartları, bütçe amortismanı, kullanım pratikliği ve çevre bilinci gibi açılardan damacana su ile su arıtma sistemlerini kıyaslıyoruz.",
    date: "2026-05-22",
    readTime: "5 dk okuma",
    category: "Karşılaştırma",
    categorySlug: "karsilastirma",
    contentSections: [
      {
        type: "paragraph",
        text: "Sağlıklı su tüketimi, ailelerin bütçe planlamalarında ve yaşam standartlarında önemli bir yer kaplamaktadır. İçme suyu ihtiyacını karşılamak için günümüzde iki ana alternatif öne çıkıyor: Damacana su siparişi vermek veya eve bir su arıtma cihazı taktırmak. Peki bu iki seçenekten hangisi sağlık, pratiklik ve bütçe açısından daha mantıklı? Gelin detaylıca inceleyelim.",
      },
      {
        type: "heading",
        text: "1. Sağlık ve Hijyen Karşılaştırması",
      },
      {
        type: "paragraph",
        text: "Çoğumuz damacana suların doğrudan 'kaynak suyu' olduğunu düşünürüz. Ancak gerçek her zaman böyle olmayabilir:",
      },
      {
        type: "list",
        items: [
          "<strong>Plastik ve BPA Tehlikesi:</strong> Damacanalar, polikarbonat adı verilen sert plastiklerden üretilir. Bu plastiklerin hammaddesinde bisphenol A (BPA) ve kimyasal bileşenler bulunur. Damacanaların güneşe maruz kalması veya taşıma/depolama sırasında sıcakta beklemesi bu kimyasalların ve mikroplastiklerin suya karışmasına neden olur.",
          "<strong>Temizlik ve Yıkama Standartları:</strong> Çok kullanımlık damacanalar fabrikaya döndüklerinde yüksek sıcaklıktaki kimyasal dezenfektanlarla yıkanır. Ancak damacananın ömrü boyunca (ortalama 50-75 kullanım) içinde ne taşındığını bilmek veya her seferinde tam arındırıldığından emin olmak zordur.",
          "<strong>Su Arıtmada Hijyen:</strong> Ev tipi su arıtma cihazlarında su, şebekeden doğrudan gelir ve kapalı devre filtrelerden geçerek anında bardağınıza akar. Su beklemez, bayatlamaz ve plastik şişelerin kimyasal risklerini taşımaz. Su arıtma tankları çelik sacdan ve gıdaya uygun membranlardan yapıldığı için hijyeniktir.",
        ],
      },
      {
        type: "heading",
        text: "2. Bütçe ve Maliyet Karşılaştırması (Amortisman Hesabı)",
      },
      {
        type: "paragraph",
        text: "Görünüşte bir damacana su satın almak ekonomik bir harcama gibi gelebilir. Ancak bir yıllık toplam bütçe hesaplandığında durum şöyledir:",
      },
      {
        type: "paragraph",
        text: "<strong>Damacana Su Bütçesi:</strong>",
      },
      {
        type: "list",
        items: [
          "4 kişilik bir aile haftada ortalama 2,5 damacana su tüketir (içme, çay, kahve ve yemek pişirme dahil).",
          "1 damacana suyun ortalama fiyatı günümüzde <strong>70 ₺</strong>'dir.",
          "Haftalık maliyet: 2,5 x 70 = 175 ₺",
          "Aylık maliyet: 175 ₺ x 4 = 700 ₺",
          "<strong>Yıllık Toplam Maliyet: 700 x 12 = 8.400 ₺</strong>",
        ],
      },
      {
        type: "paragraph",
        text: "<strong>Su Arıtma Cihazı Bütçesi:</strong>",
      },
      {
        type: "list",
        items: [
          "Kaliteli ve NSF onaylı bir kapalı kasa Conax su arıtma cihazının satın alma ve montaj maliyeti (ortalama): 4.000 ₺ - 5.500 ₺ arasındadır.",
          "6 ayda bir yapılan ön filtre değişim maliyeti: 400 ₺",
          "1. yılın sonunda yapılan komple filtre değişim maliyeti (ön filtreler + tatlandırıcı + mineral): 800 ₺",
          "<strong>Yıllık Toplam Maliyet (Satın alma + Bakım dahil): ~5.500 ₺ - 6.500 ₺</strong>",
        ],
      },
      {
        type: "blockquote",
        text: "<strong>Sonuç:</strong> Bir su arıtma cihazı, damacana su harcamalarına kıyasla <strong>kendini 8 ila 10 ay içinde tamamen amorti eder.</strong> İkinci yıldan itibaren ise sadece filtre değişim ücreti ödeyeceğiniz için su harcamanız neredeyse %85 oranında düşer.",
      },
      {
        type: "heading",
        text: "3. Kullanım Pratikliği ve Konfor",
      },
      {
        type: "paragraph",
        text: "Damacana su siparişi verenlerin en sık yaşadığı sorunlar pratiklikle ilgilidir:",
      },
      {
        type: "list",
        items: [
          "Evde suyun bitmesi, sipariş vermek için telefon açmak veya uygulamayı kullanmak.",
          "Siparişin gelmesini beklemek, kuryeyi karşılamak ve ağır damacanayı mutfağa taşımak.",
          "Damacana pompalarının zamanla bakteri toplaması ve temizleme zorluğu.",
        ],
      },
      {
        type: "paragraph",
        text: "Su arıtma sistemlerinde ise suyunuz asla bitmez. Mutfak tezgahınızdaki şık, paslanmaz çelik arıtma musluğunu açtığınız anda kesintisiz, tazyikli ve taze suya anında ulaşırsınız. Yemeklerinizi, çayınızı, kahvenizi musluktan akan bu temiz su ile gönül rahatlığıyla yapabilirsiniz.",
      },
      {
        type: "heading",
        text: "4. Çevresel Etkiler",
      },
      {
        type: "paragraph",
        text: "Kullan-at veya çok kullanımlık plastik damacanaların ve pet şişelerin üretimi, lojistiği ve geri dönüşümü devasa karbon ayak izi üretir. Evinizde arıtıcı kullanarak plastik atık miktarınızı sıfıra indirir ve gezegenimizin korunmasına doğrudan katkı sağlarsınız.",
      },
      {
        type: "cta",
        ctaTitle: "Sınırsız ve Ekonomik Temiz Suya Geçin",
        ctaText:
          "Damacana taşıma derdine ve yükselen su fiyatlarına son verin. Kale Su Arıtma'dan bütçe dostu Conax cihazlarını incelemek ve ücretsiz su analizi talep etmek için hemen arayın.",
        ctaLabel: "📞 Detaylı Amortisman Analizi İçin Arayın",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}