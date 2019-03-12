const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'src');
const app = express();
app.use(express.static(publicPath));
console.log(path.join(publicPath, 'index.html'));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});