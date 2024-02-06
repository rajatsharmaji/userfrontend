import pageList from "./dummyData/dummyData";

const PageList = () => {
  return (
    <>
      <div className="container-fluid bg-light d-flex flex-wrap py-5 px-5">
        {pageList.map((page) => (
          <div
            className="card m-3 p-3"
            style={{ height: "15rem", width: "25rem" }}
          >
            <h3 className="text-center text-primary">{page.title}</h3>
            <div className="card-body">
              <p className="text-center text-secondary">{page.comment}</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-outline-primary text-secondary mx-1    ">
                delete
              </button>
              <button className="btn btn-outline-primary text-secondary mx-1">
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageList;
