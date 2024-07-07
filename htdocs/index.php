<?php 
  include 'libs/load.php';
?>
<!DOCTYPE html>
<html lang="en">
<?php load_template('head'); ?>
<body>
  <!-- main-container it's flex -->
  <div class="main-container">
    <!-- header -->
    <div class="header">
    <img src="media/images/SPOTSTAR.png" alt="logo">
      <a href="" id="getstarted">Get Started</a>
    </div>
    
    <!-- forms -->
    <div class="main">
       <div class="right">
            <div class="login">
                <img src="media/images/SPOTSTAR (1).png" alt="logo">
                <input type="text" placeholder="Mobile number or Email address" id="username">
                <!-- <input type="text" placeholder="Fullname" id="fullname">
                <input type="text" placeholder="Username" id="userid"> -->
                <input type="password" placeholder="Password" id="password">
                <div class="btn"><P><b>Log in</b></P></div>
            </div>
            <div class="bottom">
            <div class="botton-link">
            <p>Don't have an account?<a href="index.html"><b> sign up </b></a></p>
        </div>
        </div>
        <div class="appstore">
            <div class="getapp">
                <p>Get the app.</p>
                <img src="media/images/playstore.png" alt="playstore">
                <img src="media/images/microsoft.png" alt="microsoft">
            </div>
        </div>
    </div>
</div>
    <!-- footer -->
    <div class="footer">
      <div>
        <a href="">About us</a>
        <a href="">Contact us</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a></div>
    </div>
    <div class="copyright">
        <p id="copyrigth">Made by <a href="">Suriya Ravichandran</a> Copyrigth &copy; 2024</p>
    </div>
  </div>
</body>
</html>
