'use strict';

const linkedList = require('../linkedlist/linked-list');

describe('empty',()=>{
  it('Can successfully instantiate an empty linked list',()=>{
    let test = new linkedList();
    expect(test.toString()).toEqual('empty list');
  });
});

it('Can properly insert into the linked list',()=>{
  let test=new linkedList();
  let value= ' test one';
  expect(test.head.value).toEqual(value);
});

it('The head property will properly point to the first node in the linked list',()=>{
  let test = new linkedList();
  let value='test two';
  test.insert(value);
  expect(test.head.value).toEqual(value);
});

it('Can properly insert multiple nodes into the linked list',()=>{
  let test = new linkedList();
  let value = 'test three';
  let value2='test foure';
  let value3 = 'test five';

  test.insert(value);
  test.insert(value2);
  test.insert(value3);

  expect(test.toString()).toEqual('{ test 5} -> { test 4 } -> { test 3 } -> NULL');
});

it('Will return true when finding a value within the linked list that exists',()=>{
  let test = new linkedList();
  let value = 'test three';
  let value2='test foure';
  let value3 = 'test five';

  test.insert(value);
  test.insert(value2);
  test.insert(value3);

  expect(test.includes('test truthly')).toBeTruthy();
});

it('Will return falsy when finding a value within the linked list that not exists',()=>{
  let test = new linkedList();
  let value = 'test three';
  let value2='test foure';
  let value3 = 'test five';

  test.insert(value);
  test.insert(value2);
  test.insert(value3);

  expect(test.includes('test falsy')).toBeFalsy();

  it('7- Can properly return a collection of all the values that exist in the linked list', ()=>{
    let test = new linkedList();
    let value = 'test 3';
    let value2 = 'test 4';
    let value3 = 'test 5';
    test.insert(value);
    test.insert(value2);
    test.insert(value3);
    expect(test.toString()).toEqual('{ test 5 } -> { test 4 } -> { test 3 } -> NULL');      
  });
});