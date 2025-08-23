// Start of function levelOrder
    this.levelOrder = function(root) {
        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        if (!root) return;

        let queue = [];
        queue.push(root);

        while (queue.length > 0) {
            let node = queue.shift(); // dequeue
            process.stdout.write(node.data + " ");

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

	}; // End of function levelOrder