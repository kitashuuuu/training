const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./Training.db');

app.use(cors());
app.use(bodyParser.json());

// ユーザー登録API（変更なし）
app.post('/register', (req, res) => {
    const { id, password, height, weight, goal, plan } = req.body;
    const entryDate = new Date().toISOString().split('T')[0];

    const query = `INSERT INTO user (user_id, user_pw, user_height, user_weight, user_goal, user_plan, user_entry) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [id, password, height, weight, goal, plan, entryDate], (err) => {
        if (err) return res.status(500).json({ error: "登録に失敗しました" });
        res.json({ message: "登録成功" });
    });
});

// ログインAPI（変更なし）
app.post('/login', (req, res) => {
    const { id, password } = req.body;

    const query = `SELECT * FROM user WHERE user_id = ? AND user_pw = ?`;
    db.get(query, [id, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: "サーバーエラー" });
        }
        if (!row) {
            return res.status(401).json({ error: "IDまたはパスワードが間違っています" });
        }

        res.json({
            user_id: row.user_id,
            user_height: row.user_height,
            user_weight: row.user_weight,
            user_goal: row.user_goal,
            user_plan: row.user_plan,
            user_entry: row.user_entry
        });
    });
});

// 目標更新API（新規追加）
app.post('/update-goal', (req, res) => {
    const { user_id, user_goal } = req.body;

    if (!user_id || !user_goal) {
        return res.status(400).json({ error: "必要なデータが不足しています" });
    }

    const query = `UPDATE user SET user_goal = ? WHERE user_id = ?`;
    db.run(query, [user_goal, user_id], function (err) {
        if (err) {
            return res.status(500).json({ error: "目標の更新に失敗しました" });
        }
        res.json({ message: "目標が更新されました" });
    });
});


// トレーニングプラン更新API（新規追加）
app.post('/update-plan', (req, res) => {
    const { user_id, user_plan } = req.body;

    if (!user_id || !user_plan) {
        return res.status(400).json({ error: "必要なデータが不足しています" });
    }

    const query = `UPDATE user SET user_plan = ? WHERE user_id = ?`;
    db.run(query, [user_plan, user_id], function (err) {
        if (err) {
            return res.status(500).json({ error: "トレーニングプランの更新に失敗しました" });
        }
        res.json({ message: "トレーニングプランが更新されました" });
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
