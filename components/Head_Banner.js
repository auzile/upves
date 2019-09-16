class Head_Banner extends React.Component {
  render() {
    return (
      <div className="head_banner">
        <div className="container">
          <span id="text_1">{this.props.text_1}</span>
          <span id="text_2">{this.props.text_2}</span>
        </div>
      </div>
    );
  }
}

export default Head_Banner;
