/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let stringNum = ''
    let stringNum2 = ''
    while (l1 !== null) {
        stringNum = stringNum + String(l1.val)
        l1 = l1.next
    }
    
    while (l2 !== null) {
        stringNum2 = stringNum2 + String(l2.val)
        l2 = l2.next
    }

    
    let reversedTotalNum1 = ''
    let reversedTotalNum2 = ''
    for (let i = stringNum.length - 1; i >= 0; i--) {
        reversedTotalNum1 = reversedTotalNum1 + stringNum[i]
    }
    for (let i = stringNum2.length - 1; i >= 0; i--) {
        reversedTotalNum2 = reversedTotalNum2 + stringNum2[i]
    }
    

    
    console.log((reversedTotalNum1), (reversedTotalNum2), 'total int')
    console.log(10000000000000000000000000001)
    
    let totalNum = BigInt((BigInt(reversedTotalNum1) + BigInt(reversedTotalNum2))).toString()
    
    console.log(totalNum, 'totalnumber')
    let reversedTotalNum = ''
    for (let i = totalNum.length - 1; i >= 0; i--) {
        reversedTotalNum = reversedTotalNum + totalNum[i]
    }
    
    console.log(reversedTotalNum)
    let obj = createListNode(reversedTotalNum)
    
    console.log(obj)
    return obj

};

function createListNode(list) {
    if (list.length === 1) {
        let obj =  new ListNode(Number(list[0]), null)
        return obj
    }
    let obj =  new ListNode(Number(list[0]), createListNode(list.slice(1)))
    
    return obj
}
