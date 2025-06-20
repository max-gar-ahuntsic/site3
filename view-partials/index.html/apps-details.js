function get_all_apps_html(t){let s="";var a=[!0,!0,!1,!1];i=0;for(app_name of["rencontre","incidents-route","hdassist","testsassist"]){var e=a[i],e=get_this_app_html(i,app_name,t,e);s+=e,i++}return s}function get_this_app_html(t,s,a,i){return`
        <div id='app-slide-${t+2}' class="carousel-item app-slide " >
            <div class="container m-0 app-sub-container app-sub-container-folded ">
                <div style="position:relative;" class="row d-flex m-sm-2 app-top-row align-items-center justify-content-center" >
                    <div class="row p-1 mt-4 mt-md-0 p-2 app-header border-bottom  border-secondary ">
                        <hr class="app-line m-0 p-0" style="border-width: 3px;">
                        <div class="col" style="width:calc(100% - 70px)">
                            <span id='txt-apps-${s}-02' class="section-subtitle"  data-aos="fade-up" data-aos-duration="1500"></span>
                            <h2 id="txt-apps-${s}-04" class=""  data-aos="fade-up" data-aos-duration="1500"></h2>
                        </div>
                        <!--  col-1  ms-auto   -->
                        <div class="flex-column justify-content-start>" style="min-width:55px; max-width:55px; width:55px;">
                            <div class="app-close-button-2  mx-0 me-auto "  onClick="show_app_slide('toggle-carousel',0)">
                            </div>
                        </div>
                        <div class="col d-sm-none d-flex" style="max-width:10px; min-width:10px;">
                        </div>
                    </div>
                    <!--  overflow-auto  -->
                    <div class="row m-0 p-0 app-desc-parent-parent ">
                        <div class="col-12 ${i&&"col-lg-7"} m-0 p-sm-2" >
                            <div class="app-desc-parent m-sm-2 p-sm-1 ">
                                <div class="app-desc m-1 p-1 m-sm-2 p-sm-2 overflow-auto">
                                    <h4 id="txt-apps-${s}-10" class="mb-sm-2" ></h4>
                                    <p id="txt-apps-${s}-12" class="mb-sm-4" ></p>
                                    ${get_main_text_html(s,a)}
                                </div>
                            </div>
                        </div>
                        <!---- insert video tag conditionnally ------------------------->
                        ${i?`
                        <div id="app-video-${s}" class="video-container-2 col-12 col-lg-5 m-0 mb-1 pb-5 align-items-center justify-content-center"  data-aos-duration="1500">
                            <video style=" " width="375" height="280" loop muted controls controlsList="nodownload" oncontextmenu="return false;">
                                <source src="assets/img-new/partial-applications/app-${s}/app-${s}-video.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        `:""}  
                        <!---- fin insertion video ------------------------->
                    </div>
                </div>
            </div>
        </div>
        `}function get_main_text_html(t,s){let a="",i=2;for(var e;i<30;){if(null==s[(e="txt-apps-"+t+"-"+String(i))+"0"])return a;a=(a+=`<h4> ${s[e+"0"]}</h4>`)+`<p> ${s[e+"2"]}</p>`,i++}return a}