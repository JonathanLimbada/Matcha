function sendParams() {
	let form = {
		// sortType: sortType,
		ageDiff: 100,
		minFame: 0,
		maxDist: 100
	}
	form.ageDiff = document.getElementById('ageDiff').value;
	form.minFame = document.getElementById('minFame').value;
	form.maxDist = document.getElementById('DistanceDiff').value;
	// form.ageDiff = document.getElementById("ageDiff").value();
	// form.minFame = document.getElementById("minFame").value();
	// console.log(`minFame: ${form.minFame}`);
	// console.log(`ageDiff: ${form.ageDiff}`);
	// console.log(`maxDist: ${form.maxDist}`);
	// var n = $('#radio input:radio:checked').val();
	// console.log(`sort = ${n}`);

	$.ajax({
		type: "POST", 
		url : '/recommendations',
		data: JSON.stringify(form),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(ret) {
			document.location.href = ("http://localhost:8080/recommendations");
		}
	})
}