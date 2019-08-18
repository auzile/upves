import Link from "next/link";

class Listlink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Getting Started",
        "Instruction",
        "Download",
        "Contents",
        "Browsers & Devices",
        "Theming"
      ],
      IndexState: 0
    };
  }

  render() {
    return (
      <div className="sideBar border">
        <ul>
          {this.state.list.map((li, i) => (
            <li key={i}>
              <Link href="/education">
                <a>{li}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Listlink;
