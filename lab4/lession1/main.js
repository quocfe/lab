  // promise trên chỉ resolve 1 lần vì vậy chỉ  console.log('number', 2)

let promise = new Promise(
  // excutor
  function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000)
  }
);

promise
  .then(
    function (number) {
      console.log('number', number)
    } 
  )
  .finally(
    function () {
      console.log('all')
    }
  )
