tab = document.createElement("table")
tab.setAttribute('id','new_table');
  tab.border=1;
  tab.style.border="1px solid blue";
   
   row=document.createElement("TR");
    row=tab.insertRow(-1);
      var frequency=0;
     head=["Date","Description"];
    for(let i=0;i<head.length;i++)
    {
        header=document.createElement("TH");
        header.innerHTML=head[i];
        header.setAttribute("onclick","sort("+frequency+")")
         row.appendChild(header);
         frequency+=1;

    }

 
  count=0;


function items()
{
    var ele=document.getElementsByClassName("content")[0];
   if(ele.style.display=="none")
   {
     ele.style.display="block";
   }
  else
  {
    ele.style.display="block";
  }
  
}
function delete_item(element)
{
    element.remove();
    
}

    
   
function gen()
{
    var ele=document.getElementsByClassName("content")[0];
    ele.style.display="none";
    
    

    var date=document.getElementById("day").value;
    var text_area=document.getElementById("area").value;
   
    
    var arr_obj = [];
    var arr_data = [];

if(date == "" || text_area== "")
{
  alert("please enter the data");
}    
else 
{
    arr_obj.push({"date":date,"text_area":text_area});
    
    
    for (let i=0;i<=arr_obj.length-1;i++){
        arr_data.push(Object.values(arr_obj[i]));

    }
    


    for (let i=0;i<arr_data.length;i++){
        var row = document.createElement("tr");
        row=tab.insertRow(-1);
        row.setAttribute("id","row"+count);
        for(let j=0;j<arr_data[i].length+1;j++)
        {
           if(j==2)
           {
            var new_cell = document.createElement("td");
            new_cell = row.insertCell(-1);
            var btn=document.createElement("button");
            btn.setAttribute("onclick","delete_item(row"+count+")");
            var a=document.createTextNode("remove");
            btn.appendChild(a);
            new_cell.appendChild(btn);
          } 
           else
           {
            var new_cell = document.createElement("td");            
            new_cell = row.insertCell(-1);
            new_cell.innerHTML=arr_data[i][j];
           }
            

         }
         count+=1;
    }
    
    document.body.appendChild(tab);
}


    
}


function sort(freq){
    switch(freq) {
        case 0:
        
        head.sort(function(a,b){
            if(a.F_name<b.F_name)
              return -1;
            if(a.F_name>b.F_name)
               return 1;
              return 0;
          });
       
        
      
          break;
      default:

        arr1.sort(function(a,b){
            if(a.text_area<b.text_area)
              return -1;
            if(a.text_area>b.text_area)
               return 1;
              return 0;
            
          });
         
      
         
      }
      new_table.remove();
      gen();

}
