// Elements
const lameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addBtn = document.querySelector("#addBtn");
const tableBody = document.querySelector("#tableBody");
const searchInput = document.querySelector("#search");
const showAll = document.querySelector("#showAll");
const showActive = document.querySelector("#showActive");
const showInactive = document.querySelector("#showInactive");
// Data
let users = [
    {
        name: "Ahmed",
        email: "ahmed@gmail.com",
        status: true
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        status: false
    }
];
let editIndex = null;
// Render
function render(data) {
    tableBody.innerHTML = "";
    data.forEach(function (user, index) {
        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="status ${user.status ? "active" : "inactive"}">
                    ${user.status ? "Active" : "Inactive"}
                </button>
            </td>
            <td>
                <button class="edit">
                    Edit
                </button>
                <button class="delete">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
    addEvents(data);
}
render(users);
// Add & Update
addBtn.addEventListener("click", function () {
    if (nameInput.value == "" || emailInput.value == "") {
        alert("Fill All Inputs");
        return;
    }
    if (editIndex == null) {
        users.push({
            name: nameInput.value,
            email: emailInput.value,
            status: true
        });
    }
    else {
        users[editIndex].name = nameInput.value;
        users[editIndex].email = emailInput.value;
        editIndex = null;
        addBtn.textContent = "Add User";
    }
    nameInput.value = "";
    emailInput.value = "";
    render(users);
});
// Events
function addEvents(data) {
    // Delete
    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            let realIndex = users.indexOf(data[index]);
            users.splice(realIndex, 1);
            render(users);
        });
    });
    // Edit
    const editBtns = document.querySelectorAll(".edit");
    editBtns.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            let realIndex = users.indexOf(data[index]);
            nameInput.value = users[realIndex].name;
            emailInput.value = users[realIndex].email;
            editIndex = realIndex;
            addBtn.textContent = "Update User";
        });
    });
    // Toggle Status
    const statusBtns = document.querySelectorAll(".status");
    statusBtns.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            let realIndex = users.indexOf(data[index]);
            users[realIndex].status = !users[realIndex].status;
            render(users);
        });
    });
}
// Search
searchInput.addEventListener("input", function () {
    let result = [];
    users.forEach(function (user) {
        if (user.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            result.push(user);
        }
    });
    render(result);
});
// show
showAll.addEventListener("click", function () {
    render(users);
});
// active
showActive.addEventListener("click", function () {
    let activeUsers = [];
    users.forEach(function (user) {
        if (user.status) {
            activeUsers.push(user);
        }
    });
    render(activeUsers);
});
showInactive.addEventListener("click", function () {
    let inactiveUsers = [];
    users.forEach(function (user) {
        if (!user.status) {
            inactiveUsers.push(user);
        }
    });
    render(inactiveUsers);
});