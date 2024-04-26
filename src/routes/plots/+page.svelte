<script>
    import NavBar from '$lib/navigation/Navbar.svelte';
    import Footer from '$lib/navigation/Footer.svelte';
    import PlotCard from '$lib/components/PlotCard.svelte';
    import HorizontalSpacer from '$lib/components/HorizontalSpacer.svelte';
    import PageLink from '$lib/components/PageLink.svelte';

</script>
  
<style>
    * {
        /* background-color: white !important; */
        background-color: #f0f0f0 !important;
        background-color: aqua;
    }

    .cards {
  margin: 0 auto;
  text-align: center;
	display: -webkit-flex;
	display: flex;
  border-radius: 10px;
	-webkit-justify-content: center; 
  justify-content: center;
  -webkit-flex-wrap: wrap; 
	flex-wrap: wrap;
	margin-top: 15px;
	padding: 1.5%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
  box-sizing: border-box; 
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.cards:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23);
}

    .conatiner {
        padding: 0 40px;
    }

    .plot {
        border-radius: 20px;
        width: 100%;
        height: 100vh;
        background-image: url(/assets/images/plot.png);
    }

    .sidebar {
		z-index: 1;
		position: absolute;
		left: 0;
		height: 93%;
		width: 400px;
	}

    .cut-card {
            position: absolute;
            top: 45%; 
            left: 700px !important;
            background-color: #ffffff; /* Card background color */
            border-radius: 20px; /* Rounded corners for the card */
            /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); Card shadow */
            /* box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px !important; */
            /* box-shadow: 10px 10px 10px; */
            box-shadow: 0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23) !important;
            /* filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 2px 20px); */
            padding: 20px;
            max-width: 455px; /* Maximum width of the card */
            text-align: center;
            /* top: calc(50% - 1px); */
                /* transform: translateY(-50%); */
                left: 0px;
                filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 2px 20px);
            /* clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% calc(50% + 25px), 
                25px 50%, 
                0% calc(50% - 25px)
            ); */

            clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% calc(50% + 30px), 
                30px 50%, 
                0% calc(50% - 30px)
            );

            /* clip-path: path('M 0 0 H 300 V 150 H 0 V 0 M 20 75 a 25 25 0 0 0 0 0 Z'); */
            /* clip-path: circle(25px at 0 20%); */
            
        }

        .cut-cards:hover {
            box-shadow: 0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23);
        }

       

        .card::before {
            content: "";
                display: block;
                --size: 4px;
                width: var(--size);
                height: var(--size);
                border-radius: var(--size);
                background: rgb(255, 255, 255);
                box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px;
                position: absolute;
                top: calc(50% - 1px);
                transform: translateY(-50%);
                left: -102px;
        }


        .transparent-circle {
            position: absolute;
            width: 100px; /* Width of the circle */
            height: 100px; /* Height of the circle */
            background-color: #ffffff; /* Background color of the circle (same as the card) */
            border-radius: 50%; /* Makes the div a circle */
            top: 50%; /* Position the circle in the center vertically */
            left: 50%; /* Position the circle in the center horizontally */
            transform: translate(-50%, -50%); /* Center the circle */
            opacity: 0.5; /* Semi-transparent effect */
        }

        .button-container {
            margin-top: 120px; /* Space for the circle */
        }

        .button {
            padding: 10px 20px;
            background-color: #007bff; /* Example button color */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none; /* Remove underline from anchor */
        }

      

        /* .gYToNM {
            filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 2px 20px);
        } */
        @media only screen and (min-width: 1089px) {
            .gYToNM {
                height: 173px;
                min-height: 173px;
                filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 2px 20px);
            }

            .gYToNM::before {
                content: "";
                display: block;
                --size: 4px;
                width: var(--size);
                height: var(--size);
                border-radius: var(--size);
                background: rgb(255, 255, 255);
                box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px;
                position: absolute;
                top: calc(50% - 1px);
                transform: translateY(-50%);
                left: -102px;
            }

            .hautnV {
                height: 100%;
                position: absolute;
                left: -100px;
                padding: 24px 16px 24px 40px;
                width: 455px;
            }

            .hautnV::before {
                clip-path: path("M 24 0 C 10.7452 0 0 10.7452 0 24 V 76.0037 C 0.0908488 76.0012 0.182 76 0.273438 76 C 5.79628 76 10.2734 80.4771 10.2734 86 C 10.2734 91.5229 5.79628 96 0.273438 96 C 0.182 96 0.0908488 95.9988 0 95.9963 V 149 C 0 162.255 10.7452 173 24 173 H 976 C 989.255 173 1000 162.255 1000 149 V 24 C 1000 10.7452 989.255 0 976 0 H 24 Z");
                clip-rule: evenodd;
                clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% calc(50% + 25px), 
                25px 50%, 
                0% calc(50% - 25px)
            );
            }

            .eeWkNQ {
                flex-direction: row;
                gap: 48px;
            }
        }

        .hautnV {
            border-radius: 24px;
            height: 200px;
            padding: 24px;
        }

        .hautnV::before {
            content: "";
            display: flex;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: white;
            top: 0px;
            left: 0px;
            border-radius: 24px;
        }
        
        .gYToNM {
            width: 100%;
            display: block;
            position: relative;
            filter: drop-shadow(rgba(0, 0, 0, 0.07) 0px 4px 20px);
        }

        .eeWkNQ {
            display: flex;
            flex-direction: column;
            gap: 16px;
            height: 100%;
        }

        .gGKrNy {
            flex: 19 1 0%;
            display: flex;
            flex-direction: column;
            gap: 4px;
            -webkit-box-pack: center;
            justify-content: center;
        }

        .fIqTDx {
            margin-top: 0px;
        }

        .ktMxvD {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            color: rgb(32, 129, 226);
            background: rgba(32, 129, 226, 0.1);
            padding: 12px 24px;
            width: 100%;
            font-weight: 450;
            font-size: 14px;
            border-radius: 36px;
            transition: all 0.1s ease-in-out 0s;
        }

        .btn-simple {
            position: absolute;
            top: -10px;
            left: 42%;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.04em;
            color: rgb(128, 128, 128);
            display: block;
            margin: 0px 35px;
            flex-shrink: 0;
            width: 150px !important;
            height: 21px !important;
            background-color: white !important;
        }
        
        .arrow-right-svg {
            margin-left: 8px;
            transform: scale(-1, -1) translateY(-3px);
        }

        * {
            background-color: #ffffff !important;
        }

        .quickLinks {
            margin-top: 100px;
        }
</style>

<svelte:head>
    <title>Plot Details</title>
    <meta name="description" content="Plot Details" />
</svelte:head>

<NavBar />

<div class="conatiner pt-3">
    <div class="row pb-4">
        <div class="col-md-6">
            <div class="plot"></div>
        </div>
        <div class="col-md-6">
            <h6 class="text-muted">Land Sale</h6>
            <div class="mt-3">
                <div class="d-flex">
                    <div class="mr-5" style="margin-right: 15px !important;">W0114</div>
                    <div class="d-flex">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.05" width="24" height="24" rx="6" fill="#000"></rect><g opacity="0.6" clip-path="url(#copyLinkLg_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.115 7.218a2.755 2.755 0 1 0-3.897 3.897l1.134 1.133a.45.45 0 1 1-.637.636l-1.133-1.133a3.656 3.656 0 0 1 5.17-5.17l1.133 1.134a.45.45 0 0 1-.636.636l-1.134-1.133Zm4.534 3.897a.45.45 0 0 1 .636 0l1.133 1.133a3.655 3.655 0 1 1-5.17 5.17l-1.133-1.133a.45.45 0 0 1 .636-.637l1.134 1.133a2.756 2.756 0 1 0 3.897-3.896l-1.133-1.134a.45.45 0 0 1 0-.636Zm-6.234-1.7a.45.45 0 0 1 .637 0l4.533 4.533a.45.45 0 0 1-.637.636l-4.533-4.533a.45.45 0 0 1 0-.636Z" fill="#000"></path></g><defs><clipPath id="copyLinkLg_svg__a"><path fill="#fff" transform="translate(4.8 4.8)" d="M0 0h14.4v14.4H0z"></path></clipPath></defs></svg>
                        <div class="sc-7afabe93-1 fWgMmF">
                            <span class="d-none">copy link</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 pb-4" style="border-bottom: 1px dashed silver;">
                <div class="d-flex"><span>Owned by 0x7Fec...AF5a</span></div>
            </div>

            <div class="mt-3">
                <div class="d-flex justify-content-between">
                    <div>
                        <div>Well-being district, 1st row, 14th position</div>
                        <div class="text-muted"><small>77°27’01.61’’E 18°28’16.53’’N</small></div>
                        <div class="text-muted">Dome City</div>
                    </div>
                    <div>
                        <div class="">
                            <div>144m</div>
                            <div class="text-muted">Dome HQ</div>
                        </div>
                    </div>

                    <div>
                        <div>350m</div>
                        <div class="text-muted">Pubic space</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="cut-card" style="width: 445px;">
                <div class="transparent-circle"></div>
                <div class="button-container">
                    <div class="sc-ac36c495-0 fIqTDx">
                        <a href="https://opensea.io/assets/ethereum/0xa0b9356bEe63D2488E6D1146e90c4A85Fa5FB9a1/7745017218470982" target="_blank" rel="noopener noreferrer" class="sc-333ff8a4-0 ktMxvD"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12Zm7.824-10.68v.768c0 .048-.024.072-.072.096-.24.096-1.08.48-1.416.96-.197.272-.384.57-.571.87-.656 1.046-1.32 2.106-2.477 2.106H9.024c-2.208 0-4.008-1.8-4.008-4.032v-.072c0-.048.048-.096.096-.096H8.64c.072 0 .12.072.12.12-.024.216.024.456.12.672a1.22 1.22 0 0 0 1.104.672h1.728V14.04h-1.704c-.096 0-.144-.096-.096-.168a.331.331 0 0 0 .072-.096c.168-.24.384-.576.624-.984.168-.264.312-.576.432-.864.024-.048.048-.096.072-.168.015-.06.04-.12.062-.175.013-.032.025-.062.034-.089l.072-.216c.048-.24.072-.504.072-.792 0-.096 0-.216-.024-.336 0-.06-.006-.12-.012-.18a1.813 1.813 0 0 1-.012-.18c0-.096-.024-.216-.048-.312A3.398 3.398 0 0 0 11.16 9l-.024-.048a15.25 15.25 0 0 1-.012-.048c-.02-.086-.044-.184-.084-.264a8.955 8.955 0 0 0-.336-.96l-.144-.36c-.072-.168-.144-.336-.216-.48a.479.479 0 0 0-.048-.096c-.018-.03-.036-.06-.048-.096-.012-.036-.03-.072-.048-.108-.018-.036-.036-.072-.048-.108l-.072-.144-.216-.384c-.024-.048.024-.12.072-.096l1.32.36.168.048.192.048.072.024v-.792c0-.384.312-.696.672-.696a.67.67 0 0 1 .48.192.67.67 0 0 1 .192.48v1.152l.144.048s.024 0 .024.024a.914.914 0 0 0 .144.12c.048.048.096.096.168.144.12.096.288.24.456.384.017.017.034.031.05.044.03.024.055.045.07.076.216.192.456.432.696.696.036.036.066.072.096.108.03.036.06.072.096.108.036.036.066.078.096.12.03.042.06.084.096.12l.12.156.12.156a.482.482 0 0 0 .035.055.446.446 0 0 1 .061.113c.048.072.09.144.132.216.042.072.084.144.132.216a.85.85 0 0 0 .048.108.85.85 0 0 1 .048.108c.096.192.168.384.192.6.024.048.024.096.024.12.024.048.024.12.024.192.023.205.002.389-.02.592l-.004.032c-.012.048-.024.09-.036.132-.012.042-.024.084-.036.132a3.202 3.202 0 0 0-.017.055 1.33 1.33 0 0 1-.079.209c-.072.168-.168.336-.264.504-.024.048-.072.12-.12.192l-.042.06a.474.474 0 0 0-.078.132 1.316 1.316 0 0 1-.084.108c-.03.036-.06.072-.084.108a1.313 1.313 0 0 1-.168.216 2.541 2.541 0 0 1-.12.144c-.042.048-.084.096-.12.144-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.072.072-.144.144-.216.192l-.144.12c-.024.024-.048.024-.072.024h-1.056v1.344h1.32a1.193 1.193 0 0 0 .89-.379c.143-.13.41-.375.718-.701.024-.024.024-.024.048-.024l3.648-1.056c.144-.072.192-.024.192.048Zm-13.896-.912.048-.072 3.12-4.872c.048-.072.144-.072.192.024.528 1.176.96 2.616.768 3.528-.096.384-.336.888-.624 1.344a.523.523 0 0 1-.12.192c-.024.024-.048.048-.096.048H6c-.072-.024-.12-.12-.072-.192Z" fill="#2081E2"></path></svg>
                            See on OpenSea
                        </a>
                    </div>
                </div>
            </div>
        </div>
            <!-- <div class="sc-1832e470-0 gYToNM">
                <div height="sm" width="sm" class="sc-1832e470-1 hautnV">
                    <div class="sc-5afbd6f6-0 eeWkNQ">
                        <div class="sc-5afbd6f6-1 gGKrNy">
                            <div class="sc-ac36c495-0 fIqTDx">
                                <a href="https://opensea.io/assets/ethereum/0xa0b9356bEe63D2488E6D1146e90c4A85Fa5FB9a1/7745017218470982" target="_blank" rel="noopener noreferrer" class="sc-333ff8a4-0 ktMxvD"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12Zm7.824-10.68v.768c0 .048-.024.072-.072.096-.24.096-1.08.48-1.416.96-.197.272-.384.57-.571.87-.656 1.046-1.32 2.106-2.477 2.106H9.024c-2.208 0-4.008-1.8-4.008-4.032v-.072c0-.048.048-.096.096-.096H8.64c.072 0 .12.072.12.12-.024.216.024.456.12.672a1.22 1.22 0 0 0 1.104.672h1.728V14.04h-1.704c-.096 0-.144-.096-.096-.168a.331.331 0 0 0 .072-.096c.168-.24.384-.576.624-.984.168-.264.312-.576.432-.864.024-.048.048-.096.072-.168.015-.06.04-.12.062-.175.013-.032.025-.062.034-.089l.072-.216c.048-.24.072-.504.072-.792 0-.096 0-.216-.024-.336 0-.06-.006-.12-.012-.18a1.813 1.813 0 0 1-.012-.18c0-.096-.024-.216-.048-.312A3.398 3.398 0 0 0 11.16 9l-.024-.048a15.25 15.25 0 0 1-.012-.048c-.02-.086-.044-.184-.084-.264a8.955 8.955 0 0 0-.336-.96l-.144-.36c-.072-.168-.144-.336-.216-.48a.479.479 0 0 0-.048-.096c-.018-.03-.036-.06-.048-.096-.012-.036-.03-.072-.048-.108-.018-.036-.036-.072-.048-.108l-.072-.144-.216-.384c-.024-.048.024-.12.072-.096l1.32.36.168.048.192.048.072.024v-.792c0-.384.312-.696.672-.696a.67.67 0 0 1 .48.192.67.67 0 0 1 .192.48v1.152l.144.048s.024 0 .024.024a.914.914 0 0 0 .144.12c.048.048.096.096.168.144.12.096.288.24.456.384.017.017.034.031.05.044.03.024.055.045.07.076.216.192.456.432.696.696.036.036.066.072.096.108.03.036.06.072.096.108.036.036.066.078.096.12.03.042.06.084.096.12l.12.156.12.156a.482.482 0 0 0 .035.055.446.446 0 0 1 .061.113c.048.072.09.144.132.216.042.072.084.144.132.216a.85.85 0 0 0 .048.108.85.85 0 0 1 .048.108c.096.192.168.384.192.6.024.048.024.096.024.12.024.048.024.12.024.192.023.205.002.389-.02.592l-.004.032c-.012.048-.024.09-.036.132-.012.042-.024.084-.036.132a3.202 3.202 0 0 0-.017.055 1.33 1.33 0 0 1-.079.209c-.072.168-.168.336-.264.504-.024.048-.072.12-.12.192l-.042.06a.474.474 0 0 0-.078.132 1.316 1.316 0 0 1-.084.108c-.03.036-.06.072-.084.108a1.313 1.313 0 0 1-.168.216 2.541 2.541 0 0 1-.12.144c-.042.048-.084.096-.12.144-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.015.015-.03.033-.046.051a.62.62 0 0 1-.122.117c-.072.072-.144.144-.216.192l-.144.12c-.024.024-.048.024-.072.024h-1.056v1.344h1.32a1.193 1.193 0 0 0 .89-.379c.143-.13.41-.375.718-.701.024-.024.024-.024.048-.024l3.648-1.056c.144-.072.192-.024.192.048Zm-13.896-.912.048-.072 3.12-4.872c.048-.072.144-.072.192.024.528 1.176.96 2.616.768 3.528-.096.384-.336.888-.624 1.344a.523.523 0 0 1-.12.192c-.024.024-.048.048-.096.048H6c-.072-.024-.12-.12-.072-.192Z" fill="#2081E2"></path></svg>
                                    See on OpenSea
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
    </div>

    <div class="row bg-white mt-5 pb-5 pt-5" style="border-bottom: 1px dashed silver !important; border-top: 1px dashed silver !important">
        <div class="col-md-3">
            <PlotCard title="Plot MW101" distanceHQ="144m" publicSpace="350m" detailsLink="/plots" openSeaLink="" minMode=true/>
        </div>
        <div class="col-md-3">
            <PlotCard title="Plot MW102" distanceHQ="144m" publicSpace="350m" detailsLink="/plots" openSeaLink="" minMode=true/>
        </div>
        <div class="col-md-3">
            <PlotCard title="Plot MW103" distanceHQ="144m" publicSpace="350m" detailsLink="/plots" openSeaLink="" minMode=true/>
        </div>
        <div class="col-md-3">
            <PlotCard title="Plot MW104" distanceHQ="144m" publicSpace="350m" detailsLink="/plots" openSeaLink="" minMode=true/>
        </div>
       
    </div>
</div>

<div class="text-center">
    <div style="position: relative;">
        <a href="/list" class="btn-simple">
            See all plots
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.02 3.02a.5.5 0 1 0-.707-.707L.98 7.647.626 8l.354.354 5.333 5.333a.5.5 0 0 0 .707-.707L2.374 8.333H16.5a.5.5 0 0 0 0-1H2.707L7.02 3.02Z" fill="currentColor"></path></svg>
        </a>
    </div>
    <div class="quickLinks text-center">
        <img src="/assets/images/ICON_FM2-3D.png" alt="" style="width: 150px;">
        <div class="text-uppercase">Future FXP (FXPO)</div>
        <div class="d-flex justify-content-center mt-5">
            <li><PageLink text='FutureMap.com' url="/" /></li>
            <HorizontalSpacer w=50 />
            <li><PageLink text='Contact us' url="/contact" /></li>
            <HorizontalSpacer w=50 />
            <li><PageLink text='Landsale info' url="landsale" /></li>
        </div>
    </div>
</div>

<Footer />
