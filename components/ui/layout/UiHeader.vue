<template>
  <header class="header">
    <div class="header-inner">
      <nav class="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar">
						<span class="navbar-toggler-icon">
							<i class="fa-solid fa-bars"></i>
						</span>
          </button>
          <NuxtLink class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" to="/">
            <div class="res-main-logo">
              <img src="/images/logo-icon.svg" alt="">
            </div>
            <div class="main-logo" id="logo">
              <img src="/images/logo.svg" alt="">
              <img class="logo-inverse" src="/images/dark-logo.svg" alt="">
            </div>
          </NuxtLink>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <div class="offcanvas-logo" id="offcanvasNavbarLabel">
                <img src="/images/logo-icon.svg" alt="">
              </div>
              <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <div class="offcanvas-top-area">
                <div class="create-bg">
                  <a href="create.html" class="offcanvas-create-btn">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>Create Event</span>
                  </a>
                </div>
              </div>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe_5">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                    Explore Events
                  </a>
                  <ul class="dropdown-menu dropdown-submenu">
                    <li><a class="dropdown-item" href="explore_events.html">Explore Events</a></li>
                    <li><a class="dropdown-item" href="venue_event_detail_view.html">Venue Event Detail View</a></li>
                    <li><a class="dropdown-item" href="online_event_detail_view.html">Online Event Detail View</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-header order-2">
            <ul class="align-self-stretch">
              <li>
                <NuxtLink class="create-btn btn-hover" to="/event/create">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>Create Event</span>
                </NuxtLink>
              </li>
              <li class="dropdown account-dropdown">
                <a href="#" class="account-link" role="button" id="accountClick" data-bs-auto-close="outside"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/images/profile-imgs/img-13.jpg" alt="">
                  <i class="fas fa-caret-down arrow-icon"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
                  <li>
                    <div class="dropdown-account-header">
                      <div class="account-holder-avatar">
                        <img src="/images/profile-imgs/img-13.jpg" alt="">
                      </div>
                      <h5>John Doe</h5>
                      <p>johndoe@example.com</p>
                    </div>
                  </li>
                  <li class="profile-link">
                    <a href="my_organisation_dashboard.html" class="link-item">My Organisation</a>
                    <a href="organiser_profile_view.html" class="link-item">My Profile</a>
                    <a href="sign_in.html" class="link-item">Sign Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="overlay"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'UiHeader'
}
</script>

