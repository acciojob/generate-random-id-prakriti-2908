function makeid(l) {
  // write your code here
	let s = "";
  let v = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let length = v.length;
  for(let i=0;i<l;i++){
      let index = Math.floor((Math.random())*length);
      s+=v[index];
  }
  return s;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
