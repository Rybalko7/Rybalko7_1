# Инструкция по деплою на GitHub Pages

## Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на https://github.com
2. Нажмите **New** (создать репозиторий)
3. Назовите репозиторий, например: `portfolio`
4. Сделайте репозиторий **Public**
5. Нажмите **Create repository**

## Шаг 2: Инициализируйте Git и запушьте код

Откройте терминал в папке проекта и выполните команды:

```bash
cd c:\Users\EarthWalker\Desktop\Alexandr\portfolio

# Инициализация Git
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit - portfolio project"

# Создание главной ветки
git branch -M main

# Добавление удаленного репозитория (замените YOUR_USERNAME на ваш логин GitHub)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Отправка кода на GitHub
git push -u origin main
```

## Шаг 3: Настройте GitHub Pages

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (Настройки)
3. В левом меню выберите **Pages**
4. В разделе **Build and deployment**:
   - **Source**: выберите `Deploy from a branch`
   - **Branch**: выберите `gh-pages` и нажмите **Save**

## Шаг 4: Задеплойте проект

Вернитесь в терминал и выполните:

```bash
npm run deploy
```

После успешного деплоя вы увидите ссылку вида:
```
https://YOUR_USERNAME.github.io/portfolio/
```

## Шаг 5: Проверьте сайт

1. Перейдите по ссылке GitHub Pages
2. Проверьте, что все изображения загружаются
3. Проверьте работу всех разделов

## Обновление сайта

После любых изменений в коде:

```bash
git add .
git commit -m "Описание изменений"
git push
npm run deploy
```

## Примечания

- Если изображения не отображаются, проверьте пути в файле `src/lib/data.ts`
- Для изменения текстов отредактируйте файл `src/lib/data.ts`
- Для добавления новых фотографий:
  1. Скопируйте изображения в `public/images/`
  2. Добавьте новые записи в массив `photos` в `src/lib/data.ts`

---

## Контакты для поддержки

Если возникли проблемы:
- Telegram канал: https://t.me/pulse_stream
- Telegram профиль: https://t.me/sany_rybalko
