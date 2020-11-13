const Column = () => {
  return `
    <div class="main">
    <div>
      <h4>Upload</h4>
      <div class="main-outer">
        <div class="main-outer__header">
          <h5>Column Mapping</h5>
          <div>
            <button type="submit" id="saveBtn" class="btn save-btn">Save</button>
          </div>
        </div>
        <div class="nametable" id="tabled">
          <div class="row header">
            <div class="cell">Full Name</div>
            <div class="cell">Phone Number</div>
            <div class="cell">Address</div>
            <div class="cell">State</div>
            <div class="cell">LGA</div>
            <div class="cell">Date of Birth</div>
            <div class="cell">Salary</div>
            <div class="cell">Gender</div>
            <div class="cell">Call Allowance</div>
            <div class="cell">Transport Allowance</div>
          </div>
      </div>
    </div>
  </div>      `;
};

export default Column;
