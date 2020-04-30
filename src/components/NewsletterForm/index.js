import React from "react";

import styles from "./index.module.css";

export default function NewsletterForm() {
  return (
    <form className={styles.root}>
      <input placeholder="O seu email" />
      <button type="submit">Submeter</button>
    </form>
  );
}
