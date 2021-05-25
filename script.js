
let input = document.getElementById('textField');
let addListBttn = document.getElementById('addListBttn');
let removeListBttn = document.getElementById('removeListBttn');
let addNodeBttn = document.getElementById('addNodeBttn');
let reverseBttn = document.getElementById('reverseBttn');
let generateBttn = document.getElementById('generateBttn');
let splitBttn = document.getElementById('splitBttn');
let sortBttn = document.getElementById('sortBttn');
let removeBttn = document.getElementById('removeBttn');
let mergeBttn = document.getElementById('mergeBttn');
let clearBttn = document.getElementById('clearBttn');
let fibbonaciBttn = document.getElementById('fibbonaciBttn');
let listNumber = document.getElementById('listNumber');
let nodeCount = document.getElementById('nodeCount');
let listASelection = document.getElementById('listA');
let listBSelection = document.getElementById('listB');
let listsDiv = document.getElementById('lists');
let lists = [];


addListBttn.addEventListener('click', e => {
    if (input.value.match(/[a-zA-Z0-9]/)) {
        lists.push(new LinkedList(new Node(input.value, null)));
        reload();
    }
})

removeListBttn.addEventListener('click', e => {
    if (lists.length > 0) {
        lists.splice(listNumber.value - 1, 1);
    }
    reloadLists();
    reloadListSelection();
})

addNodeBttn.addEventListener('click', e => {
    if (lists.length > 0 && input.value.match(/[a-zA-Z0-9]/)) {
        lists[listNumber.value - 1].addNode(input.value, nodeCount.value);
        reloadLists();
        reloadNodeSelection();
    }
})

reverseBttn.addEventListener('click', e => {
    if (lists.length > 0) {
        lists[listNumber.value - 1].reverse();
        reverseHeader();
        reloadLists();
    }
})

listNumber.addEventListener("change", e => {
    reloadNodeSelection();
})

generateBttn.addEventListener('click', e => {
    for (let i = 0; i < randomNumber(2, 5); i++) {
        lists.push(randomLinkedList());
    }
    reload();
})

clearBttn.addEventListener('click', e => {
    lists = [];
    listsDiv.innerHTML = "";
})

removeNodeBttn.addEventListener('click', e => {
    if (lists[listNumber.value - 1].size() > 1) {
        lists[listNumber.value - 1].removeNode(nodeCount.value);
    }
    else {
        lists.splice(listNumber.value - 1, 1);
        listNumber.value = lists.length;
    }
    reload();
})

splitBttn.addEventListener('click', e => {
    if (lists.length > 1) {
        let node = lists[listNumber.value - 1].get(nodeCount.value).next;
        if (node != null) {
            lists.splice(listNumber.value, 0, new LinkedList(node));
        }
        lists[listNumber.value - 1].get(nodeCount.value).next = null;
    }
    reload();
})

mergeBttn.addEventListener('click', e => {
    if (lists.length > 1 && listASelection.value != listBSelection.value) {
        let listA = lists[listASelection.value - 1];
        let listB = lists[listBSelection.value - 1];

        listA.appendNode(listB.head);
        lists.splice(listBSelection.value - 1, 1);
    }
    reload();
})

sortBttn.addEventListener('click', e => {
    if (lists.length > 1) {
        lists[listNumber.value - 1].bubbleSort();
    }
    reload();
})

fibbonaciBttn.addEventListener('click', e => {
    lists.push(fibbonaciLinkedList());
    reload();
})







