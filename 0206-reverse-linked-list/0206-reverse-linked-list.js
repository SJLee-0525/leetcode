/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const list = new Array();
    let cur = head;
    while (!isNaN(cur?.val)) {
        list.push(cur.val);
        cur = cur.next;
    }
    
    if (list.length === 0) return null;
    
    let res = new ListNode(list[0], null);
    for (let i = 1; i < list.length; i++) res = new ListNode(list[i], res);

    return res;
};