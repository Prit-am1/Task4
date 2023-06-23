let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// Form submit event

form.addEventListener("submit", addItem);

// Delete event

itemList.addEventListener("click", removeItem);

// Add item

function addItem(e){
    e.preventDefault();

    // Get input value

    let newItem = document.getElementById("item").value;

    // Create new li element

    let li = document.createElement("li");
    
    // Add class

    li.classNmae = "list-group-item";

    // Add text node

    li.appendChild(document.createTextNode(newItem));

    // Create delete button element

    let deleteBtn = document.createElement("button");

    // Add classes to del button

    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // Append text node

    deleteBtn.appendChild(document.createTextNode("X"));

    // Append button to li

    li.appendChild(deleteBtn);

    // Create edit button element

    let editBtn = document.createElement("button");

    // Add classes to edit button

    editBtn.className = "btn btn-danger btn-sm float-right edit";

    // Append text node

    editBtn.appendChild(document.createTextNode("Edit"));

    // Append button to li

    li.appendChild(editBtn);

    // Append li to item

    itemList.appendChild(li);
}

// Remove item

function removeItem(e){
if(e.target.classList.contains("delete")){
    if(confirm("Are you sure?")){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}