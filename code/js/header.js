// sets the header to

header.innerHTML = `
<header>
<a href = "index.html"><img class="logo" src="images/logo.png" alt =" logo" width = 100px> </a>    
<nav>
<ul CLASS="nav_links">
<li><a href = "mission.html">Mission</a></li>
<li><a href = "about.html">About</a></li>
<li><a href= "contact.html">Contact</a></li>
</ul> 
</nav>  
</header>
`;

// Sets the footer (hidden display since not complete)

footer.innerHTML=`
        <style>
        footer {
            text-align: center;
            padding: 2dvw;
            flex:auto;
            margin:0;
            display:none;
        }  
        footer hr{
            border-top: 1px solid #96ac94;
            }
        footer a {
            color: #d8e7d8ff;
            /* background-color:#657264 */
            /* text-decoration: none; */
            margin: 0 10dvh;
        }
        footer li{
            list-style: none;
        }
        footer a:hover {
            text-decoration: underline;
        }
        .foot-title{
            font-size:larger;
            color:rgba(253, 250, 240, 1)
        }
        .foot-bot{
            color:#657264;
        }
        .foot-bot hr{
            display:contents;
            max-width:50%;
            margin:auto;
        }

        .foot-top{
            display:flex;
            justify-content:space-between;
            margin-left:10%;
            margin-right:10%;
            background-color: #b8d3b5ff;
        }
        .foot-item img{
            max-width:40%;
            min-width:10%;
        }
        .foot-line{
            max-width:75%;
            margin:auto;
        }

        </style>
        <hr>
        <div class="foot-top">
            <div class = "foot-sec">
                <!-- contact -->
                <ul>
                    <li class ="foot-title">
                        Contact
                        <hr class="foot-line">
                    </li>
                    <li class = "foot-item">
                        <a href = "mailto:cherielle.code@gmail.com" target = "_blank">Email</a>
                    </li>
                    <li class="foot-item">
                        <a href = "https://www.linkedin.com/company/cherielle" target = "_blank">Linkedin</a>
                    </li>
                    <li class="foot-item">
                        <a href = "https://discord.gg/PVeGeKY6" target = "_blank">Discord</a>
                    </li>
                    <li class="foot-item">
                        <a href = "https://www.instagram.com/cherielle.code/" target="_blank">Instagram</a>
                    </li>
                </ul>
            </div>
            <div class="foot-sec">
                <!-- links -->
                <li class="foot-title">
                    Links
                    <hr class="foot-line">
                </li>
                <li class="foot-item"><a href = "mission.html">Mission</a></li>
                <!-- <li class="foot-item'"><a href = "activities.html">Activities</a></li>
                <li class="foot-item"><a href = "articles.html">Articles</a></li> -->
                <li class="foot-item"><a href = "about.html">About</a></li>
            </div>
            <!-- <p>
                <a href="/privacy">Privacy Policy</a> |
                <a href="/terms">Terms of Service</a> |
                <a href="/contact">Contact Us</a>
            </p> -->
        </div>
        <!-- <div class="foot-bot">
            <hr>
            <p>&copy; 2025 Cherielle. All rights reserved.</p>
        </div> -->
`;