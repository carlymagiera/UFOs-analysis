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

// Create a variable to keep track of all the filters as an object.
var filters = [];

// Use this function to update the filters. 
function updateFilters() {

//Save the value that was changed as a variable.
  var dateValue = d3.select("#datetime").property("value");
  console.log(dateValue);
  var cityValue = d3.select("#city").property("value");
  console.log(cityValue);
  var stateValue = d3.select("#state").property("value");
  console.log(stateValue);
  var countryValue = d3.select("#country").property("value");
  console.log(countryValue);
  var shapeValue = d3.select("#shape").property("value");
  console.log(shapeValue);

    // ufo filter rule - first item in list = date, second = city, third = state, fourth = country, fifth = shape. static
    filters[0]=dateValue;
    filters[1]=cityValue;
    filters[2]=stateValue;
    filters[3]=countryValue;
    filters[4]=shapeValue;
  
    // Call function to apply all filters and rebuild the table
    filterTable(filters)

}

  // Use this function to filter the table when data is entered.
  function filterTable(ufoFilters) {
    console.log(ufoFilters)
  
    // Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that matches the filter values
      if (ufoFilters[0] !== ""){
        filteredData = filteredData.filter(row => row.datetime === ufoFilters[0])
      };

      if (ufoFilters[1] !== ""){
        filteredData = filteredData.filter(row => row.city === ufoFilters[1])
      };

      if (ufoFilters[2] !== ""){
        filteredData = filteredData.filter(row => row.state === ufoFilters[2])
      };

      if (ufoFilters[3] !== ""){
        filteredData = filteredData.filter(row => row.country === ufoFilters[3])
      };

      if (ufoFilters[4] !== ""){
        filteredData = filteredData.filter(row => row.shape === ufoFilters[4])
      };
  
    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(data);
