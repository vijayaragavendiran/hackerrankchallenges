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
}

const li = new Solution();
const d = li.insert(null, 100);
const d1 = li.insert(d, 200);
const d2 = li.insert(d1, 300);
console.log(d2);
