import { LoremIpsum } from "react-lorem-ipsum";

const List = () => {
  const listTitle = ["Prvi", "Drugi", "Treci", "Cetvrti"];
  return (
    <div className="blog">
      {listTitle.map((item, i) => {
        return (
          <p key={i}>
            <h4>{item}</h4>
            <div className="text-lorem">
              <LoremIpsum p={1} />
            </div>
          </p>
        );
      })}
    </div>
  );
};

export default List;
