const input = document.querySelector('input');
const para = document.querySelector('p');

class myArr {
  constructor(arr) {
    this.arr = arr;
    this.new = []
  }

  scramble() {
    for(;this.arr.length > 0;){
      const rand = Math.floor(Math.random() * this.arr.length);
      const temp = this.arr.splice(rand, 1); 
      this.new.push(temp) 
    }
    return this.new.join('');
  }
}

const handleChange = e => {
  e.preventDefault();
  let newArr = new myArr(e.target.value.split(''));
  const scrambled = newArr.scramble();
  para.innerText = scrambled;
}

input.addEventListener('input', handleChange)