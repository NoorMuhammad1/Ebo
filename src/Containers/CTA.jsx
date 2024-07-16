const CTA = () => {
  return (
    <div className="bg-dark text-center px-6 py-12 grid gap-10">
      <h1 className="text-4xl text-white">
        Showcase and sell for your ebook in simple way.
      </h1>
      <p className="text-gray-400">
        This should be used to tell a story and let your users know a little
        more about your product or service.
      </p>
      <a
        href={"/"}
        className="uppercase bg-bright text-white w-4/5 max-w-40 justify-self-center px-6 py-3 rounded-full text-xs font-semibold"
      >
        Download
      </a>
    </div>
  );
};

export default CTA;
