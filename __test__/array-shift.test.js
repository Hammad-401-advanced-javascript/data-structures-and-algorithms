'use strict';

const shift = require('../challenges/arrayshift/array-shift');

describe('this test for array-shift',()=>{
  it('give array with add num at middle index the length odd',()=>{
    expect(shift([2,4,6,8,10],22)).toEqual(
      expect.arrayContaining([2,4,6,22,8,10]));
   
  });
  it(' Add num at middle index the length even',()=>{
    expect(shift([2,4,6,8], 12)).toEqual(
      expect.arrayContaining([2,4,12,6,8]));
   
  });
});