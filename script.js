function displayData() {
  var x = document.getElementById("right");
  if (x.style.display === "none") {
    x.style.display = "block";
    const inframe = document.querySelector("#inframe");
    const inputvalue = document.querySelector("#inputvalue");
    const downloadbtn = document.querySelector("#Download");
    inframe.src=inputvalue.value;
    downloadbtn.href=inputvalue.value;
  } else {
    x.style.display = "none";
  }
}


function myFunction(){
  let dataList = document.querySelector( "#names" );
  let optionValues = ["Ujjwal_singh.json","Vishal_grover.json" ];
  // add each element of <optionValues> array
  for( let optionValue of optionValues )
  {
      let newOption = document.createElement( "option" );
      newOption.value = optionValue;
      dataList.appendChild(newOption);
  }
}
