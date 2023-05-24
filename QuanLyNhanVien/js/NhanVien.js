function NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luong,chucVu,gioLam) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luong = luong;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";
  this.tinhTongLuong = function(){
    switch (chucVu) {
      case "Sếp":
        this.tongLuong = this.luong*3;
        break;
      case "Trưởng phòng":
        this.tongLuong = this.luong*2;
        break;
      case "Nhân viên":
        this.tongLuong = this.luong;
        break;
      default:
        this.tongLuong = "Chức vụ chưa được chọn !";
        break;
    }
  }
  this.xepLoaiNV = function () {
    if(gioLam>=192){
      this.xepLoai = "Nhân viên xuất sắc";
    }else if(gioLam>=176){
    this.xepLoai= "Nhân viên giỏi";
    }else if(gioLam>=160){
      this.xepLoai = "Nhân viên khá";
    }else if( gioLam<160){
      this.xepLoai = "Nhân viên trung bình";
    }else{
      this.xepLoai = "Nhân viên chưa được chọn"
    }
  }
}

