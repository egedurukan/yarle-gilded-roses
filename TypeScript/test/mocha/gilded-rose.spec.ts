import { expect } from 'chai';
import 'mocha';
import { GildedRose } from '../../app/gilded-rose';
import { Item } from '../../app/item';

describe('Gilded Rose', () => {
  it('should return with Array', () => {
    const gildedRose = new GildedRose([new Item('Cactus', 10, 30, false)]);
    const items = gildedRose.updateQuality();
    expect(items).deep.equal(gildedRose.items);
  });
});

describe('Item', () => {
  it('should decrease quality by 1', () => {
    const gildedRose = new GildedRose([new Item('Cactus', 10, 30, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(29);
  });

  it('should decrease quality by 2', () => {
    const gildedRose = new GildedRose([new Item('Conjured Cactus', 10, 30, true)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(28);
  });

  it('should increase quality by 1', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 30, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(31);
  });

  it('should decrease sellIn by 1', () => {
    const gildedRose = new GildedRose([new Item('Cactus', 10, 30, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
  });

  it('should not change quality for Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it('should increase quality for Backstage pass by 2', () => {
    const gildedRose = new GildedRose([new Item('Backstage pass', 10, 40, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(42);
  });

  it('should increase quality for Backstage pass by 3', () => {
    const gildedRose = new GildedRose([new Item('Backstage pass', 5, 40, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(43);
  });

  it('should increase quality for Backstage pass to 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage pass', 5, 48, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it('should not decrease quality below zero', () => {
    const gildedRose = new GildedRose([new Item('Magnolia', 5, 0, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});
