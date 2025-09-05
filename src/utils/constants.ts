import {sidebarLink} from '../features/types'
import Team from "../assets/img/Landing/Intro/team.png"
import Selection from "../assets/img/Landing/Intro/selection.png"
import Security from "../assets/img/Landing/Intro/security.png"
import Medal1 from "../assets/img/Landing/Intro/medal1.png"
import Medal2 from "../assets/img/Landing/Intro/medal2.png"
import Medal3 from "../assets/img/Landing/Intro/medal3.png"
import Stars from "../assets/img/Landing/Intro/stars.png"
import Sommelier from "../assets/img/somielers-fund.png"
import Bordeaux from "../assets/img/bordeaux-fund.png"
import UKFlag from "../assets/img/united-kingdom-flag.png"
import InvestmentArrowDown from "../assets/img/arrow-down-investment.png"
import InvestmentArrowTop from "../assets/img/arrow-top-investment.png"
import Wine1 from "../assets/img/wine1.png"
import Wine2 from "../assets/img/wine2.png"
import Wine3 from "../assets/img/wine3.png"
import Wine4 from "../assets/img/wine4.png"

export const Lorum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc maecenas dignissim non ultrices turpis felis. Pulvinar odio in lobortis semper tellus pharetra, aenean odio sed. Tempor, sit risus pretium pretium, eleifend enim. Amet eget sem volutpat tortor mattis ut tincidunt est. Urna volutpat semper morbi neque consectetur aliquet tellus. Egestas id etiam mi lacus in hendrerit scelerisque sed. Enim volutpat sem mattis pretium. Tristique morbi imperdiet vitae volutpat viverra in. Sed at lobortis sagittis, ullamcorper platea dictum curabitur viverra sit.'

export const REACT_APP_IAM_SERVICE_BASE_URL =
    'https://educon-online-iam-service.azurewebsites.net/api'

export const REACT_APP_ONLINE_COURSE_BASE_URL =
    'https://educon-online-course-service.azurewebsites.net/api'

export const REACT_APP_STUDENT_COURSE_BASE_URL =
    'https://educon-online-student-course-service.azurewebsites.net/api'

export const ALPHABET = [
    {id: '1', name: 'A'},
    {id: '2', name: 'B'},
    {id: '3', name: 'C'},
    {id: '4', name: 'D'},
    {id: '5', name: 'E'},
    {id: '6', name: 'F'},
    {id: '7', name: 'G'},
    {id: '8', name: 'H'},
    {id: '9', name: 'I'},
    {id: '10', name: 'J'},
    {id: '11', name: 'K'},
    {id: '12', name: 'L'},
    {id: '13', name: 'M'},
    {id: '14', name: 'N'},
    {id: '15', name: 'O'},
    {id: '16', name: 'P'},
    {id: '17', name: 'Q'},
    {id: '18', name: 'R'},
    {id: '19', name: 'S'},
    {id: '20', name: 'T'},
    {id: '21', name: 'U'},
    {id: '22', name: 'V'},
    {id: '23', name: 'W'},
    {id: '24', name: 'X'},
    {id: '25', name: 'Y'},
    {id: '26', name: 'Z'},
]

export const LANGUAGES = [
    {id: 'KZ', name: 'KZ'},
    {id: 'RU', name: 'RU'},
]

export const MODERATOR = 'MODERATOR'

export const CURATOR = 'CURATOR'

export const TEACHER = 'TEACHER'

export const SUPER_ADMIN = 'SUPER_ADMIN'

export const STUDENT = 'STUDENT'

export const sidebarLinks = ({formatMessage}): sidebarLink[] => [
    {
        id: 1,
        title: formatMessage({id: 'courses'}),
        path: '/courses',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 2,
        title: formatMessage({id: 'price'}),
        path: '/price',
        allowedRoles: [MODERATOR],
    },
    {
        id: 3,
        title: formatMessage({id: 'subjects'}),
        path: '/subjects',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 4,
        title: formatMessage({id: 'students'}),
        path: '/students',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 5,
        title: formatMessage({id: 'allGroups'}),
        path: '/groups',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 6,
        title: formatMessage({id: 'teachers'}),
        path: '/teachers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 7,
        title: formatMessage({id: 'managers'}),
        path: '/managers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 8,
        title: formatMessage({id: 'myCourses'}),
        path: '/my-courses',
        allowedRoles: [STUDENT],
    },
    {
        id: 9,
        title: formatMessage({id: 'purchase'}),
        path: '/buy-course',
        allowedRoles: [STUDENT],
    },
    {
        id: 10,
        title: formatMessage({id: 'myCourses'}),
        path: '/teacher-courses',
        allowedRoles: [TEACHER],
    },
    {
        id: 11,
        title: formatMessage({id: 'Students'}),
        path: '/curator/students',
        allowedRoles: [CURATOR],
    },
    {
        id: 12,
        title: formatMessage({id: 'Groups'}),
        path: '/curator/groups',
        allowedRoles: [CURATOR],
    },
    {
        id: 13,
        title: formatMessage({id: 'examAnalysis'}),
        path: '/curator/analysis',
        allowedRoles: [CURATOR],
    },
]


export const MoreBenefitsContent = [
    {
        title: "moreBenefitsContentTitle1",
        content: "moreBenefitsContentDescription1"
    },
    {
        title: "moreBenefitsContentTitle2",
        content: "moreBenefitsContentDescription2"
    },
    {
        title: "moreBenefitsContentTitle3",
        content: "moreBenefitsContentDescription3"
    },
    {
        title: "moreBenefitsContentTitle4",
        content: "moreBenefitsContentDescription4"
    },
    {
        title: "moreBenefitsContentTitle5",
        content: "moreBenefitsContentDescription5"
    },
    {
        title: "moreBenefitsContentTitle6",
        content: "moreBenefitsContentDescription6"
    },

]

export const BenefitsContent = [
    {
        img: Team,
        title: "teamOfExperts",
        content: "teamOfExpertsContentText"
    },
    {
        img: Selection,
        title: "carefulSelections",
        content: "carefulSelectionsContentText"
    },
    {
        img: Security,
        title: "secureProcedures",
        content: "secureProceduresContentText"
    },

]

export const FooterContentText = [
    {
        title: "account",
    },
    {
        title: "trading",
    },
    {
        title: "portfolio",
    },
    {
        title: "analytics",
    },
    {
        title: "support",
    },

]

export const LandingNavBarContentText = [
    {
        title: "aboutZhambylRegion",
        dropdown: [
            { name: "investmentOpportunities", link: "/investment-opportunities" },
            {
                name: "investmentPlatforms",
                children: [
                    { name: "specialEconomicZoneJibekJoly", link: "/special-economic-zone-jibek-joly" },
                    { name: "industrialZoneTaraz", link: "/industrial-zone-taraz" },
                    { name: "smallIndustrialAreas", link: "/small-industrial-areas" },
                ],
            },

        ],
    },
    {
        title: "Zhambyl Invest",
        dropdown: [
            { name: "aboutUs", link: "/about-us" },
            { name: "governance", link: "/governance" },
            { name: "structure", link: "/structure" },
        ],
    },
    {
        title: "stateSupportMeasures",
        link: "/state-support-measures",
    },
    {
        title: "news",
        link: "/news",
    },
];

export const WhyUsContentText = [
    {
        title: "whyUsContent1",
    },
    {
        title: "whyUsContent2",
    },
    {
        title: "whyUsContent3",
    },
    {
        title: "whyUsContent4",
    },
]

export const HowItWorksContentText = [
    {
        title: "1",
        content: "howTtWorksContentText1"
    },
    {
        title: "2",
        content: "howTtWorksContentText2"
    },
    {
        title: "3",
        content: "howTtWorksContentText3"
    },

]
export const CustomerFeedbackContentText = [
    {
        img: Stars,
        title: "customerReviewsContentTitle",
        customerName: "customerReviewsContentCustomerName"
    },
    {
        img: Stars,
        title: "customerReviewsContentTitle",
        customerName: "customerReviewsContentCustomerName"
    },
    {
        img: Stars,
        title: "customerReviewsContentTitle",
        customerName: "customerReviewsContentCustomerName"
    },

]
export const NavBarContentText = [
    {
        title: "Account",
        link: "/account"
    },
    {
        title: "Trading",
        link: "/trading"

    },
    {
        title: "Portfolio",
        link: "/portfolio"

    },
    {
        title: "Trade history",
        link: "/trade-history"

    },
    {
        title: "Balance history",
        link: "/balance-history"

    },
    {
        title: "Support",
        link: "/support"

    },

]


export const FooterLinkText = [
    {
        title: "aboutUs",
    },
    {
        title: "termsAndConditions",
    },
    {
        title: "cookiePolicy",
    },
]
export const FooterImg = [
    {
        img: Medal1
    },
    {
        img: Medal2
    },
    {
        img: Medal3
    },
]
export const WineAccountDescriptionText = [
    {
        desc: `"Vineyard Innovation: AI-Powered Grape Harvesting Takes Root"In a groundbreaking move for the wine industry, vineyards are adopting artificial intelligence for grape harvesting. Smart robots equipped with advanced sensors and machine learning algorithms are being employed to selectively pick the ripest grapes, promising higher efficiency and improved grape quality. Winemakers believe this innovative approach will revolutionize traditional harvesting methods and elevate the overall winemaking process.`
    },
    {
        desc: '"Climate-Resilient Grapes: Wineries Explore New Varieties Amid Changing Weather Patterns" Wineries around the globe are experimenting with climate-resilient grape varieties as they adapt to shifting weather patterns. Rising temperatures and unpredictable growing conditions have prompted vintners to explore and cultivate grape varieties that are more resistant to extreme weather..'
    },
]

export const fakeDealsAndHistoryDate = [
    {
        id: 1,
        dealType: 'Sell',
        product: '2021 Chateau La Mission Haut-Brion Cru Classe',
        quantity: '1',
        price: '1830€',
        completeDate: '01.05.2024',
        totalAmount: '1830 €',
        status: 'Waiting approval'
    },
    {
        id: 1,
        dealType: 'Buy',
        product: '2021 Chateau La Mission Haut-Brion Cru Classe',
        quantity: '1',
        price: '1076€',
        completeDate: '01.05.2024',
        totalAmount: '1076 €',
        status: 'Success'

    },
    {
        id: 1,
        dealType: 'Buy',
        product: "Sommelier's fund shares",
        quantity: '20',
        price: '250€',
        completeDate: '01.05.2024',
        totalAmount: '5000 €',
        status: 'Canceled'
    },
]

export const fakeBalanceData = [
    {
        id: 1,
        transactionType: 'Deposit',
        amount: '1830€',
        date: '01.05.2024',
        status: 'Waiting approval'
    },
    {
        id: 2,
        transactionType: 'Withdrawal',
        amount: '1076€',
        date: '01.05.2024',
        status: 'Waiting approval'
    },
    {
        id: 3,
        transactionType: 'Deposit',
        amount: '250€',
        date: '01.05.2024',
        status: 'Waiting approval'
    },
]

export const SupportQuestionsAndAnswers = [
    {
        question: "How do I buy wine?",
        answer: "Carefully selected wine collections ready for purchase at a set price. To invest in wines from our Collections, simply select the collection of interest, add it to your shopping basket and confirm at checkout. Your wine collection will be added to your portfolio and automatically stored in our warehouse.\n" +
            "Should you wish to buy a collection for immediate consumption, please select the request for delivery button prior to checkout. An email will be sent to the Vindome team with your request. We will revert with exact delivery costs and any potential import taxes depending on the country of delivery.",
    },
    {
        question: "How do I create a sell offer?",
        answer: "Carefully selected wine collections ready for purchase at a set price. To invest in wines from our Collections, simply select the collection of interest, add it to your shopping basket and confirm at checkout. Your wine collection will be added to your portfolio and automatically stored in our warehouse.\n" +
            "Should you wish to buy a collection for immediate consumption, please select the request for delivery button prior to checkout. An email will be sent to the Vindome team with your request. We will revert with exact delivery costs and any potential import taxes depending on the country of delivery.",
    },
    {
        question: "How much commission is charged to the seller?",
        answer: "Carefully selected wine collections ready for purchase at a set price. To invest in wines from our Collections, simply select the collection of interest, add it to your shopping basket and confirm at checkout. Your wine collection will be added to your portfolio and automatically stored in our warehouse.\n" +
            "Should you wish to buy a collection for immediate consumption, please select the request for delivery button prior to checkout. An email will be sent to the Vindome team with your request. We will revert with exact delivery costs and any potential import taxes depending on the country of delivery.",
    },

]

export const TradingMainInvestmentInfo = [
    {
        title: "Sommelier's fund",
        desc1: "Elevate your investments with the Sommelier's Fund: a palate for profit. Your passion for fine wines while diversifying your investment portfolio",
        desc2:
            [
                {
                    title: "Est. Yield in last month: 4.56%"
                },
                {
                    title: "Est. Yield in last 3 months: 8.11%"
                },
                {
                    title: "Est. Yield in last 12 months: 29.04%"
                }
            ],
        img: Sommelier
    },
    {
        title: "Bordeaux’ auctions fund ",
        desc1: "Elevate your investments with the Sommelier's Fund: a palate for profit. Indulge your passion for fine wines while diversifying your investments",
        desc2:
            [
                {
                    title: "Est. Yield in last month: 4.56%"
                },
                {
                    title: "Est. Yield in last 3 months: 8.11%"
                },
                {
                    title: "Est. Yield in last 12 months: 29.04%"
                }
            ],
        img: Bordeaux
    },
]

export const WineCollectionInMarket = [
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine1,
        count: 'X2'
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine2
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine3,
        count: 'X3'

    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine4
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine1
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine2
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine3
    },
    {
        title: "2020 Chateau La Mission Haut-Brion Cru Classe",
        city: "United Kingdom",
        flag: UKFlag,
        arrowTop: InvestmentArrowTop,
        arrowDown: InvestmentArrowDown,
        wine: Wine4
    },

]

export const YourPortfolioOfWine = [
    {
        title: "Total in the funds:",
        amount1: "20,340€ ",
    },
    {
        title: "Bordeaux’ fund ",
        amount2: "0,000€ ",
        stocks: "0 Stocks"
    },
    {
        title: "Sommelier's fund:",
        amount2: "1,979€ ",
        stocks: "4 Stocks"
    },
    {
        title: "Total in the bottles:",
        amount1: "11,923€ ",
    },
    {
        title: "Total in the bottles:",
        amount1: "11,923€ ",
    },
    {
        title: "Total amount of bottles:",
        amount1: "11,923€ ",
    },


]