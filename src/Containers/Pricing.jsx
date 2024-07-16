import logo from "../assets/react.svg";
const items = [
  {
    icon: logo,
    price: 12,
    type: "hard copy",
    description: "Five Brand Monitors,Five Keyword Monitors,Basic Quota",
    link: "/",
  },
  {
    icon: logo,
    price: 12,
    type: "hard copy",
    description: "Five Brand Monitors,Five Keyword Monitors,Basic Quota",
    link: "/",
  },
  {
    icon: logo,
    price: 5,
    type: "hard copy",
    description: "Five Brand Monitors,Five Keyword Monitors,Basic Quota",
    link: "/",
  },
];

const Item = ({ icon, price, type, description, link }) => {
  return (
    <div className="grid p-10 gap-6">
      <img src={icon} className=" justify-self-center" />
      <h1 className="grid grid-flow-col w-fit justify-self-center">
        <span className="text-6xl font-bold">{price}</span>
        <span className="mt-2">$</span>
      </h1>
      <h2 className="text-sm text-gray-400 uppercase">{type}</h2>
      <div className="w-4/5 justify-self-center">
        {description.split(",").map((str, index) => {
          return (
            <p key={index} className="text-gray-400">
              {str}
            </p>
          );
        })}
      </div>
      <a
        href={link}
        className="uppercase bg-bright text-white w-4/5 justify-self-center px-6 py-3 rounded-full text-xs font-semibold"
      >
        get started
      </a>
    </div>
  );
};
const Pricing = () => {
  return (
    <div className="text-center grid place-content-center gap-12 py-10 px-6">
      <h1 className="text-3xl capitalize">Pricing Plans</h1>
      <p className="text-gray-400 text-lg w-4/5 justify-self-center">
        we shows only the best websites, portfolios ans landing pages built
        completely with passion, simplicity & creativity
      </p>
      <div>
        {items.map((item, index) => (
          <Item
            key={index}
            icon={item.icon}
            price={item.price}
            type={item.type}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
