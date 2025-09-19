const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// GET endpoint to retrieve data from data.json
app.get('/data', (req, res) => {
	fs.readFile('./data.json', 'utf8', (err, jsonData) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to read data file.' });
		}
		try {
			const data = JSON.parse(jsonData);
			res.json(data);
		} catch (parseErr) {
			res.status(500).json({ error: 'Failed to parse data file.' });
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
