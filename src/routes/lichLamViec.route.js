const {
  postLichLamViecController,
  getLichLamViecController,
  editLichLamViecController,
  getAllLichLamViecController,
  acceptLichLamViecController,
} = require('../controllers/lichLamViec.controller');

function lichLamViecApi(router) {
  router.post(`/them-lich-lam-viec-user`, postLichLamViecController);
  router.put(`/edit-lich-lam-viec-user`, editLichLamViecController);
  router.get(`/get-lich-lam-viec-user`, getLichLamViecController);
  router.get(`/get-all-lich-lam-viec-user`, getAllLichLamViecController);
  router.put(`/accept-calender/:maND/:trangThai`, acceptLichLamViecController);
}

module.exports = lichLamViecApi;
