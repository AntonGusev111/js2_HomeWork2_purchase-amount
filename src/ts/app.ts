import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));
console.log(cart.summ());
console.log(cart.summDiscount(10))
cart.dell(1009);

console.log(cart.items);
