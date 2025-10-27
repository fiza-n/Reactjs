import footerlogo from "../assets/footer-logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import copyright from "../assets/copyright-sign.svg";


const Footer = () => {
   const socialMedia = [
      { src: facebook, alt: "facebook logo" },
      { src: twitter, alt: "twitter logo" },
      { src: instagram, alt: "instagram logo" },
  ];
   const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];
  return (
    <footer>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
    <a href="/">
      <img src={footerlogo} alt="" width={150} height={46}/>
    </a>
    <p className="text-gray-200 mt-6 text-base leading-7 sm:max-w-sm">Get shoes ready fro the new term at your nearest Nike Store. Find Your perfect Size In Store.Get Rewards</p>
    <div className="flex items-center gap-5 mt-8">
      {socialMedia.map((social) => (
        <div className="flex justify-center items-center bg-white rounded-full cursor-pointer hover:bg-gray-400 p-2">
          <img src={social.src} alt={social.alt} width={24} height={24} />
        </div>
        ))}

    </div>
    </div>
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map((Link) => (
        <div key={Link}>
          <h4 className="text-white text-xl mb-6 leading-normal font-medium">{Link.title}</h4>
          <ul>{Link.links.map((links)=>(
            <li  className="text-white leading-normal text-base mt-3 hover:text-gray-500 font-montserrat cursor-pointer" key={links.name}>
              <a href={links.link}>{links.name}</a>
            </li>
          ))}</ul>
        </div>
        ))}
    </div>
    </div>
    <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
          <img src={copyright} alt="" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer">Terms & Conditions</p>
    </div>
    </footer>
  )
}

export default Footer