this.insert=function(head,data){
          //complete this method
           let newNode = new Node(data);

        // If the list is empty, new node becomes head
        if (!head) {
            return newNode;
        }

        // Otherwise, traverse to the end and insert
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;

        return head;
    };
