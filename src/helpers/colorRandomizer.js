export default function getRandomHexColor() {
  let color;

  do {
    // Генеруємо випадкові значення червоного, зеленого та синього каналів
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Перетворюємо значення в шістнадцятковий формат
    color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    // Перевіряємо, чи є колір світлим (більше 0xC0C0C0)
    if (parseInt(color.substring(1), 16) >= 0xc0c0c0) {
      break;
    }
  } while (true);

  return color;
}
