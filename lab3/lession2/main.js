const arrNum = [1,2,3,4,5,6,7]

const reducer = ((data) =>{
  let result = data.reduce((a , b) => 
    a + b
  ,0)
  return result
})

console.log(reducer(arrNum))