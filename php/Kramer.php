<?php
    [$a1, $b1, $c1, $a2, $b2, $c2] = [1, 3, 2, 9, 2, 7];
    $det = $a1 * $b2 - $a2 * $b1;
    $dx1 = $c1 * $b2 - $c2 * $b1;
    $dx2 = $a1 * $c2 - $a2 * $c1;
    $x1 = $dx1 / $det;
    $x2 = $dx2 / $det;
    echo("x1 = $x1");
    echo("\nx2 = $x2");
