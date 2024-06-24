<?php 
  include 'libs/load.php';
?>
<!doctype html>
<html lang="en" class="h-100" data-bs-theme="auto">
  <!-- head -->
  <?php load_template('head'); ?>
  <body>
  <?php load_template('themes'); ?>
  <?php load_template('dashboard-header'); ?>

<div class="container-fluid">
  <div class="row">
  <?php load_template('dashboard-sidebar'); ?>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard-Songs</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <a href="menu.php">
            <button type="button" class="btn btn-sm btn-outline-secondary">Back</button></a>
            <a href="#"></a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Switch to Movies</button></a>                                                                                                                                                                  
          </div>
        </div>
      </div>
      <?php load_template('song-actors'); ?>
      <?php load_template('song-music-director'); ?>
    </main>
  </div>
</div>
<script src="assets/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/dist/js/dashboard.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.2/dist/chart.umd.js" integrity="sha384-eI7PSr3L1XLISH8JdDII5YN/njoSsxfbrkCTnJrzXt+ENP5MOVBxD+l6sEG4zoLp" crossorigin="anonymous"></script><script src="dashboard.js"></script></body>
</html>
