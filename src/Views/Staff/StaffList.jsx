import React, { useEffect } from "react";
import { useStaff } from "../../hooks/useStaff";

export const StaffList = () => {
  const { state, isBusy, staff, onLoad, load } = useStaff(true);
  useEffect(() => {
    if (load) {
      onLoad();
    }
  }, []);
  return (
    <div>
      <table className="table app-table-hover mb-0 text-left">
        <thead>
          <tr>
            <th className="cell">Id</th>
            <th className="cell">FullName</th>
            <th className="cell">Email</th>
            <th className="cell">PhoneNumber</th>
            {/* <th className="cell"> UserType</th> */}
            <th className="cell">StaffCode</th>
            <th className="cell"></th>
            <th className="cell"></th>
          </tr>
        </thead>
        {isBusy ? (
          "Loading..."
        ) : (
          <tbody>
            {staff &&
              staff.map((item, index) => {
                console.log("item", item.id);
                return (
                  <tr key={index}>
                    <td className="cell">{item.id}</td>
                    <td className="cell">{item.fullName}</td>
                    <td className="cell">{item.email}</td>
                    <td className="cell">{item.phoneNumber}</td>
                    {/* <td className="cell">{item.userType}</td> */}
                    <td className="cell">{item.staffCode}</td>

                    <td className="cell">
                      <button>Edit</button>
                    </td>
                    <td className="cell">
                      {" "}
                      <button className="btn btn-primary">View</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </table>
    </div>
  );
};
