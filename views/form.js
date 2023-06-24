const fs = require('fs');
const ejs = require('ejs');
const pdf = require('html-pdf');

// Define some data to pass to the EJS template
const data = {
  details: {
    name: 'John Doe',
    left_logmar: 0.2,
    right_logmar: 0.3,
  },
};

// Render the EJS template with data
ejs.renderFile('form.ejs', data, (err, html) => {
  if (err) return console.log(err);

  // Convert the HTML to a PDF buffer
  pdf.create(html).toBuffer((err, buffer) => {
    if (err) return console.log(err);

    // Encode the PDF buffer as base64
    const pdfData = buffer.toString('base64');

    // Pass the PDF data to the EJS template
    const newData = Object.assign({}, data, { pdfData });

    // Render the updated EJS template with data
    const newHtml = ejs.render(html, newData);

    // Save the updated HTML to a file (optional)
    fs.writeFileSync('form.html', newHtml);

    // Send the updated HTML to the client
    res.send(newHtml);
  });
});
