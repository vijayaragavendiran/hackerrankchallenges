function Node(data) {
    this.data = data;
    this.next = null;
}

function Solution() {
    this.insert = function (head, data) {
        let node = new Node(data);
        if (head === null) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        return head;
    };
    this.removeDuplicates = function (head) {
        if (head === null) {
            return head;
        } else {
            let current = head;
            while (current && current.next) {
                if (current.data === current.next.data) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }
            return head;
        }
    }
    this.print = function (head) {
        if (head === null) {
            return head;
        } else {
            let current = head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}

const li = new Solution();
const d = li.insert(null, 1);
const d1 = li.insert(d, 2);
const d2 = li.insert(d1, 2);
const d3 = li.insert(d2, 3);
const d4 = li.insert(d3, 3);
const d5 = li.insert(d4, 4);
const d6 = li.removeDuplicates(d5)
console.log(li.print(d6));
