(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(24),r=a.n(l),c=a(62),s=a(4),o=a(33),m=a(63),d=a(26),u={fadeInDownBig:{animation:"x 3s",animationName:m.a.keyframes(o.fadeInDownBig,"fadeInDownBig")}},h=function(e){var t=e.isDarkMode,a=e.dispatch;return n.a.createElement(d.a,null,n.a.createElement("div",{id:"toggleLight",className:"test",style:u.fadeInDownBig},n.a.createElement("i",{className:"fas fa-adjust fa-2x p-2 pr-4 ".concat(t?"text-light":"text-dark"),onClick:function(){a(t?{type:"TURN_ON_LIGHTS",payload:!1}:{type:"TURN_OFF_LIGHTS",payload:!0})}})))},g=function(e){var t=e.isDarkMode;return n.a.createElement("nav",{id:"nav",className:"navbar ".concat(t?"bg-dark":"bg-light")},n.a.createElement("div",{id:"navTitle",className:"font-weight-lighter ".concat(t?"text-light":"text-dark")},"MT"),n.a.createElement("div",{className:"search text-light nav-search-links"},n.a.createElement("a",{href:"https://github.com/michaeltorres1"},n.a.createElement("i",{className:"fab fa-github mr-5 ".concat(t?"text-light":"text-dark"," nav-link")})),n.a.createElement("a",{href:"https://angel.co/u/michael-torres-21"},n.a.createElement("i",{className:"fab fa-angellist mr-5 nav-link ".concat(t?"text-light":"text-dark")})),n.a.createElement("a",{href:"https://www.linkedin.com/in/michael-torres-8649aa178/"},n.a.createElement("i",{className:"fab fa-linkedin-in nav-link ".concat(t?"text-light":"text-dark")}))))},f=function(e){var t=e.isDarkMode,a=e.dispatch;return n.a.createElement("div",{id:"menuWidget",className:"flex flex-column mr-3 p-2 ".concat(t?"menu-widget-dark":"menu-widget-light")},n.a.createElement("div",{className:"menu-header"},n.a.createElement("div",{className:"font-weight-bold d-flex justify-content-center ".concat(t?"text-light":"text-dark")},"MT"),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," ")},"MICHAEL TORRES")),n.a.createElement("hr",{className:"bg-dark"}),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fas fa-code-branch fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_TIMELINE",payload:!0})}(e)}},"Timeline")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fas fa-graduation-cap fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_EDUCATION",payload:!0})}(e)}},"Education")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fas fa-book-open fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_PROJECTS",payload:!0})}(e)}},"Projects")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fab fa-js-square fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_JAVASCRIPT",payload:!0})}(e)}},"JavaScript")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fab fa-python fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_PYTHON",payload:!0})}(e)}},"Python 3")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"far fa-gem fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_RUBY",payload:!0})}(e)}},"Ruby")),n.a.createElement("div",{className:"mb-4 menu-link nav-link"},n.a.createElement("i",{className:"fab fa-java fa-2x ".concat(t?"text-light":"text-dark")}),n.a.createElement("div",{className:"font-weight-light ml-3 my-menu-link ".concat(t?"text-light":"text-dark"," "),onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_JAVA",payload:!0})}(e)}},"Java")))},p=a(22),v=a.n(p),E=function(){return n.a.createElement(i.Fragment,null,n.a.createElement("button",{id:"resumeButton",type:"button",className:"see-resume-btn btn bg-dark text-light card-widget","data-toggle":"modal","data-target":"#exampleModalCenter"},"See resume"),n.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("embed",{src:v.a,type:"application/pdf",className:"my-resume"}))),n.a.createElement("div",{class:"modal-footer d-flex justify-content-between"},n.a.createElement("a",{href:v.a,className:"d-load-resume bg-dark text-light card-widget",download:!0},"Download resume"),n.a.createElement("a",{href:v.a,className:"view-resume bg-dark text-light card-widget"},"View resume"))))))},b=function(){return n.a.createElement(i.Fragment,null,n.a.createElement("button",{id:"skillsButton",type:"button",className:"see-resume-btn btn bg-dark text-light card-widget","data-toggle":"modal","data-target":"#skillsModal"},"See Skills"),n.a.createElement("div",{className:"modal fade",id:"skillsModal",tabindex:"-1",role:"dialog","aria-labelledby":"skillsCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content bg-dark"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h3",{className:"text-light"},"My skills"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true",className:"text-light"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"d-flex flex-row justify-content-around text-light font-weight-bold"},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",null,"JavaScript"),n.a.createElement("div",null,"Java"),n.a.createElement("div",null,"React"),n.a.createElement("div",null,"Flask"),n.a.createElement("div",null,"PostgreSQL")),n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",null,"Python"),n.a.createElement("div",null,"Ruby"),n.a.createElement("div",null,"Redux"),n.a.createElement("div",null,"SQLAlchemy"),n.a.createElement("div",null,"MongoDB"))))))))},y=function(e){e.isDarkMode;return n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"d-flex flex-row intro-card"},n.a.createElement("div",{className:"w-75 ml-4 bg-dark card-widget intro-para rounded mr-4 mb-5 text-light"},n.a.createElement("h2",null,"Hi, My Name Is Michael Torres and I am a Software Engineer!"),n.a.createElement("p",{className:"font-weight-lighter"},"A highly motivated and innovative recent graduate with a BS in Computer Science and a Bootcamp graduate from App Academy. Demonstrated knowledge in C++, Ruby, Ruby on Rails, JavaScript, React / Redux, Express, PostgreSQL, MongoDB. Areas of interest include software applications and web development. Actively looking for opportunities where I can contribute and utilize my skills to further professional development. I always had a passion for coming up with creative solutions for solving problems. This passion has driven me to seek a career in computer science."," ")),n.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQF7BVuFjyhnFg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=g1ByR5fbVvt9zV_RKZ9BQ5cyZwn0x6_pXEmWAIyy3ac",alt:"me",className:"mepic rounded mb-5"})),n.a.createElement("div",{className:"d-flex flex-row justify-content-between resume-and-skills mt-5 ml-4 mr-4"},n.a.createElement(E,null),n.a.createElement(b,null)))},k=a(6),w=function(e){var t=e.isDarkMode,a=t?"#fff":"#000",i=t?"#1d1e2d":"#fff";return n.a.createElement(k.VerticalTimeline,null,n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2020 - present",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Freelance Work"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"From Home"),n.a.createElement("p",{className:"font-weight-lighter"},"Create website for client to display images. User has administrative privileges to upload and manage their own data. Technologies used are MongoDB, ExpressJS, React, and NodeJS. AWS (Amazon Web Services) is used to save content that client uploads")),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2019 - 2019",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"HTO SHOW"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"San Francisco, CA"),n.a.createElement("div",{className:"d-flex flex-column justify-content-center"},n.a.createElement("div",{className:"justify-content-center"},n.a.createElement("img",{className:"mt-2",src:"https://i.ibb.co/GkS89Lt/Screen-Shot-2020-04-26-at-3-54-20-PM.png",alt:"..."})),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center font-weight-lighter"},"An HBO-GO clone app that allows for user registration for having a history of account and allowing users to save favorites. This Full-Stack project was built on using the following technologies: Ruby on Rails, PostgreSQL, React / Redux, HTML5 and CSS3. Movies and images are stored using AWS")))),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2019 - 2019",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"KEYBOARD FRUIT NINJA"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"San Francisco, CA"),n.a.createElement("div",{className:"d-flex flex-column justify-content-center"},n.a.createElement("div",{className:"justify-content-center"},n.a.createElement("img",{className:"mt-2",src:"https://i.ibb.co/6HGL8zb/Screen-Shot-2020-04-26-at-3-57-00-PM.png",alt:"..."})),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center font-weight-lighter"},"An app inspired by Fruit Ninja. Instead of swiping - use the keyboard to slice the fruits. This app was built using JavaScript and Canvas to render the board")))),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2019 - 2019",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Wikipedia Reliability Rater"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"San Francisco, CA"),n.a.createElement("div",{className:"d-flex flex-column justify-content-center"},n.a.createElement("div",{className:"justify-content-center"},n.a.createElement("img",{className:"mt-2",src:"https://i.ibb.co/syrgmcY/Screen-Shot-2020-04-26-at-4-00-45-PM.png",alt:"..."})),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center font-weight-lighter"},"WiRR is an application built with the idea to calculate the reliability of an article. Any article found on wikipedia could be searched through the search bar and that article along with similar articles will come back as results along with the reliabilty of that article.")))),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2019 - 2019",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"App Academy"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"San Francisco, CA"),n.a.createElement("p",{className:"font-weight-lighter"},"A 3 month intensive Full-Stack web development coding bootcamp with less than 3% acceptance rate. Focusing on Ruby on Rails, JavaScript, React, PostgreSQL and MongoDB")),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2016 - 2018",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"LearnSQL"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"Danbury, CT"),n.a.createElement("p",{className:"font-weight-lighter"},"LearnSQL is a web-based database application which provides a user-friendly environment for institutions to allow their students to experiment with relational data. This platform relies on ClassDB which is produced through the efforts of (DASSL, read dazzle) at Western Connecticut State University.")),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2016 - 2018",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Western Connecticut State University"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"Danbury, CT"),n.a.createElement("p",{className:"font-weight-lighter"},"4 year university where I received my Bachelors degree in Computer Science. Focusing on PostgreSQL, C++, and Java")),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2014 - 2016",iconStyle:{background:"#06304e",color:a}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Stony Brook University"),n.a.createElement("div",{className:"vertical-timeline-element-subtitle font-weight-light"},"Stony Brook, NY"),n.a.createElement("p",{className:"font-weight-lighter"},"Beginning of my studies for pre-med course work. Quickly realized my passion is in Computer Science and started my career learning Python and Java")),n.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:i,color:a},contentArrowStyle:{borderRight:"7px solid #41f0ca"},date:"2600 BC",iconStyle:{background:"#41f0ca",color:a}},n.a.createElement("span",{role:"img","aria-label":"thinking emoji",className:"vertical-timeline-element-emoji"},"\ud83e\udd14")))},N=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("img",{src:"https://www.stonybrook.edu/far-beyond/img/branding/logo/sbu/primary/300/stony-brook-university-logo-horizontal-300.png",alt:"stonybrooklogo",className:"education-img mb-2"})),n.a.createElement("div",{className:"d-flex text-center mb-5 ".concat(t?"text-light":"text-dark")},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel atque fugit ratione aliquam earum dolores, eveniet voluptatem doloribus illum quis praesentium fugiat mollitia voluptatibus dolorem perferendis enim doloremque quibusdam similique dolor eligendi pariatur illo rerum! Hic voluptates sapiente, facilis illum animi, porro rem provident possimus eveniet velit quas vel."),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("img",{src:"https://www.wcsu.edu/wp-content/themes/westconn/images/shield-logo.png",alt:"wcsulogo",className:"education-img mb-2"})),n.a.createElement("div",{className:"d-flex text-center mb-5 ".concat(t?"text-light":"text-dark")},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi ducimus similique blanditiis quis aliquid quod nam exercitationem tempora sequi temporibus autem consectetur, eos rem facere voluptas cum magnam unde. Sit deleniti dolorum doloribus, laboriosam delectus illum ea suscipit quaerat consectetur modi eos iste explicabo repellendus dolor id, minima quibusdam!"),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("img",{src:"https://i.ibb.co/87KhtbH/Screen-Shot-2020-04-27-at-7-30-32-PM.png",alt:"appacademylogo",className:"education-img mb-2"})),n.a.createElement("div",{className:"d-flex text-center mb-5 ".concat(t?"text-light":"text-dark")},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aperiam molestiae? Aliquid, excepturi! Vero natus perferendis doloremque odio aut repellendus sed, repellat magni molestias ut, repudiandae illo! Et natus adipisci nemo similique veniam facere nostrum nisi deserunt molestiae, nihil neque cum nulla dolorem omnis. Ea corrupti possimus recusandae veritatis quis!"))},x=function(e){var t,a=e.dispatch,i=e.isDarkMode,l=e.isHtoShow,r=e.isKeyboardFruitNinja,c=e.isWirr;r?t=n.a.createElement("iframe",{src:"https://michaeltorres1.github.io/keyboard-fruit-ninja/dist/landing.html",frameborder:"0",className:"embed-page",title:"3"}):c?t=n.a.createElement("iframe",{src:"http://www.wikipediarr.com/",frameborder:"0",className:"embed-page",title:"2"}):l&&(t=n.a.createElement("span",{role:"img","aria-label":"thinking emoji",className:"vertical-timeline-element-emoji"},"\ud83e\udd14"));return n.a.createElement("div",{className:"d-flex flex-column ml-1 ".concat(i?"text-light":"text-dark")},n.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-2"},n.a.createElement("div",{className:"d-flex w-25"},n.a.createElement("img",{src:"https://i.ibb.co/6HGL8zb/Screen-Shot-2020-04-26-at-3-57-00-PM.png",alt:"keyboardfruitninja",className:"project-img",onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_KEYBOARD_FRUIT_NINJA",payload:!0})}(e)}})),n.a.createElement("div",{className:"d-flex w-25"},n.a.createElement("img",{src:"https://i.ibb.co/syrgmcY/Screen-Shot-2020-04-26-at-4-00-45-PM.png",alt:"wirr",className:"project-img",onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_WIRR",payload:!0})}(e)}})),n.a.createElement("div",{className:"d-flex w-25"},n.a.createElement("img",{src:"https://i.ibb.co/GkS89Lt/Screen-Shot-2020-04-26-at-3-54-20-PM.png",alt:"htoshow",className:"project-img",onClick:function(e){return function(e){e.preventDefault(e),a({type:"VIEW_HTOSHOW",payload:!0})}(e)}}))),n.a.createElement("div",{className:""},t))},S=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"text-center mt-5 mr-5 ml-5 ".concat(t?"text-light":"text-dark")},"First time I learned JavaScript I learned it on my own to build a Full Stack Web Application, LearnSQL. I learned how to connect the client and server to communicate with each other and learned a lot of different technologies. I then went ahead to build more apps like HTO-SHOW, WIRR, and Keyboard Fruit Ninja. All using JavaScript, React, AngularJS, ExpressJS, NodeJS.")},I=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"text-center mt-5 mr-5 ml-5 ".concat(t?"text-light":"text-dark")},"My first encounter with Python was in Stony Brook University. It was exciting to start using if statements and while loops and for loops. I didn't know about classes and separate functions during this time. But just doing simple stuff at the time was really cool, and my passion for programming grew! I then went ahead years later to learn and build a Full Stack application using Python React, Flask, SQLAlchemy, and Postgres in just two days.")},R=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"text-center mt-5 mr-5 ml-5 ".concat(t?"text-light":"text-dark")},"I first encountered this language when studying to get into App Academy. It is great, fun and easy to use. A lot like python but with more ways of writing things. I like Ruby a lot. I built a Full Stack web application, HTO-SHOW using Ruby on Rails, React, and PostgreSQL.")},j=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"text-center mt-5 mr-5 ml-5 ".concat(t?"text-light":"text-dark")},"Learning Java was super fun and confusing at first. This is when I first saw classes - I mean everything in Java is a class so it's kind of hard not to encounter this is you're learning Java. Java was super cool and I yet still hadn't encountered creating separate functions to call in other ones. When I learned Java for the first time is when I began to encounter these new things. After Java I went to study C++ for 4 years which was more of a challenge but great.")},D=function(e){var t=e.dispatch,a=e.isDarkMode,i=e.isTimeline,l=e.isEducation,r=e.isProjects,c=e.isJavaScript,s=e.isPython,o=e.isRuby,m=e.isJava,d=e.isHtoShow,u=e.isKeyboardFruitNinja,h=e.isWirr,g=n.a.createElement(y,{isDarkMode:a});return i?g=n.a.createElement(w,{isDarkMode:a}):l?g=n.a.createElement(N,{isDarkMode:a}):r?g=n.a.createElement(x,{dispatch:t,isDarkMode:a,isHtoShow:d,isKeyboardFruitNinja:u,isWirr:h}):c?g=n.a.createElement(S,{isDarkMode:a}):s?g=n.a.createElement(I,{isDarkMode:a}):o?g=n.a.createElement(R,{isDarkMode:a}):m&&(g=n.a.createElement(j,{isDarkMode:a})),n.a.createElement("div",{className:"mt-3"},g)},M=function(e){var t=e.dispatch,a=e.isDarkMode,i=e.isTimeline,l=e.isEducation,r=e.isProjects,c=e.isJavaScript,s=e.isPython,o=e.isRuby,m=e.isJava,d=e.isHtoShow,u=e.isKeyboardFruitNinja,h=e.isWirr;return n.a.createElement("div",{id:"mainWidget",className:"d-flex flex-column ".concat(a?"main-widget-dark":"main-widget-light")},n.a.createElement("div",{className:"font-weight-light ml-3 ".concat(a?"text-light":"text-dark")}),n.a.createElement(D,{dispatch:t,isDarkMode:a,isTimeline:i,isEducation:l,isProjects:r,isJavaScript:c,isPython:s,isRuby:o,isJava:m,isHtoShow:d,isKeyboardFruitNinja:u,isWirr:h}))},A=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"card-widget d-flex flex-column ".concat(t?"card-widget-dark":"card-widget-light")},n.a.createElement("div",{className:"font-weight-bold text-center ".concat(t?"text-light":"text-dark")},"My Journey"),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center ".concat(t?"text-light font-weight-lighter":"text-dark font-weight-light")},"I first got in software engineering in Stony Brook university. I was previously on a pre-med track and quickly realized that I loved programming more. Programming to me felt like more exciting and was more challenging. I went on to continue my studies in Western Connecticut State University where I received my Bachelors degree in Computer Science. After I wanted to make sure that I can have also the practical skills needed to hit the ground running so I joined App Academy and furthered my growth in knowledge in new technologies. I know build apps almost everyday and and do problems on leetcode and other platforms to keep my skills sharp!")))},T=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"card-widget d-flex flex-column mr-1 ml-1 ".concat(t?"card-widget-dark":"card-widget-light")},n.a.createElement("div",{className:"font-weight-bold text-center ".concat(t?"text-light":"text-dark")},"My Achievements"),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center ".concat(t?"text-light font-weight-lighter":"text-dark font-weight-light")},n.a.createElement("ul",null,n.a.createElement("li",null,"Came out as top student in all physics courses thought during the same semester!"),n.a.createElement("li",null,"Built LearnSQL - an application aimed to solve a problem to help students learn and communicated better with their professors. Based on an open source project called ClassDB."),n.a.createElement("li",null,"Accepted in App Academy - a Full Stack Web Development program with less than 3% acceptance rate"),n.a.createElement("li",null,"Built 3 new apps within a month time - (I can do this quicker now)."),n.a.createElement("li",null,"Learned a whole new tech stack and built a Full Stack application all in 2 days.")))))},J=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"card-widget d-flex flex-column ".concat(t?"card-widget-dark":"card-widget-light")},n.a.createElement("div",{className:"font-weight-bold text-center ".concat(t?"text-light":"text-dark")},"What I'm looking for..."),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center ".concat(t?"text-light font-weight-lighter":"text-dark font-weight-light")},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"mb-2"},"A place with good snacks and sofas...just kidding! I am looking for a place I can grow as a software engineer. Everytime I figure out how to do something new I always think about how I can make it better"),n.a.createElement("div",null,"I want to work with a team. I want to grow my skills learning from professional engineers by collaborating with them, and reading their code and learning new techniques."),n.a.createElement("div",null)))))},W=function(e){var t=e.isDarkMode;return n.a.createElement("div",{className:"d-flex row justify-content-between ml-3 mr-3 mt-3 mobile-view"},n.a.createElement(A,{isDarkMode:t}),n.a.createElement(T,{isDarkMode:t}),n.a.createElement(J,{isDarkMode:t}))},P=function(e){var t=e.isDarkMode;return n.a.createElement("nav",{id:"nav",className:"navbar flex-column justify-content-center ".concat(t?"bg-dark":"bg-light")},n.a.createElement("div",{id:"navTitle",className:"font-weight-lighter ".concat(t?"text-light":"text-dark")},"MICHAEL TORRES"),n.a.createElement("div",{className:"search mt-3 ".concat(t?"text-light":"text-dark")},n.a.createElement("a",{href:"https://github.com/michaeltorres1"},n.a.createElement("i",{className:"fab fa-github mr-5 nav-link"})),n.a.createElement("a",{href:"https://angel.co/u/michael-torres-21"},n.a.createElement("i",{className:"fab fa-angellist mr-5 nav-link"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/michael-torres-8649aa178/"},n.a.createElement("i",{className:"fab fa-linkedin-in nav-link"}))))},C={isDarkMode:!0,isTimeline:!1,isEducation:!1,isProjects:!1,isJavaScript:!1,isPython:!1,isRuby:!1,isJava:!1,isHtoShow:!1,isKeyboardFruitNinja:!0,isWirr:!1};function F(e,t){switch(t.type){case"TURN_OFF_LIGHTS":case"TURN_ON_LIGHTS":return Object(s.a)({},e,{isDarkMode:t.payload});case"VIEW_TIMELINE":return Object(s.a)({},e,{isEducation:!1,isProjects:!1,isJavaScript:!1,isPython:!1,isRuby:!1,isJava:!1,isTimeline:t.payload});case"VIEW_EDUCATION":return Object(s.a)({},e,{isTimeline:!1,isProjects:!1,isJavaScript:!1,isPython:!1,isRuby:!1,isJava:!1,isEducation:t.payload});case"VIEW_PROJECTS":return Object(s.a)({},e,{isTimeline:!1,isEducation:!1,isJavaScript:!1,isPython:!1,isRuby:!1,isJava:!1,isProjects:t.payload});case"VIEW_JAVASCRIPT":return Object(s.a)({},e,{isTimeline:!1,isEducation:!1,isProjects:!1,isPython:!1,isRuby:!1,isJava:!1,isJavaScript:t.payload});case"VIEW_PYTHON":return Object(s.a)({},e,{isTimeline:!1,isEducation:!1,isProjects:!1,isJavaScript:!1,isRuby:!1,isJava:!1,isPython:t.payload});case"VIEW_RUBY":return Object(s.a)({},e,{isTimeline:!1,isEducation:!1,isProjects:!1,isJavaScript:!1,isPython:!1,isJava:!1,isRuby:t.payload});case"VIEW_JAVA":return Object(s.a)({},e,{isTimeline:!1,isEducation:!1,isProjects:!1,isJavaScript:!1,isPython:!1,isRuby:!1,isJava:t.payload});case"VIEW_HTOSHOW":return Object(s.a)({},e,{isKeyboardFruitNinja:!1,isWirr:!1,isHtoShow:t.payload});case"VIEW_KEYBOARD_FRUIT_NINJA":return Object(s.a)({},e,{isHtoShow:!1,isWirr:!1,isKeyboardFruitNinja:t.payload});case"VIEW_WIRR":return Object(s.a)({},e,{isHtoShow:!1,isKeyboardFruitNinja:!1,isWirr:t.payload});default:return e}}var O=function(){var e=Object(i.useReducer)(F,C),t=Object(c.a)(e,2),a=t[0],l=t[1],r=a.isDarkMode,s=a.isTimeline,o=a.isEducation,m=a.isProjects,d=a.isJavaScript,u=a.isPython,p=a.isRuby,v=a.isJava,E=a.isHtoShow,b=a.isKeyboardFruitNinja,y=a.isWirr;return n.a.createElement("div",{className:r?"bg-dark-light":"bg-light"},n.a.createElement(h,{isDarkMode:r,dispatch:l}),n.a.createElement("hr",{className:"w-100 bg-primary mt-0 mb-0"}),n.a.createElement(g,{isDarkMode:r}),n.a.createElement("div",{className:"d-flex ml-3 mt-3 mobile-view"},n.a.createElement(f,{isDarkMode:r,dispatch:l}),n.a.createElement(M,{dispatch:l,isDarkMode:r,isTimeline:s,isEducation:o,isProjects:m,isJavaScript:d,isPython:u,isRuby:p,isJava:v,isHtoShow:E,isKeyboardFruitNinja:b,isWirr:y})),n.a.createElement(W,{isDarkMode:r}),n.a.createElement("hr",{className:"w-100 bg-primary mt-4 mb-0"}),n.a.createElement(P,{isDarkMode:r}))};a(166),a(167);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root"))},22:function(e,t,a){e.exports=a.p+"static/media/michael-torres-resume.db9cb916.pdf"},64:function(e,t,a){e.exports=a(168)}},[[64,1,2]]]);
//# sourceMappingURL=main.043e4428.chunk.js.map