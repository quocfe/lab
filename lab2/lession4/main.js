// Hoàn thành đoạn mã Javascript phía dưới, yêu cầu sử dụng cú pháp spread 
// operator để có kết quả trả về là một mảng ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut () {
  let fragment = ['to', 'code']
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence 
}

console.log(spreadOut())

