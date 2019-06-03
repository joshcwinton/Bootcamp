let table = document.getElementById("myTable");
let tableRowNum = 1;
let tableColumnNum = 0;

// Adds row to main table
addRow = function() {
  console.log("Adding row");
  let newrow = table.insertRow(table.rows.length);
  let cells = table.rows[0].getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    let newCell = newrow.insertCell(0);
    newCell.addEventListener('click', changeColor);
  }
  tableRowNum++;
}

// Adds column to main table
addColumn = function() {
  console.log("Adding column");
  let rows = table.getElementsByTagName("TR");
  for (let i = 0; i < rows.length; i++) {
    let newCell = rows[i].insertCell(0);
    newCell.addEventListener('click', changeColor);
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

// Handles clicks on cells
changeColor = function(e) {
  console.log("Changing color of cell");
  let cell = e.target;
  let color = document.getElementById('mySelect').value;
  cell.setAttribute("bgcolor", color);
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

addColumn();
