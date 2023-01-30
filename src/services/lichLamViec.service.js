const pool = require('../configs/connectDB');
const uniqid = require('uniqid');

const postLichLamViecService = async (req, res) => {
  const { maND, thang, nam, lich } = req.body;
  const uniId = uniqid();

  try {
    await pool.execute(
      'INSERT INTO tbllichlamviec(maLich, maND, thang, nam, lich) VALUES (?,?,?,?,?)',
      [uniId, maND, thang, nam, lich]
    );
    return res.status(200).json({
      message: 'Thêm lịch làm việc thành công',
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const editLichLamViecService = async (req, res) => {
  const { maND, thang, nam, lich } = req.body;

  try {
    await pool.execute(
      'Update tbllichlamviec set lich=? where maND=? and thang=? and nam=?',
      [lich, maND, thang, nam]
    );
    return res.status(200).json({
      message: 'Chỉnh sửa lịch làm việc thành công',
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

const getLichLamViecService = async (req, res) => {
  const { maND, thang, nam } = req.query;
  try {
    const [rows, field] = await pool.execute(
      'SELECT * from tbllichlamviec where maND=? and thang=? and nam=?',
      [maND, thang, nam]
    );
    return res.status(200).json({
      message: 'Get lịch làm việc thành công',
      data: rows,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

const getAllLichLamViecService = async (req, res) => {
  try {
    const [rows, field] = await pool.execute(
      'SELECT * from tbllichlamviec, tblnguoidung where tbllichlamviec.maND = tblnguoidung.maND and thang=1'
    );
    return res.status(200).json({
      message: 'Get lịch làm việc thành công',
      data: rows,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const acceptLichLamViecService = async (req, res) => {
  try {
    const [rows, field] = await pool.execute(
      'UPDATE tbllichlamviec set trangThai=? where maND=?',
      [req.params.trangThai, req.params.maND]
    );
    return res.status(200).json({
      message: 'Cập nhật lịch thành công',
      data: rows,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

module.exports = {
  postLichLamViecService,
  editLichLamViecService,
  getLichLamViecService,
  getAllLichLamViecService,
  acceptLichLamViecService,
};
