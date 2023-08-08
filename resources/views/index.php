<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <?php include '../component/menu.php' ?>

    <!-- HEADINGS -->
    <div id="title" class="title"><h1 id="title-h1"> Smart Calculator </h1></div>
    
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
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <script type="module" src="../js/page.js"></script>
    <script type="module" src="../../public/bootstrap/config.js"></script>
</body>
</html>