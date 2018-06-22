<?php 
function rgb (
    $r = Math.floor(Math.random()*255), 
    $g = Math.floor(Math.random()*255), 
    $b = Math.floor(Math.random()*255)
    ) {
        return "rgb(".$r.",".$g.",".$b.")";
    }
echo(rgb());

// 2.6

    function factorial ($a) {
        return ($a <= 1) ? 1 : fact($a-1) * $a;
        }
    echo(factorial(5));

// 2.7

    function summa  ($a, $b) {
        return ($a <= 1) ? $b + 1 : summa($b, $a-1) + 1;
    }
    echo(summa(5, 6));
