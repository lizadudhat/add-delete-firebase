import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { ViewUsers,deleteUser } from '../Redux/action/crud';
import { Link } from 'react-router-dom';

const View = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewUsers());
  }, [dispatch]);

  const users = useSelector(state => state.crud.users);

  const deleteUserRecord = (id) => {
    dispatch(deleteUser(id));
    alert("data deleted...!")
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-5">
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">Sr no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((val, index) => (
                    <tr key={val.id}>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>
                        <button onClick={() => deleteUserRecord(val.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;