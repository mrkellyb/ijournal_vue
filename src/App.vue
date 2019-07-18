<template>
  <div id="app">

    <div class="nav-container ">
        <div class="bar bar--sm visible-xs">
            <div class="container">
                <div class="row">
                    <div class="col-3 col-md-2">
                        <a href="index.html">
                            <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                            <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                        </a>
                    </div>
                    <div class="col-9 col-md-10 text-right">
                        <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                            <i class="icon icon--sm stack-interface stack-menu"></i>
                        </a>
                    </div>
                </div>
                <!--end of row-->
            </div>
            <!--end of container-->
        </div>
        <!--end bar-->
        <nav id="menu1" class="bar bar--sm bar-1 hidden-xs " data-scroll-class='366px:pos-fixed'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-1 col-md-2 hidden-xs">
                        <div class="bar__module">
                            <a href="index.html">
                                <img class="logo logo-dark" alt="logo" src="/img/pjlogo.png" />
                                <!-- <img class="logo logo-light" alt="logo" src="img/logo-light.png" /> -->
                            </a>
                        </div>
                        <!--end module-->
                    </div>
                    <div class="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                        <div class="bar__module">
                            <ul class="menu-horizontal text-left">
                              <li>
                                <router-link to="/">Home</router-link>
                              </li>
                              <li v-if="!isLoggedIn()">
                                <router-link to="/login">Log In</router-link>
                              </li>
                              <li v-if="isLoggedIn()">
                                <router-link to="/logout">Log Out</router-link>
                              </li>
                              <li v-if="isLoggedIn()">
                                <router-link to="/sessions">Sessions</router-link>
                              </li>
                              <li v-if="isLoggedIn()">
                                <router-link to="/sessions/new">Create A New Session</router-link>
                              </li>
                            </ul>
                        </div>
                        <!--end module-->
                        <div class="bar__module" v-if="!isLoggedIn()">
                            <router-link to="/signup" class="btn btn--sm type--uppercase">
                                <span class="btn__text">
                                    Sign up
                                </span>
                            </router-link>
                        </div>
                        <!--end module-->
                    </div>
                </div>
                <!--end of row-->
            </div>
            <!--end of container-->
        </nav>
        <!--end bar-->
    </div>
    
    <div class="main-container">
      <router-view/> 
      <footer class="footer-3 text-center-xs space--xs bg--dark ">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <!-- <img alt="Image" class="logo" src="img/logo-dark.png" /> -->
                      <ul class="list-inline list--hover">
                          <li class="list-inline-item">
                              <a href="#">
                                  <span class="type--fine-print">Get Started</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="#">
                                  <span class="type--fine-print">help@stack.io</span>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-md-6 text-right text-center-xs">
                      <ul class="social-list list-inline list--hover">
                          <li class="list-inline-item">
                              <a href="#">
                                  <i class="socicon socicon-google icon icon--xs"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="#">
                                  <i class="socicon socicon-twitter icon icon--xs"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="#">
                                  <i class="socicon socicon-facebook icon icon--xs"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="#">
                                  <i class="socicon socicon-instagram icon icon--xs"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <!--end of row-->
              <div class="row">
                  <div class="col-md-6">
                      <p class="type--fine-print">
                          Supercharge your web workflow
                      </p>
                  </div>
                  <div class="col-md-6 text-right text-center-xs">
                      <span class="type--fine-print">&copy;
                          <span class="update-year"></span> Stack Inc.</span>
                      <a class="type--fine-print" href="#">Privacy Policy</a>
                      <a class="type--fine-print" href="#">Legal</a>
                  </div>
              </div>
              <!--end of row-->
          </div>
          <!--end of container-->
      </footer>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: localStorage.getItem('username'),
      user: {}
    };
  },

  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>