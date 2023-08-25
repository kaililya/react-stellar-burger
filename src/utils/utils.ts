export const tranlateStatus = (status:string| undefined):undefined | "Готов" | "Создан" | "Готовится" | "Неизвестно" => {
  switch (status) {
    case 'done':
      return 'Готов';
    case 'created':
      return 'Создан';
    case 'pending':
      return 'Готовится';
    default:
      return 'Неизвестно';
  }
};