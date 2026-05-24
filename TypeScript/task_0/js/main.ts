interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Monica",
  lastName: "Geller",
  age: 30,
  location:"New York"
};

const student2: Student = {
  firstName: "Rachel",
  lastName: "Green",
  age: 35,
  location:"Los Angeles"
}

const studentsList: Student[] = [student1, student2];


const table: HTMLTableElement = document.createElement("table");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);