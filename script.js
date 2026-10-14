
let missionInput = document.getElementById("missionInput");
let addBtn = document.getElementById("addBtn");
let missionList = document.getElementById("missionList");
let colorBtn = document.getElementById("colorBtn");

let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let pendingCount = document.getElementById("pendingCount");

// 2. Background color setup (at least 3 colors)
let colors = ["#f0f4f8", "#fef3c7", "#e0e7ff", "#dcfce7"];
let colorIndex = 0;

// 3. Function to update counters dynamically
function updateCount() {
  // Use .children.length as required by the assignment
  let total = missionList.children.length;
  let completed = 0;

  // Loop through all missions to count completed ones
  for (let i = 0; i < total; i++) {
    if (missionList.children[i].classList.contains("completed")) {
      
      completed++;
    }
  }

  let pending = total - completed;

  // Display the numbers
  totalCount.textContent = total;
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
}

// 4. Function to add a mission
function addMission() {
  let task = missionInput.value.trim();

  // Check if input is empty or just spaces
  if (task === "") {
    return;
  }

  // Create list item (li)
  let li = document.createElement("li");

  // Create text span for mission name
  let span = document.createElement("span");
  span.className = "task-text";
  span.textContent = task;

  // Toggle completed status when clicked
  span.onclick = function() {
    li.classList.toggle("completed");
    updateCount();
  };

  // Create Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Delete mission when clicked
  deleteBtn.onclick = function() {
    li.remove();
    updateCount();
  };

  // Put elements inside li, then add li to ul
  li.appendChild(span);
  li.appendChild(deleteBtn);
  missionList.appendChild(li);

  // Clear input field
  missionInput.value = "";

  // Update counters
  updateCount();
}

// 5. Function to change background color
function changeColor() {
  colorIndex = colorIndex + 1;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
  document.body.style.backgroundColor = colors[colorIndex];
}

// 6. Connect buttons to functions
addBtn.onclick = addMission;
colorBtn.onclick = changeColor;