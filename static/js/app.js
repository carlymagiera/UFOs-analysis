// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// var filters = {};

// function updateFilters() {
//   let changedElement = d3.select(this);
//   let elementValue = changedElement.property("value");
//   console.log(elementValue);

//   let filterId = changedElement.attr("id");

//   if (elementValue) {
//     filters[filterId] = elementValue;
//   }
//   else {
//     delete filters[filterId];
//   }

// updateTable();

// function updateTable
  



  // let dateChange = d3.select("datetime");
  // let cityChange = d3.select("city");
  // let stateChange = d3.select("state");
  // let countryChange = d3.select("country");
  // let shapeChange = d3.select("state");

  // let dateValue = dateChange.property("value");
  // console.log(dateValue);
  // let cityValue = cityChange.property("value");
  // console.log(dateValue);
  // let stateValue = stateChange.property("value");
  // console.log(dateValue);
  // let countryValue = countryChange.property("value");
  // console.log(dateValue);
  // let shapeValue = shapeChange.property("value");
  // console.log(dateValue);

  // let dateId = dateChange.attr("id");
  // console.log(dateId);

  // if (dateValue) {
  //   filters[dateId] = dateValue;
  // }
  // else{
  //   delete filters[dateId]
  // }




function filterTable()

//d3.selectAll("input").on("change", updateFilters);

createTable(Data);





























// //////////////////////////////////////////////////



// // 1. Create a variable to keep track of all the filters as an object.
// var filters = {};

// // 3. Use this function to update the filters. 
// function updateFilters() {
//   var date = d3.select("#datetime").property("value");
//   var city = d3.select("#city").property("value");
//   var state = d3.select("#state").property("value");
//   var country = d3.select("#country").property("value");
//   var shape = d3.select("#shape").property("value");

//     // 4a. Save the element that was changed as a variable.

//     // 4b. Save the value that was changed as a variable.

//     // 4c. Save the id of the filter that was changed as a variable.

  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
 
  
//     // 6. Call function to apply all filters and rebuild the table
//     filterTable();
  
//   }
  
//   // 7. Use this function to filter the table when data is entered.
//   function filterTable() {
//     let updateFilters = filterTable;
  
//     // 8. Set the filtered data to the tableData.
    
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
//     if (date) {
//       filteredData = filteredData.filter(row => row.datetime === date);
//   };
  
//     // 10. Finally, rebuild the table using the filtered data
    
//   }
  
//   // 2. Attach an event to listen for changes to each filter
//   d3.selectAll("#datetime", "#city", "#state", "#country", "#shape").on("click", updateFilters);
  
//   // Build the table when the page loads
//   buildTable(tableData);
