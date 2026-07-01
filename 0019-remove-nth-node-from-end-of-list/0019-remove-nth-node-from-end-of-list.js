/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let listSize = 0;
    let curNode = head;
    while (!isNaN(curNode?.val)) {
        curNode = curNode.next;
        listSize++;
    }
    
    if (listSize === 1) return null;
        
    const targetIdx = listSize - n - 1;
    let targetCnt = 0;
    let curNode2 = head;
    while (targetCnt < targetIdx) {
        curNode2 = curNode2.next;
        targetCnt++;
    }
        
    if (n === 1) curNode2.next = null;
    else if (targetIdx === -1) return head.next;
    else {
        curNode2.next.val = curNode2.next.next?.val ?? 0;
        curNode2.next.next = curNode2.next.next?.next ?? null;       
    }
    
    return head
};