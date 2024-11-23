document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('file').addEventListener('change', function () {
    const fileName = this.files[0].name;
    document.querySelector('.file-name').textContent = fileName;
  });

  document.getElementById('upload-btn').addEventListener('click', function () {
    const predictions = getPredictions();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (predictions) {
      const p = document.createElement('p');
      p.textContent = 'Predictions: ' + predictions;
      resultDiv.appendChild(p);
    }

  });
});