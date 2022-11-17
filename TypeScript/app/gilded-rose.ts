export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item: Item = this.items[i];
      const itemName: string = item.name;
      let itemQuality: number = item.quality;
      let itemSellIn: number = item.sellIn;

      if (['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'].includes(itemName) && itemQuality < 50) {
        if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
          if (itemSellIn <= 5) {
            itemQuality += 3;
          } else if (itemSellIn <= 10) {
            itemQuality += 2;
          }

          if (itemQuality > 50) {
            itemQuality = 50;
          }
        } else {
          itemQuality++;
        }
      } else if (itemQuality > 0 && itemName !== 'Sulfuras, Hand of Ragnaros') {
        itemName.startsWith('Conjured') ? itemQuality -= 2 : itemQuality--;
      }

      if (itemName !== 'Sulfuras, Hand of Ragnaros') {
        itemSellIn--;
      }

      if (itemSellIn < 0) {
        if (itemName === 'Aged Brie' && itemQuality < 50) {
          itemQuality++;
        } else if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
          itemQuality = 0;
        } else if (itemQuality > 0 && itemName !== 'Sulfuras, Hand of Ragnaros') {
          itemQuality--;
        }
      }

      item.quality = itemQuality;
      item.sellIn = itemSellIn;
    }

    return this.items;
  }
}
