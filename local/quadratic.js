const quadraticEquation = (a, b, c) => {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return 'There are no roots'; // ['x1','x2']
  } else {
    let ans = [];
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    ans.push(x1, x2);
    return ans;
  }
};
//let test = [10, -2, -3]

console.log(quadraticEquation(3, 4, 0));
