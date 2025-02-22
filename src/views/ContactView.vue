<template>
  <div>
    <head>
      <!-- Page title -->
      <title>Contact</title>

      <!-- icons library-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>

    <!-- first section header -->
    <section class="Contact-header">
      <!--<v-img src="../../public/pic0.png" alt="LOGO" max-width="120" max-height="120"></v-img>-->

      <!--  Contact text-->
      <div class="text-box">
        <h1 class="text-center">
          <br />
          Contact us
        </h1>
      </div>
    </section>

    <!------------------- About Us ------------------
    <section class="About">
    <h1>About Us</h1>
    <p>Learn more</p>
    <div class="row">
      <div class="boxs">
        <h2>About us</h2>
        <p>
          Some quick example text content Some quick example text content Some
          quick example text content
        </p>
      
      </div>
      <div class="boxs">
        <h2>About us</h2>
        <p>
          Some quick example text content Some quick example text content Some
          quick example text content
        </p>
      
      </div>
      <div class="boxs">
        <h2>About us</h2>
        <p>
          Some quick example text content Some quick example text content Some
          quick example text content
        </p>
      </div>
    </div>
  </section>-->
    <!------------------- CONTACT us ------------------>

    <section class="CONTACT">
    <div class="CONTACT-boxs">
      <h1>Contact Us</h1>
      <div class="text-box1">

<!-- click one -->
<a href="mailto:Catessystems@gmail.com" target="_blank" style="color:#azure; text-decoration:none;" 
class="Click1">General business email</a>
</div>
      <div class="row1">

       

      <div class="boxs1">
        <p>
          JASON L. CATES
        </p>
        <v-icon>mdi-email</v-icon>

        <a href = "mailto:jcates@catessecurity.com" target="_blank" style="color:#000000; text-decoration:none;">
          jcates@catessecurity.com
        </a>

        <p>
          OWNER/OPERATIONS MANAGER
        </p>
      </div>
      <div class="boxs1">
        <p>
          PAUL CATES        
        </p>
        <v-icon>mdi-email</v-icon>
        <a href = "mailto:pcates@catessecurity.com" target="_blank" style="color:#000000; text-decoration:none;">
          pcates@catessecurity.com
        </a>
        
        <p>
          OWNER/JOB SUPERVISOR
        </p>

      </div>


    </div>

    <!--<div class="cc"> 
      <h5>C&C System</h5>
      <p>
          C & C Systems is a business built on a strong 
        foundation. This foundation has many layers. 
        First and foremost, we are a Christian-based 
        company and believe God, and he will always be our strength. 
        God will always provide. The next layer of our foundation is made up of family. 
        Our family is made up of more than flesh and the blood that runs through our veins.
        </p>
        <p> 
        Our family is always constantly growing, and we strive to treat our customers as if they 
        truly were our own flesh and blood. Friends, all I can say is that you can never have too 
        many and we look for friendship wherever we go. With a foundation made up of God, family, 
        and friends, where can you go wrong with anything you try to accomplish as company.</p>
        <p> 
 Our company is based on security, and we know this better than most. One of our owners served his 
 country for more than 24 years of his life fighting for all Americans security and freedoms. </p>
 <p> 
 C&C Systems understand what it takes to take protect what you have and the safety of the loved ones in our lives.
 If you are looking for a company that treats you like family and friends, with more than 33 years of 
 combined experience, then you should look no further. C&C Systems will be there insured you can protect 
 what you have earned and your loved one’s safety.
        </p> 
      </div>

      <h4 class="text-center1">      
      <img class="mx-auto w-2/3 sm:w-2/3 md:w-1/2 lg:w-2/3" 
      src="../../public/label.png">
    </h4>-->
    </div>
  </section>
    <!--
    <div class="LOCATION-box">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26051.924996458845!2d-93.1536566604492!3d35.293788800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cc5308668a24f7%3A0xadcf40b5dc41909!2sArkansas%20Tech%20University!5e0!3m2!1sen!2sus!4v1664352396628!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> -->

    
    
    <!--- foooter-->

    <section class="footer">   
      <h4 class="text-center1">
       
      </h4>
      <img src="../../public/CC_Icon.png" alt="LOGO" width="100" height="100"> 

      <!-- owner media if any
      <div class="icons">
        <a href = "https://www.facebook.com/" target="_blank" style="color:#azure; text-decoration:none;">
          <i class="fa fa-facebook"></i> </a>
        
          <a href = "https://www.twitter.com/" target="_blank" style="color:#azure; text-decoration:none;">
            <i class="fa fa-twitter"></i> </a>

          <a href = "https://www.instagram.com/" target="_blank" style="color:#azure; text-decoration:none;">
            <i class="fa fa-instagram"></i> </a>
      </div>-->
      <p>Copyright © 2022 - All Rights Reserved. For Small Businesses LLC</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "ContactView",
  data() {
    return {
      items: [
        {
          src: "../../public/pic0.png ",
        },
        {
          src: "../../public/pic1.png ",
        },
        {
          src: "../../public/pic2.png",
        },
        {
          src: "../../public/pic3.png",
        },
      ],
      images: [],
      employees: [],
      clients: [],
      services: [],
    };
  },
  methods: {},
  mounted: function () {},
};
</script>

<style scoped>
.carouselClass {
  align-content: center !important;
  justify-content: center !important;
}

.v-application p,
.v-application h1 {
  text-align: center;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
}
/* text and background */
.Contact-header {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/pic0.png");
background-position: center;
background-size: cover;
position: relative;
}

/* click inside about box */
.Click1 {
  display: inline-block;
  text-decoration-line: none;
  color: red;
  border: 2px solid #535151;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: bold;
  background: repeat;
  position: relative;
  cursor: pointer;
  border-radius: 60px;
  margin-bottom: 25px;
}

.Click1:hover {
  border: 2px solid rgb(10,41,84);
  background: rgb(10,41,84);
  border-radius: 60px;
  transition: 0.1s;
}
.text-box1 {
  widows: 10%;
  margin: auto;
  text-align: center;
  padding-top: 1px;
  transform: translate(-50%, -50);
}
/* logo size
nav img {
  width: 180px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
*/

/* text style*/
.text-box {
  widows: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
  transform: translate(-50%, -50);
}

.boxs9{
  margin-bottom: 2%;
  box-sizing: border-box;
  transition: 1s;
  flex-basis: 30%; /* */
}
.text-box1 {
  widows: 10%;
  margin: auto;
  text-align: center;
  padding-top: 1px;
  transform: translate(-50%, -50);
}

/* Welcomee text style*/
.text-box h1 {
  color: #c82020;
  font:  60px "Fira Sans", sans-serif;
  margin-top: 30px;
}

/* under the Welcomee text style*/
.text-box p {
  margin: 5px 0 0px;
  font-size: 15px;
  color: aliceblue;
}

.text-box1 {
  widows: 10%;
  margin: auto;
  text-align: center;
  padding-top: 1px;
  transform: translate(-50%, -50);
}
/* -------About----------*/

/*About text*/
.About {
  widows: 80%;
  margin: auto;
  padding-top: 30px;
  
}

/* CONTACT */
.CONTACT {
  widows: 80%;
  margin: auto;
  padding-top: 15px;
  
}

/*About us and contact use  text style */
h1 {
  font:  40px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
}


/* small text under the About US text*/
.About p {
  color: #777;
  font:  20px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* row style*/


.row1 {
  margin: 5%;
  display: flex;
  text-align: center;
  justify-content:space-around;
  font: 15px "Fira Sans", sans-serif;
}

/*about inside the boxes */
.About h2 {
  font: 30px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}

/* small text under the About US text*/
.boxs p {
  color: #777;
  font:  22px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
  text-align: center;
  text-decoration: none;
}

/* CONTACT, PHONE, work and location style*/



.boxs1 {
  background-color:#f7f7f7;
  border-radius: 50px;
  padding: 10px 10px;
  box-sizing: content-box;
  text-align: center;
  transition: 1s;
  flex-basis: 30%; /* */
}

.cc {
  display: inline;
  flex-basis: 1%;
  border-radius: 60px;
  margin-bottom: 2%;
  box-sizing: border-box;
  text-align: center;
  transition: 0.5s;
  padding: 22px 0 25px;
}

.cc p{
 
  flex-basis: 1%;
  border-radius: 60px;
  margin-bottom: 2%;
  box-sizing: border-box;
  text-align: center;
  transition: 0.5s;
  padding: 22px 15px 25px;
}
.CONTACT-boxs {
  flex-basis: 50%;
  border-radius: 25px;
  box-sizing: border-box;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 10%;
  margin-bottom: 1%;
  position: relative;
  height: 5;
  margin-bottom: 1%;
}

.text-center1 {
  font: 15px "Fira Sans", sans-serif;
  font-weight: bold;
  line-height: 25px;
  padding: 10px;
  text-align: center;
  margin-bottom: 1%;
}

.CONTACT-boxs h5 {
  font: 25px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}

.CONTACT-boxs h1 {
  font: 40px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 250;
}
.CONTACT-boxs p {
  color: rgb(0, 0, 0);
  font: 22px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}
/* small text under the About US and inside the boxestext*/
p {
  color: #777;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* for pc and phone useers 
.LOCATION-box {
  flex-basis: 30%;
  border-radius: 1px;
  margin-bottom: 1%;
  box-sizing: border-box;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 30%;
  position: relative;
  height: 0;
}

.LOCATION-box iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
} */

/* Make effects when the mouse touch the box About us boxs*/
.boxs:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}

.boxs1:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}
.CONTACT-boxs:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}

/* 
.LOCATION-box:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}*/
.footer a {
  color: azure;
}
/* how it appear on phone users*/
@media(max-width: 768px){
.Contact-header {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/pic0.png");
background-position: center;
background-size: cover;
position: relative;
}
  .text-box h1{
    font-size: 40px;
  }

  nav .fa{
    display: block;
    color: red;
    margin: 10px;
    font-size: 25px;
    cursor: pointer;
  }
  .row {
    flex-direction: column;
  }

  .row1 {
    flex-direction: column;

}
  .footer {
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background: rgb(40,40,40)
}

.label {
  width: 100%;
  text-align: center;
  padding: 1px 0;
}

.footer h4 {
  margin-bottom: 5px;
  margin-top: 20px;
  font-weight: 600;
  color: azure;
}

.footer p {
  color: azure;
}

.footer a {
  color: azure;
}
/* icons size and style*/
.icons .fa {
  color: red;
  margin: 0 13px;
  cursor: pointer;
}

}

.label {
  width: 100%;
  text-align: center;
  padding: 1px 0;
}
/* footer */
/* title text size and style*/
.footer {
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background: rgb(40,40,40)
}

.footer h4 {
  margin-bottom: 5px;
  margin-top: 5px;
  font-weight: 600;
  color: azure;
}

.footer p {
  color: azure;
}

/* icons size and style*/
.icons .fa {
  color: red;
  margin: 0 13px;
  cursor: pointer;
}
</style>



