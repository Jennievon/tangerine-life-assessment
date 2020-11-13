import { servePage } from "./spa.js";

let file;

document.addEventListener("readystatechange", (event) => {
  document.getElementById("fileUpload").addEventListener("change", (event) => uploadFile(event));
});

const possibleHeaders = ["Fullname", "Phone Number", "Address", "State", "LGA", "Date of Birth", "Salary", "Gender", "Call Allowance", "Transport Allowance"];
var obj_csv = {
  size: 0,
  dataFile: [],
};

function uploadFile(event) {
  file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });

    workbook.SheetNames.forEach(function (sheetName) {
      const headers = get_header_row(workbook.Sheets[sheetName]);
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      appendToDom(XL_row_object);
    });
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };

  reader.readAsBinaryString(file);
}

function get_header_row(sheet) {
  var range = XLSX.utils.decode_range(sheet["!ref"]);
  var C,
    R = range.s.r; /* start in the first row */
  /* walk every column in the range */
  for (C = range.s.c; C <= range.e.c; ++C) {
    var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */

    var hdr = "UNKNOWN " + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    if (possibleHeaders.includes(hdr.trim())) {
      continue;
    } else {
      //write your throw function here
      alert(
        "Please, upload a valid Excel file with matching column headers, following the format - Fullname, Phone Number, Address, State, LGA, Date of Birth, Salary, Gender, Call Allowance, Transport Allowance"
      );
      throw "error";
    }
  }
}

function appendToDom(jsonObject) {
  servePage("columns");
  let tabled = document.getElementById("tabled");
  jsonObject.forEach((item) => {
    let tabledData = document.createElement("div");
    tabledData.className = "row";
    for (let key in item) {
      var table = document.createElement("div");
      table.className = "cell";
      table.innerHTML = item[key];
      tabledData.appendChild(table);
    }
    tabled.appendChild(tabledData);
  });

  document.getElementById("saveBtn").addEventListener("click", submitUploadedData);
}

const submitData = (file) => {
  console.log("Uploading file...");

  const formData = new FormData();
  formData.append("files", file);

  fetch("https://httpbin.org/anything", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      alert("Successfully Saved");
      console.log("Success:", result);
    })
    .catch((error) => {
      alert("Please check your network connection");
      console.error("Error:", error);
    });
};

function submitUploadedData(event) {
  submitData(file);
}
