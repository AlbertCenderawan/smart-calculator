<?php 
    $webLink = "http://localhost/smart-calculator/resources/views/";
    $features = array(
        array('name' => "smart-calculator",'link' => "index.php"),
        array('name' => "About",'link' => "about.php"),
        array('name' => "Standard",'link' => "standard.php"),
        array('name' => "Scientific",'link' => "scientific.php"),
        array('name' => "Converter",'link' => "converter.php")
    );

?>

<!-- NAVIGATION BAR (SMART-CALCULATOR) -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="<?=$webLink.$features[0]['link']?>">smart-calculator</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <?php for ($i = 0; $i < count($features); $i++) : ?>
            <?php if ($features[$i]['link'] != "index.php") : ?>
                <a class="nav-link" href="<?=$webLink.$features[$i]['link']?>" target="_self">
                    <?=$features[$i]['name']?>
                </a>
            <?php endif ?>
        <?php endfor ?>
      </div>
    </div>
  </div>
</nav>