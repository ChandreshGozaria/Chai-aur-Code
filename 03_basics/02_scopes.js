// var c = 3000;
let a = 4000;
if (true) {
  let a = 10;
  const b = 20;
  var c = 3009989;
  // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("OUTTER: ", c);

function one() {
  const username = "classic";
  function two() {
    const website = "youtube";
	// console.log(username);
  }
//   console.log(website);
  two()
}
// one()
if (true) {
	const username = "classic";
	if(username === "classic"){
		const website = " youtube"
		// console.log(username + website);
	}
	// console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++


console.log(addOne(5))
function addOne(num){
	return num + 1;
}


addTwo(5)
const addTwo = function(num){
	return num + 1;
}
