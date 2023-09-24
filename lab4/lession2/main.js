// Giải thích điểm khác nhau giữa đoạn code 1 và 2
const axios = require("axios");

//1: sẽ gọi lần lượt url và thực hiện đồng bộ, khi url(1) được call thành công thì đến url(2)
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res)
  }
  return results
}


//2: dùng promise all để gọi tất cả url 1 lần 
async function fetchUrlsParallel(urls) {
  const resuls = await Promise.all(
    urls.map(function(url) {
      return axios.get(url)
    })
  )
  return resuls
}