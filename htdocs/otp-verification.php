<?php 
  include 'libs/load.php';
?>
<!doctype html>
<html lang="en" class="h-100" data-bs-theme="auto">
  <!-- head -->
  <?php load_template('head'); ?>
  <!-- body content start -->
  <body class="d-flex h-100 text-center text-bg-dark">
  <!-- cover body start -->
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <!-- header -->
    <?php load_template('otp-header'); ?>
    <!-- login -->
    <?php load_template('otp-form'); ?>
    <!-- footer -->
    <?php load_template('footer'); ?>
</div>
<script src="assets/dist/js/bootstrap.bundle.min.js"></script>

    </body>
    <!-- body content end -->
</html>
