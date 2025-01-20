
document.getElementById("btn").addEventListener("click", function(){
    let score = 0;
	if(document.getElementById("q1")[1].checked){
		score ++;
	}
	if(document.getElementById("q2")[2].checked){
		score ++;
	}
	if(document.getElementById("q3")[1].checked){
		score ++;
	}
	if(document.getElementById("q4")[0].checked){
		score ++;
	}
	if(document.getElementById("q5")[3].checked){
		score ++;
	}
	if(document.getElementById("q6")[0].checked){
		score ++;
	}
	if(document.getElementById("q7")[1].checked){
		score ++;
	}
	if(document.getElementById("q8")[3].checked){
		score ++;
	}
	if(document.getElementById("q9")[0].checked){
		score ++;
	}
	if(document.getElementById("q10")[0].checked){
		score ++;
	}
	console.log(score);
});

