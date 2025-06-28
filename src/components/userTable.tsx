import { useState } from "react";
import ReactPaginate from "react-paginate";

const dummyUsers = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `dummy${i + 1}@gmail.com`,
  status: i % 2 === 0 ? "Active" : "Inactive",
}));

const itemsPerPage = 10;

export default function UserTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentUsers = dummyUsers.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(dummyUsers.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 font-medium text-gray-600">ID</th>
            <th className="py-2 px-4 font-medium text-gray-600">Name</th>
            <th className="py-2 px-4 font-medium text-gray-600">Email</th>
            <th className="py-2 px-4 font-medium text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel="← Prev"
          nextLabel="Next →"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex items-center space-x-2"
          activeClassName="font-bold text-indigo-600"
          pageClassName="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 hover:cursor-pointer"
          previousClassName="px-2 py-1 bg-white border rounded hover:bg-gray-100 hover:cursor-pointer"
          nextClassName="px-2 py-1 bg-white border rounded hover:bg-gray-100 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}
