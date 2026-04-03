const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const { protect } = require('../middleware/authMiddleware');
// ✅ 確保引入名稱與檔名對應
const upload = require('../middleware/upload'); 

// 取得所有行程
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 新增行程
router.post('/', protect, upload.single('image'), async (req, res) => {
    try {
        const tourData = { ...req.body };
        if (req.file) {
            // ✅ 存入本地伺服器的完整網址 (假設後端為 5001 port)
            tourData.imageUrl = `http://localhost:5001/uploads/${req.file.filename}`; 
        }
        const newTour = new Tour(tourData);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (err) {
        res.status(400).json({ message: "新增失敗: " + err.message });
    }
});

// 更新行程
router.put('/:id', protect, upload.single('image'), async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
        }
        
        const updated = await Tour.findByIdAndUpdate(
            req.params.id, 
            updateData, 
            { new: true, runValidators: true } 
        );
        if (!updated) return res.status(404).json({ message: "找不到該行程" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: "更新失敗: " + err.message });
    }
});

// 刪除行程
router.delete('/:id', protect, async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) return res.status(404).json({ message: "找不到該行程" });
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "刪除失敗: " + err.message });
    }
});

module.exports = router;