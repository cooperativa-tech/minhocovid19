import React from "react";

import styles from "./index.module.css";
import Button from "../Button";
import Themes from "../Themes";

export default function NewsletterForm() {
  return (
    <form
      className={styles.root}
      action="https://aaum.us20.list-manage.com/subscribe/post?u=abf6976490cb5859c6e9cef6a&amp;id=e0d715afe6"
      method="POST"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
    >
      <div className={styles.inner}>
        <input
          placeholder="O seu email"
          type="email"
          id="MCE-email"
          name="EMAIL"
          required
        />
        <div className={styles.hidden} aria-hidden="true">
          <input
            type="text"
            name="b_abf6976490cb5859c6e9cef6a_23ca269941"
            tabIndex="-1"
          />
        </div>

        <button
          className={styles.button}
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
        >
          Submeter
        </button>
      </div>

      <div className={styles.smallMobileButton}>
        <Button type="submit" theme={Themes.neonCarrot}>
          Submeter
        </Button>
      </div>
    </form>
  );
}
