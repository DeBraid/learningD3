// tooltip boilerplate: 

//make a TOOLTIP 
var tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("z-index", "5")
  .style("visibility", "hidden")
  .text("Example of TOOLTIP TEXT HERE");

  

// when mouseover a logo, it should launch tooltip  
d3.selectAll(".logo")
  .on("mouseover.tooltip", function(){
    console.log("mouseover")
    return tooltip
    .style("visibility", "visible");
  })
  .on("mousemove.tooltip", function(){
    return tooltip
    .style("top", (event.pageY-10)+"px")
    .style("left",(event.pageX+10)+"px");
  })
  .on("mouseout.tooltip", function(){
    return tooltip
    .style("visibility", "hidden");
  });

 
});