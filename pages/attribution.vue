<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <div class="row">
          <div class="col-8 off-2">
            <!-- Content -->
            <article id="content">
              <header>
                <h2>We stand on the shoulders of giants!</h2>

                <p>
                  We would like to give a huge thanks to everybody who helped
                  make this project possible:
                </p>
              </header>

              <h3>Creative commons material</h3>
              <ul>
                <li>
                  Logo icon: Tree by
                  <a
                    href="https://thenounproject.com/AliceNoir/"
                    target="_blank"
                  >
                    Alice Noir
                  </a>
                  from the Noun Project.
                </li>
                <li>
                  Header background photo by
                  <a
                    href="https://www.pexels.com/@david-alberto-carmona-coto-434794"
                    target="_blank"
                  >
                    David Alberto Carmona Coto
                  </a>
                  from Pexels.
                </li>
                <li>
                  Website template by
                  <a href="http://html5up.net" target="_blank">HTML5 Up</a>
                </li>
              </ul>
              <p>
                The good people of
                <a href="https://www.walls.io/" target="_blank">Walls.io</a>
                were so kind as to let use their technology for free!
              </p>
              <p>
                <a href="https://www.officelock.com/" target="_blank"
                  >Officelock</a
                >
                graciously provided us with our domain name and technical
                support
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Credits',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We would like to give a huge thanks to everybody who helped make this project possible.'
        }
      ]
    }
  }
}
</script>
