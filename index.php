<?php
    include_once("partials/head.php")
?>
    <body>

    <?php 
        include_once("partials/navigation.php")
    ?>

        <main>
            <div class="big-logo" onclick="location.href = 'index.html' ">
                <img class="animate__fadeIn animate__animated" src="assets/img/LOGO.png" alt="Logo here:)" onclick="location.href='#'">
            </div>

            <div class="sidebar animate__fadeIn animate__animated">
                <article>
                    <h1>O nás</h1>

                    <div class="desc">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Possimus quas, dignissimos, quo repellendus error reprehenderit
                        quibusdam quod natus earum sunt unde iste adipisci voluptas corrupti 
                        tempora perspiciatis illo beatae libero.</p>
                    </div>
                    
                    <!-- <div class="contact-button">

                        <a href="#">Kontaktný formulár</a>
                    </div> -->
                </article>
            </div>


          
        </main>
           
        <article>
            <div class="boxes">
                <div class="small-box animate__fadeIn animate__animated">
                    <div class="icon">
                        <i class="fa-regular fa-circle-question"></i>
                    </div>  
                    <h1>Čo ponúkame?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt cupiditate reprehenderit rem nemo!</p>
                </div>

                <div class="small-box animate__fadeIn animate__animated">
                    <div class="icon">
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <h1>Garancia kvality</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt cupiditate reprehenderit rem nemo!</p>
                </div>

                <div class="small-box animate__fadeIn animate__animated">
                    <div class="icon">
                        <i class="fa-regular fa-circle-user"></i>
                    </div>
                    <h1>Priateľský prístup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt cupiditate reprehenderit rem nemo!</p>
                </div>

            </div>
        </article>

        <article class="services">
            <h1 class="services-title animate__fadeIn animate__animated">Služby</h1>

        <div class="services-list animate__fadeIn animate__animated">
           <div class="left-side">
               <h1>Výkopové práce</h1>
               
               <ul>
                    <li>fsda</li>
                    <li>ffsda</li>
                    <li>hgggdf</li>
                    <li>tretre</li>
                    <li>rewrew</li>
                    <li>ewqeqw</li>
               </ul>

            </div>

               <div class="right-side">
                   <h1>Preprava materiálu</h1>
                   <li>56</li>
                   <li>21</li>
                   <li>657</li>
                   <li>789</li>
                   <li>15</li>
                   <li>98</li>
               </div>
           </div>

        </article>

        <article class="contacts">
            <div class="flex-container">
            <div class="contact-list">
                <h1>Kontakty</h1>
                <ul>
                    <li>e-mail: <a href="#">info@zem-os.sk</a> </li>
                    <li>telefón: <a href="#">0907 346 773</a> </li>
                </ul>
            </div>

            <div class="contact-form">
                <h1>Kontaktný formulár</h1>
                <p>V prípade otázok nás neváhajte kontaktovať prostredníctvom kontaktného formuláru.</p>
                <form action="post">
                <input type="text" name="name" placeholder="Meno*" required>
                <input type="text" name="email" placeholder="e-mail*" required> <br>
                <input type="text" name="email-val" placeholder="potvrdenie e-mailu" required>
                <input type="text" name="telnum" placeholder="tel. číslo"><br>
                <textarea type="text" name="question" placeholder="Vaša otázka..." required></textarea> <br>
                <input type="submit" name="submit" placeholder="Odoslať">
                </form>

                <span>*Polia označené hviezdičkou sú povinné.</span>
                <span>Odoslaním kontaktného formuláru potvrdzujete, že ste sa oboznámili s <a href="#">Informáciami o spracovaní osobných údajov</a> a súhlasíte s ich spracovaním.</span>
            </div>
        </div>
        </article>

        <footer>
            <div class="flex-footer">
                <div class="foot-nav">
                    <h1>Navigácia</h1>
                            <ul>
                            <li><a href="#">Domov</a></li>
                            <li><a href="#">Služby</a></li>
                            <li><a href="#">Cenník</a></li>
                            <li><a href="#">Kontakty</a></li>
                            <li><a href="#">Galéria</a></li>
                            <li><a href="#">GDPR</a></li>
                            </ul>
                </div>

            <div class="foot-contacts">
                <h1>Kontakty</h1>
                <ul>
                    <li><a href="#">info@zem-os.sk</a></li>
                    <li><a href="#">0907 346 773</a></li>
                    <li><a href="#">Šaľa</a></li>
                </ul>
            </div>

            <div class="created-by">
                <h1>Vytvoril a spravuje</h1>
                <ul>
                    <li><a href="#">Daniel Tršťanský</a></li>
                    <li><a href="#">Freonnet</a></li>
                </ul>
            </div>
            </div>
        </footer>

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <script src="assets/scripts/scripts.js" async defer></script>
    </body>
</html>