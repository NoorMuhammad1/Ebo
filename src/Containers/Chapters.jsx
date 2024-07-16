import logo from "../assets/react.svg";
import ipad from "../assets/ipad.jpg";
const items = [
  {
    source: logo,
    title: "10 chapters",
    description:
      "Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.",
  },
  {
    source: logo,
    title: "goodreads",
    description:
      "Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.",
  },
];

const Item = ({ source, title, description }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] grid-rows-[1fr_2fr]">
      <img
        src={source}
        className="stroke-slate-900 w-[80%] col-start-1 col-end-2 row-start-1 row-end-3"
      />
      <h3 className="capitalize col-start-2 col-span-2 row-span-1">{title}</h3>
      <p className="text-[0.85rem] text-gray-400 col-start-2 col-span-2 row-span-1">
        {description}
      </p>
    </div>
  );
};
const Chapters = () => {
  return (
    <div className="px-4">
      <hr />
      <div className="grid gap-8 py-10">
        <div className="grid gap-8">
          <h1 className="text-3xl capitalize">chapters included</h1>
          <p className="text-gray-400 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat.
          </p>
          <div className="grid gap-6">
            {items.map((item, index) => (
              <Item
                key={index}
                source={item.source}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div>
          <img src={ipad} />
        </div>
      </div>
    </div>
  );
};

export default Chapters;
