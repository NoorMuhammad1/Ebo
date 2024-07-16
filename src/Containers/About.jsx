import bg from "../assets/bg-1.jpg";
import signature from "../assets/signature.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-10 py-10">
      <div className="bg-about bg-top"></div>
      <div className="grid gap-8 px-10">
        <h1 className="text-3xl capitalize">About Author</h1>
        <p className="text-gray-400 text-base">
          Torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
          justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
          Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
          nunc, etiam pharetra, erat sed fermentum feugiat.
        </p>
        <img src={signature} />
      </div>
    </div>
  );
};

export default About;
