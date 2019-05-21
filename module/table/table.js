

function buildTable() {
		addLineToHTMLTable("Michel", "Buffa");
  		addLineToHTMLTable("Marie-Claire", "Forgue");
  		addLineToHTMLTable("Tim", "Berners-Lee");
}


function addLineToHTMLTable(firstName, lastName) {

  var tableBody = document.querySelector("#tableContactBody");
  var newRow   = tableBody.insertRow();
  var firstNameCell  = newRow.insertCell();
   firstNameCell.innerHTML = firstName;
  var lastNameCell   = newRow.insertCell();
   lastNameCell.innerHTML = lastName;
}
