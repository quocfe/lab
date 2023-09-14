const ul = document.querySelector("ul")

const result = {
  success: ["max-length", "max-length", "max-length"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
}

function makeList (arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems
}

const failureList = makeList(result.failure);

failureList.forEach((item) => {
  ul.innerHTML += item
})



