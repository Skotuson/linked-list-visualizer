function hideElement(...elements) {
    for (element of elements) {
        element.style.display = "none";
    }
}

function showElement(display, ...elements) {
    for (element of elements) {
        element.style.display = display;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reloadLists() {
    input.value = "";
    listsDiv.innerHTML = "";
    for (let i = 0; i < lists.length; i++) {
        listsDiv.innerHTML += `<b>List ${i + 1}:</b> ` + lists[i].toString() + "<br>";
    }
}

function reloadListSelection() {
    listNumber.innerHTML = "";
    listASelection.innerHTML = "";
    listBSelection.innerHTML = "";
    for (let i = 0; i < lists.length; i++) {
        listNumber.innerHTML += `<option value="${i + 1}">${i + 1}</option >`;
        listASelection.innerHTML += `<option value="${i + 1}">${i + 1}</option >`;
        listBSelection.innerHTML += `<option value="${i + 1}">${i + 1}</option >`;
    }
}

function reloadNodeSelection() {
    nodeCount.innerHTML = "";
    for (let i = 0; i < lists[listNumber.value - 1].size(); i++) {
        nodeCount.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

function reloadSelections() {
    reloadListSelection();
    reloadNodeSelection();
}

function reload() {
    reloadLists();
    reloadSelections();
}

function randomLinkedList() {
    let linkedList = new LinkedList(new Node(randomNumber(1, 69), null));
    for (let i = 0; i < randomNumber(5, 9); i++) {
        linkedList.appendNode(new Node(randomNumber(-10, 69), null));
    }
    return linkedList;
}

function fibbonaciLinkedList() {
    let linkedList = new LinkedList(new Node(0, new Node(1, null)));
    let node = linkedList.head;
    for (let i = 0; i < randomNumber(10, 15); i++) {
        node.next.next = new Node(node.value + node.next.value, null);
        node = node.next;
    }
    return linkedList;
}

function reverseHeader() {
    let header = document.getElementById('header1');
    if (header.innerText == "Linked => List => Visualizer") {
        header.innerHTML = "Visualizer => List => Linked";
    }
    else {
        header.innerHTML = "Linked => List => Visualizer";
    }
}

function getSelectedList() {
    return lists[listNumber.value - 1];
}

