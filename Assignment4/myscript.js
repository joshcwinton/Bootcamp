// Adds row to main table
addRow = function() {
  console.log("Adding row");
  let table = document.getElementById("myTable");
  let newrow = table.insertRow(table.rows.length);
  let cells = table.rows[0].getElementsByTagName("TD");
  for (let i = 0; i < cells.length; i++) {
    let newcell = newrow.insertCell(0);
  }
}

// Adds column to main table
addColumn = function() {
  console.log("Adding column");
  let table = document.getElementById("myTable");
  let rows = table.getElementsByTagName("TR");
  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell(0);
  }
}

// Remove row from main Table
removeRow = function() {
  console.log("Removing row");
  document.getElementById("myTable").deleteRow(0);
}
