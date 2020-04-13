import  React from "react";
import StarRatings from 'react-star-ratings';
 
class VideoRating extends React.Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="golden"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
      );
    }
}
 
 
class StarBar extends React.Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={2.403}
        starDimension="25px"
        starSpacing="5px"
      />
    );
  }
}
export default StarBar;