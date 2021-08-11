import Cart from '../service/Cart';
import Book from '../domain/Book';
import Smartphone from '../domain/Smartphone';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('should return amount', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'Капитал', 'Карл Маркс', 3000, 600, 1);
  const book2 = new Book(2, 'Капитал2', 'Карл Маркс', 3000, 600, 1);
  cart.add(book1);
  cart.add(book2);
  expect(cart.amountWithoutDiscount()).toBe(6000);
  expect(cart.amountWithDiscount(5)).toBe(5700);
  cart.deleteProduct(1);
  expect(cart.items.length).toBe(1);
})

test('should reduce quantity of smartphones', () => {
  const cart = new Cart();
  const tel1 = new Smartphone(3, 'Nokia 3110', 5000, 1);
  const tel2 = new Smartphone(3, 'Nokia 3110', 5000, 1);
  cart.add(tel1);
  cart.add(tel2);
  expect(cart.items.length).toBe(1);
  cart.reduceQuantityofSmartphones(3);
  expect(cart.items.length).toBe(1);
})

test('should return error', () => {
  const cart = new Cart();
  const tel1 = new Smartphone(3, 'Nokia 3110', 5000, 1);
  const tel2 = new Smartphone(3, 'Nokia 3110', 5000, 1);
  cart.add(tel1);
  cart.add(tel2);
  expect(cart.items.length).toBe(1);
  expect(() => cart.reduceQuantityofSmartphones(1)).toThrow(new Error('Данного товара нет в корзине'));
})


