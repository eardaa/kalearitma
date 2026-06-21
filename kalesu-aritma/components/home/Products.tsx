import Image from "next/image";
import { products } from "@/lib/products";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <section id="urunler">
      <div className="section-header">
        <div className="section-label">Ürünlerimiz</div>
        <h2>Evinize en uygun arıtma cihazı</h2>
        <p>
          Conax yetkili satıcısı olarak tezgah altı ve tezgah üstü tüm
          {`modelleri Isparta'da kurulum garantisiyle sunuyoruz.`}
        </p>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div
            key={product.slug}
            className={`${styles.productCard} ${product.featured ? styles.featured : ""}`}
          >
            {product.featured && (
              <span className={styles.popularBadge}>En Çok Tercih Edilen</span>
            )}
            <div className={styles.productVisual}>
              <Image
                src={product.imageUrl}
                alt={`Conax ${product.name} su arıtma cihazı`}
                width={300}
                height={200}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
            <div className={styles.productInfo}>
              <span className={styles.tag}>{product.tag}</span>
              <h3>{product.name}</h3>
              <p className={styles.desc}>{product.description}</p>
              <div className={styles.featTags}>
                {product.features.map((feat) => (
                  <span key={feat} className={styles.featTag}>{feat}</span>
                ))}
              </div>
              <span className={styles.guarantee}>✓ Ücretsiz kurulum</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}