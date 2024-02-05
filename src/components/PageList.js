import pageList from "./dummyData/dummyData";

const PageList = () => {
  return (
    <>
      <div className="container-flex vh-100 bg-light py-5 px-5">
        {pageList.map((page) => (
          <div className="card py-1 my-1">
            <h3 className="text-center text-primary">{page.title}</h3>
            <div className="card-body">
              <p className="text-center text-secondary">{page.comment}</p>
              <div className="d-flex flex-row-reverse">
                <button className="btn btn-outline-primary text-secondary mx-1    ">
                  delete
                </button>
                <button className="btn btn-outline-primary text-secondary mx-1">
                  edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageList;
