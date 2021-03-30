function getName(node) {
    return node.name;
};

function headNode(linkedList, collection) {
    return collection[linkedList];
};

function next(node, collection) {
    return collection[node.next];
};

function nodeAt(index, linkedList, collection) {
    let current = collection[linkedList],
        count = 0;
    while (count !== index) {
        const nextKey = current.next;
        current = collection[nextKey];
        count++;
    };
    return current
};

function addressAt(index, linkedList, collection) {
    let current = collection[linkedList],
        count = 0,
        currentAddress = linkedList;
    while (count !== index) {
        currentAddress = current.next;
        current = collection[currentAddress];
        count++;
    };
    return currentAddress;
};

function indexAt(node, collection, linkedList) {
    let current = headNode(linkedList, collection),
        index = 0;
    while (getName(current) !== getName(node)) {
        const currentAddress = current.next;
        current = collection[currentAddress];
        index++;
    }
    return index;
};

function insertNodeAt(index, newLinkedList, linkedList, collection) {
    const newNode = collection[newLinkedList];
    if (index === 0) {
        newNode.next = linkedList;
    }
    const previousNode = nodeAt(index - 1, linkedList, collection);
    const currentAddress = addressAt(index, linkedList, collection);

    previousNode.next = newLinkedList;
    newNode.next = currentAddress;
};

function deleteNodeAt(index, linkedList, collection) {
    const previousNode = nodeAt(index - 1, linkedList, collection);
    const nextAddress = collection[previousNode.next].next;
    previousNode.next = nextAddress;
};