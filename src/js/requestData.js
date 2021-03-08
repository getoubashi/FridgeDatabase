const getData = async () => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxmvaMI9ZS3WGVN06bG0QeudgiQb3IQ8_xk64JJ8qPZ3hslvm9Ew3K5ihQTEE0oSzMc/exec');
  const data = await response.json();
  setPanelList(data);

  document.getElementById('loading').style.display = 'none';
  document.getElementById('loading2').style.display = 'none';
  document.getElementById('contents').style.display = 'block';
  document.getElementById('listArea').style.display = 'block';
}

getData();
