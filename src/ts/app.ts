import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

cart.add(new Book(1025, 'War and Piece', 'Lev Tolstoy', 2000, 1225, 1));
console.log(cart.items);
cart.add(new Book(1025, 'War and Piece', 'Lev Tolstoy', 2000, 1225, 1));
console.log(cart.items);
cart.add(new Smartphone(3, 'Nokia 3110', 5000, 1));
cart.add(new Smartphone(3, 'Nokia 3110', 5000, 1));
console.log(cart.items);
cart.deleteProduct(1025);
console.log(cart.items);
cart.reduceQuantityofSmartphones(3);
console.log(cart.items);
