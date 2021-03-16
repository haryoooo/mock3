
// Nomor 1

function lelang(num){

    let barangLelang = [
        ["Baju", 10000],
        ["Celana", 20000],
        ["Kacamata", 30000],
        ]
  
    let str = " "
  
    barangLelang.forEach(value => {
  
       str += `Nama Barang : ${value[0]} , Harga : ${num * Math.ceil((value[1] + (10/100*value[1])))} \n`
    
    })
  
    return str;
  
  }
  
  console.log(lelang(1))

  
  
  function Login(username,password,role) {
  
      this.username = username;
      this.password = password;
      this.role = role;
  
  }
  
  let userAdmin = new Login("Haryo", "Hehe", "admin");
  let userNormal = new Login("Hari","Nana","user")
  
  
  let arrayData = [
      { 
         No : 1,
         Kegiatan : "Main",
         Hari : "Selasa",
         Poster :  "https://img.okezone.com/content/2019/01/11/326/2003233/-rumah-sakit-cL0izkeJa7.jpg",
      },
      {
         No : 2,
         Kegiatan : "Coding",
         Hari : "Rabu",
         Poster :  "https://www.google.com/url?sa=i&url=https%3Asbcibiuw%2F%2Fblog.hubspot.com%",
      }
      ];
  
      let input = `<h1>PASSWORD ANDA SALAH!</h1>`
  
  
      function showData(number) {
  
          // let user = document.getElementById("username").value;
          let pass = document.getElementById("password").value;
  
          if(userAdmin.password !== pass){
              document.getElementById("resultSalah").innerHTML = input;
          }
  
          else{
  
          if (number) {
     
             let inputEdit = arrayData.map((value) => {
     
               if (value.No == number) {
                  return `
                      <tr>
                      <td>#</td>
                      <td><input type="date" name="" value="${value.Kegiatan}" id="editText"></td>
                       <td><input type="time" name="" value="${value.Hari}" id="editDay"></td>
                       <td><input type="url" name="" value="${value.Poster}" id="editUrl"></td>
                      <td><button onclick="save(${value.No})">SAVE</button> <button onclick="cancel()">CANCEL</button></td>
                      </tr>
                  `
               }
     
             else {
                return `<tr>
                            <td>${value.No}</td>
                            <td>${value.Kegiatan}</td>
                            <td>${value.Hari}</td>
                            <td>${value.Poster}</td>
                            <td><button onclick="editUser(${value.No})">EDIT</button> <button onclick="deleteUser(${value.No})">HAPUS</button></td>
                         </tr>`
                }
             })
     
             document.getElementById("result").innerHTML = inputEdit.join("");
          }
          else {
  
              let inputData = arrayData.map(value=> {
        
                  return `<tr>
                  <td>${value.No}</td>
                  <td>${value.Kegiatan}</td>
                  <td>${value.Hari}</td>
                  <td>${value.Poster}</td>
                  <td><button onclick="editUser(${value.No})">EDIT</button> <button onclick="deleteUser(${value.No})">HAPUS</button></td>
              </tr>`
              });
              document.getElementById("result").innerHTML = inputData.join("");
              }

       }
  
       if(userNormal.password !== pass){
          document.getElementById("resultSalah").innerHTML = input;
      }
     
       else{
             let inputData = arrayData.map(value=> {
     
                return `<tr>
                <td>${value.No}</td>
                <td>${value.Kegiatan}</td>
                <td>${value.Hari}</td>
                <td>${value.Poster}</td>
                <td></td>
             </tr>`
             });
             document.getElementById("result").innerHTML = inputData.join("");
          }
       }
     
     
       function deleteUser(No) {
          arrayData = arrayData.filter((el) => {
            return el.No !== No;
          });
      
          showData();
        }
      
        function editUser(No) {
          showData(No);
        }
      
        function cancel() {
          showData();
        }
     
        function save(number) {
          let index = arrayData.findIndex((value) => value.No == number);
          let Hari = document.getElementById("editDay").value;
          let Kegiatan = document.getElementById("editText").value;
          let Poster = document.getElementById("editUrl").value;
      
          arrayData[index] = {
            ...arrayData[index],
            Kegiatan,
            Hari,
            Poster,
          };
      
          showData();
        }
     
//   Nomor 3
  
function cekkoin(koin){
   let arrayCoin = [25,10,5,1]
   let numberOfCoin = 0
   let currentCoin = koin
 
   while(currentCoin > 0){
     for(let i=0; i<arrayCoin.length;i++){
       if(currentCoin>= arrayCoin[i]){
         currentCoin = currentCoin - arrayCoin[i]
         numberOfCoin++
         break;
       }
     }
   }
   return numberOfCoin
 }
 
 console.log(cekkoin(49))
 console.log(cekkoin(31))
 console.log(cekkoin(50))
  
  