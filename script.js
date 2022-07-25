// document.getElementById("count").innerText = 5

// initialize count as zero
let count = 0

// define variables from HTML document
let countEl = document.getElementById("counter")

let saveEl = document.getElementById("save-el")

let previousEl = document.getElementById("previous-el")

let totalEl = document.getElementById("total-el")

// Create increment function that will be called on increment button click
function increment() {
  count += 1
  countEl.textContent = count
}

// Create total function that will add all passenger counts and log the information


// Create save function that will reset counter and display last logged information
function save() {
  // totalEl.innerHTML = count
  let countStr = count + " - "
  previousEl.textContent += countStr
  saveEl.textContent = count
  count = 0
  countEl.textContent = count
}

// Create reset function that will initialize state
function reset() {
  count = 0
  countStr = ""
  countEl.textContent = count
  saveEl.textContent = countStr
  previousEl.textContent = countStr
}