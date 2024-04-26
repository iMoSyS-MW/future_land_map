<script>
    import { ROUTES } from '../script.js';
</script>

<style>

    .kSQCRu {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        position: relative;
        padding: 0px 16px;
    }

    .ecPopG {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column-reverse;
        gap: 12px;
    }

    .esKLBL {
        line-height: 34px;
        opacity: 0.5;
        font-size: 12px;
    }

    .jYsKGg {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
    }

    .bxlLBq {
        height: 34px;
    }

    .dRLjrN {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column-reverse;
        gap: 12px;
    }

    .edMhgL {
        font-size: 14px;
        position: relative;
        width: 165px;
        height: 34px;
    }

    .dnAwPQ {
        width: 100%;
        height: 34px;
        border-radius: 12px;
        padding: 6px 12px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        background: url(/assets/images/chevron-down.svg) right 12px center no-repeat rgba(0, 0, 0, 0.03);
    }

    .kupIXW {
        top: calc(100% + 2px);
        width: 100%;
        padding: 8px;
        position: absolute;
        background: rgb(255, 255, 255);
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 17px;
        border-radius: 12px;
        z-index: 1;
        transition: all 0.3s ease 0s;
        transform: translateY(-80%);
        visibility: hidden;
        pointer-events: none;
        opacity: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .fqXsAu {
        width: 100%;
        height: 34px;
        border-radius: 8px;
        padding: 6px 12px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.03);
    }

    .kKaZHb {
        width: 100%;
        height: 34px;
        border-radius: 8px;
        padding: 6px 12px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
    }

    .liknRX {
        color: black;
        background-color: rgba(0, 0, 0, 0.03);
        display: flex;
        width: 141px;
        height: 34px;
        border-radius: 12px;
        z-index: 2;
    }

    .bQzLsa {
        flex: 1 1 0%;
        background: none;
        border: none;
        border-radius: 12px;
        outline: none;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        color: black;
    }

    .cXBayI {
        display: none;
    }


    .hwvEnz {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.06em;
    }

    .YzDqe {
        flex: 1 1 0%;
        border: none;
        border-radius: 12px;
        outline: none;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        color: black;
        background: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 20px;
    }

    @media only screen and (min-width: 769px) {
        .kSQCRu {
            padding: 0px 25px;
        }

        .ecPopG {
            gap: 24px;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
        }

        .dRLjrN {
            gap: 24px;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
        }

        .edMhgL {
            width: 210px;
        }

        .bQzLsa svg {
            margin-right: 5.5px;
        }

        .cXBayI {
            display: block;
        }

        .YzDqe svg {
            margin-right: 5.5px;
        }

    }
    
</style>


<div class="sc-10e09653-2 kSQCRu">
    <div class="sc-10e09653-4 ecPopG">
        <span class="sc-d1bf728-7 sc-10e09653-5 jYsKGg esKLBL">14087 plots found</span>
        <div class="sc-10e09653-6 bxlLBq"></div>
    </div>
    <div class="sc-10e09653-3 dRLjrN">
        <div class="sc-1af61330-0 edMhgL">
            <div class="sc-1af61330-1 dnAwPQ">Price low to high</div>
            <div class="sc-1af61330-2 kupIXW">
                <div class="sc-1af61330-3 fqXsAu">Price low to high</div>
                <div class="sc-1af61330-3 kKaZHb">Price high to low</div>
            </div>
        </div>
        <div>
            <div color="black" class="sc-3b79772c-0 liknRX">
                <a href="{ROUTES.map}" color="black" class="sc-ff5f358-0 bQzLsa">
                    <svg width="9" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 0C2.111 0 .25 1.712.25 4.154c0 .871.212 1.477.605 2.149l3.242 5.538a.325.325 0 0 0 .555 0l3.243-5.538c.393-.672.605-1.278.605-2.15C8.5 1.713 6.639 0 4.375 0Zm0 2.154c1.051 0 1.904.826 1.904 1.846s-.853 1.846-1.904 1.846S2.471 5.02 2.471 4s.853-1.846 1.904-1.846Z" fill="currentColor"></path></svg>
                    <span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">Map</span>
                </a>
                <a href="{ROUTES.plots}" color="black" data-cy="list-button" class="sc-ff5f358-0 YzDqe">
                    <svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2.25" r="0.75" fill="currentColor"></circle><rect x="5" y="1.875" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="6" r="0.75" fill="currentColor"></circle><rect x="5" y="5.625" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="9.75" r="0.75" fill="currentColor"></circle><rect x="5" y="9.375" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect></svg>
                    <span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">List</span>
                </a>
            </div>
        </div>
    </div>
</div>