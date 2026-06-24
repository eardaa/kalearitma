import styles from "./Stories.module.css";

export default function Stories() {
  return (
    <div className={styles.storySection} id="hikayeler">
      <div className={styles.storySectionInner}>
        <div className="section-header">
          <div className="section-label">Gerçek Deneyimler</div>
          <h2>Komşularınızın su arıtma hikayeleri</h2>
        </div>
        <div className={styles.storyGrid}>
          <div className={styles.storyCard}>
            <span className={`${styles.storyBadge} ${styles.sbProblem}`}>Sorun</span>
            <h3>Kireç lekeleri ve bozulan çay tadı</h3>
            <p>
              {`Isparta'nın sert suyu yüzünden çaydanlık sürekli`}
              kireçleniyor, çayın rengi ve tadı bozuluyordu.
            </p>
          </div>
          <div className={styles.storyCard}>
            <span className={`${styles.storyBadge} ${styles.sbSolution}`}>Çözüm</span>
            <h3>Conax Crypto ile 6 aşamalı filtrasyon</h3>
            <p>
              Mutfağa takılan tezgah altı cihazla su yumuşadı. Takçevir
              filtre sayesinde 6 ayda bir kolayca filtre değişiyor.
            </p>
          </div>
          <div className={styles.storyCard}>
            <span className={`${styles.storyBadge} ${styles.sbResult}`}>Sonuç</span>
            <h3>{`"Damacana masrafımız sıfırlandı"`}</h3>
            <p>
              İlk ay faturayla birlikte damacana giderinin olmadığını
              gördük. Su faturasına aylık sadece 15 ₺ yansıdı. Çayımızın
              lezzeti bile değişti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}