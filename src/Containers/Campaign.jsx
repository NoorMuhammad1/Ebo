import logo from "../assets/react.svg";
const Campaign = () => {
  const items = [
    {
      icon: logo,
      title: "start your campaign",
      description:
        "Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.",
    },
    {
      icon: logo,
      title: "engage new users",
      description:
        "Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.",
    },
    {
      icon: logo,
      title: "claim your reward",
      description:
        "Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.",
    },
  ];

  const Item = ({ icon, title, description }) => {
    return (
      <div className="grid place-items-center gap-3">
        <img src={icon} className="stroke-slate-900 fill-red-500 bg-red-600" />
        <h3 className="capitalize">{title}</h3>
        <p className="text-[0.75rem] text-gray-400">{description}</p>
      </div>
    );
  };
  return (
    <div className="px-4 text-center grid gap-8 py-10">
      <h1 className="text-3xl capitalize">Sell your E-book</h1>
      <p className="text-gray-400 text-sm">
        we shows only the best websites, portfolios ans landing pages built
        completely with passion, simplicity & creativity
      </p>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <Item
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Campaign;
