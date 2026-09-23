import {IMAGES} from '../constants/ImageConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown,faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const USERS_STORAGE_KEY = 'promo-users'
const SESSION_STORAGE_KEY = 'promo-session'

function readStoredUser() {
  try {
    const sessionEmail = window.localStorage.getItem(SESSION_STORAGE_KEY)
    const users = JSON.parse(window.localStorage.getItem(USERS_STORAGE_KEY) || '{}')
    return sessionEmail ? users[sessionEmail] || null : null
  } catch {
    return null
  }
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password)
  const hash = await window.crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [currentUser, setCurrentUser] = useState(readStoredUser)
  const [authError, setAuthError] = useState('')

  function such(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
  }
  function drop(){
    document.querySelector('.dropdown12').classList.toggle('open')
    document.querySelector('.dropdown').classList.toggle('active')
  }
  function drop1(){
    document.querySelector('.dropdown13').classList.toggle('open')
    document.querySelector('.dropdown1').classList.toggle('active')
  }
  function drop2(){
    document.querySelector('.dropdown14').classList.toggle('open')
    document.querySelector('.dropdown2').classList.toggle('active')
  }
  function drop3(){
    document.querySelector('.dropdown15').classList.toggle('open')
    document.querySelector('.dropdown3').classList.toggle('active')
  }
  function arr(){
    document.querySelector('.arrowl1').classList.toggle('open')
  }
  function arr1(){
    document.querySelector('.arrowl2').classList.toggle('open')
  }
  function arr2(){
    document.querySelector('.arrowl3').classList.toggle('open')
  }
  function arr3(){
    document.querySelector('.arrowl4').classList.toggle('open')
  }

  function openAuth(mode) {
    setAuthMode(mode)
    setAuthError('')
    setIsLoginOpen(true)
  }

  async function handleAuthSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email').trim().toLowerCase()
    const password = formData.get('password')
    const name = formData.get('name')?.trim()
    const users = JSON.parse(window.localStorage.getItem(USERS_STORAGE_KEY) || '{}')
    const passwordHash = await hashPassword(password)

    if (authMode === 'signup') {
      if (!name) {
        setAuthError('Please enter your name.')
        return
      }
      if (users[email]) {
        setAuthError('An account with this email already exists.')
        return
      }
      users[email] = { name, email, passwordHash }
    } else if (!users[email] || users[email].passwordHash !== passwordHash) {
      setAuthError('Incorrect email or password.')
      return
    }

    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
    window.localStorage.setItem(SESSION_STORAGE_KEY, email)
    setCurrentUser(users[email])
    setAuthError('')
    setIsLoginOpen(false)
    event.currentTarget.reset()
  }

  function logOut() {
    window.localStorage.removeItem(SESSION_STORAGE_KEY)
    setCurrentUser(null)
    setIsProfileOpen(false)
  }

  return (
    <div>
      <section class="nav-box">
      <div class="nav1-box">
      <img class="logo-img" src={IMAGES.LOGO} alt=""/>
        <div class="nav-con1">
        <div class="menu-container">
        <div class="mega-menu">
            <ul>
                <li class="Create">Create 
                <div class="arrow">
                <FontAwesomeIcon icon={faChevronDown} />
                 </div>
                    <div class="submenu">
                        <ul> 
                            <div class="box1">
                            <div class="slide-bar1">
                             <div class="product1">  
                            <li>Social Media</li></div>
                            <div class="cr-1">
                              <li>Daily Calendar Videos</li></div>
                              <div class="cr-1">
                                <li>Facebook Videos</li></div>
                                <div class="cr-1">
                                <li>Instagram Videos</li></div>
                                <div class="cr-1">
                                <li>YouTube Videos</li></div>
                                <div class="cr-1">
                                <li>YouTube Intro Videos</li>
                                </div>
                        </div>
                        <div class="slide-bar2">
                            <div class="product1">  
                                <li>Industries</li></div>
                                <div class="cr-1">
                                    <li>Real Estate Videos</li></div>
                                    <div class="cr-1">
                                    <li>Fitness Videos</li></div>
                                    <div class="cr-1">
                                    <li>Fashion Videos</li></div>
                                    <div class="cr-1">
                                    <li>Restaurant Videos</li></div>
                                    <div class="cr-1">
                                  <li>Travel Videos</li>
                                    </div>
                        </div>
                        <div class="slide-bar3">
                            <div class="product1">  
                           <li>Marketing</li></div>
                           <div class="cr-1">
                            <li>Commercial Maker</li></div>
                            <div class="cr-1">
                            <li>Facebook Story Ads</li></div>
                            <div class="cr-1">
                            <li>Instagram Story Ads</li></div>
                            <div class="cr-1">
                            <li>LinkedIn Video Ads</li></div>
                            <div class="cr-1">
                            <li>YouTube Ads</li></div>
                            <div class="cr-1">
                            <li>Promo Videos</li>
                            </div>
                       </div>
                       <div class="slide-bar4">
                        <div class="product1">  
                       <li>E-commerce</li></div>
                       <div class="cr-1">
                        <li>E-commerce Ads</li></div>
                        <div class="cr-1">
                        <li>Amazon Video Ads</li>
                        </div>
                   </div>
                            </div>
                    
                        </ul>
                    </div></li>
                    <li class=" Templates"> Templates
                    <div class="arrow1">
                <FontAwesomeIcon icon={faChevronDown} />
                 </div>
                        <div class="submenu">
                            <ul> 
                                <div class="box1">
                                <div class="slide-bar1">
                                 <div class="product1">  
                                <li>Trending Now</li></div>
                                <div class="cr-1">
                                  <li>Holiday Templates</li></div>
                                  <div class="cr-1">
                                    <li>Video Ads</li></div>
                                    <div class="cr-1">
                                    <li>Motivational & Inspirational</li></div>
                                    <div class="cr-1">
                                    <li>Birthday Greetings</li></div>
                                    <div class="cr-1">
                                    <li>Listicles</li></div>
                            </div>
                            <div class="slide-bar2">
                                <div class="product1">  
                                    <li>Marketing</li></div>
                                    <div class="cr-1">
                                        <li>Sales & Promotions</li></div>
                                        <div class="cr-1">
                                        <li>Short Ads</li></div>
                                        <div class="cr-1">
                                        <li>Slideshows</li></div>
                            </div>
                            <div class="slide-bar3">
                                <div class="product1">  
                                    <li>Industries</li></div>
                                    <div class="cr-1">
                                    <li>Real Estate </li></div>
                                    <div class="cr-1">
                                <li>Health & Fitness</li></div>
                                <div class="cr-1">
                                    <li>Beauty & Care</li></div>
                                    <div class="cr-1">
                                    <li>Food & Drink</li></div>
                                    <div class="cr-1">
                                    <li>E-commerce & Retail</li></div>
                                    <div class="cr-1">
                                    <li>Recruiting & HR</li></div>
                                    <div class="cr-1">
                                    <li>Education</li></div>
                           </div>
                           <div class="slide-bar4">
                            <div class="product1">  
                           <li>Social Media</li></div>
                           <div class="cr-1">
                            <li>Facebook</li></div>
                            <div class="cr-1">
                            <li>Instagram</li></div>
                            <div class="cr-1">
                            <li>TikTok</li></div>
                            <div class="cr-1">
                            <li>YouTube</li></div>
                            <div class="cr-1">
                            <li>Stories</li></div>
                       </div>
                       <div class="slide-bar5">
                        <div class="product1">  
                       <li>Formats</li></div>
                       <div class="cr-1">
                        <li>Meme Videos</li></div>
                        <div class="cr-1">
                        <li>6 Second Videos</li></div>
                        <div class="cr-1">
                        <li>YouTube Intros</li></div>
                        <div class="cr-1">
                        <li>Listicles</li></div>
                        <div class="cr-1">
                        <li>Inspirational & Quotes</li></div>
                   </div>
                                </div>
                            
                            </ul>
                        </div></li>
                        <li class=" Tools">Tools
                        <div class="arrow2">
                <FontAwesomeIcon icon={faChevronDown} />
                 </div>
                            <div class="submenu">
                                <ul> 
                                    <div class="box1">
                                    <div class="slide-bar1">
                                     <div class="product1">  
                                    <li>Video Maker</li></div>
                                    <div class="cr-1">
                                        <li>Online Video Maker</li></div>
                                        <div class="cr-1">
                                        <li>Slideshow Maker</li></div>
                                        <div class="cr-1">
                                        <li>YouTube Intro Maker</li></div>
                                        <div class="cr-1">
                                        <li>Lyric Video Maker</li></div>
                                        <div class="cr-1">
                                        <li>Video Ad Maker</li></div>
                                        <div class="cr-1">
                                        <li>All Tools</li></div>
                                        
                                </div>
                                <div class="slide-bar2">
                                    <div class="product1">  
                                        <li>Video Editor</li></div>
                                        <div class="cr-1">
                                        <li>Online Video Editor</li></div>
                                        <div class="cr-1">
                                        <li>Add Audio to Video</li></div>
                                        <div class="cr-1">
                                        <li>Online Video Cutter</li></div>
                                        <div class="cr-1">
                                        <li>Video Compressor</li></div>
                                        <div class="cr-1">
                                        <li>Add Text to Video</li></div>
                                            
                                </div>
                                <div class="slide-bar3">
                                    <div class="product1">  
                                        <li>Photos</li></div>
                                        <div class="cr-1">
                                            <li>Free Photo Editor</li></div>
                                            <div class="cr-1">
                                            <li>Image Resizer</li></div>
                                            <div class="cr-1">
                                            <li>Free Online Collage Maker</li></div>
                                            <div class="cr-1">
                                            <li>Photos to Video Maker</li></div>
                                            <div class="cr-1">
                                            <li>YouTube Thumbnail Maker</li></div>
                                            <div class="cr-1">
                                            <li>Montage Maker</li></div>
                                            <div class="cr-1">
                                            <li>Meme Maker</li></div>
                                            
                               </div>
                               <div class="slide-bar4">
                                <div class="product1">  
                               <li>GIF</li></div>
                               <div class="cr-1">
                                <li>Video to GIF Maker</li></div>
                                <div class="cr-1">
                                <li>Add Text to GIF</li></div>
                                <div class="cr-1">
                                <li>GIF Editor</li></div>
                                <div class="cr-1">
                                <li>Happy Birthday GIF</li></div>
                                <div class="cr-1">
                                <li>Merry Christmas GIF</li></div>
                                
                           </div>
                           <div class="slide-bar5">
                            <div class="product1">  
                           <li>More</li></div>
                           <div class="cr-1">
                            <li>Social Media Calendar</li></div>
                            <div class="cr-1">
                            <li>Video Production Cost Estimator
                            </li></div>
                            <div class="cr-1">
                            <li>Facebook Ad Budget Calculator
                            </li></div>
                            <div class="cr-1">
                            <li>Facebook Ads Troubleshooter
                            </li></div>
                            <div class="cr-1">
                            <li>YouTube Money Calculator</li></div>
                            <div class="cr-1">
                            <li>Promo Marketing Ebook</li></div>
                        
                       </div>
                                    </div>
                          
                                </ul>
                            </div></li>
                            <li class="Resources">Resources
                            <div class="arrow3">
                <FontAwesomeIcon icon={faChevronDown} />
                 </div>
                                <div class="submenu">
                                    <ul> 
                                        <div class="box1">
                                        <div class="slide-bar1">
                                         <div class="product1">  
                                        <li>Learn</li></div>
                                        <div class="cr-1">
                                            <li>Blog</li></div>
                                            <div class="cr-1">
                                            <li>Promo Academy</li></div>
                                            <div class="cr-1">
                                            <li>Knowledge base</li></div>
                                            <div class="cr-1">
                                            <li>FAQ</li></div>
                                            
                                            
                                    </div>
                                    <div class="slide-bar2">
                                        <div class="product1">  
                                            <li>Tips & Tutorials</li></div>
                                            <div class="cr-1">
                                                <li>Video Marketing 101</li></div>
                                                <div class="cr-1">
                                                <li>How to create winning videos</li></div>
                                                <div class="cr-1">
                                                <li>7 Things You Could Do With Promo</li></div>
                                                <div class="cr-1">
                                                <li>How to Add Music to a Video</li></div>
                                                <div class="cr-1">
                                                <li>How to Add Subtitles to a Video</li></div>
                                                <div class="cr-1">
                                                <li>The Complete Guide to Video Aspect Ratios</li></div>
                                                
                                    </div>
                                        </div>
                                  
                                    </ul>
                                </div></li>
                                <li class=" promoAI">PromoAI</li>
                                <li class=" pricing">Pricing</li>
        
            </ul>
        </div>
    </div>
        </div>
        <div class="nav2-box">
        {currentUser ? (
          <button class="nav-text2 login-trigger" type="button" onClick={() => setIsProfileOpen(true)}>Profile</button>
        ) : (
          <button class="nav-text2 login-trigger" type="button" onClick={() => openAuth('login')}>Login</button>
        )}
        <div class="nav-con2">
          <div class="nav-btn2">Try for free</div>
        </div>
      </div>
      </div>
    </section>
    <div class="ham1">
      <div class="ham2">
      <img class="logo-img" src={IMAGES.LOGO} alt=""/>
    <div class="navigation">
        <button class="hamburger" onClick={such}>
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
        </button>
        <nav>
            <ul>
                <li>Create</li>
                <li>Templates</li>
                <li>Tools</li>
                <li>Resources</li>
                <li>Company</li>
                <li>Promo AI</li>
                <li>Pricing</li>
                <li onClick={() => currentUser ? setIsProfileOpen(true) : openAuth('login')}>{currentUser ? 'Profile' : 'Log In'}</li>
                {!currentUser && <li onClick={() => openAuth('signup')}>Sign In</li>}
            </ul>
        </nav>
    </div>
    </div>
    </div>
  {/*fisrt-page*/}
    <div class="first-box">
      <div class="first-box1">
        <div class="first-sec1">
          <h2 class="first-head1">Meet PromoAI</h2>
          <h1 class="first-head2">
            30 Days Worth of<br />
            Video Content.<br />
            One Click Away!
          </h1>
          <p class="first-para">
            Generate, schedule & publish a monthly dose of videos for your
            business!
          </p>
          <div class="first-btn-con">
            <button class="first-btn1">Sign up for free</button>
            <div class="first-btn2">
              <div class="video-btn"><FontAwesomeIcon icon={faCirclePlay} />
              <div class="first-icon">watch video</div></div>
            </div>
          </div>
        </div>
        <div class="first-img1">
          <img width="400px" src={IMAGES.FIRSTIMGONE} alt="" />
        </div>
      </div>
    </div>
{/*second-page*/}
    <div class="second-page">
      <div class="second-box1">
        <div class="second-title">Our partners:</div>
        <div class="second-row1">
        <img class="second-img"
          width="90px"
          src={IMAGES.SECONDIMGONE}
          alt=""
        />
        <img
          width="100px"
          class="second-img"
          src={IMAGES.SECONDIMG}
          alt=""
        />
        <img
          width="100px"
          class="second-img"
          src={IMAGES.SECONDIMGTWO}
          alt=""
        />
        <img
          width="130px"
          class="second-img2"
          src={IMAGES.SECONDIMGTHREE}
          alt=""
        />
        <img
          width="80px"
          class="second-img"
          src={IMAGES.SECONDIMGFOUR}
          alt=""
        />
        <img
          width="150px"
          class="second-img1"
          src={IMAGES.SECONDIMGFIVE}
          alt=""
        />
        </div>
      </div>
    </div>
    <div class="line1"></div>
    {/*third-page*/}
    <div class="third-page">
      <div class="third-page1">
        <div class="third-box">
          <div class="third-img1">
          <img width="450px" class="th-im1" src={IMAGES.THIRDIMGONE} alt="" />
          </div>
          <div class="third-box1">
            <h3 class="third-txt1">The Smartest Way to Make Videos</h3>
            <p class="third-para">
              Jaw-dropping Ai generated video posts for every single day of the
              month so you always know what to post next. That's the magic of
              PromoAI!
            </p>
            <button class="third-btn1">Get started</button>
          </div>
        </div>
        {/*th-box1*/}
        <div class="third-page2">
          <div class="third-img2">
          <img width="450px" class="th-im2" src={IMAGES.THIRDIMGTWO} alt="" />
          </div>
          <div class="third-box2">
            <h3 class="third-txt2">Time is Money, and Promo Saves Both!</h3>
            <p class="third-par2">
              We built PromoAI, so you have more time to run your business (and
              do more of what you love!) That's why our platform is your
              ultimate ally in content creation. Offering a brand new chat-based
              editor and delivering remarkable results cost-effectively and
              efficiently.
            </p>
            <button class="third-btn2">Get started</button>
          </div>
        </div>
        {/*th-box2*/}
        <div class="third-page3">
          <div class="third-img3">
          <img width="450px"  class="th-im3" src={IMAGES.THIRDIMGTHREE} alt="" />
          </div>
          <div class="third-box3">
            <h3 class="third-txt3">Generate and Publish - All in One Place!</h3>
            <p class="third-par3">
            PromoAI helps you manage your social media accounts right from the platform!  saving you valuable time and money on video production, scheduling, and posting. Post directly to all your social media channels with AI-generated titles and descriptions 

            </p>
            <button class="third-btn3">Get started</button>
          </div>
        </div>
        {/*th-box3*/}
        <div class="third-page4">
          <div class="third-img4">
          <img width="450px"  class="th-im4" src={IMAGES.THIRDIMGFOUR} alt="" />
          </div>
          <div class="third-box4">
            <h3 class="third-txt4">Unlimited Videos, Infinite possibilities! </h3>
            <p class="third-par4">
            Whatever the Need, Whenever the Occasion, We've Got You! From marketing masterpieces to eye-catching listicles and from social media sensations to holiday-themed delights, PromoAI generates videos from thousands of fully customizable templates for every occasion. 

            </p>
            <button class="third-btn4">Get started</button>
          </div>
        </div>
        {/*th-box4*/}
        <div class="third-page5">
          <div class="third-img5">
          <img width="450px"  class="th-im5" src={IMAGES.THIRDIMGFIVE} alt="" />
          </div>
          <div class="third-box5">
            <h3 class="third-txt5">Stand Out with Premium Stock Footage! </h3>
            <p class="third-par5">
            Unleash your creativity with unlimited premium stock footage from Getty Images and iStock. Paired with our professionally curated music tracks, your content will leave your competition in the dust! 

            </p>
            <button class="third-btn5">Get started</button>
          </div>
        </div>
        {/*th-box5*/}
        <div class="third-page6">
          <div class="third-img6">
          <img width="450px"  class="th-im6" src={IMAGES.THIRDIMGSIX} alt="" />
          </div>
          <div class="third-box6">
            <h3 class="third-txt6">An Award-Winning Video Editor for Savvy Creators! </h3>
            <p class="third-par6">
            Looking for pixel-perfect adjustments?  Promo has got your back! Whether you're in the mood for some hands-on editing or craving the convenience of automation, we've got you covered. 
            
            </p>
            <button class="third-btn6">Get started</button>
          </div>
        </div>
      </div>
    </div> 
    {/*fourth*/}
    <div class="fourth-page">
      <div class="fourth-page1">
          <div class="fourth-box2">
            <h5 class="fourth-txt">What can I do with Promo:</h5>
            <h6 title="facebookads">facebookads</h6>
          </div>
          <img width="400px" class="fourth-img3" src={IMAGES.FOURTHIMG} alt="" />
        </div>
      </div>

      {/*fifth-page*/}
      <div class="fifth-page">
      <div class="fifth-page1">
        <div class="fifth-box1">
          <div class="fifth-txt-box1">
            <span class="fifth-txt1">
              Explore our massive <b>Facebook ad</b> <b>creator</b> library</span>
              <a class="fifth-txt-link1" href="v">View all Facebook ad templates</a>
          </div>
          <div class="fifth-ad-box1">
            <div class="fifth-im-box1">
          <img width="260px" class="fifth-img" src={IMAGES.FIFTHIMG} alt=''/>
      <div class="fif-part1 boxz-fif1">
    <span class="fif-text-pa1">
  Preview
    </span>
  <button class="fifth-txt-btn1">Customize</button>
  </div>
</div>
<div class="fifth-im-box2">
  <img width="260px" class="fifth-img2" src={IMAGES.FIFTHIMGONE} alt=''/>
<div class="fif-part2 boxz-fif2">
<span class="fif-text-pa2">
Preview
</span>
<button class="fifth-txt-btn2">Customize</button>
</div>
</div>
<div class="fifth-im-box3">
  <img width="260px" class="fifth-img3" src={IMAGES.FIFTHIMGTWO} alt=''/>
<div class="fif-part3 boxz-fif3">
<span class="fif-text-pa3">
Preview
</span>
<button class="fifth-txt-btn3">Customize</button>
</div>
</div>  
<div class="fifth-im-box4">
  <img width="260px" class="fifth-img4" src={IMAGES.FIFTHIMGTHREE} alt=''/>
<div class="fif-part4 boxz-fif4">
<span class="fif-text-pa4">
Preview
</span>
<button class="fifth-txt-btn4">Customize</button>
</div>
</div>
  </div>
  </div>
  <div class="fifth-box2">
    <div class="fifth-txt-box2">
      <span class="fifth-txt2">
        Create a story in seconds with these prebuilt <b>Instagram story templates</b></span>
        <a class="fifth-txt-link2" href="v">View all Instagram story templates</a>
    </div>
    <div class="fifth-ad-box1">
      <div class="fifth-im-box1">
    <img width="260px" class="fifth-img" src={IMAGES.FIFTHIMGFOUR} alt=''/>
<div class="fif-part1 boxz-fif1">
<span class="fif-text-pa1">
Preview
</span>
<button class="fifth-txt-btn1">Customize</button>
</div>
</div>
<div class="fifth-im-box2">
<img width="260px" class="fifth-img2" src={IMAGES.FIFTHIMGFIVE} alt=''/>
<div class="fif-part2 boxz-fif2">
<span class="fif-text-pa2">
Preview
</span>
<button class="fifth-txt-btn2">Customize</button>
</div>
</div>
<div class="fifth-im-box3">
<img width="260px" class="fifth-img3" src={IMAGES.FIFTHIMGSIX} alt='' />
<div class="fif-part3 boxz-fif3">
<span class="fif-text-pa3">
Preview
</span>
<button class="fifth-txt-btn3">Customize</button>
</div>
</div>
<div class="fifth-im-box4">
<img width="260px" class="fifth-img4" src={IMAGES.FIFTHIMGSEVEN} alt='' />
<div class="fif-part4 boxz-fif4">
<span class="fif-text-pa4">
Preview
</span>
<button class="fifth-txt-btn4">Customize</button>
</div>
</div>
    </div>
  </div>
  <div class="fifth-box3">
    <div class="fifth-txt-box3">
      <span class="fifth-txt3">
        Make an impression with our <b>YouTube intro templates</b></span>
        <a class="fifth-txt-link3" href="v">View all YouTube intro templates</a>
    </div>
    <div class="fifth-ad-box1">
      <div class="fifth-im-box1">
    <img width="260px" class="fifth-img" src={IMAGES.FIFTHIMGEIGHT} alt=''/>
<div class="fif-part1 boxz-fif1">
<span class="fif-text-pa1">
Preview
</span>
<button class="fifth-txt-btn1">Customize</button>
</div>
</div>
<div class="fifth-im-box2">
<img width="260px" class="fifth-img2" src={IMAGES.FIFTHIMGNINE} alt=''/>
<div class="fif-part2 boxz-fif2">
<span class="fif-text-pa2">
Preview
</span>
<button class="fifth-txt-btn2">Customize</button>
</div>
</div>
<div class="fifth-im-box3">
<img width="260px" class="fifth-img3" src={IMAGES.FIFTHIMGTEN} alt=''/>
<div class="fif-part3 boxz-fif3">
<span class="fif-text-pa3">
Preview
</span>
<button class="fifth-txt-btn3">Customize</button>
</div>
</div>
<div class="fifth-im-box4">
<img width="260px" class="fifth-img4" src={IMAGES.FIFTHIMGELEVEN} alt=''/>
<div class="fif-part4 boxz-fif4">
<span class="fif-text-pa4">
Preview
</span>
<button class="fifth-txt-btn4">Customize</button>
</div>
</div>
    </div>
  </div>
  <div class="fifth-box4">
    <div class="fifth-txt-box4">
      <span class="fifth-txt4">
        Videos to amaze your audience's <b>Instagram feed</b></span>
        <a class="fifth-txt-link4" href="v">View all Instagram feed templates</a>
    </div>
    <div class="fifth-ad-box1">
      <div class="fifth-im-box1">
    <img width="260px" class="fifth-img" src={IMAGES.FIFTHIMGTWELVE}  alt=''/>
<div class="fif-part1 boxz-fif1">
<span class="fif-text-pa1">
Preview
</span>
<button class="fifth-txt-btn1">Customize</button>
</div>
</div>
<div class="fifth-im-box2">
<img width="260px" class="fifth-img2" src={IMAGES.FIFTHIMGTHIRTEEN} alt=''/>
<div class="fif-part2 boxz-fif2">
<span class="fif-text-pa2">
Preview
</span>
<button class="fifth-txt-btn2">Customize</button>
</div>
</div>
<div class="fifth-im-box3">
<img width="260px" class="fifth-img3" src={IMAGES.FIFTHIMGFOURTEEN}  alt=''/>
<div class="fif-part3 boxz-fif3">
<span class="fif-text-pa3">
Preview
</span>
<button class="fifth-txt-btn3">Customize</button>
</div>
</div>
<div class="fifth-im-box4">
<img width="260px" class="fifth-img4" src={IMAGES.FIFTHIMGFIFTEEN} alt=''/>
<div class="fif-part4 boxz-fif4">
<span class="fif-text-pa4">
Preview
</span>
<button class="fifth-txt-btn4">Customize</button>
</div>
</div>
    </div>
  </div>
      </div>
    </div>
    <div class="btn-for-fifth">   
<span class="fifth-last-btn">View all templates</span>
 </div>

 {/*sixth-page*/}
 <div class="sixth-page">
  <div class="sixth-page1">
    <div class="sixth-box1">
      <div class="sixth-txt-box1">
        <span class="sixth-txt1">
           <b>Video Maker For Every Business Type</b></span>
      </div>
      <div class="sixth-ad-box1">
        <div class="sixth-im-box1">
      <img width="300px" class="sixth-img1" src={IMAGES.SIXTHIMGONE} alt=""/>
  <div class="six-part1 boxs-six1">
  <span class="six-text-pa1">
  See Templates
  </span>
  </div>
  <div class="six-fitxt1">Small Businesses</div>
  </div>
  <div class="sixth-im-box2">
  <img width="260px" class="sixth-img2" src={IMAGES.SIXTHIMGTWO} alt="" />
  <div class="six-part2 boxs-six2">
  <span class="six-text-pa2">
    See Templates
  </span>
  </div>
  <div class="six-fitxt2">Marketing Agencies</div>
  </div>
  <div class="sixth-im-box3">
  <img width="260px" class="sixth-img3" src={IMAGES.SIXTHIMGTHREE} alt=""/>
  <div class="six-part3 boxs-six3">
  <span class="six-text-pa3">
    See Templates
  </span>
  </div>
  <div class="six-fitxt3">Real Estate Agencies</div>
  </div>
  <div class="sixth-im-box4">
  <img width="260px" class="sixth-img4" src={IMAGES.SIXTHIMGFOUR} alt=""/>
  <div class="six-part4 boxs-six4">
  <span class="six-text-pa4">
    See Templates
  </span>
  </div>
  <div class="six-fitxt4">eCommerce Stores</div>
  </div>
      </div>
      {/*sixth-box2*/}
      <div class="sixth-ad-box2">
        <div class="sixth-im-box6">
      <img width="260px" class="sixth-img6" src={IMAGES.SIXTHIMGFIVE} alt=""/>
  <div class="six-part6 boxs-six6">
  <span class="six-text-pa6">
  See Templates
  </span>
  </div>
  <div class="six-fitxt6">Restaurants</div>
  </div>
  <div class="sixth-im-box7">
  <img width="260px" class="sixth-img7" src={IMAGES.SIXTHIMGSIX} alt=""/>
  <div class="six-part7 boxs-six7">
  <span class="six-text-pa7">
    See Templates
  </span>
  </div>
  <div class="six-fitxt7">Education</div>
  </div>
  <div class="sixth-im-box8">
  <img width="260px" class="sixth-img8" src={IMAGES.SIXTHIMGSEVEN} alt=""/>
  <div class="six-part8 boxs-six8">
  <span class="six-text-pa8">
    See Templates
  </span>
  </div>
  <div class="six-fitxt8">
    Recruiters
</div>
  </div>
  <div class="sixth-im-box9">
  <img width="260px" class="sixth-img9" src={IMAGES.SIXTHIMGEIGHT} alt=""/>
  <div class="six-part9 boxs-six9">
  <span class="six-text-pa9">See Templates
  </span>
  </div>
  <div class="six-fitxt9">SaaS Companies
  </div>
  </div>
      </div>
      <div class="sixth-btn1">
        <span class="sixth-btn2">Try for free</span>
      </div>
    </div>
  </div>
 </div>

 {/*seven-page*/}
 <div class="seventh-page">
  <div class="seventh-box1">
    <div class="seventh-title">Trusted by:</div>
    <div class="seventh-row1">
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGONE}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGTWO}
      alt=""
    />
    <img
      width="30px"
      class="seven-img"
      src={IMAGES.SEVENIMGTHREE}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGFOUR}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGFIVE}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGSIX}
      alt=""
    />
    <img
      width="50px"
      class="seven-img1"
      src={IMAGES.SEVENIMGSEVEN}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGEIGHT}
      alt=""
    />
    <img
      width="50px"
      class="seven-img"
      src={IMAGES.SEVENIMGNINE}
      alt=""
    />
    </div>
  </div>
</div>

{/*eight-page*/}
<div class="eighth-page">
  <div class="eighth-page1">
  <div class="eighth-con1">
    <img  class="eighth-im1" src={IMAGES.EIGHTHIMGFIVE} alt=''/>
   </div>
    <div id="slider">
    <input type="radio" name="slider" id="slide1" checked/>
      <input type="radio" name="slider" id="slide2"/>
      <input type="radio" name="slider" id="slide3"/>
      <input type="radio" name="slider" id="slide4"/>
      <div id="slides">
         <div id="overflow">
            <div class="inner">
               <div class="slide slide_1">
                  <img width="100%" src={IMAGES.EIGHTHIMGONE} alt=''/>
               </div>
               <div class="slide slide_2">
                    <img width="100%" src={IMAGES.EIGHTHIMGTWO} alt=''/>
               </div>
               <div class="slide slide_3">
                <img width="100%" src={IMAGES.EIGHTHIMGTHREE} alt=''/>
               </div>
               <div class="slide slide_4">
                <img width="100%"  src={IMAGES.EIGHTHIMGFOUR} alt=''/>
               </div>
            
            </div>
         </div>
      </div>
      <div id="controls">
         <label for="slide1"></label>
         <label for="slide2"></label>
         <label for="slide3"></label>
         <label for="slide4"></label>

      </div>
      <div id="bullets">
         <label for="slide1"></label>
         <label for="slide2"></label>
         <label for="slide3"></label>
         <label for="slide4"></label>
      </div>
   </div>
   <div class="eighth-con2">
    <img class="eighth-im2" src={IMAGES.EIGHTHIMGSIX} alt=''/>
   </div>
  </div>
</div>
{/*ninth-page*/}
<div class="ninth-page">
  <div class="ninth-page1">
    <div class="ninth-con1">
      <div class="nin-box1">
        <div class="nin-tit1">Company </div>
        <ul class="nin-txt1">
<li>Pricing</li>
<li>About</li>
<li>Careers</li>
<li>News & Media</li>
<li>Affiliates</li>
<li>Write for Us</li>
        </ul>
      </div>
      <div class="nin-box2">
        <div class="nin-tit2">Support</div>
        <ul class="nin-txt2">
<li> Support</li>
<li> FAQ</li>
<li>Knowledge Base</li>
<li>Contact Us</li>
<li>blog</li>

        </ul>
      </div>
      <div class="nin-box3">
        <div class="nin-tit3">PRODUCT</div>
        <ul class="nin-txt3">
<li>PromoAI</li>
<li>Promo Video Maker</li>
<li>Commercial Maker</li>
<li>Social Media Video Maker</li>
<li>eCommerce Ads</li>
<li>Facebook Video Maker</li>
<li>Facebook Video Ad Creator</li>
<li>Facebook Story Ads</li>
<li>Instagram Video Maker</li>
<li>Instagram Video Ad Maker</li>
<li>Instagram Story Ads</li>
<li>YouTube Video Maker</li>
<li>YouTube Ad Maker</li>
<li>YouTube intro Maker</li>
<li>YouTube Outro Maker</li>
<li>LinkedIn Video Ads</li>
<li>Twitter Video Ads</li>
<li>Amazon Video Ads</li>
<li>Real Estate Videos</li>
<li>Fitness Marketing Videos</li>
<li>Fashion Marketing Videos</li>
<li>Restaurant Videos</li>
<li>Beauty Marketing Videos</li>
<li>Travel Ads</li>
<li>Business</li>
<li>Nonprofit Videos</li>
        </ul>
      </div>
      <div class="nin-box4">
        <div class="nin-tit4">TOOLS</div>
        <ul class="nin-txt4">
<li>All Tools</li>
<li> to video maker</li>
<li>Online Video Maker</li>
<li>Video Ad Maker</li>
<li>Social Media Calendar</li>
<li>Image Resizer</li>
<li>Free Photo Editor</li>
<li> Online Collage Maker</li>
<li>Facebook Video Covers</li>
<li>Video Production Cost Estimator</li>
<li>Facebook Ad Budget Calculator</li>
<li>Facebook Ads Troubleshooter</li>
<li>YouTube Money Calculator</li>
<li>MP4 Editor</li>
<li>Add Music to Video</li>
<li>Video to GIF Maker</li>
<li>Add Text to GIF</li>
<li>Video Editor for YouTube</li>
<li>Meme Maker</li>
<li>Birthday Video Maker</li>
<li>Online Video Cutter</li>
<li>Lyric Video Maker</li>
<li>Add Audio to Video</li>
<li>Add Text to Video</li>
<li>GIF Editor</li>
<li> Merger</li>
<li>Video Compressor</li>
<li>Video Resizer</li>
<li>Youtube Thumbnail Maker</li>
<li>Video Trimmer</li>
<li>Add Subtitles to Video</li>
<li>Montage Maker</li>
<li>Video Cropper</li>
<li>Slideshow Maker</li>
<li>TikTok Video Editor</li>
        </ul>
      </div>
    </div>
    <div class="ninth-con3">
    <nav>
      <ul>
        <div class="drop1">
      <button class="dropdown12" onClick={drop}>Company
      <button class="arrowl1" onClick={arr}>
                <FontAwesomeIcon icon={faChevronDown} />
                 </button>
                 </button>
      <div class="dropdown">
        <ul class="panal">
        <li>Pricing</li>
<li>About</li>
<li>Careers</li>
<li>News & Media</li>
<li>Affiliates</li>
<li>Write for Us</li>
        </ul>
    </div>
    </div>
    <div class="drop1">
      <button class="dropdown13" onClick={drop1}>Support
      <button class="arrowl2" onClick={arr1}>
                <FontAwesomeIcon icon={faChevronDown} />
                 </button>
                 </button>
      <div class="dropdown1">
        <ul class="panal">
        <li> Support</li>
<li> FAQ</li>
<li>Knowledge Base</li>
<li>Contact Us</li>
<li>blog</li>
        </ul>
    </div>
    </div>
    <div class="drop1">
      <button class="dropdown14" onClick={drop2}>Product
      <button class="arrowl3" onClick={arr2}>
                <FontAwesomeIcon icon={faChevronDown} />
                 </button>
                 </button>
      <div class="dropdown2">
        <ul class="panal">
        <li>PromoAI</li>
<li>Promo Video Maker</li>
<li>Commercial Maker</li>
<li>Social Media Video Maker</li>
<li>eCommerce Ads</li>
<li>Facebook Video Maker</li>
<li>Facebook Video Ad Creator</li>
<li>Facebook Story Ads</li>
<li>Instagram Video Maker</li>
<li>Instagram Video Ad Maker</li>
<li>Instagram Story Ads</li>
<li>YouTube Video Maker</li>
<li>YouTube Ad Maker</li>
<li>YouTube intro Maker</li>
<li>YouTube Outro Maker</li>
<li>LinkedIn Video Ads</li>
<li>Twitter Video Ads</li>
<li>Amazon Video Ads</li>
<li>Real Estate Videos</li>
<li>Fitness Marketing Videos</li>
<li>Fashion Marketing Videos</li>
<li>Restaurant Videos</li>
<li>Beauty Marketing Videos</li>
<li>Travel Ads</li>
<li>Business</li>
<li>Nonprofit Videos</li>
       
        </ul>
    </div>
    </div>
    <div class="drop1">
      <button class="dropdown15" onClick={drop3}>Tools
      <button class="arrowl4" onClick={arr3}>
                <FontAwesomeIcon icon={faChevronDown} />
                 </button>
                 </button>
      <div class="dropdown3">
        <ul class="panal">
        <li>All Tools</li>
<li> to video maker</li>
<li>Online Video Maker</li>
<li>Video Ad Maker</li>
<li>Social Media Calendar</li>
<li>Image Resizer</li>
<li>Free Photo Editor</li>
<li> Online Collage Maker</li>
<li>Facebook Video Covers</li>
<li>Video Production Cost Estimator</li>
<li>Facebook Ad Budget Calculator</li>
<li>Facebook Ads Troubleshooter</li>
<li>YouTube Money Calculator</li>
<li>MP4 Editor</li>
<li>Add Music to Video</li>
<li>Video to GIF Maker</li>
<li>Add Text to GIF</li>
<li>Video Editor for YouTube</li>
<li>Meme Maker</li>
<li>Birthday Video Maker</li>
<li>Online Video Cutter</li>
<li>Lyric Video Maker</li>
<li>Add Audio to Video</li>
<li>Add Text to Video</li>
<li>GIF Editor</li>
<li> Merger</li>
<li>Video Compressor</li>
<li>Video Resizer</li>
<li>Youtube Thumbnail Maker</li>
<li>Video Trimmer</li>
<li>Add Subtitles to Video</li>
<li>Montage Maker</li>
<li>Video Cropper</li>
<li>Slideshow Maker</li>
<li>TikTok Video Editor</li>
       
        </ul>
    </div>
    </div>
    </ul>
    </nav>
    </div>
    <div class="ninth-con2">

      <div class="nin-box5">
        <div class="nin-logo">
          <img width="120px" src={IMAGES.LOGO} alt=""/>
        </div>
        <p>Promo.com is the #1 video creation platform for businesses and agencies. We help our users create loads of visual content and unlimited videos to promote anything they want effectively. </p>
       <div class="nin-img">
        <img width="100px" class="ninth-img1" src={IMAGES.NINETHIMGONE} alt=""/>
        <img width="40px" src={IMAGES.NINETHIMGTWO} alt=''/>
       </div>
      </div>
      <div class="nin-box6">
        <div class="nin-txt-tit">our apps</div>
          <img width="140px"  class="ninth-img2" src={IMAGES.NINETHIMGTHREE} alt=""/>
          <img width="140px"  class="ninth-img3" src={IMAGES.NINETHIMGFOUR} alt=""/>
          <img width="140px" class="ninth-img4" src={IMAGES.NINETHIMGFIVE} alt=""/>
      </div>
      <div class="nin-box7">
        <div class="nin-txt-tit2">follow us</div>
        <div class="ninth-font">
          <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
        <img width="30px"  src={IMAGES.NINETHIMGSEVEN} alt="facebook"/></a>
        <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
        <img width="40px"  src={IMAGES.NINETHIMGEIGHT} alt="instagram"/></a>
        <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'>
        <img width="36px"  src={IMAGES.NINETHIMGNINE} alt="youtube"/></a>
        <a href="https://twitter.com/login/" target="_blank" rel='noreferrer'>
        <img width="37px" height="40px"  src={IMAGES.NINETHIMGTEN} alt="twitter"/></a>
        <a href="https://in.linkedin.com/" target="_blank" rel='noreferrer'>
        <img width="37px"  src={IMAGES.NINETHIMGELEVEN} alt="linkedin"/></a>
        <a href="https://in.pinterest.com/" target="_blank" rel='noreferrer'>
        <img width="35px"  src={IMAGES.NINETHIMGTWELVE} alt="pinterest"/></a>
        </div>
      </div>
    </div>
  </div>
</div>
    {isLoginOpen && (
      <div className="login-modal" role="presentation" onClick={() => setIsLoginOpen(false)}>
        <div className="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title" onClick={(event) => event.stopPropagation()}>
          <button className="login-close" type="button" aria-label="Close login" onClick={() => setIsLoginOpen(false)}>
            &times;
          </button>
          <p className="login-kicker">{authMode === 'login' ? 'Welcome back' : 'Get started'}</p>
          <h2 id="login-title">{authMode === 'login' ? 'Log in to Promo' : 'Create your Promo account'}</h2>
          <p className="login-description">Create and manage your videos in one place.</p>
          <form className="login-form" onSubmit={handleAuthSubmit}>
            {authMode === 'signup' && <>
              <label htmlFor="login-name">Full name</label>
              <input id="login-name" name="name" type="text" autoComplete="name" required />
            </>}
            <label htmlFor="login-email">Email address</label>
            <input id="login-email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" autoComplete="current-password" required />
            {authError && <p className="login-error" role="alert">{authError}</p>}
            <button className="login-submit" type="submit">{authMode === 'login' ? 'Log in' : 'Create account'}</button>
          </form>
          <p className="login-signup">
            {authMode === 'login' ? 'New to Promo?' : 'Already have an account?'}{' '}
            <button type="button" onClick={() => openAuth(authMode === 'login' ? 'signup' : 'login')}>
              {authMode === 'login' ? 'Create an account' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    )}
    {isProfileOpen && currentUser && (
      <div className="login-modal" role="presentation" onClick={() => setIsProfileOpen(false)}>
        <div className="login-dialog profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-title" onClick={(event) => event.stopPropagation()}>
          <button className="login-close" type="button" aria-label="Close profile" onClick={() => setIsProfileOpen(false)}>&times;</button>
          <p className="login-kicker">Your account</p>
          <h2 id="profile-title">Profile</h2>
          <div className="profile-details">
            <div className="profile-avatar">{currentUser.name.charAt(0).toUpperCase()}</div>
            <strong>{currentUser.name}</strong>
            <span>{currentUser.email}</span>
          </div>
          <button className="profile-logout" type="button" onClick={logOut}>Log out</button>
        </div>
      </div>
    )}
    </div>
  );
}

export default Home;
