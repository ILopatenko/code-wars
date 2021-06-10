//#1 https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript

const overTheRoad = (h, l) => {
    let odd = [];
    let even = [];
    for (let i = 1; i <= 2 * l; i++){
        i % 2 === 0 ? even.push(l*2+2-i) : odd.push(i);
    }
    h % 2 === 0 ? odd[even.indexOf(h)] : even[odd.indexOf(h)];
}
  
overTheRoad(5, 12)