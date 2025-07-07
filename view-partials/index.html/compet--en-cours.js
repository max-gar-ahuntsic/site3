function get_compet_en_cours_html(t){return`
    <section id="compet-en-cours" class="tabs section light-background mt-1 mb-4 pt-1" style="background-color: white; display:none">
      <span id="compet-en-cours-" style="position:absolute;display:block;margin-top:-250px;"></span>
      <div class="container p-lg-4">
        <div class="row mx-sm-2 px-sm-2 mx-md-4 px-md-4">
          <p id="txt-en-cours-06" class=""  data-aos="fade-up" data-aos-duration="1500"></p>
        </div>
        <div class="row mx-sm-2 px-sm-2  mx-md-4 px-md-4">  
          ${get_main_compet_html(t)}

        </div>
      </div>
    </section>
  `}function get_main_compet_html(t){let s="",n=10;for(;n<100;){if(null==t["txt-en-cours-"+String(n)])return s;for(k=1,s+=`
        <div style="" class="col-lg-6  my-1 py-1 align-self-center bloc"> 
          <h6> ${t["txt-en-cours-"+String(n)]}</h6>
            <ul>`;null!=t["txt-en-cours-"+String(n+k)];)s+=`
              <li   class=""  data-aos="fade-up" data-aos-duration="1500">
                ${t["txt-en-cours-"+String(n+k)]}
              </li> `,k++;s+=`
            </ul>
        </div>  `,n+=10}return s}