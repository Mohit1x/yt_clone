const SuggestionsContainer = (props) => {
  return (
    <>
      <p className="font-semibold  rounded-md py-1 px-2 bg-gray-50 hover:bg-gray-200 mx-4 cursor-pointer">
        {props.name}
      </p>
    </>
  );
};

export default SuggestionsContainer;
