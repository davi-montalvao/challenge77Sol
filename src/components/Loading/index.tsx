import LoadingLogo from "../../assets/loading.svg"
import Image from 'next/image'

import styles from "./styles.module.scss";


export function Loading() {
  return (
    <div className={styles.loading}>
      <Image
        src={LoadingLogo}
        alt="loading"
        width={300}
      />
    </div>
  );
};
