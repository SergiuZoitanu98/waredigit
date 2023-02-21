import "./index.css";
const Content = ({image,setImage}) => {

    return (
    <>
      <div className="main-photo">
        <img
          className="responsive-img"
          src={image?.src?.original}/>
      </div>
      <div className="thumbnail-container">
        <img
            src={image?.src?.large}
            className="thumbnail"
        />
        <img
            src={image?.src?.medium}
            className="thumbnail"
        />
        <img
            src={image?.src?.portrait}
            className="thumbnail"
        />
      </div>
    </>
  );
};
export default Content;
