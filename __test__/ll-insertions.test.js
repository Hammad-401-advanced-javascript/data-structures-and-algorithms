const insertion = require('../linkedlist/linked-list');


describe('Linked list challenge', () => {

  it('Can successfully add a node to the end of the linked list',()=>{
    let ll = new insertion();
    let value = 'test 1';
    ll.insert(value);
    let appendVal = 'test End';
    ll.append(appendVal);
    let currentVal = ll.head;
    while(currentVal.next !== null){
      currentVal = currentVal.next;
    }
    expect(currentVal.value).toEqual(appendVal);
  });

 

});