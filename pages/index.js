const IndexPage = () => {
  return `
  <div class="index-main">
  <h4>Upload</h4>
  <div class="upload">
    <div class="main-inner">
      <div>
        <img src="/assets/img/cloud-upload-icon_15.svg" alt="" height="100" />
        <p class="upload-text">Drag and drop a file here</p>
        <p class="upload-text">or</p>
        <label class="btn fileupload-label">
          <input type="file" id="fileUpload" accept=".xls, .xlsx" required/>
          <span>Choose a file</span>
        </label>
      </div>
    </div>
  </div>
</div>
  `;
};

export default IndexPage;
