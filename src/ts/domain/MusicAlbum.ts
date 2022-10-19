import Buyable from './Buyable.js';

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
    ) { }
}