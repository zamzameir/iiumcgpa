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

	credit_hours = "points_"+field;
	gradefield = "gp_"+field;
	grade = "grade_gp_"+field;
	statusfield = "status_"+field;

	hours = document.forms['forrm'].elements[credit_hours].options[document.forms['forrm'].elements[credit_hours].selectedIndex].value;
	gp = document.forms['forrm'].elements[grade].value;

	<!-- Point and subject status update
	if (hours != -0.5) {
		if (gp != "") {
			document.forms['forrm'].elements[statusfield].value = "";
			
			<!-- After clicking calc button -->
			if (gp <= 1.0) {
				document.forms['forrm'].elements[gradefield].value = Math.round(gp * hours * 100) / 100;
				document.forms['forrm'].elements[statusfield].value = "REPEAT";
			} else {
				document.forms['forrm'].elements[gradefield].value = Math.round(gp * hours * 100) / 100;
				document.forms['forrm'].elements[statusfield].value = "PASS";
			}
		}		
	} else if ((gp <= 1.0) && (hours == -0.5)) {
		if (hours == -0.5) {
			<!-- Before clicking calc button
			document.forms['forrm'].elements[statusfield].value = "REPEAT";
			if (gp == "") {
				document.forms['forrm'].elements[statusfield].value = "";
			}
		}	
	} else {
		document.forms['forrm'].elements[gradefield].value = "";
		document.forms['forrm'].elements[statusfield].value = "PASS";
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
		} else if (total_hours < 15) {
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