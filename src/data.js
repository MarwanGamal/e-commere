import colombia from "./imgs/colombiaLogo.png"
import frenchConnection from "./imgs/french.png"
import selectedHomme from "./imgs/selectedHomme.webp"
import harryBrown from "./imgs/HB-Logo-navy-crop_360x.avif"
import onlySons from "./imgs/onlyAndSonsLogo.png"
import jackAndJones from "./imgs/jackAndJones.png"
import sportswear from "./imgs/sportswear2.png"
import suit from "./imgs/suit.png"

export const sliderItems = [
    {
        id: "tshirt",
        img: "https://cdn.discordapp.com/attachments/624867491109142538/1141755118916743168/fdc0e91e-3cc1-4b23-9f96-1a495fc4c980.png",
        title: "Summer Sale ! get up to 30% sale on T-shirts",
        desc: "",
        color: "#f5fafd"
    },
    {
        id: "sportswear",
        img: "https://cdn.discordapp.com/attachments/624867491109142538/1141764377666670622/a0b022c3-2d09-43d3-9216-63ec6e2d34fb.png",
        title: "get up to 40% off new arrivals for shoes ",
        desc: "",
        color: "#fcf1ed"
    },
    {
        id: "suits",
        img: "https://cdn.discordapp.com/attachments/624867491109142538/1141761726396764200/905c94ac-6985-44e8-b92d-16098dcbd054.png",
        title: "Don't compromise on style! get 50% off suits",
        desc: "",
        color: "#fbf0f4"
    },
]

export const categories = [
    {
        id: 1,
        brandName: "Columbia",
        img: colombia  
    },
    {
        id: 2,
        brandName: "French Connection",
        img: frenchConnection 
    },
    {
        id: 3,
        brandName: "Harry Brown",
        img: harryBrown 
    },
    {
        id: 4,
        brandName: "Jack & Jones",
        img: jackAndJones 
    },
    {
        id: 5,
        brandName: "Only & Sons",
        img: onlySons 
    },
    {
        id: 6,
        brandName: "Selected Homme",
        img: selectedHomme
    }
]

export const popularProducts = [
    {
        id: 1,
        imageUrl: "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-1-ecru",
        additionalImageUrls:[
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-2",
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-3",
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-4"
        ],
        brandName:"ASOS DESIGN",
        name:"ASOS DESIGN regular fit smart linen shirt with mandarin collar in ecru",
        price:{
            currency:"USD",
            current:{
                text:"$37.00",
                value:37
            }
        }
    },
    {
        id: 2,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-1-navyblazer",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-2",
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-3",
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials short sleeve linen shirt in navy",
        price:{
            currency:"USD",
            current:{
                text:"$54.00",
                value:54
            }
        }
    },
    {
        id: 3,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-1-white",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-2",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-3",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials linen shirt with grandad collar in white",
        price:{
            currency:"USD",
            current:{
                text:"$58.00",
                value:58
            }
        }
    },
    {
        id: 4,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-1-navyblazer",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-2",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-3",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials linen shirt in navy",
        price:{
            currency:"USD",
            current:{
                text:"$58.00",
                value:58
            }
        }
    },
    {
        id: 5,
        imageUrl: "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-1-whitemultistripe",
        additionalImageUrls:[
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-2",
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-3",
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-4"
        ],
        brandName:"Tommy Jeans",
        name:"Tommy Jeans stripe short sleeve linen shirt in multi",
        price:{
            currency:"USD",
            current:{
                text:"$100.00",
                value:100
            }
        }
    },
    {
        id: 6,
        imageUrl: "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-1-ecru",
        additionalImageUrls:[
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-2",
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-3",
            "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-4"
        ],
        brandName:"ASOS DESIGN",
        name:"ASOS DESIGN regular fit smart linen shirt with mandarin collar in ecru",
        price:{
            currency:"USD",
            current:{
                text:"$37.00",
                value:37
            }
        }
    },
    {
        id: 7,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-1-navyblazer",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-2",
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-3",
            "images.asos-media.com/products/jack-jones-essentials-short-sleeve-linen-shirt-in-navy/204245682-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials short sleeve linen shirt in navy",
        price:{
            currency:"USD",
            current:{
                text:"$54.00",
                value:54
            }
        }
    },
    {
        id: 8,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-1-white",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-2",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-3",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-with-grandad-collar-in-white/204245783-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials linen shirt with grandad collar in white",
        price:{
            currency:"USD",
            current:{
                text:"$58.00",
                value:58
            }
        }
    },
    {
        id: 9,
        imageUrl: "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-1-navyblazer",
        additionalImageUrls:[
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-2",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-3",
            "images.asos-media.com/products/jack-jones-essentials-linen-shirt-in-navy/204246272-4"
        ],
        brandName:"Jack & Jones",
        name:"Jack & Jones Essentials linen shirt in navy",
        price:{
            currency:"USD",
            current:{
                text:"$58.00",
                value:58
            }
        }
    },
    {
        id: 10,
        imageUrl: "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-1-whitemultistripe",
        additionalImageUrls:[
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-2",
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-3",
            "images.asos-media.com/products/tommy-jeans-stripe-short-sleeve-linen-shirt-in-multi/204292446-4"
        ],
        brandName:"Tommy Jeans",
        name:"Tommy Jeans stripe short sleeve linen shirt in multi",
        price:{
            currency:"USD",
            current:{
                text:"$100.00",
                value:100
            }
        }
    }
]