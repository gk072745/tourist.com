let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    debugger: true,
  });
  let property_type =[
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304551-d11455849-Four_Day_Private_Luxury_Golden_Triangle_Tour_to_Agra_and_Jaipur_From_New_Delhi-New.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=300&h=300&s=1",
      title: "Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
      "yyzcQ": 340,
     desc: "from ₹15,960 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304551-d12944531-Private_Day_Tour_of_Taj_Mahal_and_Agra_Fort_By_Superfast_Train_All_Inclusive-New_D.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1",
      title: "Private Day Tour of Taj Mahal and Agra Fort By Superfast Train - All Inclusive",
      "yyzcQ": "1,285",
     desc: "from ₹4,178 per adult",
      "hRjIT": 2022
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304554-d11487374-5_Hour_Private_Mumbai_Sightseeing_Tour-Mumbai_Maharashtra.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1",
      title: "5-Hour Private Mumbai Sightseeing Tour",
      "yyzcQ": 306,
     desc: "from ₹4,000 per adult",
      "hRjIT": 2022
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304551-d11455850-All_Inclusive_Day_Trip_to_Taj_Mahal_Agra_Fort_and_Baby_Taj_from_Delhi_by_Car-New_D.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1",
      title: "All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car",
      "yyzcQ": 229,
     desc: "from ₹4,612 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g641714-d23085142-Private_Mercara_Coorg_Coffee_and_Spice_Estate_Tour-Madikeri_Kodagu_Coorg_Karnataka.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f5/18/12/coffee-plant-laden-with.jpg?w=300&h=300&s=1",
      title: "Private Mercara Coorg Coffee and Spice Estate Tour",
      "yyzcQ": 245,
     desc: "from ₹200 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g303877-d17823193-Fontainhas_Heritage_Walk_by_Make_It_Happen-Panjim_North_Goa_District_Goa.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/42/c3/caption.jpg?w=300&h=300&s=1",
      title: "Fontainhas Heritage Walk by Make It Happen",
      "yyzcQ": 724,
     desc: "from ₹900 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304551-d12314217-Full_Day_Private_Old_and_New_Delhi_Combo_Tour-New_Delhi_National_Capital_Territory.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/f6/1f/caption.jpg?w=300&h=300&s=1",
      title: "Full-Day Private Old and New Delhi Combo Tour",
      "yyzcQ": 489,
     desc: "from ₹3,844 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g304554-d11468933-Highlights_of_Mumbai_Private_Sightseeing_Tour_Winner_of_TRAVELLERS_CHOICE_AWARD-Mu.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5f/f1/caption.jpg?w=300&h=300&s=1",
      title: "Highlights of Mumbai Private Sightseeing Tour:Winner of TRAVELLERS CHOICE AWARD",
      "yyzcQ": 348,
     desc: "from ₹2,757 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g580106-d17401034-Rafting_in_Rishikesh_16km-Rishikesh_Dehradun_District_Uttarakhand.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2c/f1/81/caption.jpg?w=300&h=300&s=1",
      title: "Rafting in Rishikesh- 16km",
      "yyzcQ": 151,
     desc: "from ₹1,500 per adult",
      "hRjIT": ""
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g306995-d20025490-North_Goa_Sightseeing_Full_Day_Tour_09_am_05_pm-Calangute_North_Goa_District_Goa.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/39/26/43/caption.jpg?w=300&h=300&s=1",
      title: "North Goa Sightseeing Full Day Tour ( 09 am - 05 pm )",
      "yyzcQ": 20,
     desc: "from ₹427 per adult",
      "hRjIT": ""
    }
  ]










  
  function appendSwipper2(data2) {
    data2.forEach((elem) => {
      let swiper_slider1 = document.createElement("div");
      swiper_slider1.setAttribute("class", "swiper-slide explore_slide_2");
      swiper_slider1.innerHTML = `
                <div>
                <img
                src="${elem.image}"
                alt=""
                />
                <h6>${elem.title}</h6>
                <p>${elem.desc}</p>
            </div>
    
        `;
      document
        .querySelector(".mySwiper2 > .swiper-wrapper")
        .append(swiper_slider1);
    });
  }
  
  let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    //   pagination: {
    //     el: ".swiper-pagination2",
    //     type: "fraction",
    //   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    debugger: true,
  });
  
  let explore_india =[
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d1220203-Reviews-Indira_Gandhi_Tulip_Garden-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/ed/05/as-the-spring-has-set.jpg?w=300&h=300&s=1",
      "hRjIT": 2022,
      title: "Indira Gandhi Tulip Garden",
      "yyzcQ": "1,118",
      desk: "Gardens"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d338348-Reviews-Shankaracharya_Hill-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fb/3a/19/shankaracharya-temple.jpg?w=300&h=300&s=1",
      "hRjIT": 2022,
      title: "Shankaracharya Hill",
      "yyzcQ": "2,096",
      desk: "Points of Interest & Landmarks"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d338343-Reviews-Mughal_Gardens-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/68/f4/db/chasme-sahi.jpg?w=300&h=300&s=1",
      "hRjIT": "",
      title: "Mughal Gardens",
      "yyzcQ": 775,
      desk: "Gardens"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d338344-Reviews-Nigeen_Lake-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b9/99/4d/nagin-lake.jpg?w=300&h=300&s=1",
      "hRjIT": 2022,
      title: "Nigeen Lake",
      "yyzcQ": "1,109",
      desk: "Bodies of Water"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d1228761-Reviews-Nishat_Garden-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/44/98/b5/nishat-garden.jpg?w=300&h=300&s=1",
      "hRjIT": 2022,
      title: "Nishat Garden",
      "yyzcQ": "1,297",
      desk: "Gardens"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g317095-d2229453-Reviews-Gulmarg_Gondola-Gulmarg_Baramulla_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3e/ae/11/dscn7159-largejpg.jpg?w=300&h=300&s=1",
      "hRjIT": "",
      title: "Gulmarg Gondola",
      "yyzcQ": "3,206",
      desk: "Trams"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d3242676-Reviews-Betab_Valley-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/06/45/eb/betaab-valley-view-from.jpg?w=300&h=300&s=1",
      "hRjIT": "",
      title: "Betab Valley",
      "yyzcQ": "1,005",
      desk: "Nature & Wildlife Areas"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d2151516-Reviews-Shalimar_Bagh-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/bb/1b/23/caption.jpg?w=300&h=300&s=1",
      "hRjIT": "",
      title: "Shalimar Bagh",
      "yyzcQ": 764,
      desk: "Gardens"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Attraction_Review-g297623-d4068779-Reviews-Sonamarg-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e6/80/3b/sonamarg.jpg?w=300&h=300&s=1",
      "hRjIT": 2022,
      title: "Sonamarg",
      "yyzcQ": "1,177",
      desk: "Geologic Formations"
    }
  ]
  function appendSwipper1(data1) {
    data1.forEach((el) => {
      let swiper_slider = document.createElement("div");
      swiper_slider.setAttribute("class", "swiper-slide explore_slide_1");
      swiper_slider.innerHTML = `
    
                <div>
                <img
                src="${el.image}"
                alt=""
                />
                <h3>${el.title}</h3>
                <p>${el.desk}</p>
            </div>
    
        `;
      document
        .querySelector(".mySwiper1 > .swiper-wrapper")
        .append(swiper_slider);
    });
  }










  let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    //   pagination: {
    //     el: ".swiper-pagination2",
    //     type: "fraction",
    //   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    debugger: true,
  });
  
  let amazing_india =[
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g150813-Tulum_Yucatan_Peninsula-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/68/f6/caption.jpg?w=300&h=300&s=1&cx=988&cy=664&chk=v1_d1b5b3f4c384c764b7e1",
      title: "Tulum, Mexico"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g311415-Bora_Bora_Society_Islands-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=300&h=300&s=1",
      title: "Bora Bora, French Polynesia"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g187479-Tenerife_Canary_Islands-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/dd/caption.jpg?w=300&h=300&s=1",
      title: "Tenerife, Spain"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g28932-Hawaii-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=300&h=300&s=1",
      title: "Hawaii"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g34438-Miami_Florida-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/04/e4/caption.jpg?w=300&h=300&s=1",
      title: "Miami, FL"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g147288-Dominican_Republic-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/65/5f/4b/caption.jpg?w=300&h=300&s=1&cx=1321&cy=849&chk=v1_14f7826859b4f964e5b2",
      title: "Dominican Republic"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g54359-Myrtle_Beach_South_Carolina-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=300&h=300&s=1",
      title: "Myrtle Beach, SC"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g294226-Bali-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=300&h=300&s=1",
      title: "Bali, Indonesia"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g152515-Cabo_San_Lucas_Los_Cabos_Baja_California-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/72/8e/caption.jpg?w=300&h=300&s=1",
      title: "Cabo San Lucas, Mexico"
    },
    {
      "BMQDV href": "https://www.tripadvisor.in/Tourism-g147247-Aruba-Vacations.html",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/48/36/4f/caption.jpg?w=300&h=300&s=1",
      title: "Aruba"
    }
  ]
  function appendSwipper3(data3) {
    data3.forEach((el) => {
      let swiper_slider = document.createElement("div");
      swiper_slider.setAttribute("class", "swiper-slide explore_slide_3");
      swiper_slider.innerHTML = `
    
                <div>
                <img
                src="${el.image}"
                alt=""
                />
                <h1>${el.title}</h1>
            </div>
    
        `;
      document
        .querySelector(".mySwiper3 > .swiper-wrapper")
        .append(swiper_slider);
    });
  }






  /*-------------------swiper 3 from filght page-----------------*/
  
  window.addEventListener("DOMContentLoaded", (event) => {
    appendSwipper2(property_type);
    appendSwipper1(explore_india);
    appendSwipper3(amazing_india);
  });
  