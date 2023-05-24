function Validation() {
  this.kiemTraRong = function (value,tbID,message) {
    if(value.trim() == ""){
      //khong hop le
      document.getElementById(tbID).innerHTML=message;
      document.getElementById(tbID).style.display = "block";
      return false
    }
    document.getElementById(tbID).innerHTML="";
    document.getElementById(tbID).style.display = "none";
    return true
  }
  this.kiemTraTrung = function (value, tbID,message,mangNV) {
  var isExist =  mangNV.some(function(nv){
       return value === nv.taiKhoan;
    })
    if (isExist) {
      document.getElementById(tbID).innerHTML=message;
      document.getElementById(tbID).style.display = "block";
      return false
    }
    document.getElementById(tbID).innerHTML="";
    document.getElementById(tbID).style.display = "none";
    return true
  }
  this.kiemTraTen = function (value , tbID , message) {
    var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
    if(value.match(pattern)){
      document.getElementById(tbID).innerHTML="";
    document.getElementById(tbID).style.display = "none";
    return true
    }
    document.getElementById(tbID).innerHTML=message;
    document.getElementById(tbID).style.display = "block";
    return false
  }
  this.kiemTraEmail = function (value , tbID , message){
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(pattern)){
      document.getElementById(tbID).innerHTML="";
    document.getElementById(tbID).style.display = "none";
    return true
    }
    document.getElementById(tbID).innerHTML=message;
    document.getElementById(tbID).style.display = "block";
    return false
  }
  this.kiemTraMK = function (value , tbID , message) {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;

    if (value.match(pattern)) {
        //đúng với biểu mẫu
        //hợp lệ
        document.getElementById(tbID).innerHTML = "";
        document.getElementById(tbID).style.display = "none";
        return true;
    }

    //không hợp lệ
    document.getElementById(tbID).innerHTML = message;
    document.getElementById(tbID).style.display = "block";
    return false;

  }
  this.kiemTraChucVu = function (selectID,tbID,message ) {
    var optionIndex = document.getElementById(selectID).selectedIndex;
    if(optionIndex !== 0){
      document.getElementById(tbID).innerHTML = "";
      document.getElementById(tbID).style.display = "none";
      return true;
    }
    document.getElementById(tbID).innerHTML = message;
    document.getElementById(tbID).style.display = "block";
    return false;

  }
}