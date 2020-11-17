
        function findOut(){
        let name = prompt("What is your name?")
        let month = prompt("What month are you born in?");
month=month.toLowerCase();
        
        if (month==="january" || month==="jan"){
            alert(name + ", your Drag King name is BILBO BULGE");
        } else
        if (month==="february" || month==="feb" ) {
                alert(name + ", your Drag King name is LORD LICKA DONG");
            } else
        if (month==="march" || month==="mar") {
                alert(name + ", your Drag King name is PETER PIZAZ");
            } else
        if (month==="april" || month==="apr") {
                alert(name + ", your Drag King name is FELIX FILTH");
            } else
            if (month==="may") {
                alert(name + ", your Drag King name is MR WILLY WHIPPER WHOPPER");
            } else
            if (month==="june") {
                alert(name + ", your Drag King name is WORDSWORTH WANKINI");
            } else
            if (month==="july") {
                alert(name + ", your Drag King name is BOO BOO BONÉ");
            } else
            if (month==="august" || month==="aug") {
                alert(name + ", your Drag King name is RICHARD CUMMINGS");
            } else
            if (month==="september" || month==="sept") {
                alert(name + ", your Drag King name is SIR PENT");
            } else
            if (month==="october" || month==="oct") {
                alert(name + ", your Drag King name is THRUSTIN LE COQ")
            } else
            if (month==="november" || month==="nov") {
                alert(name + ", your Drag King name is STUD WILDE")
            } else
            if (month==="december" || month==="dec") {
                alert(name + ", your Drag King name is SANTA BACK DOORS");
            }    
            else {
                alert(name + ", that is not a valid month!")
            }
           
           }
            let clickButton=document.querySelector("button");
            clickButton.addEventListener("click", findOut);
