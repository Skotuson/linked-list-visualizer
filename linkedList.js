
class LinkedList {
    constructor(head) {
        this.head = head;
    }

    addNode(value, position) {
        if (position == 0) {
            this.head = new Node(value, this.head);
            return;
        }
        let node = this.head;
        for (let i = 0; i < position; i++) {
            if (node.next != null)
                node = node.next;
        }
        node.next = new Node(value, node.next);
    }

    appendNode(nodeToAppend) {
        let node = this.head;
        while (true) {
            if (node.next == null) {
                break;
            }
            node = node.next;
        }
        node.next = nodeToAppend;
    }

    removeNode(position) {
        if (position == 0) {
            this.head = this.head.next;
            return;
        }
        let node = this.head;
        for (let i = 0; i < position - 1; i++) {
            if (node.next != null)
                node = node.next;
        }
        node.next = node.next.next;
    }

    size() {
        let node = this.head;
        let size = 0;
        while (node != null) {
            size++;
            node = node.next;
        }
        return size;
    }

    reverse() {
        let node = this.head;
        let previous = null;
        let next = node;
        while (next != null) {
            next = node.next;
            node.next = previous;
            previous = node;
            if (next != null) {
                node = next;
            }
        }
        this.head = node;
    }

    toString() {
        let isFirst = true;
        let node = this.head;
        let str = "";
        while (node != null) {
            str += isFirst ? node.value : " => " + node.value;
            isFirst = false;
            node = node.next;
        }
        str += "<br>";
        return str;
    }

    get(positon) {
        let node = this.head;
        for (let i = 0; i < positon; i++) {
            if (node.next != null) {
                node = node.next;
            }
        }
        return node;
    }

    bubbleSort() {
        let node = this.head;
        for (let i = 0; i < this.size(); i++) {
            node = this.head;
            for (let j = 0; j < this.size() - i - 1; j++) {
                if (node.value > node.next.value) {
                    let temp = node.value;
                    node.value = node.next.value;
                    node.next.value = temp;
                }
                node = node.next;
            }
        }
    }

}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}