import book from "../assets/book.png";
const Hero = () => {
  return (
    <div className="bg-dark px-4 text-center grid gap-8 py-10">
      <img src={book} />
      <h1 className="text-3xl capitalize text-white">
        Showcase and sell your e-book in simple way.
      </h1>
      <p className="text-gray-400 text-sm">
        This should be used to tell a story and let your users know a little
        mroe about your product or service.
      </p>
      <form className="border-white border-[1px] grid grid-cols-2 pl-6 py-1 pr-1 rounded-full">
        <input
          type="email"
          placeholder="E-Mail Address"
          className="bg-dark placeholder:text-white placeholder:text-[0.9rem]"
        />
        <input
          type="submit"
          value="DOWNLOAD"
          className="bg-bright text-white px-6 py-3 rounded-full text-xs font-semibold"
        />
      </form>
    </div>
  );
};

export default Hero;
