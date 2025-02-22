<template>
  <div>
    <head>
      <!-- Page title -->
      <title>About</title>

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
  <section class="About">
      <!--  Contact text-->
      <div class="text-box">
        <h1 class="text-center">
          <br />
          About us
        </h1>
        <p> We offer a wide variety of services</p>
      </div>
    </section>


    <!------------------- About Us content -------------------->
    <!-- first section header -->

    <div class="cc"> 
        <h5>About C & C System</h5>
      </div>

      <!-- Label -->
    
  
    <section class="box">
      <div class="row">
      <div class="text">
        <h1> </h1>
        <p>C & C Systems is a business built on a strong foundation. 
          This foundation has many layers. First and foremost, 
          we are a Christian-based company and believe God, and he will 
          always be our strength. God will always provide. The next layer of our 
          foundation is made up of family. Our family is made up of more than flesh 
          and the blood that runs through our veins. 
        </p>
      </div>
      <div class="image">
        <img src="../../public/pic1.png">
      </div>
    </div>
    </section>

        <!-- seconed section header -->
    <section class="box">
      <div class="row">
      <div class="text">
        <h1> </h1>
        <p>Our family is always constantly growing, and we strive to treat our customers as 
          if they truly were our own flesh and blood. Friends, all I can say is that you can 
          never have too many and we look for friendship wherever we go. With a foundation made 
          up of God, family, and friends, where can you go wrong with anything you try to accomplish as company. 
          Our company is based on security, and we know this better than most. One of our owners served his country 
          for more than 
          24 years of his life fighting for all Americans security and freedoms.
        </p>
      </div>
      <div class="image">
        <img src="../../public/pic2.png">
      </div>
    </div>
    </section>
    <!-- third section header -->

    <section class="box">
      <div class="row">
      <div class="text">
        <h1> </h1>
        <p>C&C Systems understand what it takes to take protect what you have and the safety of the loved ones in our lives. 
          If you are looking for a company that treats you like family and friends, with more than 33 
          years of combined experience, then you should look no further. 
          C&C Systems will be there insured you can protect what you have earned and your loved one’s safety.
        </p>
      </div>
      <div class="image">
        <img src="../../public/pic3.png">
      </div>
    </div>
    </section>


    <!--- foooter-->
    <section class="footer">
      <h4 class="text-center1"></h4>
      <img src="../../public/CC_Icon.png" alt="LOGO" width="100" height="100" class="center">

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
  name: "AbouttView",
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
          src: "CC_4w.png"
        }
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
  margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}

/* text and background */
.About {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/pic0.png");
background-position: center;
background-size: cover;
position: relative;
}


.cc {
  widows: 80%;
  margin: auto;
  padding-top: 30px;
}

.cc p {
  color: #777;
  font:  25px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

.cc h5 {
  font:  40px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
}
.box {
        display: flex;
        align-items: center;
        justify-content: center
      }
    .box  img {
        width: 100%;
        border-radius: 60px;
        max-height:  12cm;
        border: 2px solid #555;
      }

        img {
          width: 100px;
      }

      .image {
        flex-basis: 40%;
        order: 3;
      }

      .text { 
        color: #000000;
        padding-left: 30px 10px;
        flex-basis: 50%;
        background: rgb(255, 253, 253);
        border-radius: 60px;
        margin-bottom: 2%;
        font:  15px "Fira Sans", sans-serif;
        box-sizing: border-box;
        transition: 0.5s;
      }

  .text:hover {
    box-shadow: 0 0 15px 0px rgba(184, 182, 182, 0.2);
}

.text p{
  color: #000000;
  padding: 22px 15px 25px;
  font: 22px "Fira Sans", sans-serif;
}

.cc p{
  color: rgb(0, 0, 0);
  font:  22px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* text style*/
.text-box {
  widows: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
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

/*About text style */
h1 {
  font:  40px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
}

/* small text under the About US text*/
p {
  color: #777;
  font:  15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* row style*/
.row {
  margin: 5%;
  display: flex;
  justify-content: space-between;
}

/*about inside the boxes */
h2 {
  font: 30px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}

/* small text under the About US text*/
p {
  color: #777;
  font:  25px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}
.text-center1 {
  font: 15px "Fira Sans", sans-serif;
  font-weight: bold;
  line-height: 25px;
  padding: 15px;
  text-align: center;
  margin-bottom: 1%;
}

h5 {
  font: 25px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}

/* small text under the About US text*/
p {
  color: #777;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* how it appear on phone users*/
@media(max-width: 768px){
.About {
min-height: 100vh;
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
url("../../public/pic0.png");
background-position: center;
background-size: cover;
position: relative;
}


.text-box {
  widows: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
  transform: translate(-50%, -50);
}
img {
          width: 100px;
      }
.box {
        display: flex;
        align-items: center;
        justify-content: center
      }
     .box img {
        width: 100%;
        border-radius: 60px;
        max-height:  10cm;
        border: 2px solid #555;

      }
      .image {
        flex-basis: 50%;
        order: 3;
      }
      .text {
        color: #000000;
        padding-left: 30px;
        font: italic 10px "Fira Sans", sans-serif;
      }

	.text-box h1{
		font-size: 40px;
	}

  .text p{
  color: #000000;
  padding: 5px 0 2px;
  font: 22px "Fira Sans", sans-serif;
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