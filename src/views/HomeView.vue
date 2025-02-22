<template>
  <div>
    <head>
      <!-- Page title -->
      <title>home</title>

      <!-- icons library-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
      
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/font-awesome.min.css"
      />

      </head>

    <!-- first section header -->
    <section class="header">
      <div class="header-box" >
      <div class="text-box">
        <h1 class="text-center">
          <br />
        </h1>
      </div>
    </div>
    </section>

    <!------------------- About Us -------------------->
    <section class="About"> 
    <h1>Services We Offer</h1>
    <p> </p>

    <div class="row">
      <div class="boxs">
        <img src="local-computer-network-icon.png ">
        <h2>Computer Networking</h2>
        

      </div>
      <div class="boxs5">
        <img src="date-and-time-icon.png">
        <h2>8-5 time on scheduler</h2>
       
    </div>
      <div class="boxs">
        <img src="thermometer-icon.png">
        <h2>Thermostats</h2>
       
    </div> 
  </div> 

    <div class="row">
      <div class="boxs5">
       
        <img src="fire-alarm-icon.png">
        <h2>Fire Alarms</h2>
       
      </div>
      <div class="boxs">
        <img src="garage-icon.png">
        <h2>Garage Doors</h2>
        
    </div>

      <div class="boxs5">
        <img src="nature-landscape-icon.png">
        <h2>Landscape Lighting</h2>
    </div> 
  </div> 
 

   <div class="row">
     <div class="boxs">
      <img src="smart-wireless-door-lock-icon.png">
       <h2>Security Systems</h2>
       
     </div>
     <div class="boxs5">
      <img src="cctv-icon.png">
       <h2>Cameras</h2>
       
   </div>

   <div class="boxs9"></div>
 </div> </section>

    <!------------------- CONTACT us ------------------>
    <section class="CONTACT">
    <div class="CONTACT-boxs">
      <h1>Contact Us</h1>
      <div class="text-box1">

          <!-- click one -->
      <a href="mailto:Catessystems@gmail.com" target="_blank" style="color:#azure; text-decoration:none;" 
      class="Click1">General business email</a>
    </div>

    <div class="cc"> 
      </div>
      <!-- Label -->
      <h4 class="text-center1">      
      <img class="mx-auto w-2/3 sm:w-2/3 md:w-1/2 lg:w-2/3" 
      src="../../public/label.png">
    </h4>
    </div>
  </section>
    
    <!--------- footer --------->
    <section class="footer">
      <h4 class="text-center1">
      </h4>

      <!-- logo -->
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
  name: "HomeView",
  components: {
    
  },
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
        {
          src: "../../public/label.png",
        },
        {
          src: "../../public/CC_4w.png"
        },
        {
          src: "../../public/picl.png"
        }
      ],
      images: [],
      employees: [],
      clients: [],
      services: [],
      appointments: [],
    };
  },
  methods: {},
  mounted: function () {},
};
</script>

<style lang="css" scoped>
.carouselClass {
  align-content: center !important;
  justify-content: center !important;
}

.v-application p,
.v-application h1 {
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* text and background */
.header {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/picl.png");
background-position: center;
background-size: cover;
position: relative;
}

.header-box{
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/pic0.png");
background-position: center;
background-size: cover;
position: absolute;
opacity: 3; 
transition: 0.5s ease;
}


.header-box:hover{
min-height: 100vh;
width: 100%;
position: absolute;
opacity: 3%;
transition: 1s ease;

}

/* text style*/
.text-box {
  widows: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
  transform: translate(-50%, -50);
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
  font: italic 60px "Fira Sans", sans-serif;
  margin-top: 30px;
}

/* under the Welcomee text style*/
.text-box p {
  margin: 5px 0 0px;
  font-size: 15px;
  color: aliceblue;
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

/*About text style */
h1 {
  font:  40px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
}

/* small text under the About US text*/
.About p {
  color: #777;
  font:  25px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* row style*/
.row {
  margin: 2%;
  display: flex;
  justify-content: space-around ;
}

/*about inside the boxes */
.boxs h2 {
  font: 30px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  
}

.boxs5 h2 {
  font: 30px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  
}
.boxs img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  width: 80px;  
}

.boxs5 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  width: 80px;  
}

/* small text under the About US text*/
.boxs p {
  color: rgb(0, 0, 0);
  font:  20px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

p {
  color: #777;
  font:  15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* Services We Offer boxes*/
.boxs {
  background-color: white;
  margin-bottom: 1%;
  box-sizing:content-box;
  transition: 1s;
  flex-basis: 25%; /* */
}

.boxs5 {
  margin-bottom: 1%;
  box-sizing:content-box;
  transition: 1s;
  flex-basis: 25%; /* */
}

.boxs9{
  margin-bottom: 2%;
  box-sizing: border-box;
  transition: 1s;
  flex-basis: 30%; /* */
}
.CONTACT-boxs {
  flex-basis: 30%;
  border-radius: 25px;
  box-sizing: border-box;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 10%;
  margin-bottom: 1%;
  position: relative;
  height: 5;
}

.text-center1 {
  font: 15px "Fira Sans", sans-serif;
  font-weight: bold;
  line-height: 25px;
  padding: 15px;
  text-align: center;
  margin-bottom: 1%;
}

.CONTACT-boxs h5 {
  font: 25px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}

/* small text under the About US text*/
.CONTACT-boxs p {
  color: rgb(0, 0, 0);
  font: 22px "Fira Sans", sans-serif;
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

.boxs5:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2); 
}
.CONTACT-boxs:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}

/* 
.LOCATION-box:hover {
  box-shadow: 0 0 20px 0px rgba(184, 182, 182, 0.2);
}*/

/* how it appear on phone users*/
@media( max-width: 768px){
.header {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),

url("../../public/CC_4wq.png");
background-position: center;
background-size: cover;
position: relative;
}



.header-box{
display: none;
min-height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
position: relative;
}


.header-box:hover{
display: none;
min-height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
position: relative;

}

.boxs p {
  color: rgb(0, 0, 0);
  font:  22px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

.About {
  widows: 80%;
  margin: auto;
  padding-top: 30px;
}

.boxs {
  background-color:#f7f7f7;
  margin-bottom: 10%;
  transition: 1s;
  justify-content: space-around;

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
    margin-right: 10%;
    margin-left: 10%;
    margin-bottom: 5%;
    flex-direction: column;
  }

  .footer {
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background:rgb(40,40,40)
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

/* icons size and style*/
.icons .fa {
  color: red;
  margin: 0 13px;
  cursor: pointer;
}

}

/* footer */

.label {
  width: 100%;
  text-align: center;
  padding: 1px 0;
}
/* title text size and style*/
.footer {
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background: rgb(40,40,40)
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

/* icons size and style*/
.icons .fa {
  color: red;
  margin: 0 13px;
  cursor: pointer;
}
</style>