const express = require('express');
const bodyParser = require('body-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// CSVライターの設定
const csvWriter = createCsvWriter({
    path: 'checkins.csv',
    header: [
        {id: 'email', title: 'メールアドレス'},
        {id: 'visitors', title: '来場人数'},
        {id: 'timestamp', title: 'チェックイン時間'},
        {id: 'date', title: '日付'}
    ]
});

// チェックインエンドポイント
app.post('/checkin', async (req, res) => {
    try {
        const { email, visitors } = req.body;
        const now = new Date();
        
        const record = {
            email,
            visitors,
            timestamp: now.toLocaleTimeString(),
            date: now.toLocaleDateString()
        };

        await csvWriter.writeRecords([record]);
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'チェックインに失敗しました' });
    }
});

app.listen(port, () => {
    console.log(`サーバーが起動しました: http://localhost:${port}`);
}); 