import logo from "../assets/react.svg";

const items = [
  {
    image: logo,
    description:
      "If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!",
    name: "ayman firky",
    designation: "UX designer",
  },
  {
    image: logo,
    description:
      "If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!",
    name: "ayman firky",
    designation: "UX designer",
  },
];
const Item = ({ image, description, name, designation }) => {
  return (
    <div className="px-16 grid gap-8">
      <h1 className="text-6xl">“</h1>
      <p className="text-lg italic text-gray-400">{`“${description}”`}</p>
      <div className="grid place-content-center text-center gap-2">
        <div className="grid place-content-center">
          <img src={image} />
        </div>
        <h4 className="capitalize">{name}</h4>
        <h5 className="text-xs text-gray-400">{designation}</h5>
      </div>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="text-center grid place-content-center gap-12 py-10">
      <h1 className="text-3xl capitalize">Testimonials</h1>
      <div className="grid gap-10">
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
