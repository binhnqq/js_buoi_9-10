const dsnv = new DanhSachNhanVien();
const validation = new Validation()
function setLocalstorage() {
     localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV))
}
function getLocalstorage() {
  if(localStorage.getItem("DSNV")!= null){
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    hienThiTable();
  }
 
}
function layThongTinNV() {
  var taiKhoan =document.getElementById("tknv").value.trim();
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;
  var isValid = true 
  isValid &=validation.kiemTraRong(taiKhoan,"tbTKNV","Tài khoản không được để trống !") && validation.kiemTraTrung(taiKhoan,"tbTKNV","Tài khoản bị trùng ! ",dsnv.mangNV)
  isValid &=validation.kiemTraRong(hoTen,"tbTen","Tên người dùng không được để trống !") && validation.kiemTraTen(hoTen,"tbTen","Tên nhân viên phải là chữ !")
  isValid &= validation.kiemTraEmail(email,"tbEmail","Email không đúng định dạng !");
  isValid &= validation.kiemTraMK(matKhau,"tbMatKhau","Mật khẩu chưa ít nhất 1 kí tự chữ ,1 in hoa ,1 số ,1 đặc biệt ,và từ 6-8 chữ ")
  isValid &= validation.kiemTraChucVu(chucVu ,"chucvu","tbChucVu","Chức cụ chưa được lựa chọn !");
  if(isValid){
    var nv = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luong,chucVu,gioLam)
    nv.tinhTongLuong();
    nv.xepLoaiNV();
    dsnv.themNV(nv);
    
    //Localstorage
    setLocalstorage();
    getLocalstorage();
    hienThiTable();
  }
 
}
function hienThiTable() {
  var content ="";
dsnv.mangNV.map(function(nv,index){
   var trELE = `<tr>
   <td>${nv.taiKhoan}</td>
   <td>${nv.hoTen}</td>
   <td>${nv.email}</td>
   <td>${nv.ngayLam}</td>
   <td>${nv.chucVu}</td>
   <td>${nv.tongLuong}</td>
   <td>${nv.xepLoai}</td>
   <td>
   <button class="btn btn-success" onclick="hienThiThongTin('${nv.taiKhoan}')">Xem</button>
   <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
   </td>
   </tr>`
   content +=trELE;
})
 document.getElementById("tableDanhSach").innerHTML = content;
}
function hienThiThongTin(id) {
  console.log(id)
  let viTri =dsnv.timViTri(id);
  console.log(viTri);
  if(viTri > -1){
    document.getElementById("tknv").value = dsnv.mangNV[viTri].taiKhoan;
    document.getElementById("tknv").disabled = true;
     document.getElementById("name").value = dsnv.mangNV[viTri].hoTen;
     document.getElementById("email").value = dsnv.mangNV[viTri].email;
    document.getElementById("password").value = dsnv.mangNV[viTri].matKhau;
     document.getElementById("datepicker").value = dsnv.mangNV[viTri].ngayLam;
     document.getElementById("luongCB").value = dsnv.mangNV[viTri].luong;
     document.getElementById("chucvu").value = dsnv.mangNV[viTri].chucVu;
     document.getElementById("gioLam").value = dsnv.mangNV[viTri].gioLam;
  }
}
function capNhatNhanVien() {
  var taiKhoan =document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;
    var nv = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luong,chucVu,gioLam);
    nv.tinhTongLuong();
    nv.xepLoaiNV();
    dsnv.capNhat(nv);
    setLocalstorage();
    getLocalstorage();
  
 
}
function xoaNhanVien(id) {
  dsnv.xoaNV(id);
  hienThiTable()
  setLocalstorage();
  getLocalstorage();
}

