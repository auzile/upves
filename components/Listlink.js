import Link from "next/link";

class Listlink extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.onChangeIndex(e);
  };

  render() {
    return (
      <div className="sideBar border">
        <ul>
          {this.props.list.map((li, i) => (
            <li key={i}>
              <Link href="/education">
                <a onClick={this.handleChange.bind(this, i)}>{li}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Listlink;
