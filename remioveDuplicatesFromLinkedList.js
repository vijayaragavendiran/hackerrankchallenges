function Node(data) {
    this.data = data;
    this.next = null;
  }
  function removeDuplicates(head) {
    if (!head) return null;
    debugger;
    let current = head;
    while(current.next !== null) {
      if(current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next
      }
    }
    return head;
  }
  
  // 11 11 11 13 13 20
  
  const n = new Node(11);
  n.next = new Node(11);
  n.next.next = new Node(11);
  n.next.next.next = new Node(13);
  n.next.next.next.next = new Node(13);
  n.next.next.next.next.next = new Node(20);
  console.log(removeDuplicates(n));
  