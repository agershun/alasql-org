<script src="../../console/alasql-worker.min.js"></script>
<h1>Worker demo: alasql-worker.js load alasql.min.js</h1>
Result 1<div id="res1"></div>
Result 2<div id="res2"></div>
<script>
	var arr = [{a:1},{a:2},{a:1}];
	alasql('SELECT * FROM ?',[arr],function(data){
		document.getElementById("res1").textContent = JSON.stringify(data);
	});

	alasql('CREATE TABLE one (a INT);INSERT INTO one VALUES(10);SELECT * FROM one',[],function(data){
		document.getElementById("res2").textContent = JSON.stringify(data);
	});

</script>
