// utils/helpers.js

// Вспомогательные функции, которые не попадают под конкретные утилиты

export const generateUniqueId = () => {
    // Генерация уникального идентификатора
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };
  
  export const capitalizeString = (str) => {
    // Преобразование первой буквы строки в верхний регистр
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Дополнительные вспомогательные функции
  