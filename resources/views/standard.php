<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../css/standard.css">
    <?php include "../bootstrap/css.php" ?>
</head>
<body>
    <?php include '../php/menu.php' ?>

    <!-- TITLE -->
    <div id="title" class="title"><h1 id="title-h1"></h1></div>
    
    <!-- Layout -->
    <table class="">
        <thead>
            <script>
                const results = {
                    'calculation':'0',
                    'result':'0',
                }; class_results = "output";

                Object.keys(results).forEach(id=>{
                    document.write(
                        "<tr><th class="+class_results+" id="+id+" colspan="+12+">"+results[id]+"</th></tr>"
                    );});
            </script>
        </thead>
        <tbody>
            <tr>
                <script>
                    const number = {
                        "one":1,
                        "two":2,
                        "three":3,
                        "four":4,
                        "five":5,
                        "six":6,
                        "seven":7,
                        "eight":8,
                        "nine":9,
                        "zero":0,
                        "double-zero":"00",
                        "comma":"."
                    };
                    const class_number = 'number';

                    Object.keys(number).forEach(id=>{
                        document.write(
                            "<td class="+class_number+" id="+id+">"+number[id]+"</td>"
                        );
                    });
                </script>
            </tr>
            <tr>
                <script>
                    const unaryX = {
                        'AC':"AC",
                        'BACK':"BSPC",
                        '+/-':'+/-',
                        '1/x':'1/x',
                        '%':"%",
                        'power2' : "x"+"2".sup(),
                        'power3' : "x"+"3".sup(),
                        'ten-power' : "10"+"x".sup(),
                        'square-root': "&#8730;"+"x",
                        'cube-root': "&#8731;"+"x",
                    };
                    const class_unaryX = "unary";
                    
                    // console.log(Object.keys(unaryX));
                    Object.keys(unaryX).forEach(id => {
                        let innerText = unaryX[id];
                        
                        document.write(
                            "<td class="+class_unaryX+" id="+id+">"+innerText+"</td>"
                        );
                    });

                </script>
            </tr>
            <tr>
                <script>
                    const binary = {
                        'add':"+",
                        'subtract':"-",
                        'multiply':"x",
                        'divide':"&#xF7"
                    };
                    const class_binary = "binary";

                    Object.keys(binary).forEach(id => {
                        document.write(
                            "<td class="+class_binary+" id="+id+">"+binary[id]+"</td>"
                        );
                    });
                    
                    const equal = {
                        'equal':"="
                    };
                    const class_equal = "equal";

                    Object.keys(equal).forEach(id => {
                        document.write(
                            "<td class="+class_equal+" id="+id+">"+equal[id]+"</td>"
                        );
                    });
                </script>
            </tr>
        </tbody>
    </table>

    <script src="../js/page/page.js"></script>
    <script src="../js/page/standard.js" type="module"></script>
    <script type="module" src="../js/math/operation.js"></script>
    <?php include "../bootstrap/js.php" ?>
</body>
</html>