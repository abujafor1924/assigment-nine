import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-red-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">ReactApp</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar me-5"
            >
              <div className="w-20 rounded-full">
                <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=is&k=20&c=SRtmXotZfERsp4_0tTn24AXdCTWyssWO8r6dj5ehI98=" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
