const py = require("./index");

// print
py.print("Testing pyjar!");

// len
console.assert(
  py.len([1, 2, 3]) === 3
);

// range
console.assert(
  JSON.stringify(py.range(5)) ===
  JSON.stringify([0, 1, 2, 3, 4])
);

// range with start
console.assert(
  JSON.stringify(py.range(2, 5)) ===
  JSON.stringify([2, 3, 4])
);

// range with step
console.assert(
  JSON.stringify(py.range(0, 10, 2)) ===
  JSON.stringify([0, 2, 4, 6, 8])
);

// sum
console.assert(
  py.sum([1, 2, 3, 4]) === 10
);

// min
console.assert(
  py.min([3, 1, 2]) === 1
);

// max
console.assert(
  py.max([3, 1, 2]) === 3
);

// sorted
console.assert(
  JSON.stringify(py.sorted([3, 1, 2])) ===
  JSON.stringify([1, 2, 3])
);

// reversed
console.assert(
  JSON.stringify(py.reversed([1, 2, 3])) ===
  JSON.stringify([3, 2, 1])
);

// enumerate
console.assert(
  JSON.stringify(
    py.enumerate(["a", "b"])
  ) ===
  JSON.stringify([
    [0, "a"],
    [1, "b"]
  ])
);

// zip
console.assert(
  JSON.stringify(
    py.zip([1, 2], ["a", "b"])
  ) ===
  JSON.stringify([
    [1, "a"],
    [2, "b"]
  ])
);

// isinstance
console.assert(
  py.isinstance(10, "int") === true
);

console.assert(
  py.isinstance("hello", "str") === true
);

console.assert(
  py.isinstance([], "list") === true
);

console.log("✅ All pyjar tests passed!");
