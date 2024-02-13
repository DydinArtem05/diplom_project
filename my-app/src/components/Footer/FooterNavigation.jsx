// components/Footer/FooterNavigation.js
import React from 'react';
import styles from '../../styles/Footer.module.css'

const FooterNavigation = () => {
  return (
    <div className={styles.footerInfo}>
      <h4>Быстрые ссылки</h4>
      <p><a href="/">Главная</a></p>
      <p><a href="/catalog">Каталог</a></p>
      <p><a href="/contact">Контакты</a></p>
      <p><a href="/terms">Условия оказания услуг</a></p>
      <p><a href="/privacy">Политика безопасности</a></p>
    </div>
  );
};

export default FooterNavigation;
