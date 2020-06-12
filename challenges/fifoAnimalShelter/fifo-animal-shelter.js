'use strict';

class AnimalShelter{
  constructor(){
    this.cat=[];
    this.dog=[];
  }

  enqueue(animal){
    if(animal==='cat' || animal==='dog'){
      let type={name:animal};
      animal==='cat'? this.cat.push(type) : this.dog.push(type);
    } else {
      return null;
    }
  }


  dequeue(pref){
    if(pref !=='cat' && pref !=='dog'){
      return null;
    } else {
      if(pref ==='cat'){
        this.cat.pop();
        return this.cat;
      }

      else{
        this.dog.pop();
        return this.dog;
      }
    }
  }
}

module.exports = AnimalShelter;