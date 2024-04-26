<script>
  // import RoundedLinkButton from 'RoundedLinkButton.svelte';
  import RoundedLinkButton from './RoundedButton.svelte'
  // Props for component data (you can make these dynamic as needed)
  export let image = '/assets/images/fxpo_logo.png'; // Replace with your image path
  export let title = 'Plot W0114';
  export let distanceHQ = '144m';
  export let publicSpace = '350m';
  export let detailsLink = '/plots';
  export let openSeaLink = '/plots';
  export let minMode = false;
  let arrow = "=>";
</script>

 <!-- <a href="{detailsLink}">
<div class="card mx-auto my-3 shadow-lg bg-white rounded-5" style="border-radius: 3%;"> -->
  <!-- <div class="card-title px-5 py-5">
    <img src={image} class="card-img-top img-fluid" alt={title} style="height: 220px;"/>

  </div> -->
  <!-- <div class="card-title px-5">
    <svg viewBox="0 0 272 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-f6ffbfd0-2 biQvxQ"><g opacity="0.15" filter="url(#shadow_svg__a)"><path d="M244.698 78.966a8 8 0 0 1 0 11.068l-49.336 51.5a8 8 0 0 1-5.777 2.466H82.415a8 8 0 0 1-5.777-2.466l-49.336-51.5a8 8 0 0 1 0-11.068l49.336-51.5A8 8 0 0 1 82.415 25h107.17a8 8 0 0 1 5.777 2.466l49.336 51.5Z" fill="#725850"></path></g><g opacity="0.2" filter="url(#shadow_svg__b)"><path d="M233.714 66.646c3.397 3.163 3.397 8.544 0 11.708l-42.41 39.5a8 8 0 0 1-5.452 2.146H90.148a8 8 0 0 1-5.452-2.146l-42.41-39.5c-3.397-3.163-3.397-8.544 0-11.708l42.41-39.5A8 8 0 0 1 90.15 25h95.703a8 8 0 0 1 5.452 2.146l42.41 39.5Z" fill="#725850"></path></g><defs><filter id="shadow_svg__a" x="0.079" y="0" width="271.843" height="169" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_982_3376"></feGaussianBlur></filter><filter id="shadow_svg__b" x="14.738" y="0" width="246.524" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_982_3376"></feGaussianBlur></filter></defs></svg>
    <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-f6ffbfd0-1 gRhYnx"><path d="M220 57.7778L165 115.556H55L0 57.7778L55 0L165 2.91625e-06L220 57.7778Z" fill="#8A2406"></path><path d="M220 57.7778L165 115.556H55L0 57.7778L55 0L165 2.91625e-06L220 57.7778Z" fill="url(#mask-10487)"></path><path d="M220 62.2223L165 120V115.556L220 57.7778V62.2223Z" fill="#8A2406"></path><path d="M55 115.556V120L0 62.2223V57.7778L55 115.556Z" fill="#FF6336"></path><rect x="55.0001" y="115.556" width="110" height="4.44444" fill="#C04B29"></rect><defs><pattern id="mask-10487" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image-10487" transform="translate(0 -0.02) scale(0.0028 0.00327)"></use></pattern><image id="image-10487" width="360" height="318" xlink:href="https://img.plots.everdome.io/map/thumbnail/10487.jpg"></image></defs></svg>
  </div> -->
  <!-- <div class="card-body">
    
    <div style="border-bottom: 1px dashed silver; padding-bottom: 15px; margin-bottom: 15px;">
      <h5 class="card-title">{title}</h5>
      <div>See details {arrow} </div>
    </div>
    <p class="card-texter">
      <small>Width: {distanceHQ}</small><br>
      <small>Length: {publicSpace}</small>
    </p> -->
    <!-- <a href="#" class="btn btn-primary">See on OpenSea</a> -->
    <!-- <RoundedLinkButton link="https://www.example.com"> See on OpenSea </RoundedLinkButton>
  </div>
</div> -->

<!-- </a> --> 

<a data-cy="LandPanel" href="{detailsLink}" class="sc-9aab4af8-0 iIwHuu">
  <div class="sc-f6ffbfd0-0 fTfPDl">
    <svg viewBox="0 0 272 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-f6ffbfd0-2 biQvxQ"><g opacity="0.15" filter="url(#shadow_svg__a)"><path d="M244.698 78.966a8 8 0 0 1 0 11.068l-49.336 51.5a8 8 0 0 1-5.777 2.466H82.415a8 8 0 0 1-5.777-2.466l-49.336-51.5a8 8 0 0 1 0-11.068l49.336-51.5A8 8 0 0 1 82.415 25h107.17a8 8 0 0 1 5.777 2.466l49.336 51.5Z" fill="#725850"></path></g><g opacity="0.2" filter="url(#shadow_svg__b)"><path d="M233.714 66.646c3.397 3.163 3.397 8.544 0 11.708l-42.41 39.5a8 8 0 0 1-5.452 2.146H90.148a8 8 0 0 1-5.452-2.146l-42.41-39.5c-3.397-3.163-3.397-8.544 0-11.708l42.41-39.5A8 8 0 0 1 90.15 25h95.703a8 8 0 0 1 5.452 2.146l42.41 39.5Z" fill="#725850"></path></g><defs><filter id="shadow_svg__a" x="0.079" y="0" width="271.843" height="169" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_982_3376"></feGaussianBlur></filter><filter id="shadow_svg__b" x="14.738" y="0" width="246.524" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_982_3376"></feGaussianBlur></filter></defs></svg>
    <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-f6ffbfd0-1 gRhYnx"><path d="M220 57.7778L165 115.556H55L0 57.7778L55 0L165 2.91625e-06L220 57.7778Z" fill="#8A2406"></path><path d="M220 57.7778L165 115.556H55L0 57.7778L55 0L165 2.91625e-06L220 57.7778Z" fill="url(#mask-10487)"></path><path d="M220 62.2223L165 120V115.556L220 57.7778V62.2223Z" fill="#8A2406"></path><path d="M55 115.556V120L0 62.2223V57.7778L55 115.556Z" fill="#FF6336"></path><rect x="55.0001" y="115.556" width="110" height="4.44444" fill="#C04B29"></rect><defs><pattern id="mask-10487" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image-10487" transform="translate(0 -0.02) scale(0.0028 0.00327)"></use></pattern><image id="image-10487" width="360" height="318" xlink:href="https://img.plots.everdome.io/map/thumbnail/10487.jpg"></image></defs></svg>
  </div>
  <h6 class="sc-d1bf728-5 sc-9aab4af8-1 gvrwDA cYRSxb">{title}</h6>
  <div class="sc-9aab4af8-3 cmTshw">
    <span class="sc-9aab4af8-4 fAyDgA details">
      <span class="sc-d1bf728-7 jYsKGg">See details</span>
      <svg width="18" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 8px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.811 11.646a.5.5 0 0 0 .707.708l5.334-5.334.353-.353-.353-.354L11.518.98a.5.5 0 1 0-.707.707l4.646 4.646H1.332a.5.5 0 0 0 0 1h13.793l-4.313 4.313Z" fill="#000"></path></svg>
    </span>
  </div>
  <div class="sc-6839acd2-0 hWSrJh">
    <div class="sc-e934fa42-0 hHMeyT">
      <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" fill="#000"><path fill-rule="evenodd" clip-rule="evenodd" d="m8.567 10.392 2.567-4.446L8.567 1.5H3.433L.866 5.946l2.567 4.446h5.134Zm3.216-4.07a.75.75 0 0 0 0-.75L9.216 1.124a.75.75 0 0 0-.65-.375H3.434a.75.75 0 0 0-.65.375L.216 5.571a.75.75 0 0 0 0 .75l2.567 4.446a.75.75 0 0 0 .65.375h5.134a.75.75 0 0 0 .65-.375l2.566-4.446Z"></path><path d="M3 7.475h.639V6.257h1.183v1.218h.639v-2.95h-.639V5.71H3.64V4.525h-.64v2.95ZM8.706 6.931a.286.286 0 0 1-.093-.017c.178-.248.276-.564.276-.914 0-.86-.6-1.5-1.477-1.5-.877 0-1.477.64-1.477 1.5s.6 1.5 1.477 1.5c.31 0 .592-.08.817-.223.103.126.209.198.464.198H9V6.93h-.294ZM6.586 6c0-.556.323-.965.826-.965.498 0 .822.409.822.965 0 .147-.022.287-.069.409l-.068-.085c-.102-.126-.187-.214-.438-.214h-.324v.535h.277c.094 0 .149.046.213.13l.042.05a.787.787 0 0 1-.455.14c-.503 0-.826-.409-.826-.965Z"></path></g></svg>
      <span class="sc-d1bf728-8 sc-d1bf728-9 sc-e934fa42-1 hwvEnz hbUixu hMGmJS">Dome HQ: 144m</span>
    </div>
    <div class="sc-e934fa42-0 dTZRnk">
      <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0c.118 0 .23.056.3.15l3.75 5a.375.375 0 0 1-.3.6H8.624l2.184 3.162a.375.375 0 0 1-.308.588H7.33v2.125a.375.375 0 0 1-.375.375h-1.91a.375.375 0 0 1-.375-.375V9.5H1.5a.375.375 0 0 1-.309-.588L3.376 5.75H2.25a.375.375 0 0 1-.3-.6l3.75-5A.375.375 0 0 1 6 0Zm0 1L3 5h1.09a.375.375 0 0 1 .31.588L2.214 8.75h2.83c.208 0 .375.168.375.375v2.125h1.16V9.125c0-.207.167-.375.375-.375h2.83L7.601 5.588A.375.375 0 0 1 7.909 5H9L6 1Z" fill="#000" opacity="0.5"></path></svg>
      <span class="sc-d1bf728-8 sc-d1bf728-9 sc-e934fa42-1 hwvEnz hbUixu hMGmJS">Public space: 350m</span>
    </div>
  </div>
  <div class="sc-ac36c495-0 gccabO">
    <a href="https://opensea.io/assets/ethereum/0xa0b9356bEe63D2488E6D1146e90c4A85Fa5FB9a1/7745017218470982" target="_blank" rel="noopener noreferrer" class="sc-333ff8a4-0 ktMxvD">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12Zm7.824-10.68v.768c0 .048-.024.072-.072.096-.24.096-1.08.48-1.416.96-.197.272-.384.57-.571.87-.656 1.046-1.32 2.106-2.477 2.106H9.024c-2.208 0-4.008-1.8-4.008-4.032v-.072c0-.048.048-.096.096-.096H8.64c.072 0 .12.072.12.12-.024.216.024.456.12.672a1.22 1.22 0 0 0 1.104.672h1.728V14.04h-1.704c-.096 0-.144-.096-.096-.168a.331.331 0 0 0 .072-.096c.168-.24.384-.576.624-.984.168-.264.312-.576.432-.864.024-.048.048-.096.072-.168.015-.06.04-.12.062-.175.013-.032.025-.062.034-.089l.072-.216c.048-.24.072-.504.072-.792 0-.096 0-.216-.024-.336 0-.06-.006-.12-.012-.18a1.813 1.813 0 0 1-.012-.18c0-.096-.024-.216-.048-.312A3.398 3.398 0 0 0 11.16 9l-.024-.048a15.25 15.25 0 0 1-.012-.048c-.02-.086-.044-.184-.084-.264a8.955 8.955 0 0 0-.336-.96l-.144-.36c-.072-.168-.144-.336-.216-.48a.479.479 0 0 0-.048-.096c-.018-.03-.036-.06-.048-.096-.012-.036-.03-.072-.048-.108-.018-.036-.036-.072-.048-.108l-.072-.144-.216-.384c-.024-.048.024-.12.072-.096l1.32.36.168.048.192.048.072.024v-.792c0-.384.312-.696.672-.696a.67.67 0 0 1 .48.192.67.67 0 0 1 .192.48v1.152l.144.048s.024 0 .024.024a.914.914 0 0 0 .144.12c.048.048.096.096.168.144.12.096.288.24.456.384.017.017.034.031.05.044.03.024.055.045.07.076.216.192.456.432.696.696.036.036.066.072.096.108.03.036.06.072.096.108.036.036.066.078.096.12.03.042.06.084.096.12l.12.156.12.156a.482.482 0 0 0 .035.055.446.446 0 0 1 .061.113c.048.072.09.144.132.216.042.072.084.144.132.216a.85.85 0 0 0 .048.108.85.85 0 0 1 .048.108c.096.192.168.384.192.6.024.048.024.096.024.12.024.048.024.12.024.192.023.205.002.389-.02.592l-.004.032c-.012.048-.024.09-.036.132-.012.042-.024.084-.036.132a3.202 3.202 0 0 0-.017.055 1.33 1.33 0 0 1-.079.209c-.072.168-.168.336-.264.504-.024.048-.072.12-.12.192l-.042.06a.474.474 0 0 0-.078.132 1.316 1.316 0 0 1-.084.108c-.03.036-.06.072-.084.108a1.313 1.313 0 0 1-.168.216 2.541 2.541 0 0 1-.12.144c-.042.048-.084.096-.12.144-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.072.072-.144.144-.216.192l-.144.12c-.024.024-.048.024-.072.024h-1.056v1.344h1.32a1.193 1.193 0 0 0 .89-.379c.143-.13.41-.375.718-.701.024-.024.024-.024.048-.024l3.648-1.056c.144-.072.192-.024.192.048Zm-13.896-.912.048-.072 3.12-4.872c.048-.072.144-.072.192.024.528 1.176.96 2.616.768 3.528-.096.384-.336.888-.624 1.344a.523.523 0 0 1-.12.192c-.024.024-.048.048-.096.048H6c-.072-.024-.12-.12-.072-.192Z" fill="#2081E2"></path></svg>
      See on OpenSea
    </a>
    <!-- <div style="border-bottom: 1px dashed silver; padding-bottom: 15px; margin-bottom: 15px;"></div> -->
    <!-- <RoundedLinkButton link="https://www.example.com"> See on OpenSea </RoundedLinkButton> -->
  </div>
</a>
<style>
  a {
    text-decoration: none;
    color: black;
  }
  .card {
      width: 100%;
    }

    .iIwHuu {
      position: relative;
      width: 100%;
      max-width: 354px;
      height: 416px;
      background-color: rgb(255, 255, 255);
      border-radius: 24px;
      padding: 71px 24px 32px;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: end;
      justify-content: flex-end;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px;
      transition: box-shadow 600ms ease-in-out 0s;
      cursor: pointer;
  }
      .iIwHuu .sc-f6ffbfd0-0 {
          animation-timeline: auto;
          animation-range-start: normal;
          animation-range-end: normal;
          animation: auto ease 0s 1 normal none running none;
          transition: transform 600ms ease-in-out 0s;
      }

      .fTfPDl {
          width: 100%;
          height: 160px;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          animation-name: bQeggu;
          animation-duration: 4s;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
          position: relative;
      }
        .biQvxQ {
            top: 33px;
            position: absolute;
            width: 220px;
        }

        .gRhYnx {
            position: relative;
        }

      /***/
      .cYRSxb {
          margin: 16px 0px 0px;
          padding: 8px 0px;
      }

      .gvrwDA {
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.04em;
      }


      .cmTshw {
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          --dash-color: hsl(0,0%,70%);
          /* background-image: ;
          background-position-x: ;
          background-attachment: ;
          background-origin: ;
          background-clip: ;
          background-color: ; */
          background-repeat: repeat-x;
          background-size: 5px 1px;
          background-position-y: 100%;
          margin-bottom: 17px;
          padding: 2px 0px 10px;
      }

          .iIwHuu .details {
              opacity: 0;
              transition: all 0.4s ease-in-out 0s;
          }

          .fAyDgA {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              align-items: center;
          }

              .jYsKGg {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  letter-spacing: 0.04em;
              }

      .hWSrJh {
          width: 100%;
          display: flex;
      }

          .hHMeyT {
              display: flex;
              flex-direction: row;
              -webkit-box-align: center;
              align-items: center;
              padding: 2px 8px;
              margin-left: 0px;
              height: 24px;
              border: 0.6px solid rgba(0, 0, 0, 0.3);
              box-sizing: border-box;
              border-radius: 8px;
          }

              .hMGmJS {
                  margin-left: 4px;
              }

              
              .hbUixu {
                  opacity: 0.5;
              }
              
              .hwvEnz {
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 18px;
                  letter-spacing: 0.06em;
              }


          .dTZRnk {
              display: flex;
              flex-direction: row;
              -webkit-box-align: center;
              align-items: center;
              padding: 2px 8px;
              margin-left: 12px;
              height: 24px;
              border: 0.6px solid rgba(0, 0, 0, 0.3);
              box-sizing: border-box;
              border-radius: 8px;
          }

              /**uses previous sibling subclasses*/


      /***/
      .gccabO {
          margin-top: 16px;
      }

          .ktMxvD {
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              color: rgb(32, 129, 226);
              background: rgba(32, 129, 226, 0.1) !important;
              padding: 12px 24px;
              width: 100%;
              font-weight: 450;
              font-size: 14px;
              border-radius: 36px;
              transition: all 0.1s ease-in-out 0s;
          }

              .ktMxvD svg {
                  margin-right: 8px;
              }

              .ktMxvD:hover {
                  background: rgba(32, 129, 226, 0.3) !important;
              }

    .card-title svg{
      width: 100% !important;
    }
  @media (max-width: 576px) {
    .card {
      width: 90%;
    }
  }

  .iIwHuu:hover .sc-f6ffbfd0-0 {
      transition-duration: 1000ms;
      transform: translateY(-5px);
  }

.iIwHuu .sc-f6ffbfd0-0 {
    animation-timeline: auto;
    animation-range-start: normal;
    animation-range-end: normal;
    animation: auto ease 0s 1 normal none running none;
    transition: transform 600ms ease-in-out 0s;
}

.fTfPDl {
    width: 100%;
    height: 160px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    animation-name: bQeggu;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    position: relative;
}

.biQvxQ {
    top: 1%;
    left: 0;
    position: absolute;
    width: 100%;
}

</style>
