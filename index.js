// pyjar
// Python-inspired utilities for JavaScript

// print()
// Python: print("Hello")
function print(...args) {
  console.log(...args);
}

// len()
// Python: len([1, 2, 3])
function len(value) {
  if (value == null) {
    throw new TypeError("len() argument cannot be null or undefined");
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size;
  }

  if (typeof value === "object") {
    return Object.keys(value).length;
  }

  throw new TypeError("object has no len()");
}

// range()
// Python:
// range(5)
// range(2, 5)
// range(2, 10, 2)
function range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === 0) {
    throw new RangeError("range() step cannot be zero");
  }

  const result = [];

  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}

// enumerate()
// Python:
// for index, value in enumerate(items):
//     ...
function enumerate(iterable, start = 0) {
  return Array.from(iterable).map((value, index) => [
    index + start,
    value
  ]);
}

// zip()
// Python:
// zip(names, ages)
function zip(...iterables) {
  const arrays = iterables.map(item => Array.from(item));

  if (arrays.length === 0) {
    return [];
  }

  const length = Math.min(
    ...arrays.map(array => array.length)
  );

  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(
      arrays.map(array => array[i])
    );
  }

  return result;
}

// sum()
// Python: sum([1, 2, 3])
function sum(iterable, start = 0) {
  return Array.from(iterable).reduce(
    (total, value) => total + value,
    start
  );
}

// min()
// Python: min([3, 1, 2])
function min(iterable) {
  return Math.min(...Array.from(iterable));
}

// max()
// Python: max([3, 1, 2])
function max(iterable) {
  return Math.max(...Array.from(iterable));
}

// sorted()
// Python:
// sorted([3, 1, 2])
// sorted(items, key=lambda x: x.age)
function sorted(iterable, key = null, reverse = false) {
  const result = Array.from(iterable);

  result.sort((a, b) => {
    const x = key ? key(a) : a;
    const y = key ? key(b) : b;

    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });

  if (reverse) {
    result.reverse();
  }

  return result;
}

// reversed()
// Python: reversed([1, 2, 3])
function reversed(iterable) {
  return Array.from(iterable).reverse();
}

// abs()
// Python: abs(-10)
function abs(value) {
  return Math.abs(value);
}

// any()
// Python: any([false, false, true])
function any(iterable, predicate = Boolean) {
  return Array.from(iterable).some(predicate);
}

// all()
// Python: all([true, true, true])
function all(iterable, predicate = Boolean) {
  return Array.from(iterable).every(predicate);
}

// Dictionary helpers

// keys()
// Python: dictionary.keys()
function keys(obj) {
  return Object.keys(obj);
}

// values()
// Python: dictionary.values()
function values(obj) {
  return Object.values(obj);
}

// items()
// Python: dictionary.items()
function items(obj) {
  return Object.entries(obj);
}

// get()
// Python: dictionary.get("name", "Unknown")
function get(obj, key, defaultValue = null) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  }

  return defaultValue;
}

// List helpers

// append()
// Python: list.append(value)
function append(array, value) {
  array.push(value);
  return array;
}

// extend()
// Python: list.extend(values)
function extend(array, values) {
  array.push(...values);
  return array;
}

// pop()
// Python: list.pop()
function pop(array, index = array.length - 1) {
  if (index < 0) {
    index = array.length + index;
  }

  return array.splice(index, 1)[0];
}

// Type checking

// Python:
// isinstance(value, int)
// isinstance(value, list)
function isinstance(value, type) {
  switch (type) {
    case "int":
      return Number.isInteger(value);

    case "float":
      return typeof value === "number" &&
        !Number.isInteger(value);

    case "number":
      return typeof value === "number";

    case "str":
      return typeof value === "string";

    case "bool":
      return typeof value === "boolean";

    case "list":
      return Array.isArray(value);

    case "dict":
      return (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      );

    case "null":
      return value === null;

    case "undefined":
      return value === undefined;

    default:
      return value instanceof type;
  }
}

// String helpers

function startswith(string, prefix) {
  return string.startsWith(prefix);
}

function endswith(string, suffix) {
  return string.endsWith(suffix);
}

// Export API

module.exports = {
  print,
  len,
  range,
  enumerate,
  zip,
  sum,
  min,
  max,
  sorted,
  reversed,
  abs,
  any,
  all,
  keys,
  values,
  items,
  get,
  append,
  extend,
  pop,
  isinstance,
  startswith,
  endswith
};
