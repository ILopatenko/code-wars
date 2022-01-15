
//https://www.codewars.com/kata/54da539698b8a2ad76000228
//Take a Ten Minute Walk
const test = ['n','n','n','s','n','s','n','s','n','s']
const isValidWalk=(walk) =>{
    let ns = 0, ew = 0; 
    if (walk.length!==10){
      return false
    }else {if(walk.length === 10){
      for (let i of walk) { 
        if (i == 'n') ns += 1; 
        if (i == 's') ns -= 1; 
        if (i == 'e') ew += 1; 
        if (i == 'w') ew -= 1; 
      } }
    }
  return ns === 0 && ew === 0; 
  }

  let res=isValidWalk(test)
  console.log(res);