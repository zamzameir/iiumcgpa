function update_gp (field, grade_point) {
	var textfield = "grade_gp_"+field;

	document.forms['forrm'].elements[textfield].value = grade_point;

	update_hours(field);
}

function update_hours (field) {
	var gradefield = "";
	var statusfield = "";
	var credit_hours = "";
	var grade = "";
	var gp = "";
	var status = "";
	var hours = "";
	var credited = "";
	var earned = "";
	var score = "";

	credit_hours = "points_"+field;
	gradefield = "gp_"+field;
	grade = "grade_gp_"+field;
	statusfield = "status_"+field;
	creditedfield = "credited_"+field;
	earnedfield = "earned_"+field;
	scorefield = "score_"+field;

	hours = document.forms['forrm'].elements[credit_hours].options[document.forms['forrm'].elements[credit_hours].selectedIndex].value;
	gp = document.forms['forrm'].elements[grade].value;

	if (gp == 4.0) {document.forms['forrm'].elements[scorefield].value = "80 - 100";document.forms['forrm'].elements[statusfield].value = "PASS - EXCELLENT";}
	else if (gp == 3.67){document.forms['forrm'].elements[scorefield].value = "75 - 79";document.forms['forrm'].elements[statusfield].value = "PASS - EXTREMELY GOOD";}
	else if (gp == 3.33){document.forms['forrm'].elements[scorefield].value = "70 - 74";document.forms['forrm'].elements[statusfield].value = "PASS - VERY GOOD";}
	else if (gp == 3.00){document.forms['forrm'].elements[scorefield].value = "65 - 69";document.forms['forrm'].elements[statusfield].value = "PASS - GOOD";}
	else if (gp == 2.67){document.forms['forrm'].elements[scorefield].value = "60 - 64";document.forms['forrm'].elements[statusfield].value = "PASS - FAIRLY GOOD";}
	else if (gp == 2.33){document.forms['forrm'].elements[scorefield].value = "55 - 59";document.forms['forrm'].elements[statusfield].value = "PASS - SATISFACTORY";}
	else if (gp == 2.00){document.forms['forrm'].elements[scorefield].value = "50 - 54";document.forms['forrm'].elements[statusfield].value = "PASS - QUITE SATISFACTORY";}
	else if (gp == 1.67){document.forms['forrm'].elements[scorefield].value = "45 - 49";document.forms['forrm'].elements[statusfield].value = "REPEAT - POOR";}
	else if (gp == 1.33){document.forms['forrm'].elements[scorefield].value = "40 - 44";document.forms['forrm'].elements[statusfield].value = "REPEAT - VERY POOR";}
	else if (gp == 1.00){document.forms['forrm'].elements[scorefield].value = "35 - 39";document.forms['forrm'].elements[statusfield].value = "REPEAT - EXTREMELY POOR";}
	else if (gp == 0.0){document.forms['forrm'].elements[scorefield].value = "0 - 34";document.forms['forrm'].elements[statusfield].value = "REPEAT - FAIL";}


	<!-- point and subject status update
	if (hours != -0.5) {
		if (gp == "") {
			document.forms['forrm'].elements[gradefield].value = "";
			document.forms['forrm'].elements[statusfield].value = "";
			document.forms['forrm'].elements[creditedfield].value = "";
			document.forms['forrm'].elements[earnedfield].value = "";
			document.forms['forrm'].elements[scorefield].value = "";
		}	
		<!-- after calc
		else if (gp != ""){
			if ((gp > 2.67) && (gp <= 4.0)){
				document.forms['forrm'].elements[gradefield].value = Math.round(gp * hours * 100) / 100;
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "YES";
			}
			else if ((gp > 1.67) && (gp <= 2.67)){
				document.forms['forrm'].elements[gradefield].value = Math.round(gp * hours * 100) / 100;
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "YES";
			}
			else if (gp <= 1.67){
				document.forms['forrm'].elements[gradefield].value = Math.round(gp * hours * 100) / 100;
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "NO";
			}
		}
	}
	
	else if (hours == -0.5) {
		if (gp == "") {
			document.forms['forrm'].elements[gradefield].value = "";
			document.forms['forrm'].elements[statusfield].value = "";
			document.forms['forrm'].elements[creditedfield].value = "";
			document.forms['forrm'].elements[earnedfield].value = "";
			document.forms['forrm'].elements[scorefield].value = "";
		}	
		<!-- before calc
		else if (gp != ""){
			if ((gp > 2.67) && (gp <= 4.0)){
				document.forms['forrm'].elements[gradefield].value = "";
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "YES";
			}
			else if ((gp > 1.67) && (gp <= 2.67)){
				document.forms['forrm'].elements[gradefield].value = "";
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "YES";
			}
			else if (gp <= 1.67){
				document.forms['forrm'].elements[gradefield].value = "";
				document.forms['forrm'].elements[creditedfield].value = "YES";
				document.forms['forrm'].elements[earnedfield].value = "NO";
			}
		}
	}
}

function update_gpas () {
	var gradefield = "";
	var credit_hours = "";
	var gp = 0.0;
	var hours = 0.0
	var total_hours = 0.0;
	var sum_grade_points = 0.0;
	var index = 0;
	var credits = 1.0 * document.forms['gpa_info'].elements['doned'].value;
	var gpa = 1.0 * document.forms['gpa_info'].elements['gpa'].value;
	var grade_name;

	index = 1;
	while (index <= 15) {
    
		grade_name = "grade_"+index;
		update_gp(index, document.forms['forrm'].elements[grade_name].options[document.forms['forrm'].elements[grade_name].selectedIndex].value);

		gradefield = "gp_"+index;
		credit_hours = "points_"+index;

		hours = document.forms['forrm'].elements[credit_hours].options[document.forms['forrm'].elements[credit_hours].selectedIndex].value;
		gp = document.forms['forrm'].elements[gradefield].value;

		if ((gp != "") && (hours != "")) {
			total_hours += 1.0*hours;
		}
		sum_grade_points += 1.0*gp;

		index++;
	}
	<!-- IIUM candies
	document.forms['forrm'].elements['sum_credit_hours'].value = total_hours;
	document.forms['forrm'].elements['sum_grade_points'].value = sum_grade_points;
  
	<!-- GPA
	if (total_hours > 0) {
		document.forms['forrm'].elements['term_gpa'].value = Math.round(sum_grade_points / total_hours * 1000) / 1000;
		if (total_hours >= 15) {
			if (Math.round(sum_grade_points / total_hours * 1000) / 1000 >= 3.5) {
				document.forms['forrm'].elements['remarks'].value = "DEAN'S LIST";
			} else if (Math.round(sum_grade_points / total_hours * 1000) / 1000 >= 2.0) {
				document.forms['forrm'].elements['remarks'].value = "PASS";
			} else if (Math.round(sum_grade_points / total_hours * 1000) / 1000 < 2.0) {
				document.forms['forrm'].elements['remarks'].value = "PROVISIONAL PASS";
			}			
		} else if ((total_hours > 0) && (total_hours < 15)) {
			if (Math.round(sum_grade_points / total_hours * 1000) / 1000 >= 2.0) {
				document.forms['forrm'].elements['remarks'].value = "PASS";
			} else if (Math.round(sum_grade_points / total_hours * 1000) / 1000 < 2.0) {
				document.forms['forrm'].elements['remarks'].value = "PROVISIONAL PASS";
			}
		}	
	} else {
		document.forms['forrm'].elements['term_gpa'].value = "";
		document.forms['forrm'].elements['remarks'].value = "";
	}
  
	<!-- CGPA
	document.forms['forrm'].elements['cumulative_gpa'].value = Math.round(1000 * (sum_grade_points + gpa*credits) / (credits + total_hours)) / 1000;
	
	if (Math.round(1000 * (sum_grade_points + gpa*credits) / (credits + total_hours)) / 1000 < 2.0) {
		document.forms['forrm'].elements['remarks'].value = "DISMISS";
	}
}