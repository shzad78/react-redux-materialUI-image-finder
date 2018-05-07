import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";

class ImageResults extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile title={img.tags} key={img.id}>
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}
export default ImageResults;
