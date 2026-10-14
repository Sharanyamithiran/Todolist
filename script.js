
let missionInput = document.getElementById("missionInput");
let addBtn = document.getElementById("addBtn");
let missionList = document.getElementById("missionList");
let colorBtn = document.getElementById("colorBtn");

let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let pendingCount = document.getElementById("pendingCount");


const colors = ["#f0f4f8", "#fef3c7", "#e0e7ff", "#dcfce7"];
let colorIndex = 0;


function updateCount() {
  let total = missionList.children.length;
  let completed = 0;

  
  for (let i = 0; i < total; i++) {
    if (missionList.children[i].classList.contains("completed")) {
      
      completed++;
    }
  }

  let pending = total - completed;

  
  totalCount.textContent = total;
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
}


function addMission() {
  let task = missionInput.value.trim();


  if (task === "") {
    return;
  }

  let li = document.createElement("li");

  
  let span = document.createElement("span");
  span.className = "task-text";
  span.textContent = task;

  
  span.onclick = function() {
    li.classList.toggle("completed");
    updateCount();
  };

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  
  deleteBtn.onclick = function() {
    li.remove();
    updateCount();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  missionList.appendChild(li);

  
  missionInput.value = "";

  
  updateCount();
}


function changeColor() {
  colorIndex = colorIndex + 1;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
  document.body.style.backgroundColor = colors[colorIndex];
}

addBtn.onclick = addMission;
colorBtn.onclick = changeColor;