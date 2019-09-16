import Link from "next/link";

const Rowpic = props => {
  return (
    <div className="card">
      <img class="card-img-top" src={props.item.src} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">
          <Link href="#">{props.item.title}</Link>
        </p>
      </div>
    </div>
  );
};

export default Rowpic;
