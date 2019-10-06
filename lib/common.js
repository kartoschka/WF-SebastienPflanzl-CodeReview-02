var navlist_html = `
  <li><a href=index.html>Home</a></li>
  <li><a href=team.html>Team</a></li>
`

function makeHeader() {
  let html = `
    <div id=banner1>
      <div class=imgshrinkbox><img src=img/logo.png></div>
      <div class=imgshrinkbox><img src=img/banner.png></div>
    </div>
    <nav>
      <ul class=navlist-top>
        ${navlist_html}
      </ul>
    </nav>
  `
  document.getElementsByTagName('header')[0].innerHTML = html
}

function makeFooter() {
  let html = `
    <nav>
      <ul class=navlist-bot>
        ${navlist_html}
      </ul>
    </nav>
  `
  document.getElementsByTagName('footer')[0].innerHTML = html
}

function create_navigation_list() {
  let navlist   = document.createElement('ul')
  navlist.className = 'navlist'
  navlist.innerHTML = `
  `
  return navlist
}
