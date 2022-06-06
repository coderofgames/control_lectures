/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ajax_load()
{


    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById("content_area").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "grad_div_curl", true);
    xmlhttp.send();

}

$(document).ready(function () {


    $(document).on('click', '.floating-box', function ()
    {
        //clicked_edit_elem = true;

        var divID = $(this).attr("id");
        //alert(divID);
        $("#input_area").html = "";

//        $("#input_area").load(divID);            
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function ()
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                document.getElementById("input_area").innerHTML = xmlhttp.responseText;
                // alert(xmlhttp.responseText);
                              loadGraph();
                loadGraph2();
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  
 
//UpdateMath($("#input_area"));        
            }
        }
        xmlhttp.open("GET", divID, true);
        xmlhttp.send();
        ////        
        //alert($("#input_area").html());


    });
   var functionPlot = window.functionPlot;
  var a, b, c;

  functionPlot({
    target: '#description-sample',
    yDomain: [-1, 9],
    tip: {
      renderer: function () {}
    },
    grid: true,
    data: [{
      fn: 'x^2',
      derivative: {
        fn: '2 * x',
        updateOnMouseMove: true
      }
    }]
  }) ;  

    
    
    function loadGraph()
    {


                    
    }


    function loadGraph2()
    {
   // Create a new directed graph

    //var content_child_1 = svg_content.firstChild();
  //  var content_child_2 = content_child_1.firstSibling();    
      var svg_content1= document.getElementsByClassName("svg-1-content");//.firstElementChild;
        //getElementsByClassName
     //   alert(svg_content1[0].innerHtml);
        for( var a = 0; a<svg_content1.length; a++  )
        {
            var svg_content = svg_content1[a].firstElementChild;
   var div = document.createElement("div");
            var id_string = svg_content1[a].getAttribute('id');
           // alert(id_string);
    div.innerHTML = "<div id = 'svg"+id_string+"' width=960 height=600></div>";
    svg_content1[a].appendChild(div);    
        
    
    var content = svg_content.innerHTML;
      // svg_content.innerHtml="";
       // alert(content);
         //svg_content.removeChild(svg_content.firstChild());
        eval(content);
     svg_content.style.display = 'none';
        }
    // States and transitions from RFC 793
/*    var states = [ "CLOSED", "LISTEN", "SYN RCVD", "SYN SENT",
                   "ESTAB", "FINWAIT-1", "CLOSE WAIT", "FINWAIT-2",
                   "CLOSING", "LAST-ACK", "TIME WAIT" ];

    // Automatically label each of the nodes
    states.forEach(function(state) { g.setNode(state, { label: state }); });

    // Set up the edges
    g.setEdge("CLOSED",     "LISTEN",     { label: "open" });
    g.setEdge("LISTEN",     "SYN RCVD",   { label: "rcv SYN" });
    g.setEdge("LISTEN",     "SYN SENT",   { label: "send" });
    g.setEdge("LISTEN",     "CLOSED",     { label: "close" });
    g.setEdge("SYN RCVD",   "FINWAIT-1",  { label: "close" });
    g.setEdge("SYN RCVD",   "ESTAB",      { label: "rcv ACK of SYN" });
    g.setEdge("SYN SENT",   "SYN RCVD",   { label: "rcv SYN" });
    g.setEdge("SYN SENT",   "ESTAB",      { label: "rcv SYN, ACK" });
    g.setEdge("SYN SENT",   "CLOSED",     { label: "close" });
    g.setEdge("ESTAB",      "FINWAIT-1",  { label: "close" });
    g.setEdge("ESTAB",      "CLOSE WAIT", { label: "rcv FIN" });
    g.setEdge("FINWAIT-1",  "FINWAIT-2",  { label: "rcv ACK of FIN" });
    g.setEdge("FINWAIT-1",  "CLOSING",    { label: "rcv FIN" });
    g.setEdge("CLOSE WAIT", "LAST-ACK",   { label: "close" });
    g.setEdge("FINWAIT-2",  "TIME WAIT",  { label: "rcv FIN" });
    g.setEdge("CLOSING",    "TIME WAIT",  { label: "rcv ACK of FIN" });
    g.setEdge("LAST-ACK",   "CLOSED",     { label: "rcv ACK of FIN" });
    g.setEdge("TIME WAIT",  "CLOSED",     { label: "timeout=2MSL" });
        
    // Add some custom colors based on state
    g.node('CLOSED').style = "fill: #f77";
    g.node('ESTAB').style = "fill: #7f7";        
*/
    // Set some general styles

    }
  
});




