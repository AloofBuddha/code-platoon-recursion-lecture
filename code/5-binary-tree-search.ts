type Tree = TreeNode | null;

type TreeNode = {
    value: number;
    left: Tree;
    right: Tree;
}

const myTree: Tree = {
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

function searchTreeSolution(root: Tree, value: number): Tree {
    if (!root) {
        return null;
    }

    if (root.value === value) {
        return root;
    }

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

console.log(searchTreeSolution(myTree, 81));