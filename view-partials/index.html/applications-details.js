function get_all_apps_html(t){let a="";var s=[!0,!0,!1,!1];i=0;for(app_name of["rencontre","incidents-route","hdassist","testsassist"]){var e=s[i],e=get_this_app_html(i,app_name,t,e);a+=e,i++}return a}function get_this_app_html(t,a,s,i){return`
        <div id='app-slide-${t+2}' class="carousel-item app-slide " >
            <div class="container m-0 app-sub-container app-sub-container-folded">
                <hr class="app-line" style="border-width: 3px;">
                <div style="position:relative;" class=" d-flex row m-2 p-3 align-items-start app-top-row" >
                    <span id='txt-apps-${a}-02' class="section-subtitle"  data-aos="fade-up" data-aos-duration="1500"></span>
                    <h2 id="txt-apps-${a}-04" class="mb-3"  data-aos="fade-up" data-aos-duration="1500"></h2>
                    <div class="col-md-6 m-0 p-0 app-desc overflow-auto" >
                        <h4 id="txt-apps-${a}-10" class="mb-2" ></h4>
                        <p id="txt-apps-${a}-12" class="mb-4" ></p>

                        <!---- insert video tag conditionnally ------------------------->
                        ${i?`
                            <div id="app-video-${a}" class="app_video">
                                <video style=" " width="375" height="280" autoplay loop muted controls controlsList="nodownload" oncontextmenu="return false;">
                                    <source src="assets/img-new/partial-applications/app-${a}/app-${a}-video.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        `:""}              

                         <!---- insert text details ------------------------->
                        ${get_main_text_html(a,s)}

                        <!-- underneath is to allow to scroll further down -->
                        <div style="height:100px;"></div>
                    </div>
                </div>
            </div>
        </div>
        `}function get_main_text_html(t,a){let s="",i=2;for(var e;i<30;){if(null==a[(e="txt-apps-"+t+"-"+String(i))+"0"])return s;s=(s+=`<h4> ${a[e+"0"]}</h4>`)+`<p> ${a[e+"2"]}</p>`,i++}return s}