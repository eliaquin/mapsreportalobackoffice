function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: {
            lat: 18.478401,
            lng: -69.932807
        }
    });

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
var data;
var locations = [
  {lat: 18.478401, lng: -69.932807},
  {lat: 18.479401, lng: -69.962807},
  {lat: 18.478401, lng: -69.942807},
  {lat: 18.478401, lng: -69.952807},
  {lat: 18.478401, lng: -70.002807},
  {lat: 18.478401, lng: -69.922807},
  {lat: 18.478401, lng: -69.912807},
  {lat: 18.478401, lng: -69.902807}, 
  {lat: -33.718234, lng: 150.363181},
  {lat: -33.727111, lng: 150.371124},
  {lat: -33.848588, lng: 151.209834},
  {lat: -33.851702, lng: 151.216968},
  {lat: -34.671264, lng: 150.863657},
  {lat: -35.304724, lng: 148.662905},
  {lat: -36.817685, lng: 175.699196},
  {lat: -36.828611, lng: 175.790222},
  {lat: -37.750000, lng: 145.116667},
  {lat: -37.759859, lng: 145.128708},
  {lat: -37.765015, lng: 145.133858},
  {lat: -37.770104, lng: 145.143299},
  {lat: -37.773700, lng: 145.145187},
  {lat: -37.774785, lng: 145.137978},
  {lat: -37.819616, lng: 144.968119},
  {lat: -38.330766, lng: 144.695692},
  {lat: -39.927193, lng: 175.053218},
  {lat: -41.330162, lng: 174.865694},
  {lat: -42.734358, lng: 147.439506},
  {lat: -42.734358, lng: 147.501315},
  {lat: -42.735258, lng: 147.438000},
  {lat: -43.999792, lng: 170.463352}
]

function cargarLocaciones() {
    locations = data.filter(function(x) {
        return x.Latitud !== 0 && x.Latitud !== 18.000001;
    })
    .map(function(x){
        return { lat: x.Latitud, lng: x.Longitud};
    });

    console.log(locations);
    initMap();
}

function cargarData() {
    var url = "http://localhost:49249/api/datamovil/buscarsolicitudes/2017-01-01,2017-12-31";
    var that = this;
    axios.get(url)
    .then(function(result){
        data = result.data;
        cargarLocaciones();
    })
    .catch(function(err){
        console.log(err);
    });
}
cargarData();

