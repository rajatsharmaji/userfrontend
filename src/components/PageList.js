const PageList = () => {
  return (
    <>
      <div className="container-flex vh-100 bg-light py-5 px-5">
        <div className="card py-1">
          <h3 className="text-center text-primary">Page Title</h3>
          <div className="card-body">
            <p className="text-center text-secondary">Page Title</p>
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
      </div>
    </>
  );
};

export default PageList;
