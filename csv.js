/* Side bar elements */
filebar = document.getElementById('filebar');
sendbar = document.getElementById('sendbar');
upbar = document.getElementById('upbar');

// Shows Home div
const showHome = () => {
    document.getElementById('home').style.display = 'block'
    document.getElementById('upload').style.display = 'none'
    document.getElementById('files').style.display = 'none'
    document.getElementById('send').style.display = 'none'

    /* None of the menu bar elements is selected*/
    if (filebar.classList.contains('current')) {
        filebar.classList.remove('current');
        filebar.classList.add('default');
    }

    if (sendbar.classList.contains('current')) {
        sendbar.classList.remove('current');
        sendbar.classList.add('default');
    }

    if (upbar.classList.contains('current')) {
        upbar.classList.remove('current');
        upbar.classList.add('default');
    }
}

// Shows Upload div
const showUpload = () => {
    document.getElementById('upload').style.display = 'block'
    document.getElementById('home').style.display = 'none'
    document.getElementById('files').style.display = 'none'
    document.getElementById('send').style.display = 'none'

    if (filebar.classList.contains('current')) {
        filebar.classList.remove('current');
        filebar.classList.add('default');
    }

    if (sendbar.classList.contains('current')) {
        sendbar.classList.remove('current');
        sendbar.classList.add('default');
    }

    if (upbar.classList.contains('default')) {
        upbar.classList.remove('default');
        upbar.classList.add('current');
    }
}

// Shows File div
const showFiles = () => {
    document.getElementById('upload').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('files').style.display = 'block'
    document.getElementById('send').style.display = 'none'


    if (filebar.classList.contains('default')) {
        filebar.classList.remove('default');
        filebar.classList.add('current');
    }

    if (sendbar.classList.contains('current')) {
        sendbar.classList.remove('current');
        sendbar.classList.add('default');
    }

    if (upbar.classList.contains('current')) {
        upbar.classList.remove('current');
        upbar.classList.add('default');
    }
}

// Shows Send div
const showSend = () => {
    document.getElementById('upload').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('files').style.display = 'none'
    document.getElementById('send').style.display = 'block'


    if (filebar.classList.contains('current')) {
        filebar.classList.remove('current');
        filebar.classList.add('default');
    }

    if (sendbar.classList.contains('default')) {
        sendbar.classList.remove('default');
        sendbar.classList.add('current');
    }

    if (upbar.classList.contains('current')) {
        upbar.classList.remove('current');
        upbar.classList.add('default');
    }
}


const myForm = document.getElementById("opener");
const csvFile = document.getElementById("csvFile");

function csvToArray(str, delimiter = ",") {
    /* Array of headers */
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter);
    var data = new Array();
    var alldata = new Array();

    for (let i = 0; i < headers.length; i++) {
        headers[i] = headers[i].trim();
    };

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.trimRight().slice(str.indexOf("\n") + 1).split("\r\n");
    // Splits row strings into arrays, then adds them to data array
    for (let i = 0; i < rows.length; i++) {
        data.push(rows[i].split(delimiter));
        for (let j = 0; j < headers.length; j++) {
            data[i][j] = data[i][j].trim();
        };
    };

    // Assigns data from data array to a dictionary with corresponding headers
    for (let j = 0; j < data.length; j++) {
        var dict = new Object();
        for (let i = 0; i < headers.length; i++) {
            dict[headers[i]] = data[j][i];
        }
        alldata.push(dict);
    }

    // return the array with headers and data array
    const farray = [headers, alldata];
    return farray;
}

// Function to sort table column by index
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("dataTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const data = csvToArray(text);
        const headers = data[0]
        const values = data[1]

        // Create table
        var main = document.getElementById("tableDiv");
        let table = document.createElement('table');
        table.setAttribute("id", "dataTable");

        // Inserts row for headers
        table.insertRow();

        // Adds header values to header row
        for (h of headers) {
            let hcell = table.rows[table.rows.length - 1].insertCell();
            hcell.textContent = h;
        }

    



        // Adds array values corresponding to the correct header to table
        for (arr of values) {
            table.insertRow();

            for (let i = 0; i < headers.length; i++) {
                let vcell = table.rows[table.rows.length - 1].insertCell();
                vcell.textContent = arr[headers[i]];
            }
        }
        
        // Gets the email header cell
        let email = table.rows[0].cells[0];
        // Gets the PrefName header cell
        let name = table.rows[0].cells[1];

        // Adds ability to sort by header cell
        email.setAttribute('onclick','sortTable(0);');
        // Adds pointer cursor on hover
        email.setAttribute('style', 'cursor: pointer;');
        // Sets class to invert colors on highlight
        email.setAttribute('class', 'cellh');
        
        // Adds ability to sort by header cell
        name.setAttribute('onclick','sortTable(1);');
        // Adds pointer cursor on hover
        name.setAttribute('style', 'cursor: pointer;');
        // Sets class to invert colors on highlight
        name.setAttribute('class', 'cellh');

        // Clears table div to show the current file
        main.innerHTML = "";

        // Adds table to page
        main.appendChild(table);
    };
    reader.readAsText(input);
})



;