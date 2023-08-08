<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <?php include '../component/menu.php' ?>

    <!-- TITLE -->
    <div id="title" class="title"><h1 id="title-h1"></h1></div>
    
    <!-- Layout -->
    <table class="">
        <thead>
            <tr id="tr-results">

            </tr>
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

    <script type="module" src="../component/calculator.js"></script>
    <script type="module" src="../js/page/standard.js"></script>
    <script type="module" src="../js/page.js"></script>
    <script type="module" src="../../public/bootstrap/config.js"></script>
</body>
</html>