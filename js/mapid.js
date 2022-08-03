/*Setup*/
var map = L.map("mapid").setView([55.67, 12.57], 7);
L.tileLayer(
  "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
).addTo(map);

/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Tegnforklaring</h4>";
  div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
  div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
  div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
  div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  

  return div;
};

legend.addTo(map);
