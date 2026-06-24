export interface Testimonial {
  author: string;
  location: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    author: "İbrahim B.",
    location: "Isparta",
    text: "İlk ay su faturasıyla birlikte damacana masrafımızın olmadığını gördük. Hem bütçemize ciddi katkı sağladı hem de suyun tadı o kadar yumuşak ki çayımızın lezzeti bile değişti.",
  },
  {
    author: "İbrahim K.",
    location: "Isparta",
    text: "Annem böbrek rahatsızlığı yaşıyordu. Doktoru arıtma önerdi. 3 ayda kontrollerinde gözle görülür iyileşme oldu. İyi ki geç kalmamışız.",
  },
  {
    author: "Kadir K.",
    location: "Isparta",
    text: "Kurulumdan sonra gelen arkadaşlarım bu su şişe suyundan daha güzel diyor. Artık marketten su taşımıyorum.",
  },
  {
    author: "Mehmet B.",
    location: "Isparta",
    text: "Isparta suyunun kireçli olduğunu biliyorduk ama bu kadar fark edeceğini beklemiyorduk. Çaydanlığımızda kireç kalmadı.",
  },
  {
    author: "Ahmet İ.",
    location: "Isparta",
    text: "Kurulum ekibi çok profesyoneldi. Cihaz sessiz çalışıyor, suyu gerçekten farklı. Tavsiye ederim.",
  },
  {
    author: "Cihan A.",
    location: "Isparta",
    text: "Ofisimiz için Business modeli aldık. Çalışanlar pet şişe taşımıyor, masraflarımız azaldı.",
  },
];