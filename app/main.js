import "modern-css-reset";
import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.css";
import "./../assets/styles/hola.css";
import "./../assets/styles/main.scss";
import "phosphor-icons";
import tweetData from "./tweetdata.json"

// Abrir y cerrar el menú

window.addEventListener("load", () => {
  renderTweets();
  initModalWindowEvents();
  initSearchEvents();
  initNewTweetEvents();
});

const feed = document.querySelector(".feed")

const initModalWindowEvents = () => {
  const modalWindow = document.querySelector(".modal_window")
  const closeModalWindow = document.querySelector(".close")
  const openModalWindow = document.querySelector(".tweet_button")
  
  openModalWindow.addEventListener("click", () => {
      modalWindow.classList.add("opened")
  })
  
  closeModalWindow.addEventListener("click", () => {
      modalWindow.classList.remove("opened")
  })
}


// Renderizar los tweets

const renderTweets = () => {
  
  let feedString = ""

  for (let i = 0; i < tweetData.length; i++) {
      const tweet = tweetData[i];
      feedString += `
      <div class="tweet p-4 grid grid-flow-col grid-cols-[auto_1fr] border-b-2 border-darkGrey">
          <div class="user_picture mr-4 w-[40px] h-[40px] bg-white rounded-full">
              <img class="object-cover rounded-full" src="${tweet.profile_photo}" alt="" />
          </div>
          <div class="tweet_content grid grid-flow-row gap-3">
            <div class="user_info flex"> 
              <div class="user_real_name mr-[6px] font-bold ">${tweet.full_name}</div>
              <div class="user_name mr-[6px] text-lightGrey">@${tweet.username}</div>
              <div class="mr-[6px] text-lightGrey">·</div>
              <div class="time mr-[6px] text-lightGrey">3h</div>
            </div>
            <div class="tweet_text">
              ${tweet.content_text}
            </div>
            <div class="tweet_interactions flex text-mediumGrey">
              <div class="comment flex items-center mr-10">
                <span class="mr-[10px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.53449 0.681496L6.42349 0.673996H6.42199C3.14149 0.673996 0.571991 3.24425 0.571991 6.5255C0.571991 9.599 2.96149 11.93 6.17074 12.053V14.924C6.17074 15.005 6.20374 15.1385 6.26074 15.2262C6.36724 15.395 6.54874 15.4865 6.73474 15.4865C6.83824 15.4865 6.94249 15.458 7.03624 15.398C7.23424 15.272 11.891 12.293 13.1022 11.2685C14.5287 10.061 15.3822 8.291 15.3845 6.5345V6.52175C15.38 3.2465 12.812 0.681496 9.53449 0.680746V0.681496ZM12.3747 10.4105C11.5242 11.1305 8.72824 12.9642 7.29574 13.8927V11.5025C7.29574 11.192 7.04449 10.94 6.73324 10.94H6.43624C3.69124 10.94 1.69774 9.083 1.69774 6.5255C1.69774 3.875 3.77374 1.799 6.42274 1.799L9.53299 1.8065H9.53449C12.1835 1.8065 14.2595 3.881 14.261 6.5285C14.2587 7.961 13.5545 9.4115 12.3755 10.4105H12.3747Z" fill="#606060"/>
                  </svg>                    
              </span>${tweet.interactions.comments}</div>
              <div class="retweet flex items-center mr-10">
                <span class="mr-[10px]">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8275 9.7525C17.6085 9.53275 17.2523 9.53275 17.0325 9.7525L15.3675 11.4175V3.7375C15.3675 2.1865 14.1053 0.924997 12.555 0.924997H8.16751C7.85701 0.924997 7.60501 1.177 7.60501 1.4875C7.60501 1.798 7.85701 2.05 8.16751 2.05H12.555C13.485 2.05 14.2425 2.8075 14.2425 3.7375V11.4175L12.5775 9.7525C12.3578 9.53275 12.0015 9.53275 11.7825 9.7525C11.5635 9.97225 11.562 10.3285 11.7825 10.5475L14.4075 13.1725C14.5163 13.2827 14.6603 13.3375 14.805 13.3375C14.9498 13.3375 15.0923 13.2835 15.2025 13.1725L17.8275 10.5475C18.048 10.3285 18.048 9.97225 17.8275 9.7525V9.7525ZM9.83251 12.2125H5.44501C4.51501 12.2125 3.75751 11.455 3.75751 10.525V2.845L5.42251 4.51C5.53351 4.62025 5.67751 4.675 5.82151 4.675C5.96551 4.675 6.10951 4.62025 6.21901 4.51C6.43876 4.29025 6.43876 3.934 6.21901 3.715L3.59401 1.09C3.37426 0.869497 3.01801 0.869497 2.79901 1.09L0.174011 3.715C-0.0464885 3.934 -0.0464885 4.29025 0.174011 4.51C0.394511 4.72975 0.749261 4.72975 0.969011 4.51L2.63401 2.845V10.525C2.63401 12.076 3.89626 13.3375 5.44651 13.3375H9.83401C10.1445 13.3375 10.3965 13.0855 10.3965 12.775C10.3965 12.4645 10.1438 12.2125 9.83401 12.2125H9.83251Z" fill="#606060"/>
                  </svg>                 
              </span>${tweet.interactions.retweets}</div>
              <div class="fav flex items-center mr-10">
                <span class="mr-[10px]">
                  <svg class="fav_icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99999 14.2285H7.98949C6.05224 14.1925 0.462494 9.142 0.462494 4.3585C0.462494 2.0605 2.35624 0.0429993 4.51474 0.0429993C6.23224 0.0429993 7.38724 1.228 7.99924 2.0905C8.60974 1.2295 9.76474 0.0429993 11.483 0.0429993C13.643 0.0429993 15.536 2.0605 15.536 4.35925C15.536 9.14125 9.94549 14.1917 8.00824 14.227H7.99999V14.2285ZM4.51549 1.16875C2.95549 1.16875 1.58824 2.65975 1.58824 4.36C1.58824 8.665 6.86374 13.057 8.00074 13.1035C9.13924 13.057 14.4132 8.66575 14.4132 4.36C14.4132 2.65975 13.046 1.16875 11.486 1.16875C9.58999 1.16875 8.53099 3.37075 8.52199 3.3925C8.34949 3.814 7.65499 3.814 7.48174 3.3925C7.47124 3.37 6.41299 1.16875 4.51624 1.16875H4.51549Z" fill="#606060"/>
                  </svg>                   
              </span>${tweet.interactions.likes}</div>
            </div>
          </div>
        </div>
      `
  }

  feed.innerHTML = feedString

  initTweetEvents()
}

// Dar me gusta a los tweets

const initTweetEvents = () => {

  const likeButtons = document.querySelectorAll(".fav_icon")

  for (let i = 0; i < likeButtons.length; i++) {
    const likeButton = likeButtons[i];
    let isTweetLiked = tweetData[i].liked 
    likeButton.addEventListener("click", () => {
      if (isTweetLiked) {
        tweetData[i].interactions.likes--
        tweetData[i].liked = false
        renderTweets();
      } else {
        tweetData[i].interactions.likes++
        tweetData[i].liked = true
        renderTweets(); 
      }   
    })
  }
}


// Buscar los tweets

const searchInput = document.querySelector(".search_input")
let filteredTweets = []

const initSearchEvents = () => {

  searchInput.addEventListener("keyup", (ev) => {
    ev.preventDefault();

    let userInput = searchInput.value
    
    console.log(userInput)
    if (userInput.length > 3) {
      filterTweets()
    }else{
      renderTweets()
    }
  })

}

const filterTweets = () => {
  let userInput = searchInput.value

  filteredTweets = tweetData.filter(tweet => tweet.content_text.includes(userInput))
  
  console.log(filteredTweets)

  if (filteredTweets.length > 0) {
    renderFilteredTweets()
  }else{
    renderEmpty()
  }
}

const renderEmpty = () => {
  const mensajeNotFound = "No hemos encontrado nada"
  feed.innerHTML = mensajeNotFound
}

const renderFilteredTweets = () => {
  let feedString = ""
  const feed = document.querySelector(".feed")
  for (let i = 0; i < filteredTweets.length; i++) {
    const filteredTweet = filteredTweets[i];
    feedString += `
    <div class="tweet p-4 grid grid-flow-col grid-cols-[auto_1fr] border-b-2 border-darkGrey">
        <div class="user_picture mr-4 w-[40px] h-[40px] bg-white rounded-full">
            <img class="object-cover rounded-full" src="${filteredTweet.profile_photo}" alt="" />
        </div>
        <div class="tweet_content grid grid-flow-row gap-3">
          <div class="user_info flex"> 
            <div class="user_real_name mr-[6px] font-bold ">${filteredTweet.full_name}</div>
            <div class="user_name mr-[6px] text-lightGrey">@${filteredTweet.username}</div>
            <div class="mr-[6px] text-lightGrey">·</div>
            <div class="time mr-[6px] text-lightGrey">3h</div>
          </div>
          <div class="tweet_text">
            ${filteredTweet.content_text}
          </div>
          <div class="tweet_interactions flex text-mediumGrey">
            <div class="comment flex items-center mr-10">
              <span class="mr-[10px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.53449 0.681496L6.42349 0.673996H6.42199C3.14149 0.673996 0.571991 3.24425 0.571991 6.5255C0.571991 9.599 2.96149 11.93 6.17074 12.053V14.924C6.17074 15.005 6.20374 15.1385 6.26074 15.2262C6.36724 15.395 6.54874 15.4865 6.73474 15.4865C6.83824 15.4865 6.94249 15.458 7.03624 15.398C7.23424 15.272 11.891 12.293 13.1022 11.2685C14.5287 10.061 15.3822 8.291 15.3845 6.5345V6.52175C15.38 3.2465 12.812 0.681496 9.53449 0.680746V0.681496ZM12.3747 10.4105C11.5242 11.1305 8.72824 12.9642 7.29574 13.8927V11.5025C7.29574 11.192 7.04449 10.94 6.73324 10.94H6.43624C3.69124 10.94 1.69774 9.083 1.69774 6.5255C1.69774 3.875 3.77374 1.799 6.42274 1.799L9.53299 1.8065H9.53449C12.1835 1.8065 14.2595 3.881 14.261 6.5285C14.2587 7.961 13.5545 9.4115 12.3755 10.4105H12.3747Z" fill="#606060"/>
                </svg>                    
            </span>${filteredTweet.interactions.comments}</div>
            <div class="retweet flex items-center mr-10">
              <span class="mr-[10px]">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8275 9.7525C17.6085 9.53275 17.2523 9.53275 17.0325 9.7525L15.3675 11.4175V3.7375C15.3675 2.1865 14.1053 0.924997 12.555 0.924997H8.16751C7.85701 0.924997 7.60501 1.177 7.60501 1.4875C7.60501 1.798 7.85701 2.05 8.16751 2.05H12.555C13.485 2.05 14.2425 2.8075 14.2425 3.7375V11.4175L12.5775 9.7525C12.3578 9.53275 12.0015 9.53275 11.7825 9.7525C11.5635 9.97225 11.562 10.3285 11.7825 10.5475L14.4075 13.1725C14.5163 13.2827 14.6603 13.3375 14.805 13.3375C14.9498 13.3375 15.0923 13.2835 15.2025 13.1725L17.8275 10.5475C18.048 10.3285 18.048 9.97225 17.8275 9.7525V9.7525ZM9.83251 12.2125H5.44501C4.51501 12.2125 3.75751 11.455 3.75751 10.525V2.845L5.42251 4.51C5.53351 4.62025 5.67751 4.675 5.82151 4.675C5.96551 4.675 6.10951 4.62025 6.21901 4.51C6.43876 4.29025 6.43876 3.934 6.21901 3.715L3.59401 1.09C3.37426 0.869497 3.01801 0.869497 2.79901 1.09L0.174011 3.715C-0.0464885 3.934 -0.0464885 4.29025 0.174011 4.51C0.394511 4.72975 0.749261 4.72975 0.969011 4.51L2.63401 2.845V10.525C2.63401 12.076 3.89626 13.3375 5.44651 13.3375H9.83401C10.1445 13.3375 10.3965 13.0855 10.3965 12.775C10.3965 12.4645 10.1438 12.2125 9.83401 12.2125H9.83251Z" fill="#606060"/>
                </svg>                 
            </span>${filteredTweet.interactions.retweets}</div>
            <div class="fav flex items-center mr-10">
              <span class="mr-[10px]">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99999 14.2285H7.98949C6.05224 14.1925 0.462494 9.142 0.462494 4.3585C0.462494 2.0605 2.35624 0.0429993 4.51474 0.0429993C6.23224 0.0429993 7.38724 1.228 7.99924 2.0905C8.60974 1.2295 9.76474 0.0429993 11.483 0.0429993C13.643 0.0429993 15.536 2.0605 15.536 4.35925C15.536 9.14125 9.94549 14.1917 8.00824 14.227H7.99999V14.2285ZM4.51549 1.16875C2.95549 1.16875 1.58824 2.65975 1.58824 4.36C1.58824 8.665 6.86374 13.057 8.00074 13.1035C9.13924 13.057 14.4132 8.66575 14.4132 4.36C14.4132 2.65975 13.046 1.16875 11.486 1.16875C9.58999 1.16875 8.53099 3.37075 8.52199 3.3925C8.34949 3.814 7.65499 3.814 7.48174 3.3925C7.47124 3.37 6.41299 1.16875 4.51624 1.16875H4.51549Z" fill="#606060"/>
                </svg>                   
            </span>${filteredTweet.interactions.likes}</div>
          </div>
        </div>
      </div>
    `
  }

  feed.innerHTML = feedString

  initTweetEvents()
}

// Crear un tweet

let isButtonActive = false  // boolean
let newTweetText = ""       // string
const newButton = document.querySelector(".new_tweet_button")
const counter = document.querySelector(".counter")
const newTweetTextArea = document.querySelector(".tweet_textarea")

const initNewTweetEvents = () => {
  newButton.addEventListener("click", () => {
    if (isButtonActive) {
      console.log("hola")
      createTweetAndUpdate()
    }
  })

  newTweetTextArea.addEventListener("keyup", () => {
    newTweetText = newTweetTextArea.value
    checkNewTweetLength()
    updateCounter()
  })
}

const updateCounter = () => {
  counter.innerHTML = 280 - newTweetTextArea.value.length

  if (newTweetText.length > 260 && newTweetText.length < 280) {
    counter.style.color="yellow"
  } else if (newTweetText.length >= 280){
    counter.style.color="red"
  } else {
    counter.style.color="white"
  }
}

const checkNewTweetLength = () => {
  newTweetText = newTweetTextArea.value
  if (newTweetText.length == 0) {
    setTweetButtonOff()
    hideCounter()
  } else if (newTweetText.length > 0 && newTweetText.length <= 280) {
    setTweetButtonOn()
    showCounter()
  } else {
    setTweetButtonOff()
    showCounter()
  }
}

const setTweetButtonOn = () => {
  isButtonActive = true
  newButton.classList.add("clickable")
}

const setTweetButtonOff = () => {
  isButtonActive = false;
  newButton.classList.remove("clickable")
}
const showCounter = () => {
  counter.classList.add("visible")
}

const hideCounter = () => { 
  counter.classList.remove("visible")
}


const createTweetAndUpdate = () => {
  // Creamos el tweet...
  const new_tweet = {
    // El contenido del tweetData.json
    username: "victordiangelo",
    full_name: "Víctor Duque",
    gender: "Male",
    interactions: {
      "likes": 0,
      "retweets": 0,
      "comments": 0
    },
    profile_photo: "./../assets/images/profile.png",
    content_text: newTweetText,
    liked: false
  }

  tweetData.unshift(new_tweet)

  renderTweets() 
}
