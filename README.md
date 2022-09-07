# Recursion

## What We Already Know

When learning a new concept I think it's always wise to begin with what you *do* know, and then build from there. 

So first, a refresher from high school math - the `factorial` formula. Here's the gist of it:

`n! = n * (n-1) * (n-2) * ... * 1`

For example:

```
1!                     = 1
2! = 2 * 1             = 2
3! = 3 * 2 * 1         = 6
4! = 4 * 3 * 2 * 1     = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

So how might we implement this logic as a function in JavaScript? 
> Note: factorial is only defined on whole numbers greater than 0. Also, **assume a guarantee of valid input for all future examples**.

```js
// 1-simple-factorial.js

function factorial(n) {
    let result = 1;

    for (let curr = n; curr > 1; i--) {
        result *= curr;
    }

    return result;
}
```

Great, simple enough! So where does recursion fit into all of this, and what even *is* recursion!

## The Basic Idea

To explain, let's look at the same idea of a factorial, but defined a little differently:

`n! = n * (n-1)!`

Wait, can you even do that? Isn't that a circular definition?

Actually, this works! This is not a circular definition, though it very nearly is - *this is recursion*! 

**Recursion** is simply the idea of defining a function *in terms of itself*.

![mind blown](resources/mind-blown.webp "Mind Blown")


This might sounds trippy and obtuse, but it can actually be a very natural way to solve certain problems. 

Let's redefine our factorial function, but this time utilizing recursion.

```js
// 2-recursive-factorial.js

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n-1);
}
```

## A Definition

So what are the essential components that define a recursive function? They are:

1) The recursive step

```js
return n * factorial(n-1);
```
This is the *recursive* part: given an expression `factorial(n)` how can you do a little work, and delay the rest of the computation to the following recursive call. Here, we return the result of multiplying `n` by the recursive call `factorial(n-1)`. 


2) The base case

```js
if (n === 1) {
    return 1;
}
```

A *base case* is the point at which you stop recursing - this is *essential*, this is what allows the function to be defined in terms of itself without becoming a truly circular definition.

## How Does This Actually Work?

So what is actually happening when we call our updated `factorial` function? Well, when a computer calls a function that contains another function (not just a recursive function, this is true for any sub-function), it maintains the state of the original function's incomplete result in the *call stack* and goes to work computing the sub-function. Once again, this is easier explained with an example than with a definition.

So, what happens on the call stack when we call `factorial(5)`? 

First, the stack grows:

```
[factorial(5)]
```

```
[factorial(4)]
[5 * ...]
```

```
[factorial(3)]
[4 * ...]
[5 * ...]
```

```
[factorial(2)]
[3 * ...]
[4 * ...]
[5 * ...]
```

```
[factorial(1)]
[2 * ...]
[3 * ...]
[4 * ...]
[5 * ...]
```

We hit our base case, great! Now the stack will collapse

```
[1]
[2 * ...]
[3 * ...]
[4 * ...]
[5 * ...]
```

```
[2 * 1]
[3 * ...]
[4 * ...]
[5 * ...]
```

```
[3 * 2]
[4 * ...]
[5 * ...]
```

```
[4 * 6]
[5 * ...]
```

```
[5 * 24]
```

```
[120]
```

And we're done, now we can return the result!

## Stack Overflow

But here's something to think about: what would happen if we didn't ever hit our base case? The call stack can grow but, importantly, **it cannot grow forever** - the call stack size has a hard limit! This is why the base case is so important, because without it we get a kind of error known as a *stack overflow* (yes, that's where the tech help forum gets it's name from!). 

So here's what does happen if you were to run the code in `3-stack-overflow.js`:

```
RangeError: Maximum call stack size exceeded
```

See! There is a limit! It's a very large number (and you can make it larger if need be), but if you ever see this error, chances are you are simply never hitting your base case!


## Optimal Sub-Structure

`Factorial` is a somewhat contrived example, so when is recursion *actually* useful 'in the wild', so to speak. Well, recursive algorithms tend to be a natural fit when working with recursive data structures. What does it mean for a data structure to be recursive? This brings us to the concept of **optimal sub-structure**.

 Optimal sub-structure is a quality some data structures have in that they can be *defined in terms of themselves*. The canonical example is a Binary Tree!
 
 ![binary tree](resources/binary-tree.jpg "Binary Tree")
 
 A Binary Tree is defined as being either: 
 
 1) A Leaf
 
 This is our base case, a terminating node with no children, or 
 
 2) A Node that links to two other Trees

 This is the equivalent of the recursive step

 So what might this look like in code? Let's define a binary tree and try and write a `searchTree` function that searches for a matching node in the binary tree.

 > The rest of this tutorial is best followed along with directly in the code, see `4-binary-tree-search.js`


