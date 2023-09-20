import React, { useState, memo, useEffect } from "react";
import "./expandedSearch.css";
import { RxCross1 } from "react-icons/rx";
import InputText from "../SubComponents/InputText/InputText";
import { collectionNames } from "../../Services/data";
import Button from "../SubComponents/Button/Button";
import MapProducts from "../../Components/GeneraicComponents/MapProducts";
const ExpandedSearch = ({ isExpanded, setIsExpanded }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [titles, setTitles] = useState([]);
  const [searchItemList, setSearchItemList] = useState([]);
  const onInput = (text) => {
    if (text.length > 0) {
      const subString = text.toLowerCase();
      let array = [];
      titles.map((item, index) => {
        if (item.search(subString) != -1) {
          console.log("ArraySearch", item.search(subString));
          if (!array.includes(item)) {
            array.push({ name: item, index });
          }
        }
      });
      setSearchItemList(array);
    } else {
      setSearchItemList([]);
      setSelectedItem(null);
    }
  };
  useEffect(() => {
    const titles = collectionNames.map((item) => item.name.toLowerCase());
    setTitles(titles);
  }, []);
  // useEffect(() => {
  //   console.log(searchItemList);
  // }, [searchItemList]);

  return (
    <div
      style={{
        translate: isExpanded == "expandedSearch" ? "0vw" : "80vw",
      }}
      className="expandedSearch_parent"
    >
      <div className="expandedSearch__pageSpaces">
        <div className="expandedSearch__topIcon">
          <button
            onClick={() => setIsExpanded("")}
            className="button"
            type="button"
          >
            <RxCross1 size={20} />
          </button>
        </div>

        <InputText onInput={onInput} />
        <div
          style={{
            border: searchItemList.length > 0 ? "1px solid lightgray" : "0px",
          }}
          className="expandedSearch__searchResult"
        >
          <MapSearchItems
            list={searchItemList}
            onClick={(id) => setSelectedItem(id)}
          />
        </div>
        <div className="expandedSearch__result">
          {selectedItem != null && (
            <MapProducts data={collectionNames[selectedItem]} />
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(ExpandedSearch);

const MapSearchItems = ({ list, onClick }) => {
  return list.map((item) => {
    return (
      <Button
        onClick={() => onClick(item.index)}
        buttonText={item.name}
        buttonContainerStyle={{
          width: "100%",
        }}
        buttonStyle={{
          marginTop: "0.5rem",
          width: "100%",
          height: "2rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      />
    );
  });
};
