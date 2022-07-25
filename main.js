var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', deleteItem);

// Add item 
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class to li element
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteButton = document.createElement('button');

    // Add classes to del element
    deleteButton.className = 'btn btn-sm btn-danger float-end delete';

    // Append text node
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to list
    itemList.appendChild(li);
}

// Delete item
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        console.log(1);
    }
}