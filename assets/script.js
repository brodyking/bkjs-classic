// Navigation bar at the top

switch (dirLevel) {
    case 0:
        document.getElementById('nav').innerHTML = `            <ul>
        <cc>
            <li style="float:left"><a class="active" href="#">bkjs</a></li>
            <li><a href="pages/">pages</a></li>
            <li><a href="blog/">blog</a></li>
            <li><a href="projects/">projects</a></li>
        </cc>   
        </ul>`
        break;
    case 1:
        document.getElementById('nav').innerHTML = `            <ul>
        <cc>
            <li style="float:left"><a class="active" href="../">bkjs</a></li>
            <li><a href="../pages/">pages</a></li>
            <li><a href="../blog/">blog</a></li>
            <li><a href="../projects/">projects</a></li>
        </cc>   
        </ul>`
        break;
    case 2:
        document.getElementById('nav').innerHTML = `            <ul>
        <cc>
            <li style="float:left"><a class="active" href="../../">bkjs</a></li>
            <li><a href="../../pages/">pages</a></li>
            <li><a href="../../blog/">blog</a></li>
            <li><a href="../../projects/">projects</a></li>
        </cc>   
        </ul>`
        break;
}



console.log('Hey Nosey! Welcome to bkjs')