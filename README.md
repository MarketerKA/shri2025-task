# Яндекс.Дом

Современное React-приложение для управления умным домом, построенное с использованием Vite.

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Header.jsx      # Компонент заголовка
│   ├── Main.jsx        # Основной компонент
│   └── Event.jsx       # Компонент события/устройства
├── data/               # Данные приложения
│   └── tabs.js         # Данные для вкладок устройств
├── styles/             # Стили
│   ├── index.css       # Главный CSS файл
│   ├── reset.css       # Сброс стилей
│   ├── styles.css      # Основные стили
│   └── fonts.css       # Шрифты
└── main.jsx            # Точка входа
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте браузер и перейдите по адресу `http://localhost:3000`

## Доступные команды

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта для продакшена
- `npm run preview` - Предварительный просмотр собранного проекта
- `npm run lint` - Проверка кода с помощью ESLint

## Технологии

- React 18
- Vite
- CSS3
- JavaScript ES6+
