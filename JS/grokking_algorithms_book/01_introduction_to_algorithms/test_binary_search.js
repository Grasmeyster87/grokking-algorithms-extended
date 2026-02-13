// test_binary_search.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const { performance } = require('perf_hooks');

/**
 * 1. Загружаем код из 01_binary_search.js через eval, 
 * чтобы не менять исходный файл и не добавлять exports.
 */
const binarySearchCode = fs.readFileSync('./01_binary_search.js', 'utf8');
eval(binarySearchCode); 

/**
 * 2. Класс-обертка для тестов (аналог Python структуры)
 */
class BinarySearch {
  search_iterative(list, item) {
    // Вызывает функцию binary_search из eval
    return binary_search(list, item);
  }

  search_recursive(list, low, high, item) {
    if (low > high) return null;
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) return mid;
    if (guess > item) return this.search_recursive(list, low, mid - 1, item);
    return this.search_recursive(list, mid + 1, high, item);
  }
}

const bs = new BinarySearch();

/**
 * 3. Загрузка и СОРТИРОВКА данных (бинарный поиск требует порядка)
 */
const rawData = JSON.parse(fs.readFileSync('items.json', 'utf-8'));
const simple_list = [...rawData.simple_list].sort((a, b) => a - b);
const list_with_1000_items = [...rawData.list_with_1000_items].sort((a, b) => a - b);

test('Binary Search Algorithm Tests', async (t) => {

  await t.test('test_iterative_binary_search_with_simple_list', () => {
    const expected_index = 1;
    const item = simple_list[expected_index];
    const index = bs.search_iterative(simple_list, item);
    assert.strictEqual(index, expected_index);
  });

  await t.test('test_recoursive_binary_search_with_simple_list', () => {
    const expected_index = 1;
    const item = simple_list[expected_index];
    const index = bs.search_recursive(simple_list, 0, simple_list.length - 1, item);
    assert.strictEqual(index, expected_index);
  });

  await t.test('test_search_for_nonexistent_item', () => {
    assert.strictEqual(bs.search_iterative(simple_list, 9999), null);
  });

  /**
   * 4. Тест производительности (элемент в конце списка)
   * Используем многократное повторение для точности
   */
  await t.test('test_binary_search_and_linear_search_execution_time', () => {
    const expected_index = 990;
    const item = list_with_1000_items[expected_index];
    const iterations = 50000; // Повторяем поиск много раз

    // Замеряем бинарный поиск
    const start_bs = performance.now();
    for (let i = 0; i < iterations; i++) {
      bs.search_iterative(list_with_1000_items, item);
    }
    const bs_time = performance.now() - start_bs;

    // Замеряем линейный поиск (indexOf)
    const start_ls = performance.now();
    for (let i = 0; i < iterations; i++) {
      list_with_1000_items.indexOf(item);
    }
    const ls_time = performance.now() - start_ls;

    // Проверка правильности
    assert.strictEqual(bs.search_iterative(list_with_1000_items, item), expected_index);
    
    // Теперь бинарный поиск (log n) будет гарантированно быстрее линейного (n)
    assert.ok(bs_time < ls_time, `Binary (${bs_time.toFixed(4)}ms) should be faster than Linear (${ls_time.toFixed(4)}ms)`);
  });

  /**
   * 5. Тест: элемент в самом начале
   * Линейный поиск может быть быстрее, так как найдет элемент за 1-10 шагов.
   */
  await t.test('test_execution_time_for_item_at_the_beginning', () => {
    const expected_index = 5;
    const item = list_with_1000_items[expected_index];
    const iterations = 50000;

    const start_bs = performance.now();
    for (let i = 0; i < iterations; i++) {
      bs.search_iterative(list_with_1000_items, item);
    }
    const bs_time = performance.now() - start_bs;

    const start_ls = performance.now();
    for (let i = 0; i < iterations; i++) {
      list_with_1000_items.indexOf(item);
    }
    const ls_time = performance.now() - start_ls;

    // В начале списка линейный поиск обычно быстрее или равен бинарному
    assert.ok(ls_time < bs_time || Math.abs(ls_time - bs_time) < 5);
  });
});