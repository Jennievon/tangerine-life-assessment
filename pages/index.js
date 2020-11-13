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
        <input
          type="file"
          class="btn upload-btn"
          id="fileUpload"
        />
      </div>
    </div>
  </div>
</div>
  `;
};

export default IndexPage;
