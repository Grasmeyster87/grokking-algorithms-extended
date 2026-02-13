const fs = require("fs");

// объект с ключами и количеством элементов
const config = {
  simple_list: 5,
  list_with_10_items: 10,
  list_with_100_items: 100,
  list_with_1000_items: 1000,
};

// функция для генерации массива чисел от 1 до N
function generateArray(n) {
  return Array.from({length: n}, () => Math.floor(Math.random() * 3000));
}

// создаём итоговый объект с массивами
const data = {}

for (const [key, count] of Object.entries(config)){
  data[key] = generateArray(count);
}

// записываем в JSON‑файл


const jsonContent = JSON.stringify(data, null, 2);

fs.writeFileSync("./JS/grokking_algorithms_book/01_introduction_to_algorithms/items.json", jsonContent);

console.log("Файл items.json успешно создан!");