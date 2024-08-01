import SuggestionsContainer from "./SuggestionsContainer";

const Suggestions = () => {
  const items = [
    {
      id: "1",
      name: "All",
    },
    {
      id: "2",
      name: "Music",
    },
    {
      id: "3",
      name: "Sports",
    },
    {
      id: "4",
      name: "Racing",
    },
    {
      id: "5",
      name: "Gaming",
    },
    {
      id: "6",
      name: "Recently Uploaded",
    },
    {
      id: "7",
      name: "Live",
    },
    {
      id: "8",
      name: "Thrillers",
    },
    {
      id: "9",
      name: "Trailers",
    },
    {
      id: "10",
      name: "Rituals",
    },
    {
      id: "11",
      name: "Dance",
    },
  ];

  return (
    <div className="flex mX-1 my-4">
      {items.map((item) => {
        return <SuggestionsContainer name={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default Suggestions;
