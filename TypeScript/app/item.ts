export class Item {
  name: string;
  sellIn: number;
  quality: number;
  conjured: boolean;

  constructor(name, sellIn, quality, conjured) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured;
  }

  increaseQuality(amount: number = 1) {
    if (this.quality < 50) {
      this.quality += amount;
    }
  }

  decreaseQuality(amount: number = 1) {
    if (this.conjured) {
      amount++;
    }

    if (this.quality > 0) {
      this.quality -= amount;
    }
  }

  decreaseSellIn() {
    this.sellIn--;
  }

  updateQuality() {
    switch (this.name) {
      case 'Aged Brie':
        this.increaseQuality();
        this.decreaseSellIn();
        break;

      case 'Backstage pass':
        if (this.sellIn <= 5) {
          this.increaseQuality(3);
        } else if (this.sellIn <= 10) {
          this.increaseQuality(2);
        } else {
          this.increaseQuality();
        }

        if (this.quality > 50) this.quality = 50;

        break;

      case 'Sulfuras, Hand of Ragnaros':
        this.decreaseSellIn();
        break;

      default:
        this.decreaseQuality();
        this.decreaseSellIn();
    }
  }
}
