import { Feed } from "@components";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Your Personal <br />
        <span className="orange_gradient">AI Prompts Repository</span>
      </h1>
      <p className="desc text-center">
        Prompt-Store is your On-the-Go Solution for Storing and Retrieving All
        Your Useful Prompts!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
