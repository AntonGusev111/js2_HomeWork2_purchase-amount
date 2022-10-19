import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add items to cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));

  expect(cart.items.length).toBe(3);
});

test('amount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));

  expect(cart.summ()).toBe(3811);
});

test('discounted amount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));
  
  expect(cart.summDiscount(10)).toBe(3429.9);
});

test('dell', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));
  cart.dell(1009);
  
  expect(cart.items[2]).toBe(undefined);
});

