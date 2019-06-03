let table = document.getElementById("myTable");

// Adds row to main table
addRow = function() {
  console.log("Adding row");
  let newrow = table.insertRow(table.rows.length);
  let cells = table.rows[0].getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    let newCell = newrow.insertCell(0);
    newCell.addEventListener('click', changeColor);
  }
}

// Adds column to main table
addColumn = function() {
  console.log("Adding column");
  let rows = table.getElementsByTagName("TR");
  for (let i = 0; i < rows.length; i++) {
    let newCell = rows[i].insertCell(0);
    newCell.addEventListener('click', changeColor);
  }
}

// Remove row from main Table
removeRow = function() {
  console.log("Removing row");
  table.deleteRow(0);
}

// Remove column from main table
removeColumn = function() {
  console.log("Removing column");
  let rows = table.getElementsByTagName("TR");
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(0);
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
    console.log(cells[i])
    if(cells[i].getAttribute('bgcolor') == null){
      cells[i].setAttribute("bgcolor", color);
    }
  }
}
