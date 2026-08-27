= pyjar
:toc:
:source-highlighter: highlight.js

Python-inspired utilities for JavaScript.

== Installation

Install pyjar from npm:

[source,bash]
npm install pyjar

Then require it in your JavaScript project:

[source,javascript]
const pyjar = require("pyjar");

You can also destructure the functions you need:

[source,javascript]
const {
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
} = require("pyjar");

== Usage

=== print()

A Python-style wrapper around JavaScript's console.log().

[source,javascript]
print("Hello");
print("Value:", 42);

=== len()

Returns the length or size of a value.

Supports strings, arrays, Map, Set, and objects.

[source,javascript]

len([1, 2, 3]);
// 3

len("hello");
// 5

len(new Set([1, 2, 3]));
// 3

len({ name: "Alice", age: 25 });
// 2

Passing null or undefined throws a TypeError.

=== range()

Creates an array of numbers using Python-style range syntax.

[source,javascript]

range(5);
// [0, 1, 2, 3, 4]

range(2, 5);
// [2, 3, 4]

range(2, 10, 2);
// [2, 4, 6, 8]

range(5, 0, -1);
// [5, 4, 3, 2, 1]

The step value cannot be 0.

=== enumerate()

Creates index-value pairs from an iterable.

[source,javascript]
enumerate(["apple", "banana", "orange"]);
// [
// [0, "apple"],
// [1, "banana"],
// [2, "orange"]
// ]

A custom starting index can be provided:

[source,javascript]
enumerate(["apple", "banana"], 1);
// [
// [1, "apple"],
// [2, "banana"]
// ]

=== zip()

Combines multiple iterables into arrays of corresponding values.

[source,javascript]

zip(
["Alice", "Bob"],
[20, 25]
);

// [
// ["Alice", 20],
// ["Bob", 25]
// ]

The result stops at the shortest iterable.

=== sum()

Calculates the sum of values in an iterable.

[source,javascript]

sum([1, 2, 3]);
// 6

sum([1, 2, 3], 10);
// 16

The second argument specifies the starting value.

=== min() and max()

Find the smallest or largest value in an iterable.

[source,javascript]

min([3, 1, 2]);
// 1

max([3, 1, 2]);
// 3

=== sorted()

Returns a sorted copy of an iterable without modifying the original.

[source,javascript]
sorted([3, 1, 2]);
// [1, 2, 3]

Use reverse to sort in descending order:

[source,javascript]
sorted([3, 1, 2], null, true);
// [3, 2, 1]

A key function can be supplied for custom sorting:

[source,javascript]

const users = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 20 },
{ name: "Charlie", age: 25 }
];

sorted(users, user => user.age);

=== reversed()

Returns a reversed copy of an iterable.

[source,javascript]
reversed([1, 2, 3]);
// [3, 2, 1]

=== abs()

Returns the absolute value of a number.

[source,javascript]
abs(-10);
// 10

=== any()

Returns true if at least one value is truthy.

[source,javascript]
any([false, false, true]);
// true

A predicate can also be provided:

[source,javascript]
any([1, 2, 3], value => value > 2);
// true

=== all()

Returns true if every value is truthy.

[source,javascript]
all([true, true, true]);
// true

A predicate can also be provided:

[source,javascript]
all([2, 4, 6], value => value % 2 === 0);
// true

== Dictionary Helpers

=== keys()

Returns the keys of an object.

[source,javascript]

keys({
name: "Alice",
age: 25
});

// ["name", "age"]

=== values()

Returns the values of an object.

[source,javascript]

values({
name: "Alice",
age: 25
});

// ["Alice", 25]

=== items()

Returns an object's key-value pairs.

[source,javascript]

items({
name: "Alice",
age: 25
});

// [
// ["name", "Alice"],
// ["age", 25]
// ]

=== get()

Gets a property from an object and returns a default value when it does not exist.

[source,javascript]

const user = {
name: "Alice"
};

get(user, "name", "Unknown");
// "Alice"

get(user, "age", 0);
// 0

== List Helpers

=== append()

Appends a value to an array.

[source,javascript]

const numbers = [1, 2];

append(numbers, 3);

console.log(numbers);
// [1, 2, 3]

The modified array is returned.

=== extend()

Adds multiple values to an array.

[source,javascript]

const numbers = [1, 2];

extend(numbers, [3, 4]);

console.log(numbers);
// [1, 2, 3, 4]

=== pop()

Removes and returns an item from an array.

[source,javascript]

const numbers = [1, 2, 3];

pop(numbers);
// 3

An index can be supplied:

[source,javascript]

const numbers = [10, 20, 30];

pop(numbers, 0);
// 10

Negative indexes are supported:

[source,javascript]

const numbers = [10, 20, 30];

pop(numbers, -1);
// 30

== Type Checking

=== isinstance()

Provides Python-style type checking for common JavaScript values.

[source,javascript]

isinstance(10, "int");
// true

isinstance(10.5, "float");
// true

isinstance(10, "number");
// true

isinstance("hello", "str");
// true

isinstance(true, "bool");
// true

isinstance([1, 2], "list");
// true

isinstance({ name: "Alice" }, "dict");
// true

isinstance(null, "null");
// true

isinstance(undefined, "undefined");
// true

Supported type names:

int
float
number
str
bool
list
dict
null
undefined

For other values, isinstance() uses JavaScript's instanceof.

== String Helpers

=== startswith()

Checks whether a string begins with a specified prefix.

[source,javascript]

startswith("hello world", "hello");
// true

startswith("hello world", "world");
// false

=== endswith()

Checks whether a string ends with a specified suffix.

[source,javascript]

endswith("hello world", "world");
// true

endswith("hello world", "hello");
// false

== Complete Example

[source,javascript]

const {
print,
range,
enumerate,
sum,
sorted,
isinstance,
startswith
} = require("pyjar");

const numbers = [5, 2, 8, 1, 3];

print("Numbers:", numbers);
print("Range:", range(5));
print("Sum:", sum(numbers));
print("Sorted:", sorted(numbers));

for (const [index, value] of enumerate(numbers)) {
print(index, value);
}

print(isinstance(numbers, "list"));
print(startswith("pyjar", "py"));

== API

[cols="1,2", options="header"]
|===
| Function | Description

| print() | Print values to the console
| len() | Get the length or size of a value
| range() | Generate a sequence of numbers
| enumerate() | Generate index-value pairs
| zip() | Combine multiple iterables
| sum() | Calculate the sum of an iterable
| min() | Find the minimum value
| max() | Find the maximum value
| sorted() | Return a sorted copy of an iterable
| reversed() | Return a reversed copy of an iterable
| abs() | Return the absolute value
| any() | Check whether any value is truthy or matches a predicate
| all() | Check whether all values are truthy or match a predicate
| keys() | Get the keys of an object
| values() | Get the values of an object
| items() | Get the entries of an object
| get() | Get an object property with a default value
| append() | Append a value to an array
| extend() | Extend an array with multiple values
| pop() | Remove and return an array value
| isinstance() | Perform Python-style type checking
| startswith() | Check whether a string starts with a prefix
| endswith() | Check whether a string ends with a suffix
|===

== Project Structure

The npm project currently contains the main library, package metadata, tests, and package archive. {"fallbackMarkdown":"(GitHub
)","reference":{"matched_text":"","prefix":null,"start_idx":7794,"end_idx":7811,"safe_urls":["https://github.com/cloudberrypitech/pyjar"],"refs":[],"alt":"(GitHub
)","prompt_text":null,"type":"grouped_webpages","items":[{"title":"GitHub - cloudberrypitech/pyjar · GitHub","url":"https://github.com/cloudberrypitech/pyjar","attribution":"GitHub","pub_date":null,"snippet":null,"thumbnail_url":"https://images.openai.com/static-rsc-1/9Ug32kFLNqnxErwTz82uzn6cjUWDSbOn9OnKqLVbz2aLElHeVgTL1HazSnOtRU46x5zOq1XM3hbwwNJte0z6OKtVKuxsl_7d4nRsDE8DsUS8TAR-9Qe7u0yWd7p_vIhVb7-nKgF4hUis1at3qz9wtQE6JMDNCVTfaq909WDiYacyL7Jc6IcsUMNON3W-jQJc","attribution_segments":null,"supporting_websites":[],"refs":[{"turn_index":0,"ref_type":"view","ref_index":0}],"hue":null,"attributions":null}],"fallback_items":null,"style":null,"status":"done","error":null},"showLoginRequiredCard":false}

[source,text]
pyjar/
├── index.js
├── package.json
├── test.js
├── pyjar-1.0.0.tgz
└── .github/
└── workflows/

== Running Tests

Run the project's test file with Node.js:

[source,bash]
node test.js

== Using pyjar in a Project

After installing the package, import the utilities you need:

[source,javascript]

const { print, len, range } = require("pyjar");

print(len([1, 2, 3]));
print(range(5));

pyjar is designed to make familiar Python-style operations available while working in JavaScript.
:::{"fallbackMarkdown":"","reference":{"matched_text":" ","prefix":null,"start_idx":8350,"end_idx":8350,"safe_urls":[],"refs":[],"alt":"","prompt_text":null,"type":"sources_footnote","sources":[{"title":"GitHub - cloudberrypitech/pyjar · GitHub","url":"https://github.com/cloudberrypitech/pyjar","attribution":"GitHub"}],"has_images":false},"showLoginRequiredCard":false}
