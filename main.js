var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', deleteItem);
// Filter event
filter.addEventListener('keyup', filterItems);

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
        // console.log(1);
        if (confirm("Are you sure you want to delete this item?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // Convert text to lower case
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert HTML collection to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
