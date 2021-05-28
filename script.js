
let input = document.getElementById('textField');
let addListBttn = document.getElementById('addListBttn');
let removeListBttn = document.getElementById('removeListBttn');
let addNodeBttn = document.getElementById('addNodeBttn');
let reverseBttn = document.getElementById('reverseBttn');
let generateBttn = document.getElementById('generateBttn');
let splitBttn = document.getElementById('splitBttn');
let sortBttn = document.getElementById('sortBttn');
let removeNodeBttn = document.getElementById('removeNodeBttn');
let changeNodeBttn = document.getElementById('changeNodeBttn');
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
    if (input.value.match(/[0-9]/)) {
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
    if (lists.length > 0 && input.value.match(/[0-9]/)) {
        getSelectedList().addNode(input.value, nodeCount.value);
        reloadLists();
        reloadNodeSelection();
    }
})

reverseBttn.addEventListener('click', e => {
    if (lists.length > 0) {
        getSelectedList().reverse();
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
    if (getSelectedList().size() > 1) {
        getSelectedList().removeNode(nodeCount.value);
    }
    else {
        lists.splice(listNumber.value - 1, 1);
        listNumber.value = lists.length;
    }
    reload();
})

splitBttn.addEventListener('click', e => {
    if (lists.length > 0) {
        let node = getSelectedList().get(nodeCount.value).next;
        if (node != null) {
            lists.splice(listNumber.value, 0, new LinkedList(node));
        }
        getSelectedList().get(nodeCount.value).next = null;
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
    if (lists.length > 0) {
        getSelectedList().bubbleSort();
    }
    reload();
})

fibbonaciBttn.addEventListener('click', e => {
    lists.push(fibbonaciLinkedList());
    reload();
})

changeNodeBttn.addEventListener('click', e => {
    if (lists.length > 0 && input.value.match(/[0-9]/)) {
        getSelectedList().get(nodeCount.value).value = input.value;
        reload();
    }
})









