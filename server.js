const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./Training.db');

// CORS設定
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 新規登録API
app.post('/register', (req, res) => {
    const { id, password, height, weight, goal, plan } = req.body;
    const entryDate = new Date().toISOString().split('T')[0];

    const query = `INSERT INTO user (user_id, user_pw, user_height, user_weight, user_goal, user_plan, user_entry) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [id, password, height, weight, goal, plan, entryDate], (err) => {
        if (err) {
            return res.status(500).json({ error: "登録に失敗しました" });
        }
        res.json({ message: "登録成功" });
    });
});

// ログインAPI
app.post('/login', (req, res) => {
    const { id, password } = req.body;

    const query = `SELECT * FROM user WHERE user_id = ? AND user_pw = ?`;

    db.get(query, [id, password], (err, user) => {
        if (err) {
            return res.status(500).json({ error: "ログインエラー" });
        }
        if (!user) {
            return res.status(401).json({ error: "IDまたはパスワードが間違っています" });
        }
        res.json(user);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
