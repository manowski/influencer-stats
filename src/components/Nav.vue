<template>
  <div id="nav">
    <div class="container">
      <nav>
        <div class="button">
          <a class="btn-open" href="#"></a>
        </div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
        </ul>
      </nav>

      <header>
        <h3 class="text-center">Reliable and Smart TikTok Analytics Tools Set</h3>
        <h4
          class="text-center"
        >The Most Professional Influencer Data Analysis and Trending Insight Platform</h4>
        <form id="masthead-search">
          <input
            type="search"
            name="s"
            aria-labelledby="search-label"
            placeholder="Search"
            class="draw"
          />
          <button type="submit">&rarr;</button>
        </form>
        <h5
          class="text-center"
        >Analyze and track social media activity of your profile or your favorite influencer or future client.</h5>
      </header>
    </div>
    <div class="overlay">
      <div class="wrap">
        <ul class="wrap-nav">
          <li>
            <a href="#">About</a>
            <ul>
              <li>
                <a href="#">About Company</a>
              </li>
              <li>
                <a href="#">Designers</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Pets</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
            <ul>
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Work</a>
            <ul>
              <li>
                <a href="#">Web</a>
              </li>
              <li>
                <a href="#">Graphic</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="social">
          <a href="/">
            <div class="social-icon">
              <i class="fa fa-facebook"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-twitter"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-codepen"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-behance"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-dribbble"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  mounted() {
    $(".button a").click(function() {
      $(".overlay").fadeToggle(200);
      $(this)
        .toggleClass("btn-open")
        .toggleClass("btn-close");
    });

    $(".overlay").on("click", function() {
      $(".overlay").fadeToggle(200);
      $(".button a")
        .toggleClass("btn-open")
        .toggleClass("btn-close");
      open = false;
    });
  }
};
</script>

<style>
header h3 {
  padding-top: 30px;
  font-size: 2.8rem;
  color: #fff;
}
header h4 {
  padding-bottom: 40px;
  color: #fff;
}
header h5 {
  padding-top: 40px;
  color: #fff;
}
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
li {
  padding: 0;
  margin: 0;
}
nav {
  text-align: center;
  width: 100%;
  position: relative;
  height: auto;
  overflow: hidden;
  background: none;
}
nav ul {
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  color: #fff;
  display: inline-block;
  padding: 1em 3em;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  transition-property: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -webkit-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
  font-size: 1.1rem;
}
nav ul li a:hover {
  color: #34b484;
}
/*styling open close button*/
.button {
  display: inline;
  position: absolute;
  left: 50px;
  top: 6px;
  z-index: 999;
  font-size: 30px;
}
.button a {
  text-decoration: none;
}
.btn-open:after {
  color: #fff;
  content: "\f0c9";
  font-family: "FontAwesome";
  transition-property: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -webkit-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
}
.btn-open:hover:after {
  color: #34b484;
}
.btn-close:after {
  color: #fff;
  content: "\f00d";
  font-family: "FontAwesome";
  transition-property: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -webkit-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
}
.btn-close:hover:after {
  color: #34b484;
}

#masthead-search {
  margin-top: 0.625em;
  width: 100%;
  margin: 0 auto;
  max-width: 40em;
  position: relative;
  -webkit-appearance: none;
}

#masthead-search input {
  background: transparent;
  border: none;
  border-color: #fff;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
  outline: none;
  font-weight: bold;
  width: 100%;
  padding: 0.75em 1.125em;
  transition: border-color 0.3s ease;
  -webkit-appearance: none;
}

#masthead-search button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 0.75em;
  transform: translateY(-50%);
  -webkit-appearance: none;
}

#masthead.is-active #masthead-search button {
  color: #b4b9ba;
}

#masthead.is-active #masthead-search input {
  border-color: #b4b9ba;
}

#masthead-search ::-webkit-input-placeholder {
  color: #fff;
}

#masthead-search :-moz-placeholder {
  color: #fff;
  opacity: 1;
}

#masthead-search ::-moz-placeholder {
  color: #fff;
  opacity: 1;
}

#masthead-search :-ms-input-placeholder {
  color: #fff;
}

#masthead.is-active #masthead-search ::-webkit-input-placeholder {
  color: #b4b9ba;
}

#masthead.is-active #masthead-search :-moz-placeholder {
  color: #b4b9ba;
  opacity: 1;
}

#masthead.is-active #masthead-search ::-moz-placeholder {
  color: #b4b9ba;
  opacity: 1;
}

#masthead.is-active #masthead-search :-ms-input-placeholder {
  color: #b4b9ba;
}

/*overlay*/
.overlay {
  display: none;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(45, 45, 45, 0.91);
  overflow: auto;
  z-index: 99;
}
.wrap {
  color: #e9e9e9;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}
.wrap ul.wrap-nav {
  border-bottom: 1px solid #575757;
  text-transform: capitalize;
  padding: 150px 0px 100px;
}
.wrap ul.wrap-nav li {
  font-size: 20px;
  display: inline-block;
  vertical-align: top;
  width: 24%;
  position: relative;
}
.wrap ul.wrap-nav li a {
  color: #34b484;
  display: block;
  padding: 8px 0;
  text-decoration: none;
  transition-property: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -webkit-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
}
.wrap ul.wrap-nav li a:hover {
  color: #f0f0f0;
}
.wrap ul.wrap-nav ul {
  padding: 20px 0;
}
.wrap ul.wrap-nav ul li {
  display: block;
  font-size: 13px;
  width: 100%;
  color: #e9e9e9;
}
.wrap ul.wrap-nav ul li a {
  color: #f0f0f0;
}
.wrap ul.wrap-nav ul li a:hover {
  color: #34b484;
}
.social {
  font-size: 25px;
  padding: 20px;
}
.social p {
  margin: 0;
  padding: 20px 0 5px 0;
  line-height: 30px;
  font-size: 13px;
}
.social p a {
  color: #34b484;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.social-icon {
  width: 80px;
  height: 50px;
  background: #e9e9e9;
  color: #333;
  display: inline-block;
  margin: 0 20px;
  transition-property: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -webkit-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
}
.social-icon:hover {
  background: #34b484;
  color: #f0f0f0;
}
.social-icon i {
  margin-top: 12px;
}
@media screen and (max-width: 48em) {
  .wrap ul.wrap-nav > li {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #575757;
  }
  .wrap ul.wrap-nav {
    padding: 30px 0px 0px;
  }
  nav ul {
    opacity: 0;
    visibility: hidden;
  }
  .social {
    color: #c1c1c1;
    font-size: 25px;
    padding: 15px 0;
  }
  .social-icon {
    width: 100%;
    height: 50px;
    background: #fff;
    color: #333;
    display: block;
    margin: 5px 0;
  }
}
.content {
  width: 100%;
  margin-top: 200px;
  font-size: 20px;
  color: #333;
  text-align: center;
}
</style>