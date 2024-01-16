import { PromptCard } from "@components";

const Profile = ({ name, description, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{description}</p>
      <div className="mt-10 prompt_layout">
        {data?.map((item) => {
          return (
            <PromptCard
              key={item?._id}
              prompt={item}
              handleEdit={() => handleEdit && handleEdit(item)}
              handleDelete={() => handleDelete && handleDelete(item)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
