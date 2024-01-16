import { Feed } from "@components";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt-Store is an AI prompt store to make your life easier
      </p>
      <Feed />
    </section>
  );
};

export default Home;
