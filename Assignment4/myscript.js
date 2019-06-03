// Josh Winton - Assignment 4
let table = document.getElementById("myTable"); // Reference to table

let tableRowNum = 1; // Counter for rows
let tableColumnNum = 0; // Counter for columns

let mouseclick = false; // Tracks whether mouse has been clicked



// Adds row to main table
addRow = function() {
  console.log("Adding row");
  let newrow = table.insertRow(table.rows.length);
  let cells = table.rows[0].getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    let newCell = newrow.insertCell(0);
    newCell.addEventListener('mousedown', changeColor);
    newCell.addEventListener('mouseup', upCheck);
    newCell.addEventListener('mouseover', enterCheck);
  }
  tableRowNum++;
}

// Adds column to main table
addColumn = function() {
  console.log("Adding column");
  let rows = table.getElementsByTagName("TR");
  for (let i = 0; i < rows.length; i++) {
    let newCell = rows[i].insertCell(0);
    newCell.addEventListener('mousedown', changeColor);
    newCell.addEventListener('mouseup', upCheck);
    newCell.addEventListener('mouseenter', enterCheck);
  }
  tableColumnNum++;
}

// Remove row from main Table
removeRow = function() {
  if (tableRowNum > 1) {
    console.log("Removing row");
    table.deleteRow(0);
    tableRowNum--;
  } else {
    console.log("Reached minimum rows");
  }
}

// Remove column from main table
removeColumn = function() {
  let rows = table.getElementsByTagName("TR");
  if (tableColumnNum > 1) {
    for (let i = 0; i < rows.length; i++) {
      console.log("Removing column" + tableColumnNum);
      rows[i].deleteCell(0);
    }
    tableColumnNum--;
  } else {
    console.log("Reached minimum columns");
  }
}

// Handles mousedown on cells
changeColor = function(e) {
  console.log("Changing color of cell");
  let cell = e.target;
  let color = document.getElementById('mySelect').value;
  cell.setAttribute("bgcolor", color);
  mouseclick = true;
}

// Fills all uncolored cells with currently selected color
fillUncolored = function() {
  console.log("Filling uncolored cells with selected color");
  let color = document.getElementById('mySelect').value;
  let cells = document.getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    if ((cells[i].getAttribute('bgcolor') == null) || (cells[i].getAttribute('bgcolor') == "white")) {
      cells[i].setAttribute("bgcolor", color);
    }
  }
}

// Clear all cells
clearAll = function() {
  console.log("Clearing all cells");
  let cells = document.getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    cells[i].setAttribute("bgcolor", "white");
  }
}

// Activated on mouseup, changes mouse click variable to false
upCheck = function(e) {
  changeColor(e);
  mouseclick = false;
}

// Check for mouse entering, changes color if mouse is down
enterCheck = function(e) {
  console.log(mouseclick)
  if(mouseclick == true){
    changeColor(e);
  }
}

// Adds a cell to start with
addColumn();
