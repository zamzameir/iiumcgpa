<?php
$update_gp = new Func("update_gp", function($field = null, $grade_point = null) use (&$document, &$update_hours) {
  $textfield = _concat("grade_gp_", $field);
  set(get(get(get(get($document, "forms"), "forrm"), "elements"), $textfield), "value", $grade_point);
  call($update_hours, $field);
});

$update_hours = new Func("update_hours", function($field = null) use (&$creditedfield, &$earnedfield, &$scorefield, &$document, &$Math) {
  $gradefield = "";
  $statusfield = "";
  $credit_hours = "";
  $grade = "";
  $gp = "";
  $status = "";
  $hours = "";
  $credited = "";
  $earned = "";
  $score = "";
  $credit_hours = _concat("points_", $field);
  $gradefield = _concat("gp_", $field);
  $grade = _concat("grade_gp_", $field);
  $statusfield = _concat("status_", $field);
  $creditedfield = _concat("credited_", $field);
  $earnedfield = _concat("earned_", $field);
  $scorefield = _concat("score_", $field);
  $hours = get(get(get(get(get(get(get($document, "forms"), "forrm"), "elements"), $credit_hours), "options"), get(get(get(get(get($document, "forms"), "forrm"), "elements"), $credit_hours), "selectedIndex")), "value");
  $gp = get(get(get(get(get($document, "forms"), "forrm"), "elements"), $grade), "value");
  
  if (eq($gp, 4.0)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "80-100");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - EXCELLENT");
  } else if (eq($gp, 3.67)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "75-79");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - EXTREMELY GOOD");
  } else if (eq($gp, 3.33)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "70-74");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - VERY GOOD");
  } else if (eq($gp, 3.0)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "65-69");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - GOOD");
  } else if (eq($gp, 2.67)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "60-64");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - FAIRLY GOOD");
  } else if (eq($gp, 2.33)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "55-59");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - SATISFACTORY");
  } else if (eq($gp, 2.0)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "50-54");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "PASS - QUITE SATISFACTORY");
  } else if (eq($gp, 1.67)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "45-49");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "REPEAT - POOR");
  } else if (eq($gp, 1.33)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "40-44");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "REPEAT - VERY POOR");
  } else if (eq($gp, 1.0)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "35-39");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "REPEAT - EXTREMLY POOR");
  } else if (eq($gp, 0.0)) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "0-34");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "REPEAT - FAIL");
  }
  
  if (!eq($hours, -0.5)) {
    if (eq($gp, "")) {
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "");
    } else if (!eq($gp, "")) {
      if ($gp > 2.67 && $gp <= 4.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", _divide(call_method($Math, "round", to_number($gp) * to_number($hours) * 100.0), 100.0));
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "YES");
      } else if ($gp > 1.67 && $gp <= 2.67) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", _divide(call_method($Math, "round", to_number($gp) * to_number($hours) * 100.0), 100.0));
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "YES");
      } else if ($gp <= 1.67) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", _divide(call_method($Math, "round", to_number($gp) * to_number($hours) * 100.0), 100.0));
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "NO");
      }


    }

  } else if (eq($hours, -0.5)) {
    if (eq($gp, "")) {
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $statusfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "");
      set(get(get(get(get($document, "forms"), "forrm"), "elements"), $scorefield), "value", "");
    } else if (!eq($gp, "")) {
      if ($gp > 2.67 && $gp <= 4.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", "");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "YES");
      } else if ($gp > 1.67 && $gp <= 2.67) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", "");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "YES");
      } else if ($gp <= 1.67) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value", "");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $creditedfield), "value", "YES");
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), $earnedfield), "value", "NO");
      }
    }
  }

});
$update_gpas = new Func("update_gpas", function() use (&$document, &$update_gp, &$Math) {
  $gradefield = "";
  $credit_hours = "";
  $gp = 0.0;
  $hours = 0.0;
  $total_hours = 0.0;
  $sum_grade_points = 0.0;
  $index = 0.0;
  $credits = 1.0 * to_number(get(get(get(get(get($document, "forms"), "gpa_info"), "elements"), "doned"), "value"));
  $gpa = 1.0 * to_number(get(get(get(get(get($document, "forms"), "gpa_info"), "elements"), "gpa"), "value"));
  $index = 1.0;
  while ($index <= 15.0) {
    $grade_name = _concat("grade_", $index);
    call($update_gp, $index, get(get(get(get(get(get(get($document, "forms"), "forrm"), "elements"), $grade_name), "options"), get(get(get(get(get($document, "forms"), "forrm"), "elements"), $grade_name), "selectedIndex")), "value"));
    $gradefield = _concat("gp_", $index);
    $credit_hours = _concat("points_", $index);
    $hours = get(get(get(get(get(get(get($document, "forms"), "forrm"), "elements"), $credit_hours), "options"), get(get(get(get(get($document, "forms"), "forrm"), "elements"), $credit_hours), "selectedIndex")), "value");
    $gp = get(get(get(get(get($document, "forms"), "forrm"), "elements"), $gradefield), "value");
    if (!eq($gp, "") && !eq($hours, "")) {
      $total_hours = _plus($total_hours, 1.0 * to_number($hours));
    }
    $sum_grade_points = _plus($sum_grade_points, 1.0 * to_number($gp));
    $index++;
  }
  set(get(get(get(get($document, "forms"), "forrm"), "elements"), "sum_credit_hours"), "value", $total_hours);
  set(get(get(get(get($document, "forms"), "forrm"), "elements"), "sum_grade_points"), "value", $sum_grade_points);
  if ($total_hours > 0.0) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), "term_gpa"), "value", _divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0));
    if ($total_hours >= 15.0) {
      if (_divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0) >= 3.5) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "DEAN'S LIST");
      } else if (_divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0) >= 2.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "PASS");
      } else if (_divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0) < 2.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "PROVISIONAL PASS");
      }
    } else if ($total_hours > 0.0 && $total_hours < 15.0) {
      if (_divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0) >= 2.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "PASS");
      } else if (_divide(call_method($Math, "round", _divide($sum_grade_points, $total_hours) * 1000.0), 1000.0) < 2.0) {
        set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "PROVISIONAL PASS");
      }
    }

  } else {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), "term_gpa"), "value", "");
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "");
  }

  set(get(get(get(get($document, "forms"), "forrm"), "elements"), "cumulative_gpa"), "value", _divide(call_method($Math, "round", _divide(1000.0 * to_number(_plus($sum_grade_points, to_number($gpa) * to_number($credits))), _plus($credits, $total_hours))), 1000.0));
  if (_divide(call_method($Math, "round", _divide(1000.0 * to_number(_plus($sum_grade_points, to_number($gpa) * to_number($credits))), _plus($credits, $total_hours))), 1000.0) < 2.0) {
    set(get(get(get(get($document, "forms"), "forrm"), "elements"), "remarks"), "value", "DISMISS");
  }
});