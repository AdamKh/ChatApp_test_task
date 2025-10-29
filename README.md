# Task Tracker

Для просмотра production версии перейдите по ссылке: https://chat-app-test-task.vercel.app/

## Запуск локально

Короткая инструкция для Windows (PowerShell):

1. Установите зависимости:

```powershell
npm install
```

2. Запустить в режиме разработки (hot-reload):

```powershell
npm run dev
```

3. Собрать production-версию:

```powershell
npm run build
```

4. Предпросмотр собранной версии:

```powershell
npm run preview
```

Файлы конфигурации и основные папки:

- Исходники: `src/`
- Redux store: `src/app/store`
- Фича задач: `src/features/TaskList`
