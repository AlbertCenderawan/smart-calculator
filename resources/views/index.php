<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../css/index.css">
    <?php include "../bootstrap/css.php" ?>
</head>
<body>
    <!-- Name, menu -->
    <div>
        <h1 id="title">Smart Calculator</h1>
    </div>
    <?php include '../php/menu.php' ?>
    
    <!-- Opening section -->
    <div style="text-align: center">
        <p style="font-style: italic;">Welcome to <strong>Smart Calculator</strong>!</p>
        <p>Here, you can choose, either <b>Standard</b>, <b>Scientific</b>, <b>Converter</b>, or <i>Edit the page!</i></p>
    </div>

    <!-- Detailed section(s) -->
    <div>
        <h3>Standard Calculator</h3>
        <p>You can use it for:</p>
        <ul type="circle">
            <li>Add two numbers</li>
            <li>Subtract two numbers</li>
            <li>Multiply two numbers</li>
            <li>Divide two numbers</li>
        </ul>
    </div>
    <div>
        <h3>Scientific Calculator</h3>
        <p>You can use it for:</p>
        <ul type="square">
            <li>Add two numbers</li>
            <li>Subtract two numbers</li>
            <li>Multiply two numbers</li>
            <li>Divide two numbers</li>
        </ul>
    </div>
    <div>
        <h3>Converter</h3>
        <p>You can use it for convert:</p>
        <!-- dl = definition-list -->
        <dl>
            <!-- dt = terminology -->
            <dt>Length</dt>
            <!-- dd = description -->
            <dd style="margin-left: 4%;">Nautical Mile, Kilometer, Inch, etc.</dd>
            <dt>Weight</dt>
            <dd>Gram, Kilogram, Metric Ton, Ounce, Pound</dd>
        </dl>
    </div>

    <!-- Quote -->
    <!-- <div style="text-align: center; background-color:yellow">
        <p><strong><em>Stay hungry, stay foolish!</em></strong></p>
        <p>Steve Jobs (Apple Company Founder).</p>
    </div> -->

    <!-- Component -->
    <!-- <img src="../../public/icons/idea.png" alt="Idea" style="width: 10%" title="light bulb"> -->

    <script src="http://localhost/smart-calculator/resources/js/page/page.js"></script>
    <script src="http://localhost/smart-calculator/resources/js/index.js"></script>
    <?php include "../bootstrap/js.php" ?>
</body>
</html>