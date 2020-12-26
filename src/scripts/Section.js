export default class Section {
  constructor({items, renderer}, cardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardSelector = document.querySelector(cardSelector);
  }

  addItem() {
    this._items.forEach(item => {
      const card = this._renderer(item);
      this._cardSelector.prepend(card);

    })
  }
}