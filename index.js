let numberArr = [12,-13,-16 ,28];
// Bai1
let TinhTongSoDuong = () =>{
   
    let resutl = 0;    
    numberArr.forEach ((item) =>{
        if(item > 0 ){
            resutl += item;
         }
    });
    let show = document.getElementById("tongsd");
    show.innerHTML = resutl;
   
}
//bai2
let demsoduong =() =>{
    //let number = document.getElementById("bai2").value * 1;
    count = 0;
    numberArr.forEach((item) =>{
        if(item > 0){
            count += 1;
        }
    });
    let show = document.getElementById("demso");
    show.innerHTML = count;
}
let demsoduongb2 = () =>{
    let number = document.getElementById("bai2").value;
    if( number.trim() === ""){
        alert(" Vui long nhap so");
        return;
    }
    numberArr.push(number * 1);
    let show = document.getElementById("demsoshow");
    show.innerHTML = numberArr;
    show.style.color = "blue";
    demsoduong();
}
//------ bai3
let timSoNN = () =>{
    let numberMin  = numberArr[0];
    numberArr.forEach((item) => {
        if( item < numberMin ){
            numberMin = item;
        }
    });
    let show = document.getElementById("nhonhat");
    show.innerHTML = numberMin;
}
let sonhonhat = () =>{
    let number = document.getElementById("bai3").value
    if(number.trim ===""){
        alert(" yeu cau nhap so");
        return;
    }
    numberArr.push(number * 1);
    let show = document.getElementById("shownhonhat");
    show.innerHTML = numberArr;
    show.style.color = "blue";
    timSoNN();
}
// bai4
let soDuongNhoNhat = () =>{
   let smallestPositive = null ;
   for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
        if ( smallestPositive === null  || numberArr[i] < smallestPositive) {
            smallestPositive = numberArr[i];
        }
    }
}

let show = document.getElementById("duongNhoNhat");
show.innerHTML = smallestPositive;

}
let soDuongNhoNhats =() =>{
 let number = document.getElementById("bai4").value;
 if(number.trim === ""){
    alert("nhap so ");
    return;
 }
 numberArr.push(number * 1);
 let show = document.getElementById("showDuongNhoNhat");
 show.innerHTML = numberArr;
 show.style.color = "green"
 soDuongNhoNhat();
}




// bai 5
let soChanCuoiCung =() =>{
    let kQ = -1 ;
    
    numberArr.forEach((item)  =>{
      
        if(item % 2 ===0 ){
            kQ = item;
          
        }
       
    });
    let show = document.getElementById("soDuongCuoiCung");
    show.innerHTML = kQ;
}
let soDuongCuoiCungg = () =>{
    let number = document.getElementById("bai5").value *1;
    if(number.trim === ""){
        alert(" nhap so");
        return;
    }
    numberArr.unshift(number);
    let show = document.getElementById("showSoDuongCuoiCung");
    show.innerHTML = numberArr;
    show.style.color = "red";
    soChanCuoiCung();
}


//bai6

let swapItem =() =>{
    let number1 = document.getElementById("index_1").value;
    let number2 =document.getElementById("index_2").value;
    let tamp = numberArr[number1];
    numberArr[number1] = numberArr[number2];
    numberArr[number2] =tamp;
    let show = document.getElementById("showw");
    show.innerHTML = numberArr;
    
    
}


let button_click = () => {
    let number = document.getElementById("123").value;
    if( number.trim() === ""){
        alert(" Vui long nhap so");
        return;
    }
    numberArr.push(number * 1);
    let show = document.getElementById("alo");
    show.innerHTML = numberArr;
    show.style.color = "red";
    /////-----------
    TinhTongSoDuong();
    
    timSoDuongNN();
    soChanCuoiCung();
}

//bai7
let swapItemm = () =>{
   // let number =document.getElementById("index_3").value;
   let number = document.getElementById("index_3").value*1;
    if(number.trim === ""){
        alert(" nhap so");
        return;
    }
    numberArr.push(number);
        for (let i = 0; i < numberArr.length; i++) {
            /*
                *** biến này sẽ chứa giá trị của vị trí sau khi được hoán đổi
                    của giá trị hiện tại của vòng lặp đầu tiên
            */
            currentValueNewIndex = i;

            /*
                *** chạy thêm một vòng lặp qua các giá trị còn lại của mảng để
                    so sánh chúng với giá trị hiện tại của vòng lặp thứ nhất
            */
            for (let j = i + 1; j < numberArr.length; j++) {
                /*
                    *** đổi index của giá trị hiện tại của vòng lặp thứ 1 với
                        index của giá trị của vòng lặp 2
                */
                if (numberArr[currentValueNewIndex] > numberArr[j]) {
                    currentValueNewIndex = j;
                }
            }
            
            /*
                *** nếu ví trị của giá trị hiện tại của vòng lặp thứ 1
                    được update thì ta sẽ tiến hành việc hoán đổi
            */
            if (i !== currentValueNewIndex) {
                let temp = numberArr[i];
                numberArr[i] = numberArr[currentValueNewIndex];
                numberArr[currentValueNewIndex] = temp;
            }
        }

// *** trả về mảng đã được sắp xếp

    let show = document.getElementById("showww");
    show.innerHTML = numberArr;
    show.style.color = "red";
}
// bai8
function kiemTraNguyenTo(so) {
    if (so <= 1) return false;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) return false;
    }
    return true;
}

function soNguyenTo() {
    let resutl = 0;
    let number = document.getElementById("bai8").value*1;
    if(number.trim === ""){
        alert(" nhap so");
        return;
    }
    numberArr.push(number);
    for (let i = 0; i < numberArr.length; i++) {
        if (kiemTraNguyenTo(numberArr[i])) {
            resutl = numberArr[i];
        }else{
        resutl = 'Khong Co So NGUYEN TO: Tra ve = '+ -1;} // Không có số nguyên tố
    }
   

    let show = document.getElementById("showBai8");
    show.innerHTML = resutl;
   let show2 = document.getElementById("show2");
   show2.innerHTML = numberArr;
}
//bai9
function mangSoThucs() {
    let dem = 0;
    let number = document.getElementById("bai9").value*1;
    if(number.trim === ""){
        alert(" moi nhap so");
        return;
    }
    mangSoThuc.unshift(number);
    for (let i = 0; i < mangSoThuc.length; i++) {
        if (Number.isInteger(mangSoThuc[i])) {
            dem++;
        }
    }
    resutl = ' ket qua ='+ dem;
    let show = document.getElementById("show9")
    show.innerHTML = resutl;
    show.style.color = "red";
    let show2 = document.getElementById("show99");
    show2.innerHTML = mangSoThuc;
}

let mangSoThuc = [12.5, -13, 3.14, 28, 7, -2.8];

//bai10
function ktAmDuong() {
    let soLuongDuong = 0;
    let soLuongAm = 0;
    let number = document.getElementById("bai10").value*1;
    if(number.trim === ""){
        alert(" moi nhap so");
        return;
    }
    numberArr.push(number);
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            soLuongDuong++;
        } else if (numberArr[i] < 0) {
            soLuongAm++;
        }
    }

    if (soLuongDuong > soLuongAm) {
        resutl = "Số lượng số dương nhiều hơn số âm";
    } else if (soLuongDuong < soLuongAm) {
        resutl ="Số lượng số âm nhiều hơn số dương";
    } else {
        resutl ="Số lượng số dương và số âm bằng nhau";
    }
    let show = document.getElementById("show10");
    show.innerHTML = resutl;
    let show2 = document.getElementById("show1010");
    show2.innerHTML = numberArr;
}





