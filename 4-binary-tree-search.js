// Notice the substructure. We are doing this informally with objects but
// a Treenode class is another option, and using TypeScript would really 
// make this a lot more predictable and gurantee the shape of the data.

const myTree = {
    value: 56,
    left: {
        value: 22,
        left:  { 
            value: 10, 
            left: null, 
            right: null 
        },
        right: { 
            value: 30, 
            left: null, 
            right: null 
        }

    },
    right: {
        value: 81,
        left:  { 
            value: 77, 
            left: null, 
            right: null 
        },
        right: { 
            value: 92, 
            left: null, 
            right: null 
        }
    }
};

// So how might we use recursion to search this tree for a given node value?

// Remember, you are going to want to:
// 1) define a base case (how to handle a leaf) 
// 2) define a recursive step (how to handle a non-leaf)
// 3) possibly do some bookkeeping to keep track of and return the final result

// Here's the function stub. 
// 'root' is the root of the tree in question 
// 'value' is the value you are looking to match
// return the first node with a matching value (this will itself be a Tree!)
function searchTree(root, value) {
    // FILL THIS IN
}















// ... and here's my solution
function searchTreeSolution(root, value) {
    console.log(`Searching Node with value: ${root.value}`);

    // if the root's value matches the search value, return it (base case)
    if (root.value === value) {
        console.log("Found a match! Returning!");
        return root;
    }

    // if the left node is non-null, search it (the recursive step)
    if (root.left) {
        const result = searchTreeSolution(root.left, value);
        if (result) {
            return result;
        }
    }

    if (root.right) {
        const result = searchTreeSolution(root.right, value);
        if (result) {
            return result;
        }
    }

    return null;
}

console.log(searchTreeSolution(myTree, 0));