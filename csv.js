//User submitted email template
var textTemplate = '';
//CSV gathered columns
var columns = [];
//CSV gathered student data
var csvValues = [];
//Merged template and CSV data
var emails = {};
//Name of CSV file
var spreadSheet = '';
//Name of lecturer
var lecturer = '';
//Subject Text
var subjectText = '';

var fromDB= '';

var data = '';

function sendMail() {

    for (const [email, template] of Object.entries(emails)) {
        //Create and Post AJAX HttpRequest to SendMail.php
        var httpr = new XMLHttpRequest();
        var fd = new FormData();
        fd.append("email", email);
        fd.append("template", template);
        fd.append("subjectText", subjectText);
        httpr.onload = function() {
            const serverResponse = document.getElementById("serverResponse");
        }
        httpr.open("POST", "sendMail.php");
        httpr.send(fd);
    }
}


function sendData(){
    for (let i =0; i <csvValues.length;i++){
       for (const [column, value] of Object.entries(csvValues[i])) {
           var httpr = new XMLHttpRequest();
           var fd = new FormData();
           fd.append("lecturer", lecturer);
           fd.append("email", csvValues[i]["email"]);
           fd.append("column", column);
           fd.append("spreadSheet",spreadSheet);
           fd.append("csvValues", value);
           httpr.onload = function(){
               const serverResponse = document.getElementById("serverResponse");
               serverResponse.innerHTML = this.responseText;
           }
           httpr.open("POST", "post.php");
           httpr.send(fd);
       }
   }
}

function getData(){
    var httpr = new XMLHttpRequest();
    httpr.onload = function(){
        const serverResponse = document.getElementById("serverResponse");
        // serverResponse.innerHTML = this.responseText; // Right not it prints the data out at @serviceResponse
        fromDB = this.responseText;

    }
    httpr.open("GET", `get.php?lecturer=${lecturer}`);
    httpr.send();
    
    
}

async function submitGetLecturer() {
    
    lecturer = document.getElementById("lecturerGET").value;
    getData();

}


function convertToObject() {


    var arr = fromDB.split("\n")

    var obj = {}
  
    for (i of arr) {
        i = i.split(":")
        if (i[1] === undefined) { // If value pair is somehow undefined
            continue;
        }
        else {
            temp_val = i[1].split("="); // split the key:value pair
        }
        
        // console.log("temp",temp_val)
        if (!(i[0] in obj)) { // If user is not defined yet
            
            temp_obj = {}
            temp_obj[temp_val[0]] = temp_val[1];
            obj[i[0]] = temp_obj
        }
        else { // If user is defined + add the values
            temp = obj[i[0]]; // grab dict val
            temp[temp_val[0]] = temp_val[1] //add values 
            obj[i[0]] = temp // store back into value as key:value pair
        }
        
        // console.log(i)
        
    }
    console.log(obj)
    data = obj //Stores the Object of Objects in data variable.
    // document.getElementById("showdata").innerHTML = JSON.stringify(emails);
    

}

function mergeData() {
    //loop through each dict obj containing CSV values of each student

    for (const [StudentEmail, StudentData] of Object.entries(data)) {

        var email = textTemplate;
        //Get the subject text for the email and remove it from email template
        var subjectLine = email.slice(email.indexOf('Subject'), email.indexOf('\n') + 1);
        email = email.replace(subjectLine, '').trim();
        subjectText = subjectLine.slice(subjectLine.indexOf(':') + 1).trim();
        while (email.indexOf('[') != -1) {
            var placeholderStr = email.slice(email.indexOf('['), email.indexOf(']') + 1);
            var header = email.slice(email.indexOf('[') + 1, email.indexOf(']'));
            //If the header string exists in the dict obj, then replace it with the actual data

            if (StudentData[header]) {
                email = email.replace(placeholderStr, StudentData[header]);

            } else {
                //If the header string contains the if condition
                if (header.includes('ifNonNull')) {
                    //get the column to check the condition
                    header = header.slice(header.indexOf(':') + 1).trim();
                    //check whether the value is 0

                    value = StudentData[header];

                    if (value == '0') {
                        //remove all text that this condition applies to
                        var textToRemove = email.slice(email.indexOf('[ifNonNull'), email.indexOf('[endif]') + 7);
                        email = email.replace(textToRemove, '');
                    } else {
                        email = email.replace(placeholderStr, '');
                        email = email.replace('[endif]', '');
                    }
                }
            }
        }
        emails[StudentEmail] = email
    }
    console.log("emails", emails)

    showData()

}

function showData() { // Shows the merged data
    
    tempStr = "";

    for (const [key,val] of Object.entries(emails)) {

        tempStr += val;

    }
    console.log(tempStr)
    document.getElementById("showdata").innerText = tempStr;
}


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
const csvFileChosen = document.getElementById('csvFileChosen');
const txtFile = document.getElementById("template");
const templateChosen = document.getElementById('templateChosen');
const lecturerInput = document.getElementById("lecturer");

/*Read the name of CSV file*/
csvFile.addEventListener('change', function() {
    csvFileChosen.textContent = this.files[0].name
})

/*Read the name of email template*/
txtFile.addEventListener('change', function() {
    templateChosen.textContent = this.files[0].name
})

/*Read email template*/
document.getElementById('txt').addEventListener('submit', function(e) {
    input = txtFile.files[0];
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = function(e) {
        textTemplate = e.target.result;
        let temp = document.getElementById("tempDiv");
        // Clears template div to show the current file
        temp.innerHTML = textTemplate;
    };
    reader.readAsText(input);

});

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
// Modified from https://www.w3schools.com/howto/howto_js_sort_table.asp
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
            switchcount++;
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
    spreadSheet = csvFile.value.substring(csvFile.value.lastIndexOf("\\") + 1);
    lecturer = lecturerInput.value;

    reader.onload = function(e) {
        const text = e.target.result;
        const data = csvToArray(text);
        const headers = data[0]
        const values = data[1]
        columns = data[0];
        csvValues = data[1];
        console.log("csvalues", csvValues);

        // Create table
        let main = document.getElementById("tableDiv");
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

        // Adds ability to sort by header cell email with a mouse click
        email.setAttribute('onclick', 'sortTable(0);');
        // Adds pointer cursor on hover
        email.setAttribute('style', 'cursor: pointer;');
        // Sets class to invert colors on highlight
        email.setAttribute('class', 'cellh');

        // Adds ability to sort by header cell name with a mouse click
        name.setAttribute('onclick', 'sortTable(1);');
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