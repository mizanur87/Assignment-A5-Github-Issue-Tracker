1. var vs. let vs. const
   ANS:

var: The old-school, slightly messy way. It has no sense of boundaries (it’s function-scoped) and lets you redeclare things by accident. Generally avoided now.

let: The "modern variable." It stays within the {} blocks where you defined it. Use this if you know the value will change later (like a counter).

const: Short for constant. Use this for 90% of your code. Once WE set it, WE can't reassign it. It keeps your code predictable.

2. The Spread Operator (...)

ANS: This is the "unpacking" tool. It takes an array or an object and spreads its contents out.

Example: If WE have an array [1, 2] and WE want to put those numbers into a new array, you use [...oldArray, 3].

It’s like taking the clothes out of a suitcase and laying them individually on the bed.

3. map() vs. filter() vs. forEach()

ANS: These are the "Big Three" for handling lists of data:

map(): Transforms every item. It returns a new array of the same length (e.g., turning a list of names into all uppercase).

filter(): The gatekeeper. It returns a new array containing only the items that pass a specific test (e.g. only numbers greater than 10).

forEach(): The worker bee. It just loops through every item to do something (like logging to the console), but it doesn't return anything.

4. Arrow Functions

ANS: A shorter, sleeker way to write functions. Instead of writing the word function, you use a "fat arrow" =>.

Old: function(x) { return x \* 2; }

New: (x) => x \* 2;

5. Template Literals

ANS: Instead of using quotes and + signs everywhere, you use backticks (`).

The Perk: WE can drop variables directly into the string using ${variableName}.

Example: `Hello, ${name}!` instead of 'Hello, ' + name + '!'. It also respects multi-line spacing without needing \n.
